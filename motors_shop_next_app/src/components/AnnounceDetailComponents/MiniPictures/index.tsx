import { database } from "@/database";
import { useEffect, useState } from "react";
import { MiniPicturesContainer } from "./styled";

function MiniPictures({images}:any) {
  const [otherImages, setOtherImages] = useState([])
  useEffect(() => {
    setOtherImages(images)
  }, [images]);
  return (
    <MiniPicturesContainer>
      <h2 className="titlePhotos">Fotos</h2>
      <ul className="ulListImages">
        {otherImages.map((elem, index) => (
          <li key={index} className="listImages">
            <img src={elem} alt="fotos dos carros" className="miniPictures" />
          </li>
        ))}
      </ul>
    </MiniPicturesContainer>
  );
}
export default MiniPictures;
