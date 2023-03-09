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
  setModal: Dispatch<SetStateAction<boolean>>;
  errors: FieldErrors<IRequest>;
  register: UseFormRegister<IRequest>;
  handleSubmit: UseFormHandleSubmit<IRequest>;
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
  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        type,
        settype,
        register,
        handleSubmit,
        errors,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
