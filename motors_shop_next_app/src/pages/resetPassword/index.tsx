import Footer from "@/components/GeneralComponents/Footer";
import Header from "@/components/GeneralComponents/Header";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";
import { LoginStyled } from "./styled";
import Link from 'next/link'

function resetPassowrd() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  
  function onSubmit(data:any){
    const resetPasswordData = {
        email:String(data.email),
        newPassword:String(data.newPassword),
    }
    // reset(resetPasswordData)
  } 

  // async function reset(data:any){
  //   api.post("/users/reset", data
  //   ).then((res:any)=>{
  //       console.log(res)
  //       window.location.href = "http://localhost:3000/login"
  //   }
  //   ).catch((err:any)=>console.log(err))
  // }


  return (
    <>
      <Header />
      <LoginStyled onSubmit={handleSubmit(onSubmit)}>
        <form className="formLogin">
          <h2 className="typeForm">Resetar Senha</h2>
          <label>Email</label>
          <input type="text" placeholder="Digite seu email" {...register("email")}/>
          <label>Nova Senha</label>
          <input type="password" placeholder="Digite sua nova senha" {...register("newPassword")} />
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