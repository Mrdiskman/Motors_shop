import { ImageContainer } from "./styled";

function PrimaryImage() {
  return (
    <ImageContainer className="mainPicContainer">
      <img
        src="https://st4.depositphotos.com/1008239/40970/i/1600/depositphotos_409708386-stock-photo-service-worker-washing-car-on.jpg"
        alt="Foto do carro"
        className="MainPicture"
      />
    </ImageContainer>
  );
}

export default PrimaryImage;
