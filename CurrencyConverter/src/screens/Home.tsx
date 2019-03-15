import React, { useState } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import Wrapper from '../components/Wrapper';
import Logo from '../components/Logo';
import InputWithButton from '../components/InputWithButton';

const BASE_PRICE = '4';
const CONV_PRICE = '1';

const Home = () => {
  const [input, setInput] = useState(CONV_PRICE);
  return (
    <Wrapper>
      <StatusBar translucent={false} barStyle={'light-content'} />
      <KeyboardAvoidingView behavior="padding">
        <Logo />
        <InputWithButton
          text={'BRL'}
          onPress={() => {
            console.log('!!BRL PRESSED');
          }}
          keyboardType="numeric"
          defaultValue={BASE_PRICE}
          onChangeText={text => setInput(text)}
        />
        <InputWithButton
          text={'USD'}
          onPress={() => {
            console.log('!!USD PRESSED');
          }}
          editable={false}
          value={input}
        />
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default Home;
