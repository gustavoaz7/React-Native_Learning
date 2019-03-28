import React, { useCallback } from 'react';
import { ScrollView, Platform, StatusBar, Linking } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import { GRAY } from '../styles';
import { ROUTES } from '../config/routes';
import { useAlert, AlertProvider } from '../components/Alert';

const PREFIX = Platform.select({ ios: 'ios', android: 'md' });
const FIXER_URL = 'http://fixer.io';

const Options = ({ navigation }: NavigationScreenProps) => {
  const handleThemesPress = useCallback(() => {
    navigation.navigate(ROUTES.Themes);
  }, [navigation.navigate]);

  const alert = useAlert();
  const handleFixerPress = useCallback(() => {
    Linking.openURL(FIXER_URL).catch(() => {
      alert.current &&
        alert.current.alertWithType(
          'error',
          'Sorry!',
          "Fixer.io can't be opened right now.",
        );
    });
  }, [alert]);

  return (
    <ScrollView>
      <AlertProvider>
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
          onPress={handleFixerPress}
          customIcon={
            <Ionicons name={`${PREFIX}-link`} color={GRAY} size={25} />
          }
        />
      </AlertProvider>
    </ScrollView>
  );
};

export default Options;
