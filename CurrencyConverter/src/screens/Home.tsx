import React, { useCallback, useEffect } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import get from 'lodash/get';

import { ROUTES } from '../config/routes';
import {
  swapCurrency,
  changeCurrencyAmount,
  getInitialConversion,
} from '../redux/actions/currency';
import { getStoredTheme } from '../redux/actions/theme';
import { useReduxAction } from '../hooks/useReduxAction';
import { useReduxState } from '../hooks/useReduxState';
import {
  amountSelector,
  baseCurrencySelector,
  quoteCurrencySelector,
  conversionsSelector,
  errorSelector,
} from '../redux/selectors/currency';

import Wrapper from '../components/Wrapper';
import Logo from '../components/Logo';
import InputWithButton from '../components/InputWithButton';
import ClearButton from '../components/ClearButton';
import LastConverted from '../components/LastConverted';
import Header from '../components/Header';
import { useAlert, AlertProvider } from '../components/Alert';
import {
  backgroundColorSelector,
  colorSelector,
} from '../redux/selectors/theme';

const Home = ({ navigation }: NavigationInjectedProps) => {
  const handleGetStoredTheme = useReduxAction(getStoredTheme);
  const handleGetInitialConversion = useReduxAction(getInitialConversion);
  useEffect(() => {
    handleGetStoredTheme();
    handleGetInitialConversion();
  }, []);
  const error = useReduxState(errorSelector);
  const alert = useAlert();
  useEffect(() => {
    if (error) {
      const message =
        typeof error === 'string' ? error : 'Failed fetching currency data.';
      alert.current && alert.current.alertWithType('error', 'Error!', message);
    }
  }, [error]);

  const handleHeaderPress = useCallback(() => {
    navigation.navigate(ROUTES.Options);
  }, [navigation.navigate]);

  const handleSwapCurrency = useReduxAction(swapCurrency);
  const handleTextChange = useReduxAction(changeCurrencyAmount);

  const handlePressBaseCurrency = useCallback(() => {
    navigation.navigate(ROUTES.CurrencyList, {
      title: 'Base Currency',
      type: 'base',
    });
  }, [navigation.navigate]);
  const handlePressQuoteCurrency = useCallback(() => {
    navigation.navigate(ROUTES.CurrencyList, {
      title: 'Quote Currency',
      type: 'quote',
    });
  }, [navigation.navigate]);

  const amount = useReduxState(amountSelector);
  const baseCurrency = useReduxState(baseCurrencySelector);
  const quoteCurrency = useReduxState(quoteCurrencySelector);
  const conversions = useReduxState(conversionsSelector);

  const conversionSelector = conversions[baseCurrency];
  const conversionDate = new Date(get(conversionSelector, 'date', ''));
  const conversionRate = get(
    conversionSelector,
    `rates.${quoteCurrency}`,
    0,
  ).toFixed(2);
  const quotePrice =
    conversionRate === '0.00'
      ? 'loading...'
      : (amount * conversionRate).toFixed(2);

  const backgroundColor = useReduxState(backgroundColorSelector);
  const color = useReduxState(colorSelector);

  return (
    <AlertProvider>
      <Wrapper backgroundColor={backgroundColor}>
        <StatusBar translucent={false} barStyle={'light-content'} />
        <Header onPress={handleHeaderPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={color} />
          <InputWithButton
            text={baseCurrency}
            onPress={handlePressBaseCurrency}
            keyboardType="numeric"
            value={amount.toString()}
            onChangeText={handleTextChange}
            textColor={backgroundColor}
          />
          <InputWithButton
            text={quoteCurrency}
            onPress={handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={backgroundColor}
          />
          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            rate={conversionRate}
            date={conversionDate}
          />
          <ClearButton
            text={'Reverse Currencies'}
            onPress={handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Wrapper>
    </AlertProvider>
  );
};

export default Home;
