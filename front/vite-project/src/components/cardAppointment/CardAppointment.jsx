import CustomDiv from "../../styles/CustomDiv";
const CardAppointments = ({appointment: {date, time, status}, handleAppointmentCancel, id}) => {
  
  // Formato de fecha
  date = new Date(date);
  const formatDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} `;

  const handleclick=()=>{
    if(
      window.confirm('¿Esta seguro que quiere cancelar este turno?')
    ){
      handleAppointmentCancel(id)
    }
  }

    return (
      <>
      <CustomDiv>
          <span>FECHA: {formatDate}</span>
          <span>HORA: {time}</span>
          {status==="Active"?(
            <span style={{ color: 'lawngreen'}} onClick={handleclick} >Activo(cancelar)</span>
          ):(
            <span style={{ color: 'red'}}>Cancelado</span>
          )}
      </CustomDiv>
      </>
    );
  };
  
  export default CardAppointments;