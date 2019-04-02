import React, { useCallback } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import get from 'lodash/get';

import { ROUTES } from '../config/routes';
import { swapCurrency, changeCurrencyAmount } from '../redux/actions/currency';
import { useReduxAction } from '../hooks/useReduxAction';
import { useReduxState } from '../hooks/useReduxState';
import {
  amountSelector,
  baseCurrencySelector,
  quoteCurrencySelector,
  conversionsSelector,
} from '../redux/selectors/currency';

import Wrapper from '../components/Wrapper';
import Logo from '../components/Logo';
import InputWithButton from '../components/InputWithButton';
import ClearButton from '../components/ClearButton';
import LastConverted from '../components/LastConverted';
import Header from '../components/Header';


const Home = ({ navigation }: NavigationInjectedProps) => {
  const handleHeaderPress = useCallback(() => {
    navigation.navigate(ROUTES.Options);
  }, [navigation.navigate]);

  const handleSwapCurrency = useReduxAction(swapCurrency);
  const handleTextChange = useReduxAction(changeCurrencyAmount);

  const handlePressBaseCurrency = useCallback(() => {
    navigation.navigate(ROUTES.CurrencyList, { title: 'Base Currency' });
  }, [navigation.navigate]);
  const handlePressQuoteCurrency = useCallback(() => {
    navigation.navigate(ROUTES.CurrencyList, { title: 'Quote Currency' });
  }, [navigation.navigate]);

  const amount = useReduxState(amountSelector);
  const baseCurrency = useReduxState(baseCurrencySelector);
  const quoteCurrency = useReduxState(quoteCurrencySelector);
  const conversions = useReduxState(conversionsSelector);

  const conversionSelector = conversions[baseCurrency];
  const conversionDate = new Date(get(conversionSelector, 'date', ''));
  const conversionRate: number = get(conversionSelector, `rates.${quoteCurrency}`, 0).toFixed(2);
  const quotePrice = (amount * conversionRate).toFixed(2);


  return (
    <Wrapper>
      <StatusBar translucent={false} barStyle={'light-content'} />
      <Header onPress={handleHeaderPress} />
      <KeyboardAvoidingView behavior="padding">
        <Logo />
        <InputWithButton
          text={baseCurrency}
          onPress={handlePressBaseCurrency}
          keyboardType="numeric"
          defaultValue={amount.toString()}
          onChangeText={handleTextChange}
        />
        <InputWithButton
          text={quoteCurrency}
          onPress={handlePressQuoteCurrency}
          editable={false}
          value={quotePrice}
        />
        <LastConverted
          base={baseCurrency}
          quote={quoteCurrency}
          rate={conversionRate}
          date={conversionDate}
        />
        <ClearButton text={'Reverse Currencies'} onPress={handleSwapCurrency} />
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default Home;
