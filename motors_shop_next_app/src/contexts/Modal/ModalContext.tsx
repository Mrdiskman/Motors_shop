import { IProps } from "@/interfaces/generaInterfaces";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormHandleSubmit } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "@/services/api";
export interface IRequest {
  typeAd: string;
  title: string;
  year: string;
  mileage: string;
  price: number;
  description: string;
  vehicleType: "Carro" | "Moto";
  coverImg: string;
}
interface IModalContext {
  modal: boolean;
  commentId: string;
  announceId: string;
  errors: FieldErrors<IRequest>;
  setModal: Dispatch<SetStateAction<boolean>>;
  register: UseFormRegister<IRequest>;
  setCommentId: Dispatch<SetStateAction<string>>;
  handleSubmit: UseFormHandleSubmit<IRequest>;
  editComment: (data: any) => void;
  deleteComment: () => void;
  createAnnouncement: (data: any) => void;
  editAnnouncement: (data: any) => void;
  deleteAnnouncement: () => void;
  setAnnounceId: Dispatch<SetStateAction<string>>;
  type:
    | "Sucesso!"
    | "Conta criada com sucesso!"
    | "Editar perfil"
    | "Excluir anúncio";
  settype: Dispatch<
    SetStateAction<
      | "Sucesso!"
      | "Conta criada com sucesso!"
      | "Editar perfil"
      | "Excluir anúncio"
    >
  >;
}
export const ModalContext = createContext<IModalContext>({} as IModalContext);
const ModalProvider = ({ children }: IProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<string>("");
  const [announceId, setAnnounceId] = useState<string>("");
  const [type, settype] = useState<
    | "Sucesso!"
    | "Conta criada com sucesso!"
    | "Editar perfil"
    | "Excluir anúncio"
  >("Sucesso!");
  const formSchema = yup.object().shape({
    typeAd: yup.string().required("Tipo obrigratório"),
    title: yup.string().required("Título obrigatório"),
    year: yup.string().required("Ano obrigatório"),
    mileage: yup.string().required("Kilometragem obrigatória"),
    price: yup.number().required("Preço obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    vehicleType: yup.string().required("Tipo do veículo obrigatório"),
    coverImg: yup.string().required("Url da imagem obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequest>({
    resolver: yupResolver(formSchema),
  });
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = modal ? "hidden" : "scroll";
    }
  }, [modal]);
  const deleteComment = () => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    if (token) {
      api
        .delete(`/comments/${commentId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err));
    }
  };
  const editComment = (data: any) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    if (token) {
      api
        .patch(`/comments/${commentId}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err));
    }
  };

  const deleteAnnouncement = () => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    if (token) {
      api
        .delete(`/announcements/delete/${announceId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err));
    }
  };

  const editAnnouncement = (data: any) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    if (token) {
      api
        .patch(`/announcements/update/${announceId}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err));
    }
  };

  const createAnnouncement = (data: any) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    //pegar ID from TOKEN
    //adicionar ID no DATA
    if (token) {
      api
        .post(`/announcements`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err));
    }
  };

  return (
    <ModalContext.Provider
      value={{
        type,
        modal,
        errors,
        commentId,
        announceId,
        settype,
        setModal,
        register,
        editComment,
        handleSubmit,
        setCommentId,
        deleteComment,
        setAnnounceId,
        editAnnouncement,
        createAnnouncement,
        deleteAnnouncement,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
