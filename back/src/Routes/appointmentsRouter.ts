import {Router} from "express";
import { getAllAppointments,  cancellApointment, getAppointment, scheduleNewAppointment} from "../Controllers/appointmentsController";

const appointmentsRouter: Router=Router();

appointmentsRouter.get("/", getAllAppointments)


appointmentsRouter.get("/:id", getAppointment);
appointmentsRouter.post("/schedule", scheduleNewAppointment);
appointmentsRouter.put("/cancel/:id", cancellApointment);

export default appointmentsRouter;