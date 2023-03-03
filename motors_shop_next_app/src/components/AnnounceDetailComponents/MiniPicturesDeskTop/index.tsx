import { useEffect, useState } from "react";
import { MiniPicturesDesktopContainer } from "./styled";

function MiniPicturesDesktop({images}:any) {
  const [otherImages, setOtherImages] = useState([])
  useEffect(() => {
    setOtherImages(images)
  }, [images]);
  return (
    <MiniPicturesDesktopContainer>
      <h2 className="titlePhotos">Fotos</h2>
      <ul className="ulListImages">
        {otherImages.map((elem, index):any => (
          <li key={index} className="listImages">
            <img src={elem} alt="fotos dos carros" className="miniPictures" />
          </li>
        ))}
      </ul>
    </MiniPicturesDesktopContainer>
  );
}
export default MiniPicturesDesktop;
