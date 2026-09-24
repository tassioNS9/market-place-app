import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { RegisterFormData, registerScheme } from "./register.scheme";
import { useUserStore } from "@/shared/store/user-store";
import { useAppModal } from "@/shared/hooks/useAppModal";
import { useCamera } from "@/shared/hooks/useCamera";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession, user } = useUserStore();

  const modals = useAppModal();
  const { openCamera } = useCamera({
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.5,
  });

  const handleSelectAvatar = () => {
    modals.showSelection({
      title: "Selecionar foto",
      message: "Escolha uma opção:",
      options: [
        {
          text: "Galeria",
          icon: "images",
          variant: "primary",
          onPress: () => alert("Galeria"),
        },
        {
          text: "Câmera",
          icon: "camera",
          variant: "primary",
          onPress: openCamera,
        },
      ],
    });
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
  };
};
