import { Request, Response } from "express";
import deleteAnnouncementService from "../../services/announcements/deleteAnnouncement.service";


const deleteAnnouncementController = async (req: Request, res: Response) => {
    const announcementId: string = req.params.id;
    const userId: string = req.idUser
    const deleteReservation = await deleteAnnouncementService(announcementId, userId);
    return res.status(204).json({
      message: "Announcement successfully deleted"
    })
  };
  

export default deleteAnnouncementController;
