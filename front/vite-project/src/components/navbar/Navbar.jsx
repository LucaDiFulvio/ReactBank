import CustomNavBar from "../../styles/CustomNavBar";
import {NavLink} from "react-router-dom" 
import {useSelector} from "react-redux"
import styles from "./Navbar.module.css";
import logo from "../../assets/logo_banco.jpg"
import usuario_deslogeado from "../../assets/usuario_deslogeado.webp"
import usuario_logeado from "../../assets/usuario_logeado.png"
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { setAppointments } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";


const Navbar=()=>{

    const dispatch = useDispatch();
    const navigate =useNavigate();
    const handleLogout = () => {
        const confirm = window.confirm("¿Deseas cerrar sesión?");
        if(confirm){
          dispatch(setUser({}));
          dispatch(setAppointments([]));
          navigate("/");
        }
      }


    const login= useSelector(state=>state.actualUser.userData.login)

    return(
        <>
        <CustomNavBar>
            <img className={styles.logo} src={logo} alt="logo" />
            <ul>
                <li><NavLink className={styles.NavLink}  to="/">Home</NavLink></li>
                {
                    !login &&<li><NavLink className={styles.NavLink} to="/register">Register</NavLink></li>
                }
                {
                    login &&
                        <li><NavLink className={styles.NavLink} to="/myAppointments">My Appointments</NavLink></li>
                }
                <li><NavLink className={styles.NavLink} to="/login">Login</NavLink></li>
                <li><NavLink className={styles.NavLink} to="/aboutUs">About Us</NavLink></li>
                {
                    login &&
                        <li><NavLink className={styles.NavLink} to="/createAppointment">new Appointment</NavLink></li>
                }
            </ul>
            {login ? (
                <img className={styles.logo} src={usuario_logeado} alt="logo" onClick={handleLogout} />
                ) : (
                <img className={styles.logo} src={usuario_deslogeado} alt="logo" />
                )}
        </CustomNavBar>
        </>
    )
}
export default Navbar;