import { Appointment } from "../Entities/Appointment"
import { AppDataSource } from "../config/data-source"


const AppointmentRepository=AppDataSource.getRepository(Appointment);
export default AppointmentRepository;