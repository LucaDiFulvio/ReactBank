import { useState } from "react";
import { loginValidate } from "../../helpers/loginValidate";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { setUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css"

const Login=()=>{
            
    const dispatch= useDispatch();
    const navigate= useNavigate(); 

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    // const handleInputChange = (event) =>{
    //     const {value, name} = event.target;
    //     setUserData({...userData, [name]: value})
    //     console.log(userData)
    //     const fieldErrors = loginValidate({...userData, [name]: value});
    //     setErrors({...errors, [name]: fieldErrors[name]});
    // }



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    
        const itemsActualizadoFromRegister = {
          ...userData,
          [name]: value,
        };
        const newErrors = loginValidate(itemsActualizadoFromRegister);
        if (newErrors[name]) {
          setErrors({ ...errors, [name]: newErrors[name] });
        } else {
          const { [name]: value, ...remainingErrors } = errors;
          setErrors(remainingErrors);
        }
      };

    const handleOnSubmit = async (event)=>{
        event.preventDefault();
        await axios.post("http://localhost:3000/users/login", userData)
        .then( response=>response.data)
        .then(data=>{
            dispatch(setUser(data));
            alert("usuario logeado exitosamente");
            navigate("/")
        })
       .catch((error) => 
         alert("Ocurrió un error al ingresar. el usuario o la contraseña son incorrectos")
       );

    }

    return(
        <> 
        <form className={styles.loginForm} onSubmit={handleOnSubmit}>
            <h2>ingresa a tu cuenta:</h2>
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
                    backgroundColor: errors.username
                      ? "rgba(255, 0, 0, 0.819)"
                      : "rgba(0, 255, 0, 0.545)",
                  }}
                onChange={handleInputChange}>
                </input>    
            <div>
                <button type="submit">enviar</button>
            </div>
            </div>
        </form>
    </>
    )
}

export default Login