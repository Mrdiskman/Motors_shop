import { database } from "@/database";
import { MiniPicturesDesktopContainer } from "./styled";

function MiniPicturesDesktop() {
  const images = database.user.announcements.map(
    (annoucement) => annoucement.pictures
  );
  const miniPictures = images.join("").split(",");
  return (
    <MiniPicturesDesktopContainer>
      <h2 className="titlePhotos">Fotos</h2>
      <ul className="ulListImages">
        {miniPictures.map((elem, index) => (
          <li key={index} className="listImages">
            <img src={elem} alt="fotos dos carros" className="miniPictures" />
          </li>
        ))}
      </ul>
    </MiniPicturesDesktopContainer>
  );
}
export default MiniPicturesDesktop;
