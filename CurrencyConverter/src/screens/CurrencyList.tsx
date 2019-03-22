import React from 'react';
import {
  View,
  StatusBar,
  FlatList,
  FlatListProps,
  StyleSheet,
} from 'react-native';

import currencies from '../config/currencies';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';

const keyExtractor: FlatListProps<string>['keyExtractor'] = item => item;
const renderItem: FlatListProps<string>['renderItem'] = ({ item }) => (
  <ListItem text={item} selected={item === 'CAD'} onPress={() => void 0} />
);
const renderItemSeparator: FlatListProps<
  string
>['ItemSeparatorComponent'] = () => <Separator />;

const CurrencyList = () => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CurrencyList;
