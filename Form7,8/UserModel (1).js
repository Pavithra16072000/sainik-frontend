
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const u_user_reg = db.define('u_user_reg',{
    Name:{
        type: DataTypes.STRING(75)
    },
    Service_No:{
        type: DataTypes.STRING(12)
    },
    Mobile:{
        type: DataTypes.STRING(15)
    },
    Mail_Id:{
        type: DataTypes.STRING(50)
    },
  
    Password:{
        type: DataTypes.STRING(10) 
    },
    Reg_Date:{
        type: DataTypes.DATE
    },
    Status:{
        type: DataTypes.STRING(30),
        defaultValue: "Not Submitted"
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
     createdAt : false,
      updatedAt : false,
    freezeTableName:true
});


(async () => { 
    await db.sync();
})();

export default u_user_reg;