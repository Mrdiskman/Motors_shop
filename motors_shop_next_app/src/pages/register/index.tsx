import Head from "next/head";
import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";

import {
  Container,
  Form,
  Input,
  Label,
  Title,
} from "@/components/GeneralComponents";

export default function Home() {
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
          width="411px"
          height="1630px"
          justifyContent="start"
          padding="44px 48px"
        >
          <Title marginBottom="32px">Cadastro</Title>
          <Label>Informacoes Pessoais</Label>
          <Form>
            <Label>Nome</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Ex: Samuel Leao"
            ></Input>
            <Label>Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Ex: samuel@kenzie.com.br"
            ></Input>
            <Label>CPF</Label>
            <Input
              type="text"
              id="cpf"
              name="cpf"
              required
              placeholder="000.000.000-00"
            ></Input>
            <Label>Celular</Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              required
              placeholder="(DDD) 90000-0000"
            ></Input>
            <Label>Data de nascimento</Label>
            <Input
              type="text"
              id="birthday"
              name="birthday"
              required
              placeholder="00/00/00"
            ></Input>
            <Label>Descricao</Label>
            <Input
              type="text"
              id="description"
              name="description"
              required
              placeholder="Digitar descricao"
            ></Input>
          </Form>
        </Container>
        <Footer />
      </main>
    </>
  );
}
