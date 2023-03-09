import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comments/comment.entity";
import { IComment, ICommentUpdate } from "../../interfaces/comments";

const commentUpdateService = async (id: string, newData: ICommentUpdate) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const newComment = await commentRepository.update(id, { ...newData });
  const newCommentReq = await commentRepository.findOneBy({ id });

  return newCommentReq;
};

export default commentUpdateService;
