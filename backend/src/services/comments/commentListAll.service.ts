import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";

const commentListAllService = async () => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comments = commentRepository.find();

  return comments;
};

export default commentListAllService;
