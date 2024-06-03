import { Request, Response } from "express";
import { getAllAppointmentsService, cancelAppointmentService, createAppointmentService, getAppointmentByIdService } from "../Service/appointmentService";
import IAppointmentDto from "../Dto/IAppointmentDto";
import { Appointment } from "../Entities/Appointment";



// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
export const getAllAppointments= async (req:Request, res: Response):Promise<Appointment[]|void>=>{
    try{
        const appointments= await getAllAppointmentsService();
        res.status(200).json(appointments);
    }catch (error:any) {res.status(404).json({message:error.message}) }
}


// GET /appointments/id => Obtener el detalle de un turno específico.
export const getAppointment= async (req:Request, res: Response):Promise<Appointment|void>=>{
    const appointmentId: number = parseInt(req.params.id);
    try {
        const appointmentEncontrado = await getAppointmentByIdService(appointmentId);
        if (!appointmentEncontrado) throw new Error("turno no encontrado")
        res.status(200).json(appointmentEncontrado) }
    catch (error:any) {res.status(404).json({message:error.message}) }
}
// POST/appointments/schedule => crear un nuevo turno
export const scheduleNewAppointment = async(req: Request, res: Response): Promise<Appointment|void> => {
  try {
      const { date, time, userId } = req.body;
      if (!userId) {
          throw Error("Se requiere el ID del usuario para crear un turno.");
      }
      const newAppointmentData: IAppointmentDto = {
          date: date,
          time: time,
          userId: userId
      };
      const newAppointment = await createAppointmentService(newAppointmentData);
      res.status(201).json(newAppointment);
  } catch (error:any) {
      res.status(400).json("datos invalidos" );
  }
};

// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
export const cancellApointment= async(req:Request, res: Response):Promise<void>=>{
    const appointmentId: number = parseInt(req.params.id);
    try {
      const cancelledAppointment = await cancelAppointmentService(appointmentId);
      if (cancelledAppointment) {
        res.status(200).json(cancelledAppointment);
      } else {
        throw new Error("Turno no encontrado para cancelar.");
      }
    } catch (error:any) {
      res.status(404).json({message:error.message});
    }
}