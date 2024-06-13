import { DataTypes, Sequelize } from "sequelize";
import { sequelize as database } from "../database/connection.js"

const VideoEtitiy = database.define("tb_video", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    title: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    duration: {
        type: DataTypes.STRING
    },
    plataform: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.TIME
    }
})

export { VideoEtitiy }