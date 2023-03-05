import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Comment } from "../../entities/comments/comment.entity";
import { User } from "../../entities/users";
import { Announcement } from "../../entities/announcement";

const commentCreateService = async (
  text: string,
  userId: string,
  annoucement: string
) => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const userRepository = AppDataSource.getRepository(User);

  const getAnnouncement = await announcementRepository.findOneBy({
    id: annoucement,
  });

  const getUser = await userRepository.findOneBy({ id: userId });
  if (!getUser) {
    throw new AppError(404, "User not found.");
  }

  if (!getAnnouncement) {
    throw new AppError(404, "Announcement not found.");
  }

  const newComment = commentRepository.create({
    text,
    user: getUser!,
    annoucement: getAnnouncement!,
  });

  await commentRepository.save(newComment);
  return newComment;
};

export default commentCreateService;
