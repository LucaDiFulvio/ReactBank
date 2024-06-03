import {DataSource} from "typeorm"
import { Appointment } from "../Entities/Appointment";
import { Credential } from "../Entities/Credential";
import { User } from "../Entities/User";
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT)|| 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})

