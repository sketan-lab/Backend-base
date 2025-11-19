import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

const sequelize=new Sequelize(
    process.env.DB_User,
    process.env.DB_User,
    process.env.DB_PASS,

    {
        host:process.env.DB_HOST || localhost,
        port:process.env.DB_PORT || 4000,
        dialect:'postgres',
        logging:false
    }
)

export const connectDB=async ()=>{
   try{
        await sequelize.authenticate();
        console.log("DB connection succesfully");
    }
    catch(err){
        console.log('Database Connection Failed',err.message);
        process.exit(1);
    }
}

export default sequelize;