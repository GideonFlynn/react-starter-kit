import DataType from 'sequelize';
import Model from '../../sequelize';

const UserFavorite = Model.define('UserFavorite', {
  productName: {
    type: DataType.STRING,
    unique: true,
  },
});

export default UserFavorite;
