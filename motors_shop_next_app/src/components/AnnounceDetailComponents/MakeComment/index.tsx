import { api } from "services/api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MakeCommentStyled } from "./styled";

function MakeComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userDataApi, setUserDataApi] = useState({
    abbreviation: "",
    id: "",
    name: "",
  });

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
      annoucement: "347c8388-6302-4347-88bc-8cd435c08203",
    };
    registerComment(commentData);
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    if (token) {
      api
        .get("/user", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setUserDataApi(res.data))
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <MakeCommentStyled onSubmit={handleSubmit(onSubmit)}>
      <div className="makeCommentUserData">
        <p className="makeCommentNameAbreviation">{userDataApi.abbreviation}</p>
        <p className="nameMakeComment">{userDataApi.name}</p>
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
