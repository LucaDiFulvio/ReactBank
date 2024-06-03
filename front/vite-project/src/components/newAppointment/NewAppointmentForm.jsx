import { useState } from "react";
import { appointmentValidate } from "../../helpers/appointmentValidate";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./newAppointment.module.css"


const NewAppointment =()=>{
    const today = new Date().toISOString().split("T")[0];
    const[appointment, setAppointment] = useState({
        date: "",
        time: "",
    })

    const [errors, setErrors] = useState({})

 
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAppointment({ ...appointment, [name]: value });
    
        const itemsActualizadoFromRegister = {
          ...appointment,
          [name]: value,
        };
        const newErrors = appointmentValidate(itemsActualizadoFromRegister);
        if (newErrors[name]) {
          setErrors({ ...errors, [name]: newErrors[name] });
        } else {
          const { [name]: value, ...remainingErrors } = errors;
          setErrors(remainingErrors);
        }
      };

    const userId=useSelector(state=>state.actualUser.userData.user.id);
    const navigate= useNavigate();

    const handleOnSubmit = (event)=>{
        event.preventDefault();
        const newAppointment = {... appointment, userId};
       axios.post("http://localhost:3000/appointments/schedule", newAppointment)
       .then(({data})=> data )
       .then((appointmentInDB) => {
        alert(`ha sido creada la nueva reserva: fecha: ${appointmentInDB.date}, hora: ${appointmentInDB.time} `);
        navigate("/myappointments")
      })
      .catch(error => {
        alert("ocurrio un error: " + error.message);
      });

    }


    return(
        <>
        <form className={styles.createAppointmentForm} onSubmit={handleOnSubmit}>
            <h2>solicitar turno nuevo :</h2>
            <div>
                <label>Fecha:</label>
                <input
                type="date"
                value={appointment.date}
                min={today}
                name="date"
                onChange={handleInputChange}>
                </input>
            </div>
            <div>
                <label>hora:</label>
                <input
                type="time"
                value={appointment.time}
                step="900"
                min="07:00"
                max="15:00"
                name="time"
                onChange={handleInputChange}>
                </input>
            </div>
            <div>
                <button type="submit">crear reserva</button>
            </div>
        </form>
        </>
    )
}

export default NewAppointment;