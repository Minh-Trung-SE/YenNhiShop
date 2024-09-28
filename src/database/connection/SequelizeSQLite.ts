import path from "path";
import { Sequelize } from "sequelize"

export const DATABASE_PATH = path.resolve(process.cwd(), 'database.sqlite')

const sequelize = new Sequelize(
    {
        dialect: "sqlite",
        dialectModule: require("sqlite3"),
        storage: DATABASE_PATH
    }
)

export default sequelize;