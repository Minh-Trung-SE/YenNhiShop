import {DOMJsonObject} from "@src/components/QuillEditor/utils/SSR";
import SequelizeSQLite from "@src/database/connection/SequelizeSQLite";
import Delta from "quill-delta";
import {DataTypes, Model, Optional} from 'sequelize';

export type BlogAttributes = {
    id: number
    title: string
    slug: string
    delta: Delta
    jsonObject: DOMJsonObject[]
    createdAt: Date | string;
    updatedAt: Date | string;
}
export type BlogCreationAttributes = Optional<BlogAttributes, 'id'>;

class Blog extends Model<BlogAttributes, BlogCreationAttributes> implements BlogAttributes {
    public id!: number;
    public title!: string;
    public slug!: string;
    public delta!: Delta;
    public jsonObject!: DOMJsonObject[]
    public createdAt!: Date;
    public updatedAt!: Date;
}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        delta: {
            type: DataTypes.JSON,
            allowNull: false
        },
        jsonObject: {
            type: DataTypes.JSON,
            allowNull: false
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
        tableName: 'blogs',
        underscored: true,
        timestamps: true,
    }
);
export default Blog
