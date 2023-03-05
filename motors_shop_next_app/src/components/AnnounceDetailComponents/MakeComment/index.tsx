import { api } from "@/services/api";
import { useForm } from "react-hook-form";
import { MakeCommentStyled } from "./styled";

function MakeComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function registerComment(data: any) {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    if (token) {
      api
        .post("/comments", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err));
    }
  }

  function onSubmit(data: any) {
    const commentData = {
      text: String(data.text),
      annoucement: "48cfdfad-ae27-46bb-b1ee-fdc884cbc093",
    };
    registerComment(commentData);
  }

  return (
    <MakeCommentStyled onSubmit={handleSubmit(onSubmit)}>
      <div className="makeCommentUserData">
        <p className="makeCommentNameAbreviation">JS</p>
        <p className="nameMakeComment">João Silva</p>
      </div>
      <input
        type="text"
        className="inputComment"
        placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
        {...register("text")}
      />
      <button className="buttonMakeComment" type="submit">
        Comentar
      </button>
      <div className="like">
        <span className="autoComment">Gostei muito!</span>
        <span className="autoComment">Incrível</span>
      </div>
      <span className="autoComment">Recomendarei para meus amigos!</span>
    </MakeCommentStyled>
  );
}
export default MakeComment;
