import { Request, Response } from "express";
import getAnnouncementsService from "../../services/announcements/getAnnouncements.service";

const getAnnouncementsController = async (req: Request, res: Response) => {
  const announcements = await getAnnouncementsService();
  return res.status(200).json(announcements);
};

export default getAnnouncementsController;
