import { AppDataSource } from "../../data-source";
import {
  IAnnouncement,
  IAnnouncementCreate,
} from "../../interfaces/announcements";
import { Announcement } from "../../entities/announcement";
import { User } from "../../entities/users";
import { IUser } from "../../interfaces/users";

const registerAnnouncementService = async ({
  model,
  type,
  description,
  km,
  year,
  price,
  default_img,
  images,
}: IAnnouncementCreate, id:string): Promise<IAnnouncement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const userRepository = AppDataSource.getRepository(User);
  const getUser = await userRepository.findOneBy({ id });
  const announcement: IAnnouncement = new Announcement();
  (announcement.model = model),
    (announcement.type = type),
    (announcement.description = description as string),
    (announcement.km = km),
    (announcement.year = year),
    (announcement.price = price),
    (announcement.user = getUser),
    (announcement.default_img = default_img),
    (announcement.images = images),
    await announcementRepository.save(announcement);
  return announcement;
};

export default registerAnnouncementService;
