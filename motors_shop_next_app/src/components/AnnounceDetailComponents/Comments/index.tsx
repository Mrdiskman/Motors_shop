import { timeDifference } from "@/utils/timeDifference";
import { useEffect, useState } from "react";
import { string } from "yup";
import { CommentsStyled } from "./styled";
import { AiFillEdit } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

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
              <div className="containerOptions">
                <AiFillEdit className="edit" />
                <FiTrash2 className="remove" />
              </div>
            </div>
            <p className="descriptionComment">{item.text}</p>

            <button></button>
          </li>
        ))}
      </ul>
    </CommentsStyled>
  );
}

export default Comments;
