import { error } from "console";
import IAppointmentDto from "../Dto/IAppointmentDto";
import AppointmentRepository from "../Repositories/AppointmentRepository";
import UserRepository from "../Repositories/UserRepository";
import { Appointment } from "../Entities/Appointment";

// Implementar una función que pueda retornar el arreglo completo de turnos.
export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
    return await AppointmentRepository.find()
  };

// Implementar una función que pueda obtener el detalle de un turno por ID.
export const getAppointmentByIdService = async (id: number): Promise<Appointment| null> => {
    const foundAppointment = AppointmentRepository.findOneBy({id});
    return foundAppointment;}

// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
export const createAppointmentService = async (createAppoint: IAppointmentDto): Promise<Appointment| Error> => {
  const userexist= await UserRepository.findOneBy({id:createAppoint.userId});
  if (!userexist) throw new Error("debe enviar un id valido"+ error)
    const newAppointment= await AppointmentRepository.create({...createAppoint, user:userexist.id, status:"Active"})
    await AppointmentRepository.save(newAppointment)
    return newAppointment;
  };
  
// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
export const cancelAppointmentService = async (id: number): Promise<Appointment| Error> => {
  const appointment = await AppointmentRepository.findOneBy({id});
  if (!appointment)throw new Error("id invalido") 
  appointment.status = "Cancelled";
  await AppointmentRepository.save(appointment)
  return appointment;
};