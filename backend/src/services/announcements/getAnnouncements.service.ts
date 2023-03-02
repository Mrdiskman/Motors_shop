import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement";


const getAnnouncementsService = async (): Promise<Announcement[]> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const announcements = await announcementRepository.find();

  return announcements;
};

export default getAnnouncementsService;
