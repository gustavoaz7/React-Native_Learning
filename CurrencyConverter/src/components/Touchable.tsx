import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from 'react-native';

const canUseForeground = TouchableNativeFeedback.canUseNativeForeground();

interface ITouchable {
  onPress(event: GestureResponderEvent): void;
  children: React.ReactNode;
  style?: any;
  borderless?: boolean;
  pressColor?: string;
  disabled?: boolean;
  disabledOpacity?: number;
  useOpacity?: boolean;
}

const Touchable = ({
  style,
  onPress,
  children,
  borderless = false,
  pressColor = 'rgba(0, 0, 0, .32)',
  disabled = false,
  disabledOpacity = 0.4,
  useOpacity = false,
  ...rest
}: ITouchable) => {
  const disabableOnPress = disabled ? undefined : onPress;
  const finalStyle = [{ opacity: disabled ? disabledOpacity : 1 }, style];

  if (Platform.OS === 'android' && !useOpacity) {
    return (
      <TouchableNativeFeedback
        useForeground={canUseForeground}
        background={TouchableNativeFeedback.Ripple(pressColor, borderless)}
        {...rest}
        style={null}
        onPress={disabableOnPress}
      >
        <View style={finalStyle}>{children}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity {...rest} onPress={disabableOnPress}>
      <View style={finalStyle}>{children}</View>
    </TouchableOpacity>
  );
};

export default Touchable;
