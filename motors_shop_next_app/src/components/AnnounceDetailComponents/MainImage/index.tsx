import { ImageContainer } from "./styled";

function PrimaryImage({image}:any) {
  return (
    <ImageContainer className="mainPicContainer">
      <img
        src={image}
        alt="Foto do veiculo"
        className="MainPicture"
      />
    </ImageContainer>
  );
}

export default PrimaryImage;
