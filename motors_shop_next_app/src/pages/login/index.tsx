import Footer from "@/components/GeneralComponents/Footer";
import Header from "@/components/GeneralComponents/Header";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";
import { LoginStyled } from "./styled";
import Link from 'next/link'

function Login() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  
  function onSubmit(data:any){
    const loginData = {
        email:String(data.email),
        password:String(data.password),
    }
    login(loginData)
} 

async function login(data:any){
  const result = await api.post("/users/login", data
  ).then((res:any)=>{
      const {token} = res.data
      localStorage.setItem("@TOKEN", JSON.stringify(token))
      window.location.href = "http://localhost:3000/"
  }
  ).catch((err:any)=>console.log(err))
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
          <button className="forgetPassword" type="button">
            <Link href="/resetPassword">
              Esqueci minha senha
            </Link>
          </button>
          <button type="submit" className="send">
            Entrar
          </button>
          <p className="dontHaveAcc">Ainda não possui uma conta?</p>
          <button className="register" type="button" onClick={()=>window.location.href = "http://localhost:3000/register"}>Cadastrar</button>
        </form>
      </LoginStyled>
      <Footer />
    </>
  );
}
export default Login;