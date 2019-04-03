import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { changeTheme } from '../redux/actions/theme';
import { TThemeColors } from '../redux/types';
import { useReduxAction } from '../hooks/useReduxAction';
import { ROUTES } from '../config/routes';
import themes from '../styles/themes';

import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';

const Themes = ({ navigation }: NavigationScreenProps) => {
  const handleChangeTheme = useReduxAction(changeTheme);
  const handleThemePress = (color: TThemeColors) => {
    handleChangeTheme(color);
    navigation.navigate(ROUTES.Options);
  };

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <ListItem
        text="Blue"
        onPress={() => handleThemePress('Blue')}
        iconBackground={themes.Blue.backgroundColor}
        selected
        checkmark={false}
      />
      <Separator />
      <ListItem
        text="Orange"
        onPress={() => handleThemePress('Orange')}
        iconBackground={themes.Orange.backgroundColor}
        selected
        checkmark={false}
      />
      <Separator />
      <ListItem
        text="Green"
        onPress={() => handleThemePress('Green')}
        iconBackground={themes.Green.backgroundColor}
        selected
        checkmark={false}
      />
      <Separator />
      <ListItem
        text="Purple"
        onPress={() => handleThemePress('Purple')}
        iconBackground={themes.Purple.backgroundColor}
        selected
        checkmark={false}
      />
      <Separator />
    </ScrollView>
  );
};

export default Themes;
