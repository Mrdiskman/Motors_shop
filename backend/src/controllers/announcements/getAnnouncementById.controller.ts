import { Request, Response } from "express";
import getAnnouncementByIdService from "../../services/announcements/getAnnouncementById.service";


const getAnnouncementByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const announcement = await getAnnouncementByIdService(id);
  return res.status(200).json(announcement);
};

export default getAnnouncementByIdController;
