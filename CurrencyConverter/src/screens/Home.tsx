import React, { useState } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { ROUTES } from '../config/routes';

import Wrapper from '../components/Wrapper';
import Logo from '../components/Logo';
import InputWithButton from '../components/InputWithButton';
import ClearButton from '../components/ClearButton';
import LastConverted from '../components/LastConverted';
import Header from '../components/Header';

const BASE_CURRENCY = 'BRL';
const BASE_PRICE = '1';
const CONV_CURRENCY = 'USD';
const CONV_PRICE = '0.25';
const CONV_RATE = 0.25;
const CONV_DATE = new Date();

const Home = ({ navigation }: NavigationInjectedProps) => {
  const [input, setInput] = useState(CONV_PRICE);
  const handlePressBaseCurrency = () => {
    navigation.navigate(ROUTES.CurrencyList, { title: 'Base Currency' });
  };
  const handlePressQuoteCurrency = () => {
    navigation.navigate(ROUTES.CurrencyList, { title: 'Quote Currency' });
  };
  return (
    <Wrapper>
      <StatusBar translucent={false} barStyle={'light-content'} />
      <Header
        onPress={() => {
          console.log('!!GEAR PRESSED');
        }}
      />
      <KeyboardAvoidingView behavior="padding">
        <Logo />
        <InputWithButton
          text={BASE_CURRENCY}
          onPress={handlePressBaseCurrency}
          keyboardType="numeric"
          defaultValue={BASE_PRICE}
          onChangeText={text => setInput(text)}
        />
        <InputWithButton
          text={CONV_CURRENCY}
          onPress={handlePressQuoteCurrency}
          editable={false}
          value={input}
        />
        <LastConverted
          base={BASE_CURRENCY}
          quote={CONV_CURRENCY}
          rate={CONV_RATE}
          date={CONV_DATE}
        />
        <ClearButton text={'Reverse Currencies'} onPress={() => {}} />
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default Home;
