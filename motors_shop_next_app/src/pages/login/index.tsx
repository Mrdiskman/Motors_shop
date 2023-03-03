import Footer from "@/components/GeneralComponents/Footer";
import Header from "@/components/GeneralComponents/Header";
import { useForm } from "react-hook-form";
import { LoginStyled } from "./styled";

function Login() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  function onSubmit(data:any){
    const loginData = {
        email:String(data.email),
        password:String(data.password),
    }
   console.log(loginData)
} 
  return (
    <>
      <Header />
      <LoginStyled onSubmit={handleSubmit(onSubmit)}>
        <form className="formLogin">
          <h2 className="typeForm">Login</h2>
          <label>Usuário</label>
          <input type="text" placeholder="Digitar Usuário" {...register("email")}/>
          <label>Senha</label>
          <input type="password" placeholder="Digitar Senha" {...register("password")} />
          <button className="forgetPassword" type="button">Esqueci minha senha</button>
          <button type="submit" className="send">
            Entrar
          </button>
          <p className="dontHaveAcc">Ainda não possui uma conta?</p>
          <button className="register" type="button">Cadastrar</button>
        </form>
      </LoginStyled>
      <Footer />
    </>
  );
}
export default Login;
