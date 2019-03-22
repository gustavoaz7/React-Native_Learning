import React from 'react';
import { ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import { GRAY } from '../styles';

const PREFIX = Platform.select({ ios: 'ios', android: 'md' });

const Options = () => {
  return (
    <ScrollView>
      <ListItem
        text="Themes"
        onPress={() => void 0}
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
