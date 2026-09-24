import { Ionicons } from "@expo/vector-icons";
import { createElement } from "react";
import {
  SelectionModal,
  SelectionModalProps,
} from "../components/Modals/SelectionModal";
import { useModalStore } from "../store/modal-store";

export type SelectionVariant = "primary" | "secondary" | "danger";

export interface SelectionOption {
  text: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: "primary" | "secondary" | "danger";
}

export const useAppModal = () => {
  const { open, close } = useModalStore();

  const showSelection = ({
    title,
    message,
    options,
  }: {
    title: string;
    message?: string;
    options: SelectionOption[];
  }) => {
    // Pelo fato de que o modal de seleção é um componente React,
    // podemos usar a função createElement para criar uma instância do componente e passá-lo como conteúdo para o modal.
    // Isso permite que o modal seja exibido com o conteúdo correto.
    open(
      createElement(SelectionModal, {
        title,
        message,
        options,
      } as SelectionModalProps),
    );
  };
  return { showSelection };
};
