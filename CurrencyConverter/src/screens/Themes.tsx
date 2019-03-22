import React from 'react';
import { ScrollView } from 'react-native';

import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import {
  PRIMARY_BLUE,
  PRIMARY_ORANGE,
  PRIMARY_GREEN,
  PRIMARY_PURPLE,
} from '../styles';

const Themes = () => {
  const handleThemePress = color => {};
  return (
    <ScrollView>
      <ListItem
        text="Blue"
        onPress={() => handleThemePress(PRIMARY_BLUE)}
        iconBackground={PRIMARY_BLUE}
        selected
        checkmark={false}
      />
      <Separator />
      <ListItem
        text="Orange"
        onPress={() => handleThemePress(PRIMARY_ORANGE)}
        iconBackground={PRIMARY_ORANGE}
        selected
        checkmark={false}
      />
      <Separator />
      <ListItem
        text="Green"
        onPress={() => handleThemePress(PRIMARY_GREEN)}
        iconBackground={PRIMARY_GREEN}
        selected
        checkmark={false}
      />
      <Separator />
      <ListItem
        text="Purple"
        onPress={() => handleThemePress(PRIMARY_PURPLE)}
        iconBackground={PRIMARY_PURPLE}
        selected
        checkmark={false}
      />
      <Separator />
    </ScrollView>
  );
};

export default Themes;
