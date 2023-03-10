import { ModalContext } from "@/contexts/Modal/ModalContext";
import { useContext } from "react";
import { Button, DivInput, Input } from "..";
import { useForm } from "react-hook-form";
import { useState } from "react";
export interface IProps {
  title:
    | "Sucesso!"
    | "Conta criada com sucesso!"
    | "Editar perfil"
    | "Excluir anúncio"
    | "Editar Comentário"
    | "Excluir Comentário"
    | "Editar anúncio"
    | "Criar anúncio"
}
const ModalRequest = ({ title }: IProps): JSX.Element => {
  const [isSeller, isSetSeller] = useState(false);
  const [isType, setIsType] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { setModal, editComment, deleteComment, editAnnouncement, deleteAnnouncement,createAnnouncement } =
    useContext(ModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    editComment(data);
  };
  switch (title) {
    case "Sucesso!":
      return (
        <>
          <h2 className="title succes">Seu anúncio foi criado com sucesso!</h2>
          <span className="subtitle succes">
            Agora você poderá ver seus negócios crescendo em grande escala
          </span>
        </>
      );
    case "Conta criada com sucesso!":
      return (
        <>
          <h2 className="title creation">Sua conta foi criada com sucesso!</h2>
          <span className="subtitle creation">
            Agora você poderá ver seus negócios crescendo em grande escala{" "}
          </span>
          <Button
            className="exit login"
            onClick={() => {
              setModal(false);
            }}
          >
            Ir para o login
          </Button>
        </>
      );
    case "Editar perfil":
      return (
        <>
          <h2 className="title edit">Infomações pessoais</h2>
          <Input
            //labelFor="Name"
            placeholder="Name"
            //size="small"
            //fieldName="name"
            type="text"
          ></Input>
          <Input
            //labelFor="Email"
            placeholder="Email"
            //size="small"
            //fieldName="email"
            type="text"
          ></Input>
          <Input
            //labelFor="CPF"
            placeholder="900.880.090-00"
            //size="small"
            //fieldName="cpf"
            type="number"
          ></Input>
          <Input
            //labelFor="Celular"
            placeholder="(084) 90909-9092"
            //size="small"
            //fieldName="number"
            type="text"
          ></Input>
          <Input
            //labelFor="Data de nascimento"
            placeholder="09/12/99"
            //size="small"
            //fieldName="birthdate"
            type="number"
          ></Input>
          <Input
            //labelFor="Descrição"
            placeholder="Escreva aqui sua descrição"
            //size="big"
            //fieldName="description"
            type="textarea"
          ></Input>
          <div className="edit select">
            <Button
              className="select right"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancelar
            </Button>
            <Button className="select left save">Salvar alterações</Button>
          </div>
        </>
      );
    case "Excluir anúncio":
      return (
        <>
          <h2 className="title excluir ">
            Tem certeza que deseja remover este anúncio?
          </h2>
          <span className="subtitle excluir">
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </span>
          <div className="delete right">
            <Button
              className="select cancel"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancelar
            </Button>
            <Button className="select left">Sim, excluir anúncio</Button>
          </div>
        </>
      );
    case "Editar Comentário":
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            //labelFor="Descrição"
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            //size="big"
            //fieldName="description"
            type="textarea"
            {...register("text")}
          ></Input>
          <div className="edit select">
            <Button
              className="select right"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancelar
            </Button>
            <Button className="select left save" type="submit">
              Salvar alterações
            </Button>
          </div>
        </form>
      );
    case "Excluir Comentário":
      return (
        <>
          <h2 className="title excluir ">
            Tem certeza que deseja remover este comentário?
          </h2>
          <span className="subtitle excluir">
            Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
            comentário.
          </span>
          <div className="edit select">
            <Button
              className="select right"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancelar
            </Button>
            <Button className="select left" onClick={() => deleteComment()}>
              Sim, excluir comentário
            </Button>
          </div>
        </>
      );
    case "Editar anúncio":
      return (
        <form
          onSubmit={handleSubmit((data) => {
            data.images = [data.images1, data.images2];
            data.type = isType ? "moto" : "carro";
            data.isActive = isActive ? false : true
             editAnnouncement(data) 
          })}
        >
          <span className="subtitle">Tipo de anuncio</span>
          <DivInput>
            {isSeller ? (
              <>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    isSetSeller(false);
                  }}
                  width="152px"
                  color="#0B0D0D"
                  backgroundColor="#FDFDFD;"
                  borderRadius="4px"
                  margin="0px 11px 0px 0px"
                  border="1.5px solid #ADB5BD;"
                >
                  Venda
                </Button>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    isSetSeller(true);
                  }}
                  width="152px"
                  backgroundColor="#4529E6"
                  borderRadius="4px"
                  border="1.5px solid #4529E6;"
                >
                  Leilão
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    isSetSeller(false);
                  }}
                  width="152px"
                  margin="0px 11px 0px 0px"
                  backgroundColor="#4529E6"
                  borderRadius="4px"
                  border="1.5px solid #4529E6;"
                >
                  Venda
                </Button>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    isSetSeller(true);
                  }}
                  width="152px"
                  color="#0B0D0D"
                  backgroundColor="#FDFDFD;"
                  borderRadius="4px"
                  border="1.5px solid #ADB5BD;"
                >
                  Leilão
                </Button>
              </>
            )}
          </DivInput>
          <span className="subtitle">Título</span>
          <Input
            placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
            type="text"
            {...register("model")}
          ></Input>
          <span className="subtitle">Ano</span>
          <Input placeholder="2018" type="number" {...register("year")}></Input>
          <span className="subtitle">Quilometro</span>
          <Input placeholder="0" type="number" {...register("km")}></Input>
          <span className="subtitle">Preço</span>
          <Input
            placeholder="50.000,00"
            type="number"
            {...register("price")}
          ></Input>
          <span className="subtitle">Descrição</span>
          <Input
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            type="textarea"
            {...register("description")}
          ></Input>
          <span className="subtitle">Tipo do veiculo</span>
          <DivInput>
            {isType ? (
              <>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsType(false);
                  }}
                  width="152px"
                  color="#0B0D0D"
                  backgroundColor="#FDFDFD;"
                  borderRadius="4px"
                  margin="0px 11px 0px 0px"
                  border="1.5px solid #ADB5BD;"
                >
                  Carro
                </Button>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsType(true);
                  }}
                  width="152px"
                  backgroundColor="#4529E6"
                  borderRadius="4px"
                  border="1.5px solid #4529E6;"
                >
                  Moto
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsType(false);
                  }}
                  width="152px"
                  margin="0px 11px 0px 0px"
                  backgroundColor="#4529E6"
                  borderRadius="4px"
                  border="1.5px solid #4529E6;"
                >
                  Carro
                </Button>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsType(true);
                  }}
                  width="152px"
                  color="#0B0D0D"
                  backgroundColor="#FDFDFD;"
                  borderRadius="4px"
                  border="1.5px solid #ADB5BD;"
                >
                  Moto
                </Button>
              </>
            )}
          </DivInput>
          <span className="subtitle">Publicado</span>
          <DivInput>
            {isActive ? (
              <>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsActive(false);
                  }}
                  width="152px"
                  color="#0B0D0D"
                  backgroundColor="#FDFDFD;"
                  borderRadius="4px"
                  margin="0px 11px 0px 0px"
                  border="1.5px solid #ADB5BD;"
                >
                  Sim
                </Button>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsActive(true);
                  }}
                  width="152px"
                  backgroundColor="#4529E6"
                  borderRadius="4px"
                  border="1.5px solid #4529E6;"
                >
                  Não
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsActive(false);
                  }}
                  width="152px"
                  margin="0px 11px 0px 0px"
                  backgroundColor="#4529E6"
                  borderRadius="4px"
                  border="1.5px solid #4529E6;"
                >
                  Sim
                </Button>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsActive(true);
                  }}
                  width="152px"
                  color="#0B0D0D"
                  backgroundColor="#FDFDFD;"
                  borderRadius="4px"
                  border="1.5px solid #ADB5BD;"
                >
                  Não
                </Button>
              </>
            )}
          </DivInput>
          <span className="subtitle">Imagem da capa</span>
          <Input
            placeholder="https://image.com"
            type="text"
            {...register("default_img")}
          ></Input>
          <span className="subtitle">1° Imagem da galeria</span>
          <Input
            placeholder="https://image.com"
            type="text"
            {...register("images1")}
          ></Input>
          <span className="subtitle">2° Imagem da galeria</span>
          <Input
            placeholder="https://image.com"
            type="text"
            {...register("images2")}
          ></Input>

          <div className="edit select">
            <Button
              className="select right"
              onClick={() => {
                deleteAnnouncement()
              }}
            >
              Excluir Anuncio
            </Button>
            <Button className="select left save" type="submit">
              Salvar alterações
            </Button>
          </div>
        </form>
      );

      case "Criar anúncio":
        return (
          <form
            onSubmit={handleSubmit((data) => {
              data.images = [data.images1, data.images2];
              data.type = isType ? "moto" : "carro";
              data.isActive = isActive ? false : true
              createAnnouncement(data) 
            })}
          >
            <span className="subtitle">Tipo de anuncio</span>
            <DivInput>
              {isSeller ? (
                <>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      isSetSeller(false);
                    }}
                    width="152px"
                    color="#0B0D0D"
                    backgroundColor="#FDFDFD;"
                    borderRadius="4px"
                    margin="0px 11px 0px 0px"
                    border="1.5px solid #ADB5BD;"
                  >
                    Venda
                  </Button>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      isSetSeller(true);
                    }}
                    width="152px"
                    backgroundColor="#4529E6"
                    borderRadius="4px"
                    border="1.5px solid #4529E6;"
                  >
                    Leilão
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      isSetSeller(false);
                    }}
                    width="152px"
                    margin="0px 11px 0px 0px"
                    backgroundColor="#4529E6"
                    borderRadius="4px"
                    border="1.5px solid #4529E6;"
                  >
                    Venda
                  </Button>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      isSetSeller(true);
                    }}
                    width="152px"
                    color="#0B0D0D"
                    backgroundColor="#FDFDFD;"
                    borderRadius="4px"
                    border="1.5px solid #ADB5BD;"
                  >
                    Leilão
                  </Button>
                </>
              )}
            </DivInput>
            <span className="subtitle">Título</span>
            <Input
              placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
              type="text"
              {...register("model")}
            ></Input>
            <span className="subtitle">Ano</span>
            <Input placeholder="2018" type="number" {...register("year")}></Input>
            <span className="subtitle">Quilometro</span>
            <Input placeholder="0" type="number" {...register("km")}></Input>
            <span className="subtitle">Preço</span>
            <Input
              placeholder="50.000,00"
              type="number"
              {...register("price")}
            ></Input>
            <span className="subtitle">Descrição</span>
            <Input
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              type="textarea"
              {...register("description")}
            ></Input>
            <span className="subtitle">Tipo do veiculo</span>
            <DivInput>
              {isType ? (
                <>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsType(false);
                    }}
                    width="152px"
                    color="#0B0D0D"
                    backgroundColor="#FDFDFD;"
                    borderRadius="4px"
                    margin="0px 11px 0px 0px"
                    border="1.5px solid #ADB5BD;"
                  >
                    Carro
                  </Button>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsType(true);
                    }}
                    width="152px"
                    backgroundColor="#4529E6"
                    borderRadius="4px"
                    border="1.5px solid #4529E6;"
                  >
                    Moto
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsType(false);
                    }}
                    width="152px"
                    margin="0px 11px 0px 0px"
                    backgroundColor="#4529E6"
                    borderRadius="4px"
                    border="1.5px solid #4529E6;"
                  >
                    Carro
                  </Button>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsType(true);
                    }}
                    width="152px"
                    color="#0B0D0D"
                    backgroundColor="#FDFDFD;"
                    borderRadius="4px"
                    border="1.5px solid #ADB5BD;"
                  >
                    Moto
                  </Button>
                </>
              )}
            </DivInput>
            <span className="subtitle">Publicado</span>
            <DivInput>
              {isActive ? (
                <>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsActive(false);
                    }}
                    width="152px"
                    color="#0B0D0D"
                    backgroundColor="#FDFDFD;"
                    borderRadius="4px"
                    margin="0px 11px 0px 0px"
                    border="1.5px solid #ADB5BD;"
                  >
                    Sim
                  </Button>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsActive(true);
                    }}
                    width="152px"
                    backgroundColor="#4529E6"
                    borderRadius="4px"
                    border="1.5px solid #4529E6;"
                  >
                    Não
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsActive(false);
                    }}
                    width="152px"
                    margin="0px 11px 0px 0px"
                    backgroundColor="#4529E6"
                    borderRadius="4px"
                    border="1.5px solid #4529E6;"
                  >
                    Sim
                  </Button>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsActive(true);
                    }}
                    width="152px"
                    color="#0B0D0D"
                    backgroundColor="#FDFDFD;"
                    borderRadius="4px"
                    border="1.5px solid #ADB5BD;"
                  >
                    Não
                  </Button>
                </>
              )}
            </DivInput>
            <span className="subtitle">Imagem da capa</span>
            <Input
              placeholder="https://image.com"
              type="text"
              {...register("default_img")}
            ></Input>
            <span className="subtitle">1° Imagem da galeria</span>
            <Input
              placeholder="https://image.com"
              type="text"
              {...register("images1")}
            ></Input>
            <span className="subtitle">2° Imagem da galeria</span>
            <Input
              placeholder="https://image.com"
              type="text"
              {...register("images2")}
            ></Input>
  
            <div className="edit select">
              <Button
                className="select right"
                onClick={() => {
                  setModal(false);
                }}
              >
                Cancelar
              </Button>
              <Button className="select left save" type="submit">
                Salvar alterações
              </Button>
            </div>
          </form>
        );
  }
};
export default ModalRequest;
