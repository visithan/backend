import { Sequelize } from "sequelize";
import sequelize from "../../../config/dbConfig.js";

const { DataTypes, Model } = Sequelize;


class User extends Model {}

User.init({
  // Model attributes are defined here
  userId: {
    field: 'user_id',
    type: DataTypes.BIGINT.UNSIGNED  ,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true 
  },
  userName: {
    field: 'user_uname',
    type: DataTypes.STRING(24)  ,
    allowNull: false,
    unique: true
  },
  user_passwd:{
    type: DataTypes.STRING(128)  ,
    allowNull: false,
  },
  user_email:{
    type: DataTypes.STRING(50)  ,
    allowNull: false,
    unique: true
  },
  user_role:{
    type: DataTypes.STRING(10)  ,
    allowNull: false,
  },
  user_status:{
    type: DataTypes.INTEGER(1)  ,
    allowNull: false,
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  tableName: 'users',
  freezeTableName: true,
  timestamps: true,
 
});

//module.exports = User;
export default User;


// const User = db.define("users", {

//     //attributes
// }, {
//     db,
//     freezeTableName: true,
//     tableName: 'user',
//     //timestamps: true,
//     //createdAt: true,
//     //updatedAt: 'updateTimestamp'

// });