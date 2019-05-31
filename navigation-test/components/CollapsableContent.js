import React from "react";
import { TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { Feather } from "@expo/vector-icons";
import { Block, Text } from "../base-components";
import { colors } from "../constants/theme";

export default class CollapsableContent extends React.Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  render() {
    const { title = '', children, style } = this.props;
    return (
      <Block flex={1} alignItems="center" >
        <Block row justifyContent="space-between" fullWidth padding={[10, 0]}>
          <Text title bold>{title.toUpperCase()}</Text>
          <TouchableOpacity onPress={this.toggleCollapsed}>
            <Feather name="chevron-down" size={20} color={colors.grayDark} />
          </TouchableOpacity>
        </Block>
        <Block fullWidth>
          <Collapsible collapsed={this.state.collapsed}>
            <Block shadow style={style}>
              {children}
            </Block>
          </Collapsible>
        </Block>
      </Block>
    );
  }
}

