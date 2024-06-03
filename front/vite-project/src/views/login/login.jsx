import Login from "../../components/LoginForm/LoginForm"
import Navbar from "../../components/navbar/Navbar"
import styles from "./login.module.css"


const LoginView=()=>{

    return(
        <>
        <Navbar/>
        <h1>¡Hola! Te damos la bienvenida a Banca Online:</h1>
        <div className={styles.login}>
            <Login/>
        </div>
        </>

    )
}

export default LoginView