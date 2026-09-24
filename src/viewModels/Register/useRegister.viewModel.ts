import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { RegisterFormData, registerScheme } from "./register.scheme";
import { useUserStore } from "@/shared/store/user-store";
import { useImage } from "@/shared/hooks/useImage";
import { Alert } from "react-native";
import { useState } from "react";
import { CameraType } from "expo-image-picker";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession, user } = useUserStore();
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    // Para abrir a camera frontal, você pode definir a propriedade cameraType como CameraType.front
    cameraType: CameraType.front,
  });

  const handleSelectAvatar = async () => {
    await handleSelectImage();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    console.log(userData);
    const { confirmPassword, ...registerData } = userData;

    const responseMutation =
      await userRegisterMutation.mutateAsync(registerData);
    setSession({
      refreshToken: responseMutation.refreshToken,
      token: responseMutation.token,
      user: responseMutation.user,
    });
  });

  console.log(user, "user");

  return {
    control,
    errors,
    onSubmit,
    handleSelectAvatar,
    avatarUri,
  };
};
