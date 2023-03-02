import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import updateAnnouncementService from "../../services/announcements/updateAnnouncement.service";

const updateAnnouncementController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updateAnnouncementData = req.body;

    const updatedAnnouncement = await updateAnnouncementService(id, updateAnnouncementData);

    return res.status(200).json(updatedAnnouncement);
  } catch (err) {
    if (err instanceof AppError) {
      const { statusCode, message } = err;

      return res.status(statusCode).json({
        status: "error",
        statusCode,
        message,
      });
    }
  }
};

export default updateAnnouncementController;
