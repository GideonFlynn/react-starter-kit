import {
  User,
  UserClaim,
  UserLogin,
  UserProfile,
  UserFavorite,
} from '../../../models/';

export const schema = [
  `
  type DatabaseUser {
    id: String
    email: String
    emailConfirmed: Boolean
    logins: [DatabaseUserLogin]
    claims: [DatabaseUserClaim]
    profile: DatabaseUserProfile
    favorites: [DatabaseUserFavorite]
    updatedAt: String
    createdAt: String
  }

  type DatabaseUserLogin {
    name: String
    key: String
    createdAt: String
    updatedAt: String
    userId: String
  }

  type DatabaseUserFavorite {
    productName: String
    userId: String
    createdAt: String
    updatedAt: String
  }

  type DatabaseUserClaim {
    id: Int
    type: String
    value: String
    createdAt: String
    updatedAt: String
    userId: String
  }

  type DatabaseUserProfile {
    userId: String
    displayName: String
    picture: String
    gender: String
    location: String
    website: String
    createdAt: String
    updatedAt: String
  }
`,
];

export const queries = [
  `
  databaseGetAllUsers: [DatabaseUser]
  databaseGetUser(id: String!): DatabaseUser
`,
];

export const resolvers = {
  RootQuery: {
    databaseGetAllUsers: (
      parent,
      args, // eslint-disable-line no-unused-vars
    ) =>
      User.findAll({
        include: [
          { model: UserLogin, as: 'logins' },
          { model: UserClaim, as: 'claims' },
          { model: UserProfile, as: 'profile' },
          { model: UserFavorite, as: 'favorites' },
        ],
      })
        .then(users =>
          // console.log(JSON.stringify(users, null, 4));

          users.map(user => user),
        )
        .catch(err => {
          throw err;
        }),
    databaseGetUser: (parent, args) =>
      User.findOne({
        where: { id: args.id },
        include: [
          { model: UserLogin, as: 'logins' },
          { model: UserClaim, as: 'claims' },
          { model: UserProfile, as: 'profile' },
          { model: UserFavorite, as: 'favorites' },
        ],
      })
        .then(
          user =>
            // console.log(JSON.stringify(user, null, 4));

            user,
        )
        .catch(err => {
          throw err;
        }),
  },
};
