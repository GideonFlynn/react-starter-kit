// TODO: Make category model without relations. This is for testing routes.
// TODO: Define the rest of the database.

import DataType from 'sequelize';
import Model from '../../../sequelize';

const Category = Model.define(
  'Category',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    name: {
      type: DataType.STRING(255),
      unique: true,
    },

    description: {
      type: DataType.STRING(255),
    },

    shortDescription: {
      type: DataType.STRING(255),
    },
  },
  {
    indexes: [{ fields: ['name', 'shortDescription'] }],
  },
);

export default Category;
