import User from "../models/userModel.js";
import { Sequelize } from "sequelize";

const { Op } = Sequelize;


export const checkConnection = async (req, res) => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        res.json("Connection has been established successfully.");
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createUserTable = async (req, res) => {
    try {
        //User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
        //User.sync({ force: true }) - This creates the table, dropping it first if it already existed
        //User.sync({ alter: true }) - Performs the necessary changes in the table to make it match the model.
        await User.sync({ force: true });
        res.json("User table successfully created");
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();    //get all data
        // const users = await User.findAll({  //get selected columns
        //     attributes: ["user_id","user_uname","user_passwd","user_email","user_role","user_status"]
        // });
        //get data using raw SQL
        //const users = await sequelize.query("SELECT * FROM user", {type: sequelize.QueryTypes.SELECT}); 
        //console.log(users);
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getOneUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                user_id: req.params.uid
            }
        });

        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createNewUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({"message" : "The User Created"});
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createBulkUser = async (req, res) => {
    try {
        await User.bulkCreate(req.body);
        res.json({"message" : "The User Created"});
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                user_id: req.params.uid
            }
        });
        res.json({
            "message": "The User details are updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                user_id: req.params.uid
            }
        });
        res.json({
            "message": "The user has been deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
