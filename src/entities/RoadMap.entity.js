import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const RoadMapEntity = database.define("tb_road_map", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    theme:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    local: {
        type: DataTypes.STRING
    },
    social_networking: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.TIME
    }
})

export { RoadMapEntity }
