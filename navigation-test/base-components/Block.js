import React, { PureComponent } from 'react'
import { StyleSheet, View, Animated, Platform } from 'react-native'
import { colors } from '../constants/theme';

export class Block extends PureComponent {
  handleSpacing(variant, spacing) {
    if (typeof spacing === 'number') {
      return {
        [`${variant}Top`]: spacing,
        [`${variant}Right`]: spacing,
        [`${variant}Bottom`]: spacing,
        [`${variant}Left`]: spacing,
      }
    }

    if (typeof spacing === 'object') {
      const spacingSize = Object.keys(spacing).length;
      switch (spacingSize) {
        case 1:
          return {
            [`${variant}Top`]: spacing[0],
            [`${variant}Right`]: spacing[0],
            [`${variant}Bottom`]: spacing[0],
            [`${variant}Left`]: spacing[0],
          }
        case 2:
          return {
            [`${variant}Top`]: spacing[0],
            [`${variant}Right`]: spacing[1],
            [`${variant}Bottom`]: spacing[0],
            [`${variant}Left`]: spacing[1],
          }
        case 3:
          return {
            [`${variant}Top`]: spacing[0],
            [`${variant}Right`]: spacing[1],
            [`${variant}Bottom`]: spacing[2],
            [`${variant}Left`]: spacing[1],
          }
        default:
          return {
            [`${variant}Top`]: spacing[0],
            [`${variant}Right`]: spacing[1],
            [`${variant}Bottom`]: spacing[2],
            [`${variant}Left`]: spacing[3],
          }
      }
    }
  }

  render() {
    const {
      row,
      flex,
      alignItems,
      justifyContent,
      margin,
      padding,
      fullWidth,
      card,
      shadow,
      color,
      wrap,
      style,
      animated,
      children,
      ...props
    } = this.props;

    const blockStyles = [
      row && styles.row,
      typeof flex === 'number' && { flex },
      alignItems && { alignItems },
      justifyContent && { justifyContent },
      margin && { ...this.handleSpacing('margin', margin) },
      padding && { ...this.handleSpacing('padding', padding) },
      fullWidth && styles.fullWidth,
      card && styles.card,
      shadow && styles.shadow,
      wrap && { flexWrap: 'wrap' },
      style,
    ];

    if (animated) {
      return (
        <Animated.View style={blockStyles} {...props}>
          {children}
        </Animated.View>
      )
    }

    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  card: {
    borderRadius: 6,
  },
  shadow: {
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: '#607293',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      android: {
        // TODO: check shadow layout on android
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#607293',
      },
    }),
  },
})
