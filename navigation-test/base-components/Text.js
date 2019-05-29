import React, { PureComponent } from "react";
import { Text as RNText, StyleSheet } from "react-native";

export class Text extends PureComponent {
  render() {
    const {
      header,
      title,
      body,
      caption,
      size,
      transform,
      align,
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      spacing, // letter-spacing
      height, // line-height
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
      transform && { textTransform: transform },
      align && { textAlign: align },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
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
    color: '#333'
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
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  header: 24,
  title: 18,
  body: 14,
  caption: 12
});
