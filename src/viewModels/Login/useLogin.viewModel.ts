import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginFormData, loginScheme } from "./login.scheme";
import { useLoginMutation } from "@/shared/queries/auth/use-login.mutation";

export const useLoginViewModel = () => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLoginMutation();

  const onSubmit = handleSubmit(async (userData) => {
    await loginMutation.mutateAsync(userData);
  });

  return {
    control,
    onSubmit,
  };
};
