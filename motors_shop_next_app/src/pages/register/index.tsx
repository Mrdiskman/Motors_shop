import Head from "next/head";
import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";

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
          marginBottom="46px"
          marginTop="46px"
          width="411px"
          height="1660px"
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
            <Label>Infomações de endereço</Label>
            <Label>CEP</Label>
            <Input
              type="text"
              id="cep"
              name="cep"
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
                  name="state"
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
                    name="city"
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
              name="road"
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
                    name="number"
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
                  name="complement"
                  required
                  placeholder="Ex: apart 307"
                ></Input>
              </div>
            </DivInput>

            <Label>Tipo de conta</Label>
            <DivInput>
              <Button
                width="152px"
                margin="0px 11px 0px 0px"
                backgroundColor="#4529E6"
                borderRadius="4px"
                border="1.5px solid #4529E6;"
              >
                Comprador
              </Button>
              <Button
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
              name="password"
              required
              placeholder="Digitar senha"
            ></Input>
            <Label>Confirmar Senha</Label>
            <Input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              placeholder="Digitar senha"
            ></Input>
            <Button
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
