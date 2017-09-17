import { Category } from '../../../../models';

export const schema = [
  `
  type DatabaseCategory {
    id: String!
    name: String!
    description: String!
    shortDescription: String
  }
`,
];

export const queries = [
  `
  databaseGetAllCategories: [DatabaseCategory]
  databaseGetCategory(id: String!): DatabaseCategory
`,
];

export const resolvers = {
  RootQuery: {
    databaseGetAllCategories: (
      parent,
      args, // eslint-disable-line no-unused-vars
    ) =>
      Category.findAll({
        include: [
          // { model: UserLogin, as: 'logins' },
          // { model: UserClaim, as: 'claims' },
          // { model: UserProfile, as: 'profile' },
          // { model: UserFavorite, as: 'favorites' },
        ],
      })
        .then(categories =>
          // console.log(JSON.stringify(categories, null, 4));

          categories.map(category => category),
        )
        .catch(err => {
          throw err;
        }),
    databaseGetCategory: (parent, args) =>
      Category.findOne({
        where: { id: args.id },
        include: [
          // { model: UserLogin, as: 'logins' },
          // { model: UserClaim, as: 'claims' },
          // { model: UserProfile, as: 'profile' },
          // { model: UserFavorite, as: 'favorites' },
        ],
      })
        .then(
          category =>
            // console.log(JSON.stringify(category, null, 4));

            category,
        )
        .catch(err => {
          throw err;
        }),
  },
};
