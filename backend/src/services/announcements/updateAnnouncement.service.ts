import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement";
import { AppError } from "../../errors/appError";
import { IAnnouncementUpdate } from "../../interfaces/announcements";


const updateAnnouncementService = async (
  id: string,
  updateAnnouncementData: IAnnouncementUpdate
): Promise<Announcement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const announcement = await announcementRepository.findOne({
    where: {
      id,
    },
  });

  if (!announcement) {
    throw new AppError(404, "Announcement not found!");
  }

  await announcementRepository.update(announcement.id, {

    model: 
      updateAnnouncementData.model ? 
        updateAnnouncementData.model 
        : 
        announcement.model
    ,

    type: 
      updateAnnouncementData.type ? 
        updateAnnouncementData.type 
        : 
        announcement.type
    ,
    
    description: 
      updateAnnouncementData.description ? 
        updateAnnouncementData.description 
        : 
        announcement.description
    ,  
    
    km: 
      updateAnnouncementData.km ? 
        updateAnnouncementData.km
        : 
        announcement.km
    , 

    year: 
      updateAnnouncementData.year ? 
        updateAnnouncementData.year
        : 
        announcement.year
    , 

    price: 
      updateAnnouncementData.price ? 
        updateAnnouncementData.price
        : 
        announcement.price
    , 
  });

  const announcementUpdated = await announcementRepository.findOne({
    where: {
      id,
    },
  });

  return announcementUpdated!;
};

export default updateAnnouncementService;
