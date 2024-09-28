import SequelizeSQLite from "@src/database/connection/SequelizeSQLite";
import {DataTypes, Model, Optional} from 'sequelize';

export type ConsultationRequestAttributes = {
    id: number;
    fullName: string;
    phone: string;
    location: string;
    message: string;
    status: string;
    meta?: object;
    attributes?: {
        "question-1": string
        "question-2": string
        "question-3": string
        "question-4": string
        "question-5": string
    };
    createdAt: Date;
    updatedAt: Date;
}

export type ConsultationRequestCreationAttributes = Optional<ConsultationRequestAttributes, 'id' | 'createdAt' | 'updatedAt'>;

class ConsultationRequest extends Model<ConsultationRequestAttributes, ConsultationRequestCreationAttributes> {
    public id!: number;
    public fullName!: string;
    public phone!: string;
    public message!: string;
    public status!: string;
    public meta?: object;
    public attributes?: object;
    public createdAt!: Date;
    public updatedAt!: Date;
}

ConsultationRequest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'UNREAD',
        },
        meta: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: {}
        },
        attributes: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: {}
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize: SequelizeSQLite,
        tableName: 'consultation_requests',
        timestamps: true,
    }
);

export default ConsultationRequest;
