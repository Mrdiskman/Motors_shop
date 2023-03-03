import Head from "next/head";
import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";
import { useForm } from "react-hook-form";

import {
  Container,
  Form,
  Input,
  Label,
  Title,
  Button,
  DivInput,
  divContainer,
} from "@/components/GeneralComponents";
import { api } from "@/services/api";
import { useState } from "react";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [isSeller, isSetSeller]: any = useState(false);

  const onSubmit = (data: any) => {
    const { cep, state, number, city, complement, ...rest } = data;
    rest.address = { cep, state, number, city, complement };
    rest.seller = isSeller;
    console.log(rest);
  };
  return (
    <>
      <Head>
        <title>Motor Shop App</title>
        <meta
          name="description"
          content="Motor Shop App by Kenzie Academy students"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Container
          marginBottom="46px"
          marginTop="46px"
          width="411px"
          height="1660px"
          justifyContent="start"
          padding="44px 48px"
        >
          <Title marginBottom="32px">Cadastro</Title>
          <Label>Informacoes Pessoais</Label>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>Nome</Label>
            <Input
              type="text"
              id="name"
              required
              {...register("name")}
              placeholder="Ex: Samuel Leao"
            ></Input>
            <Label>Email</Label>
            <Input
              type="email"
              id="email"
              {...register("email")}
              required
              placeholder="Ex: samuel@kenzie.com.br"
            ></Input>
            <Label>CPF</Label>
            <Input
              type="text"
              id="cpf"
              {...register("cpf")}
              required
              placeholder="000.000.000-00"
            ></Input>
            <Label>Celular</Label>
            <Input
              type="text"
              id="phone"
              {...register("phone")}
              required
              placeholder="(DDD) 90000-0000"
            ></Input>
            <Label>Data de nascimento</Label>
            <Input
              type="text"
              id="birthday"
              {...register("birthday")}
              required
              placeholder="00/00/00"
            ></Input>
            <Label>Descricao</Label>
            <Input
              type="text"
              id="description"
              {...register("description")}
              required
              placeholder="Digitar descricao"
            ></Input>
            <Label>Infomações de endereço</Label>
            <Label>CEP</Label>
            <Input
              type="text"
              id="cep"
              {...register("cep")}
              required
              placeholder="00000.000"
            ></Input>
            <DivInput>
              <div>
                <div>
                  <Label>Estado</Label>
                </div>
                <Input
                  type="text"
                  id="state"
                  {...register("state")}
                  width="95%"
                  required
                  placeholder="Digitar Estado"
                ></Input>
              </div>
              <div>
                <Label>Cidade</Label>
                <div>
                  <Input
                    type="text"
                    id="city"
                    {...register("city")}
                    width="95%"
                    required
                    placeholder="Digitar cidade"
                  ></Input>
                </div>
              </div>
            </DivInput>
            <Label>Rua</Label>
            <Input
              type="text"
              id="road"
              {...register("road")}
              required
              placeholder="Digite sua rua"
            ></Input>
            <DivInput>
              <div>
                <Label>Número</Label>
                <div>
                  <Input
                    type="text"
                    id="number"
                    width="95%"
                    {...register("number")}
                    required
                    placeholder="Digitar número"
                  ></Input>
                </div>
              </div>
              <div>
                <div>
                  <Label>Complemento</Label>
                </div>
                <Input
                  type="text"
                  id="complement"
                  width="95%"
                  {...register("complement")}
                  required
                  placeholder="Ex: apart 307"
                ></Input>
              </div>
            </DivInput>

            <Label>Tipo de conta</Label>
            <DivInput>
              <Button
                onChange={(e) => {
                  e.preventDefault();
                  isSetSeller(true);
                  console.log(isSeller);
                }}
                width="152px"
                margin="0px 11px 0px 0px"
                backgroundColor="#4529E6"
                borderRadius="4px"
                border="1.5px solid #4529E6;"
              >
                Comprador
              </Button>
              <Button
                onChange={(e) => {
                  e.preventDefault();
                  isSetSeller(false);
                }}
                width="152px"
                color="#0B0D0D"
                backgroundColor="#FDFDFD;"
                borderRadius="4px"
                border="1.5px solid #ADB5BD;"
              >
                Anuciante
              </Button>
            </DivInput>

            <Label>Senha</Label>
            <Input
              type="password"
              id="password"
              {...register("password")}
              required
              placeholder="Digitar senha"
            ></Input>
            <Label>Confirmar Senha</Label>
            <Input
              type="password"
              id="confirm-password"
              {...register("confirm-password")}
              required
              placeholder="Digitar senha"
            ></Input>
            <Button
              type="submit"
              width="100%"
              margin="0px 11px 0px 0px"
              backgroundColor="#4529E6"
              borderRadius="4px"
              border="1.5px solid #4529E6;"
            >
              Finalizar cadastro
            </Button>
          </Form>
        </Container>
        <Footer />
      </main>
    </>
  );
}
