import { useState } from "react";
import { registerValidate } from "../../helpers/registerValidate";
import axios from "axios";
import styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";
const register =()=>{
    const today = new Date().toISOString().split("T")[0];
    const[userData, setUserData] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });

    const itemsActualizadoFromRegister = {
      ...userData,
      [name]: value,
    };
    const newErrors = registerValidate(itemsActualizadoFromRegister);
    if (newErrors[name]) {
      setErrors({ ...errors, [name]: newErrors[name] });
    } else {
      const { [name]: value, ...remainingErrors } = errors;
      setErrors(remainingErrors);
    }
  };

    const navigate= useNavigate();
    const handleOnSubmit = (event)=>{
        event.preventDefault();
       axios.post("http://localhost:3000/users/register", userData)
       .then(() => {
        alert("Usuario creado exitosamente");
        navigate("/login")
      })
      .catch(error => {
        alert("Ocurrió un error al crear el usuario: " + error.message);
      });

    }


    return(
            <>
        <form className={styles.registerForm} onSubmit={handleOnSubmit}>
            <h2>Registrate:</h2>
            <div>
                <label>Nombre:</label>
                <input
                type="text"
                value={userData.name}
                name="name"
                placeholder="Luca"
                style={{
                    transition: "2s",
                    backgroundColor: errors.name
                      ? "rgba(255, 0, 0, 0.819)"
                      : "rgba(0, 255, 0, 0.545)",
                  }}
                onChange={handleInputChange}>
                

                </input>
            </div>
            <div>
                <label>email:</label>
                <input
                type="email"
                value={userData.email}
                name="email"
                placeholder="example@mail.com"
                style={{
                    transition: "2s",
                    backgroundColor: errors.email
                      ? "rgba(255, 0, 0, 0.819)"
                      : "rgba(0, 255, 0, 0.545)",
                  }}
                onChange={handleInputChange}>
                </input>
            </div>
            <div>
                <label>Fecha de nacimiento:</label>
                <input
                type="date"
                value={userData.birthdate}
                max={today}
                name="birthdate"
                placeholder="12/12/2024"
                style={{
                    transition: "2s",
                    backgroundColor: errors.birthdate
                      ? "rgba(255, 0, 0, 0.819)"
                      : "rgba(0, 255, 0, 0.545)",
                  }}
                onChange={handleInputChange}>
                </input>
            </div>
            <div>
                <label>DNI:</label>
                <input
                type="number"
                value={userData.nDni}
                name="nDni"
                placeholder="12345678"
                style={{
                    transition: "2s",
                    backgroundColor: errors.nDni
                      ? "rgba(255, 0, 0, 0.819)"
                      : "rgba(0, 255, 0, 0.545)",
                  }}
                onChange={handleInputChange}>
                </input>
            </div>
            <div>
                <label>nombre de usuario:</label>
                <input
                type="text"
                value={userData.username}
                name="username"
                placeholder="exampleUsername"
                style={{
                    transition: "2s",
                    backgroundColor: errors.username
                      ? "rgba(255, 0, 0, 0.819)"
                      : "rgba(0, 255, 0, 0.545)",
                  }}
                onChange={handleInputChange}>
                </input>
            </div>
            <div>
                <label>contraseña:</label>
                <input
                type="password"
                value={userData.password}
                name="password"
                placeholder="*******"
                style={{
                    transition: "2s",
                    backgroundColor: errors.name
                      ? "rgba(255, 0, 0, 0.819)"
                      : "rgba(0, 255, 0, 0.545)",
                  }}
                onChange={handleInputChange}>
                </input>    
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
        </>
    )
}

export default register