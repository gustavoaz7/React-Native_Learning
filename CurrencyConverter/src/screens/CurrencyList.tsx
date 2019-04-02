import React, { useCallback } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  FlatListProps,
  StyleSheet,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { useReduxAction } from '../hooks/useReduxAction';
import {
  changeBaseCurrency,
  changeQuoteCurrency,
} from '../redux/actions/currency';
import currencies from '../config/currencies';
import { PRIMARY_BLUE } from '../styles';

import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';

const keyExtractor: FlatListProps<string>['keyExtractor'] = item => item;
const renderItemSeparator: FlatListProps<
  string
>['ItemSeparatorComponent'] = () => <Separator />;

const CurrencyList = ({ navigation }: NavigationScreenProps) => {
  const handleChangeBaseCurrency = useReduxAction(changeBaseCurrency);
  const handleChangeQuoteCurrency = useReduxAction(changeQuoteCurrency);
  const handleItemPress = useCallback(
    currency => {
      const type: string = navigation.getParam('type', '');
      if (type === 'base') {
        handleChangeBaseCurrency(currency);
      } else if (type === 'quote') {
        handleChangeQuoteCurrency(currency);
      }
      navigation.goBack(null);
    },
    [navigation.goBack, navigation.getParam],
  );

  const renderItem: FlatListProps<string>['renderItem'] = ({ item }) => (
    <ListItem
      text={item}
      selected={item === 'CAD'}
      onPress={() => handleItemPress(item)}
      iconBackground={PRIMARY_BLUE}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" translucent={false} />
      <FlatList
        data={currencies}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CurrencyList;
