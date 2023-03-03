import { CommentsStyled } from "./styled";

function Comments() {

  return (
    <CommentsStyled>
      <ul className="containerListComments">
        <li className="comments">
          <div className="dataComments">
            <p className="abreviationNameComment">JP</p>
            <p className="nameComment">João Pedro</p>
          </div>
          <p className="descriptionComment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            consequat urna pellentesque, condimentum lacus quis, ullamcorper
            leo. Class Curabitur lobortis ligula ut urna feugiat malesuada. Sed
            consectetur lorem egestas, finibus dolor a, dignissim urna. Mauris
            turpis sem, lacinia sed nibh ut, mollis rutrum mauris. Nam tempus
            erat vel consequat mattis.
          </p>
        </li>

        <li className="comments">
          <div className="dataComments">
            <p className="abreviationNameComment">AC</p>
            <p className="nameComment">Arminda Cantarelli</p>
          </div>
          <p className="descriptionComment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            consequat urna pellentesque, condimentum lacus quis, ullamcorper
            leo. Class Curabitur lobortis ligula ut urna feugiat malesuada. Sed
            consectetur lorem egestas, finibus dolor a, dignissim urna. Mauris
            turpis sem, lacinia sed nibh ut, mollis rutrum mauris. Nam tempus
            erat vel consequat mattis.
          </p>
        </li>

        <li className="comments">
          <div className="dataComments">
            <p className="abreviationNameComment">JT</p>
            <p className="nameComment">João Texeira</p>
          </div>
          <p className="descriptionComment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            consequat urna pellentesque, condimentum lacus quis, ullamcorper
            leo. Class Curabitur lobortis ligula ut urna feugiat malesuada. Sed
            consectetur lorem egestas, finibus dolor a, dignissim urna. Mauris
            turpis sem, lacinia sed nibh ut, mollis rutrum mauris. Nam tempus
            erat vel consequat mattis.
          </p>
        </li>
      </ul>
    </CommentsStyled>
  );
}

export default Comments;
