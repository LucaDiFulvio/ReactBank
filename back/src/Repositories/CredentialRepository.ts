import { Credential } from "../Entities/Credential"
import { AppDataSource } from "../config/data-source"


const CredentialRepository=AppDataSource.getRepository(Credential);
export default CredentialRepository;