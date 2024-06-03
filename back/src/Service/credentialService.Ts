import ICredentialDto from "../Dto/ICredentialDto"
import  CredentialRepository  from "../Repositories/CredentialRepository"
import { Credential } from "../Entities/Credential";

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.
export const createNewCredential= async (createCredentialDto: ICredentialDto): Promise<Credential>=>{
    const newCredential= await CredentialRepository.create(createCredentialDto)
    await CredentialRepository.save(newCredential)
    return newCredential
}

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales. 
export const validateCredential= async (validateCredentialDto:ICredentialDto)=>  {
    const findCredential = await CredentialRepository.findOneBy({ username: validateCredentialDto.username });

    if (!findCredential) throw new Error('El usuario no existe.');

    if(findCredential.password !== validateCredentialDto.password) throw new Error('Contraseña incorrecta.');

    return (findCredential.id);
}
