import React from 'react';
import { StatusBar } from 'react-native';

import Wrapper from '../components/Wrapper';
import Logo from '../components/Logo';

const Home = () => (
  <Wrapper>
    <StatusBar translucent={false} barStyle={'light-content'} />
    <Logo />
  </Wrapper>
);

export default Home;
