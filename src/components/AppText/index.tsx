import { FC } from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { styles } from "./styles";

type textProps = {
  style?: TextStyle;
};

const AppText: FC<textProps & TextProps> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text
      maxFontSizeMultiplier={1.13}
      style={[styles.text, style]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
