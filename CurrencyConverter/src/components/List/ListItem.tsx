import React, { ReactNode } from 'react';
import { Text, StyleSheet, GestureResponderEvent } from 'react-native';
import Touchable from '../Touchable';
import Icon from './Icon';

interface IListItem {
  text: string;
  selected?: boolean;
  onPress(event: GestureResponderEvent): void;
  showIcon?: boolean;
  checkmark?: boolean;
  customIcon?: ReactNode;
  iconBackground?: string;
}

const ListItem = ({
  text,
  onPress,
  selected = false,
  showIcon = true,
  checkmark = true,
  customIcon = null,
  iconBackground,
}: IListItem) => (
  <Touchable onPress={onPress} style={styles.row}>
    <Text style={styles.text}>{text}</Text>
    {selected ? (
      <Icon
        visible={showIcon}
        checkmark={checkmark}
        backgroundColor={iconBackground}
      />
    ) : (
      <Icon />
    )}
    {customIcon}
  </Touchable>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default ListItem;
