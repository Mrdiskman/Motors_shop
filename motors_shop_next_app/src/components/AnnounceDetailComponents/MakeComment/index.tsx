import { MakeCommentStyled } from "./styled";

function MakeComment() {
  return (
    <MakeCommentStyled>
      <div className="makeCommentUserData">
        <p className="makeCommentNameAbreviation">JS</p>
        <p className="nameMakeComment">João Silva</p>
      </div>
      <input
        type="text"
        className="inputComment"
        placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
      />
      <button className="buttonMakeComment">Comentar</button>
      <div className="like">
        <span className="autoComment">Gostei muito!</span>
        <span className="autoComment">Incrível</span>
      </div>
      <span className="autoComment">Recomendarei para meus amigos!</span>
    </MakeCommentStyled>
  );
}
export default MakeComment;