import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { RegisterFormData, registerScheme } from "./register.scheme";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();

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

    await userRegisterMutation.mutateAsync(registerData);
  });

  return {
    control,
    errors,
    onSubmit,
  };
};
