import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection to the database succeeded!")
    } catch (error) {
        console.log("Unseccessful connetion :(", error)
    }
}

export { sequelize, testConnection }