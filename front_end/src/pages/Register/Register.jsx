import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useContext, useState } from "react";
import { schema } from "../../validators/register";
import { Contexts } from "../../contexts/provider";
import {
  RegisterContainer,
  RegisterForm,
} from "../../components/registerComponent/registerComponent.style";
import Header from "../../components/headerComponent/header";
import Footer from "../../components/footerComponent/footer";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [type, setType] = useState("password");

  const { registerUser } = useContext(Contexts);

  return (
    <>
      <Header />
      <RegisterContainer>
        <RegisterForm onSubmit={handleSubmit(registerUser)}>
          <h1>Cadastro</h1>
          <h2>Informações Pessoais</h2>

          <p>Nome</p>
          <input
            type="text"
            placeholder="Ex: Samuel Leão"
            id="name"
            {...register("name")}
          />
          {errors.name && <span>{errors.name?.message}</span>}

          <p>Email</p>
          <input
            type="text"
            placeholder="Ex: samuel@kenzie.com.br"
            id="email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email?.message}</span>}

          <p>CPF</p>
          <input
            type="text"
            placeholder="000.000.000-00"
            id="cpf"
            {...register("cpf")}
          />
          {errors.cpf && <span>{errors.cpf?.message}</span>}

          <p>Celular</p>
          <input
            type="text"
            placeholder="(DDD) 90000-0000"
            id="phone"
            {...register("phone")}
          />
          {errors.phone && <span>{errors.phone?.message}</span>}

          <p>Data de nascimento</p>
          <input
            type="text"
            placeholder="00/00/00"
            id="dateOfBirth"
            {...register("dateOfBirth")}
          />
          {errors.dateOfBirth && <span>{errors.dateOfBirth?.message}</span>}

          <p>Descrição</p>
          <input
            type="text"
            placeholder="Digitar descrição"
            id="description"
            {...register("descripition")}
          />
          {errors.descripition && <span>{errors.descripition?.message}</span>}

          <h2>Informaçoes de endereço</h2>

          <p>CEP</p>
          <input
            type="text"
            placeholder="000000-000"
            id="cep"
            {...register("cep")}
          />
          {errors.cep && <span>{errors.cep?.message}</span>}

          <div>
            <div className="div_info">
              <p>Estado</p>
            </div>
            <div>
              <p>Cidade</p>
            </div>
          </div>
          <div>
            <input
              className="ipt_state"
              type="text"
              placeholder="Digitar Estado"
              id="state"
              {...register("state")}
            />
            {errors.state && <span>{errors.state?.message}</span>}

            <input
              className="ipt_city"
              type="text"
              placeholder="Digitar cidade"
              id="city"
              {...register("city")}
            />
            {errors.city && <span>{errors.city?.message}</span>}
          </div>

          <p>Rua</p>
          <input
            type="text"
            placeholder="Digitar rua"
            id="street"
            {...register("street")}
          />
          {errors.street && <span>{errors.street?.message}</span>}

          <div>
            <div>
              <p>Número</p>
            </div>
            <div>
              <p>Complemento</p>
            </div>
          </div>
          <div>
            <input
              className="ipt_number"
              type="text"
              placeholder="Digitar número"
              id="number"
              {...register("number")}
            />
            {errors.number && <span>{errors.number?.message}</span>}

            <input
              className="ipt_complement"
              type="text"
              placeholder="Ex: apart. 307"
              id="complement"
              {...register("complement")}
            />
            {errors.complement && <span>{errors.complement?.message}</span>}
          </div>

          <h2>Tipo de conta</h2>
          <div className="div_type">
            <button>Comprador</button>
            <button>Anunciante</button>
          </div>
          <p>Senha</p>
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
          {errors.password && <span>{errors.password?.message}</span>}

          <p>Confirmar Senha</p>
          <input
            type="password"
            placeholder="Confirmação da senha"
            id="passwordConfirm"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <span>{errors.passwordConfirm?.message}</span>
          )}

          <button type="submit" className="btnRegister">
            Finalizar Cadastro
          </button>
        </RegisterForm>
      </RegisterContainer>
      <Footer />
    </>
  );
};

export default Register;
