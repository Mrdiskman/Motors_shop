import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement";
import { AppError } from "../../errors/appError";


const deleteAnnouncementService = async (announcementId: string, userId: string): Promise<void> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.findOne({
    where: {
      user: {
        id: userId
      }
    }, relations: {
      user: true
    }
  })  
  if (!announcement) {
    throw new AppError(404, "Announcement not found");
  }
  
  if (announcement.user.id === userId){
    await announcementRepository.delete({
      id: announcement.id
    })

    return 
  }

  throw new AppError(403, "You can't delete announcements from another user")

};

export default deleteAnnouncementService;
