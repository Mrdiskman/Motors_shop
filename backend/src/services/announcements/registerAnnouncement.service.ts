import { AppDataSource } from "../../data-source";
import { IAnnouncement, IAnnouncementCreate } from "../../interfaces/announcements";
import { Announcement } from "../../entities/announcement";

const registerAnnouncementService = async ({
  model,
  type,
  description,
  km,
  year,  
  price,
  user,
}: IAnnouncementCreate): Promise<IAnnouncement> => {

  const announcementRepository = AppDataSource.getRepository(Announcement);
  const announcement: IAnnouncement = new Announcement();
    (announcement.model = model),
    (announcement.type = type),
    (announcement.description = description as string),
    (announcement.km = km),
    (announcement.year = year),
    (announcement.price = price),
    (announcement.user = user),
    await announcementRepository.save(announcement);
  return announcement;
};

export default registerAnnouncementService;
