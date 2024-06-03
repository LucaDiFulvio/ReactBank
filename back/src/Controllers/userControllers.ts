import { Request, Response } from "express";
import {User} from "../Entities/User";
import { getAllUsersService, getUserByIdService, createUserService,} from "../Service/userService";
import { validateCredential } from "../Service/credentialService";
import ICredentialDto from "../Dto/ICredentialDto";
import UserRepository from "../Repositories/UserRepository";

// GET /users => Obtener el listado de todos los usuarios.
export const getAllUsers= async(req:Request,res:Response):Promise<User|void>=>{
    const users: User[] =await getAllUsersService()
    res.status(200).json(users)
}

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUserById= async(req:Request, res: Response):Promise<User|void>=>{
    const {id}= req.params;
    try{
        const founduser=await getUserByIdService(Number(id))
        res.status(200).json(founduser)
    }
    catch(error:any){
        res.status(404).json({message:error.message})
    }
}
// POST /users/register => Registro de un nuevo usuario.
export const register= async (req: Request, res:Response):Promise<void>=>{
    try{

        const {name,email,birthdate,nDni,username, password}=req.body;
        const newUser:User= await createUserService({name,email,birthdate,nDni,username, password});
        res.status(201).send("usuario creado")
    }catch( error:any){
        res.status(400).json({message: error.message})
    }
}

// POST /users/login => Login de un usuario.
export const loginUser = async (req: Request, res: Response) => {
    try {
        const login: ICredentialDto = req.body;
        const checkIn = await validateCredential(login);

        const findUser = await UserRepository.findOneBy({ id: checkIn});
        if (!findUser) throw new Error ('Usuario no encontrado.');

        res.send({
            login: true,
            user: {
                id: findUser.id,
                name: findUser.name,
                email: findUser.email,
                birthdate: findUser.birthdate,
                nDNI: findUser.nDni
            }
        })
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}