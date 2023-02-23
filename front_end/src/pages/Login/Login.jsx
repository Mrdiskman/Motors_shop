import {
  LoginContainer,
  LoginForm,
} from "../../components/loginComponent/loginComponent.style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { schema } from "../../validators/login.js";
import { Contexts } from "../../contexts/provider.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
  const [type, setType] = useState("password");
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { loginUser } = useContext(Contexts);
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(loginUser)}>
        <h1>Login</h1>
        <h3>Usuário</h3>
        <input
          type="text"
          placeholder="Digitar usuário"
          id="email"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <h3>Senha</h3>
        <div className="password_div">
          <input
            type={type}
            placeholder="Digitar senha"
            id="password"
            {...register("password")}
          />
          <div className="eye_div">
            {type === "password" ? (
              <EyeFilled onClick={() => setType("text")} />
            ) : (
              <EyeInvisibleFilled onClick={() => setType("password")} />
            )}
          </div>
        </div>
        {errors.password && <span>{errors.password.message}</span>}
        <span>Esqueci minha senha</span>
        <button className="btnSingIn">Entrar</button>
        <p>Ainda não possui cadastro?</p>
        <button onClick={navigate("/register")} className="btnSingUp">
          <strong>Cadastrar</strong>
        </button>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
