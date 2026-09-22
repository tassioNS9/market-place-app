import { FC } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ButtonVariants, buttonVariants } from "./button.variants";
import { Ionicons } from "@expo/vector-icons";

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  children: string;
}

export const AppButton: FC<AppButtonProps> = ({
  children,
  leftIcon,
  ...rest
}) => {
  const styles = buttonVariants();
  return (
    <TouchableOpacity className={styles.base()} {...rest}>
      {leftIcon && <Ionicons name={leftIcon} size={24} />}
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};
