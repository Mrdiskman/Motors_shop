import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IAnnouncementCreate } from "../../interfaces/announcements";
import registerAnnouncementService from "../../services/announcements/registerAnnouncement.service";


const registerAnnouncementController = async (req: Request, res: Response) => {
  try {
    const announcementData: IAnnouncementCreate = req.body;
    const id = req.idUser

    const newAnnouncement = await registerAnnouncementService(announcementData, id);
    return res.status(201).json(newAnnouncement);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default registerAnnouncementController;
