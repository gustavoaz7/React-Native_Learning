import React, { PureComponent } from "react";
import { Text as RNText, StyleSheet } from "react-native";
import { colors } from "../constants/theme";

export class Text extends PureComponent {
  render() {
    const {
      header,
      title,
      body,
      caption,
      size,
      bold,
      semibold,
      light,
      center,
      right,
      color,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      header && styles.header,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      size && { fontSize: size },
      bold && styles.bold,
      semibold && styles.semibold,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      color && { color },
      style
    ];

    return (
      <RNText style={textStyles} {...props}>
        {children}
      </RNText>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: colors.grayDark,
  },
  bold: {
    fontWeight: "bold",
  },
  semibold: {
    fontWeight: "500",
  },
  light: {
    fontWeight: "200",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
  header: {
    fontSize: 20,
  },
  title: {
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
  caption: {
    fontSize: 12
  },
});
