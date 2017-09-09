import { UserFavorite } from '../../../models';

export const mutation = [
  `
  databaseCreateUserFavorite(
    productName: String!
    userId: String!
  ): DatabaseUserFavorite
`,
];

export const resolvers = {
  Mutation: {
    databaseCreateUserFavorite: (parent, args) =>
      UserFavorite.create({ ...args })
        .then(
          userFavorite =>
            // console.log(userFavorite.dataValues);

            userFavorite.dataValues,
        )
        .catch(err => {
          // console.log(JSON.stringify(err, null, 2));

          throw err.name;
        }),
  },
};
