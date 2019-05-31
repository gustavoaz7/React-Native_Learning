import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../../constants/theme";

const SvgInbox = props => (
  <Svg width="100%" height="100%" viewBox="0 0 25 21" fill="none" {...props}>
    <Path
      d="M1.654 3.342V3.34c0-.773.62-1.386 1.36-1.386h18.972c.747 0 1.372.62 1.372 1.386v14.318c0 .766-.625 1.386-1.372 1.386H3.013c-.746 0-1.371-.62-1.371-1.386 0 0 0 0 0 0l.012-14.317z"
      stroke={colors.purpleDark}
      strokeWidth={2}
    />
    <Path
      d="M1.828 3.34L12.5 10.5l10.672-7.16"
      stroke={colors.purpleDark}
      strokeWidth={2}
    />
  </Svg>
);

export default SvgInbox;
