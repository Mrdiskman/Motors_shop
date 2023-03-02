import { database } from "@/database";
import { MiniPicturesContainer } from "./styled";

function MiniPictures() {
  const images = database.user.announcements.map(
    (annoucement) => annoucement.pictures
  );
  const miniPictures = images.join("").split(",");
  return (
    <MiniPicturesContainer>
      <h2 className="titlePhotos">Fotos</h2>
      <ul className="ulListImages">
        {miniPictures.map((elem, index) => (
          <li key={index} className="listImages">
            <img src={elem} alt="fotos dos carros" className="miniPictures" />
          </li>
        ))}
      </ul>
    </MiniPicturesContainer>
  );
}
export default MiniPictures;
