import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Block, Text } from "../base-components";

export class StatsList extends React.Component {
  keyExtractor = (item, index) => item.label + index;

  renderItem = ({ item }) => (
    <Block row padding={[10, 0]} alignItems="center">
      <Block row alignItems="center" flex={2}>
        <Block
          style={[
            styles.coloredBox,
            { backgroundColor: item.color }
          ]}
        />
        <Text>{item.label}</Text>
      </Block>
      <Block flex={1} alignItems="flex-end">
        <Text>{item.quantity}</Text>
      </Block>
      <Block flex={1} alignItems="flex-end">
        <Text bold>{item.total}</Text>
      </Block>
    </Block>
  );

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <FlatList
        data={this.props.list}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        style={this.props.style}
      />
    );
  }
}

const styles = StyleSheet.create({
  coloredBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.065)"
  }
});
