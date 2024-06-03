import Navbar from "../../components/navbar/Navbar"
import Register from "../../components/RegisterForm/RegisterForm"
import styles from "./register.module.css"


const RegisterView=()=>{

    return(
        <>
        <Navbar/>
        <h1>Hazte cliente</h1>
        <div className={styles.register}>
            <Register/>
        </div>
        </>
    )
}

export default RegisterView