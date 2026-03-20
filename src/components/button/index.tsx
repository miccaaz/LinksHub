import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.5}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}