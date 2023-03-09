import { timeDifference } from "@/utils/timeDifference";
import { useEffect, useState } from "react";
import { string } from "yup";
import { CommentsStyled } from "./styled";

function Comments({ comments }: any) {
  const [listOfComments, setListOfComments] = useState([]);
  useEffect(() => {
    setListOfComments(comments);
  }, [listOfComments]);

  return (
    <CommentsStyled>
      <ul className="containerListComments">
        {listOfComments?.map((item: any, index: number) => (
          <li className="comments" key={index}>
            <div className="dataComments">
              <p className="abreviationNameComment">{item.user.abbreviation}</p>
              <p className="nameComment">{item.user.name}</p>
              <p className="timeString">{timeDifference(item.created_at)}</p>
            </div>
            <p className="descriptionComment">{item.text}</p>
          </li>
        ))}
      </ul>
    </CommentsStyled>
  );
}

export default Comments;
