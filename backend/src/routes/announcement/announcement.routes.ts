import { Router } from "express";
import deleteAnnouncementController from "../../controllers/announcements/deleteAnnouncement.controller";
import registerAnnouncementController from "../../controllers/announcements/registerAnnouncement.controllers";
import { authUser } from "../../middlewares/users/authUser.middleware";

const announcementsRoutes = Router();

announcementsRoutes.post(
    "/announcement", 
    authUser, 
    registerAnnouncementController
); //add "isEmployee" middleware

announcementsRoutes.delete(
    "/:id",
    authUser, 
    deleteAnnouncementController
); //add "isEmployee" middleware

export default announcementsRoutes;
