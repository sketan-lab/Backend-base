import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
export const Client=sequelize.define(
    "Client",
    {
        username:{
            type:DataTypes.STRING,
            allowNull:false},
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        age:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:'false',
        }



},{timestamps:true})