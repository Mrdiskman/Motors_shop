import Footer from "@/components/GeneralComponents/Footer";
import Header from "@/components/GeneralComponents/Header";
import { api } from "services/api";
import { useForm } from "react-hook-form";
import { LoginStyled } from "./styled";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

function resetPassowrd() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [emailSend, setEmailSend] = useState(false);
  const [codeSend, setCodeSend] = useState(false);
  const [passwordSend, setPasswordSend] = useState(false);
  function onSubmit(data: any) {
    if (data.email) {
      handleEmail(data);
    }
    if (data.code) {
      handleCode(data);
    }

    if (data.password) {
      handlePassword(data);
    }
  }

  const handleEmail = async (data: object) => {
    await api
      .post("/users/reset", data)
      .then((res: any) => {
        setEmailSend(true);
      })
      .catch((err: any) => console.log(err));
  };

  const handleCode = async (data: object) => {
    await api
      .post("/users/reset", data)
      .then((res: any) => {
        setCodeSend(true);
      })
      .catch((err: any) => console.log(err));
  };

  const handlePassword = async (data: object) => {
    await api
      .post("/users/reset", data)
      .then((res: any) => {
        setPasswordSend(true);
        router.push("/login");
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <>
      <Header />
      <LoginStyled onSubmit={handleSubmit(onSubmit)}>
        <form className="formLogin">
          <h2 className="typeForm">Resetar Senha</h2>
          <label>Email</label>
          <input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {emailSend && (
            <>
              <label>Codigo</label>
              <input
                type="text"
                placeholder="Digite seu codigo de segurança"
                {...register("code")}
              />
            </>
          )}

          {codeSend && (
            <>
              <label>Nova Senha</label>
              <input
                type="password"
                placeholder="Digite sua nova senha"
                {...register("password")}
              />
            </>
          )}

          <button className="forgetPassword" type="button">
            <Link href="/login">Cancelar</Link>
          </button>
          <button type="submit" className="send">
            Resetar Senha
          </button>
        </form>
      </LoginStyled>
      <Footer />
    </>
  );
}
export default resetPassowrd;
