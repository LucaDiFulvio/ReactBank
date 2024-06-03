export const registerValidate =(input)=>{
    const errors={};
    const expresionRegularUsuario = /^[a-zA-Z0-9]{3,12}$/;
    const expresionRegularPassword = /^[a-zA-Z0-9]{8,20}$/;
    const expresionRegularCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{4,30}$/;
    const expresionRegularDNI = /^[0-9]{8,9}$/;
    const expresionRegularDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;


    if (!expresionRegularUsuario.test(input.username)) {
        errors.username = true;
    }

    if (!expresionRegularPassword.test(input.password)) {
         errors.password = true;
    }
    if (!expresionRegularCorreo.test(input.email)) {
         errors.email = true;
    }
    if (!expresionRegularNombre.test(input.name)) {
        errors.name = true;
    }
    if (input.nDni !== undefined && !expresionRegularDNI.test(input.nDni.toString())) {
         errors.nDni = true;
    }
    if (!expresionRegularDate.test(input.birthdate)) {
        errors.birthdate = true;
    }
    return errors;
}