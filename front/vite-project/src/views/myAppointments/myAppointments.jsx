// import appointments from "../helpers/myTurns";
import { useEffect } from "react";
import CardAppointment from "../../components/cardAppointment/CardAppointment";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import styles from "./myAppointments.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setAppointments } from "../../redux/userSlice";

const MyAppointments = () => {
  const dispatch = useDispatch();

  const activeUserId = useSelector((state) => state.actualUser.userData.user.id);
  const activeUserAppointment = useSelector((state) => state.actualUser.userAppointments);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${activeUserId}`)
      .then((res) => dispatch(setAppointments(res.data.appointments)))
      .catch(error=>console.log(error.message))
  }, [activeUserId, dispatch]);

  const handleAppointmentCancel=(appointmentId)=>{
    axios.put(`http://localhost:3000/appointments/cancel/${appointmentId}`)
    .then(response=>response.data)
    .then(data=> {
      axios.get(`http://localhost:3000/users/${activeUserId}`)
      .then((res) => dispatch(setAppointments(res.data.appointments)))
      .catch(error=>console.log(error.message))
    })
    .catch(error=>alert(`Error al cancelar la reserva: ${error?.response?.data?.message}`))
  }

  return (
    <>
      <Navbar />
      <h1>Mis Turnos</h1>
      <div className={styles.cardContainer}>
        { activeUserAppointment.length?
            activeUserAppointment.map((appointment) => {
            return (
            <CardAppointment key={appointment.id} id={appointment.id} appointment={appointment} handleAppointmentCancel={handleAppointmentCancel} />
            );
            })
          :<p>todavia no hay turnos...</p>}
      </div>
    </>
  );
};

export default MyAppointments;
