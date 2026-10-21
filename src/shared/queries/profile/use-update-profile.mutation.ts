import { useMutation } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { updateUserProfile } from "../../services/profile.service";
import { useUserStore } from "../../store/user-store";
import { useAppModal } from "@/shared/hooks/useAppModal";

export const useUpdateProfileMutation = () => {
  const { updateUser } = useUserStore();
  const { showSuccess } = useAppModal();

  const mutation = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (response) => {
      updateUser({
        ...response.user,
      });
      showSuccess({
        title: "Perfil atualizado",
        message: "Seus dados foram atualizados com sucesso!",
      });
    },
    onError: (error) => {
      Toast.error(error.message ?? "Falha ao atualizar os dados do usuário");
    },
  });

  return mutation;
};
