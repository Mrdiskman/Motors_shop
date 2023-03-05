import { useEffect, useState } from "react";
import { string } from "yup";
import { CommentsStyled } from "./styled";

function Comments({ comments }: any) {
  const [listOfComments, setListOfComments] = useState([]);
  useEffect(() => {
    setListOfComments(comments);
  }, [listOfComments]);
  const days = (created_at: string) => {
    const today = new Date();
    const time = new Date(created_at.slice(0, 10));
    const result = (today - time) / (1000 * 60 * 60 * 24);
    if (result < 1) {
      return "hoje";
    }
    if (result < 30) {
      return `há ${result.toString()[0]} dias`;
    }
    return `há ${result.toString()[0]} mês`;
  };

  return (
    <CommentsStyled>
      <ul className="containerListComments">
        {listOfComments.map((item: any, index: number) => (
          <li className="comments" key={index}>
            <div className="dataComments">
              <p className="abreviationNameComment">{item.user.abbreviation}</p>
              <p className="nameComment">{item.user.name}</p>
              <p className="timeString">{days(item.created_at)}</p>
            </div>
            <p className="descriptionComment">{item.text}</p>
          </li>
        ))}
      </ul>
    </CommentsStyled>
  );
}

export default Comments;
