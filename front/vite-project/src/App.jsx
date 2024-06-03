import "normalize.css"
import {Routes, Route } from 'react-router-dom'
import Home from './views/home/Home'
import MyAppointments from "./views/myAppointments/myAppointments"
import LoginView from "./views/login/login"
import RegisterView from "./views/register/register"
import Aboutus from "./views/aboutUs/AboutUs"
import CreateAppointment from "./views/createAppointment/CreateAppointment"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/myAppointments" element={<MyAppointments/>}/>
      <Route path="/login" element={<LoginView/>}/>
      <Route path="/register" element={<RegisterView/>}/>     
      <Route path ="/aboutUs" element={<Aboutus/>}/>
      <Route path= "/createAppointment" element={<CreateAppointment/>}/>
    </Routes>
    </>
  )
}

export default App
