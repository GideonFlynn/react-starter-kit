import { merge } from 'lodash';

/** * Queries ** */
import {
  schema as GetAllUsers,
  queries as GetAllUsersQueries,
  resolvers as GetAllUsersResolver,
} from './users/GetAllUsers';

/** * Mutations ** */
import {
  mutation as CreateUser,
  resolvers as CreateUserResolver,
} from './users/CreateUser';

import {
  mutation as CreateUserFavorite,
  resolvers as CreateUserFavoriteResolver,
} from './users/MakeFavorite';

// Merge all of the resolver objects together
// Put schema together into one array of schema strings
export const resolvers = merge(
  GetAllUsersResolver,
  CreateUserResolver,
  CreateUserFavoriteResolver,
);

export const schema = [...GetAllUsers];

export const mutations = [...CreateUser, ...CreateUserFavorite];

export const queries = [...GetAllUsersQueries];
