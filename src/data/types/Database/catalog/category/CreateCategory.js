import { Category } from '../../../../models';

export const mutation = [
  `
  databaseCreateCategory(
    name: String!
    description: String!
    shortDescription: String
  ): DatabaseCategory
`,
];

export const resolvers = {
  Mutation: {
    databaseCreateCategory: (parent, args) =>
      Category.create({ ...args })
        .then(
          category =>
            // console.log(category.dataValues);

            category.dataValues,
        )
        .catch(err => {
          // console.log(JSON.stringify(err, null, 2));

          throw err;
        }),
  },
};
