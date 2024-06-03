import NewAppointment from "../../components/newAppointment/NewAppointmentForm"
import Navbar from "../../components/navbar/Navbar"
import styles from "./createAppointment.module.css"
const CreateAppointment = () => {

    return (
        <>
            <Navbar />
            <h1>¿Necesitas atencion en nuestra sucursal?</h1>
            <div className={styles.NewAppointment} >
                <NewAppointment />
            </div>
        </>
    );
}

export default CreateAppointment