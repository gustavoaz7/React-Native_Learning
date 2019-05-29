import React from "react";
import { TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { Feather } from "@expo/vector-icons";
import { Block, Text } from "../base-components";

export default class CollapsableContent extends React.Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  render() {
    const { title, children } = this.props;
    return (
      <Block flex={1} alignItems="center" >
        <Block row justifyContent="space-between" fullWidth>
          <Text title>{title}</Text>
          <TouchableOpacity onPress={this.toggleCollapsed}>
            <Feather name="chevron-down" size={16} color="#333" />
          </TouchableOpacity>
        </Block>
        <Block fullWidth>
          <Collapsible collapsed={this.state.collapsed}>
            <Block shadow>
              {children}
            </Block>
          </Collapsible>
        </Block>
      </Block>
    );
  }
}

