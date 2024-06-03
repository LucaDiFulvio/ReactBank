import IUserDto from "../Dto/IUserDto";
import {createNewCredential} from "./credentialService"
import { User } from "../Entities/User";
import  UserRepository  from "../Repositories/UserRepository";
import CredentialRepository from "../Repositories/CredentialRepository";
import { AppDataSource } from "../config/data-source";



// Implementar una función que pueda retornar el arreglo completo de usuarios.
export const getAllUsersService= async(): Promise<User[]>=>{
    const allUsers: User[]= await UserRepository.find({relations:{appointments:true}});
    return allUsers;
}

// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
export const getUserByIdService= async (id:number): Promise< User| Error>=>{
    const founduser: User | null= await UserRepository.findOne({ where: { id }, relations: ['appointments'] });
    if(!founduser) throw Error("usuario no encontrado")
    return founduser
}

// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
export const createUserService = async(
    createUserDto: IUserDto
) =>{
    const QueryRunner= AppDataSource.createQueryRunner();
    await QueryRunner.connect();

    try
    {
        await QueryRunner.startTransaction();
    
    const validateMail= await UserRepository.findOneBy({email: createUserDto.email})
    if(validateMail) throw Error("ya existe un usuario con ese email")
    const validateNDni=await UserRepository.findOneBy({nDni: createUserDto.nDni})
    if(validateNDni) throw Error("ya existe un usuario con ese DNI")
    const validateUsername=await CredentialRepository.findOneBy({username: createUserDto.username})
    if(validateUsername) throw Error("ya existe un usuario con ese username")
    
    const newCredential= await createNewCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });
    const newUser= await UserRepository.create({ ...createUserDto, credential: newCredential.id })
    await QueryRunner.manager.save(newUser)
    await QueryRunner.commitTransaction();
    return newUser

}catch(error:any){
    await QueryRunner.rollbackTransaction();
    throw Error(error.message)
}finally{
    await QueryRunner.release();
}
}