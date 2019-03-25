import React from 'react';
import { ScrollView, Platform, StatusBar, Linking } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import { GRAY } from '../styles';
import { ROUTES } from '../config/routes';

const PREFIX = Platform.select({ ios: 'ios', android: 'md' });
const FIXER_URL = 'http://fixer.io';

const handleFixerPress = () => {
  Linking.openURL(FIXER_URL).catch(e => console.warn(e));
};

const Options = ({ navigation }: NavigationScreenProps) => {
  const handleThemesPress = () => {
    navigation.navigate(ROUTES.Themes);
  };

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <ListItem
        text="Themes"
        onPress={handleThemesPress}
        customIcon={
          <Ionicons name={`${PREFIX}-arrow-forward`} color={GRAY} size={25} />
        }
      />
      <Separator />
      <ListItem
        text="Fixer.io"
        onPress={() => void 0}
        customIcon={<Ionicons name={`${PREFIX}-link`} color={GRAY} size={25} />}
      />
    </ScrollView>
  );
};

export default Options;
