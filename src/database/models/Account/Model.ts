import SequelizeSQLite from "@src/database/connection/SequelizeSQLite";
import {DataTypes, Model, Optional} from 'sequelize';

export type AccountAttributes = {
    id: number
    name: string
    role: string
    username: string
    password: string
}
export type AccountCreationAttributes = Optional<AccountAttributes, 'id'>;

class Account extends Model<AccountAttributes, AccountCreationAttributes> implements AccountAttributes {
    public id!: number;
    public name!: string;
    public role!: string;
    public username!: string;
    public password!: string;
}

Account.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize: SequelizeSQLite,
        tableName: 'accounts',
        underscored: true,
        timestamps: true,
    }
);
export default Account