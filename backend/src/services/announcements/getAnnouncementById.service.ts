import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement";
import { AppError } from "../../errors/appError";

const getAnnouncementByIdService = async (id: string): Promise<Announcement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const announcement = await announcementRepository.findOneBy({
    id,
  });

  if (!announcement) {
    throw new AppError(404, "Announcement not found!");
  }

  return announcement;
};

export default getAnnouncementByIdService;
