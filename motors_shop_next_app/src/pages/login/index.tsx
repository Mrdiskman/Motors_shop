import Footer from "@/components/GeneralComponents/Footer";
import Header from "@/components/GeneralComponents/Header";
import { LoginStyled } from "./styled";

function Login() {
  return (
    <>
      <Header />
      <LoginStyled>
        <form className="formLogin">
          <h2 className="typeForm">Login</h2>
          <label>Usuário</label>
          <input type="text" placeholder="Digitar Usuário" />
          <label>Senha</label>
          <input type="password" placeholder="Digitar Senha" />
          <button className="forgetPassword">Esqueci minha senha</button>
          <button type="submit" className="send">
            Entrar
          </button>
          <p className="dontHaveAcc">Ainda não possui uma conta?</p>
          <button className="register">Cadastrar</button>
        </form>
      </LoginStyled>
      <Footer />
    </>
  );
}
export default Login;
