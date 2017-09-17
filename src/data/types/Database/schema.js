import { merge } from 'lodash';

/** * Queries ** */
import {
  schema as GetAllUsers,
  queries as GetAllUsersQueries,
  resolvers as GetAllUsersResolver,
} from './users/GetAllUsers';

import {
  schema as GetAllCategories,
  queries as GetAllUCategoryQueries,
  resolvers as GetAllCategoriesResolver,
} from './catalog/category/GetAllCategories';

/** * Mutations ** */
import {
  mutation as CreateUser,
  resolvers as CreateUserResolver,
} from './users/CreateUser';

import {
  mutation as CreateCategory,
  resolvers as CreateCategoryResolver,
} from './catalog/category/CreateCategory';

import {
  mutation as CreateUserFavorite,
  resolvers as CreateUserFavoriteResolver,
} from './users/MakeFavorite';

// Merge all of the resolver objects together
// Put schema together into one array of schema strings
export const resolvers = merge(
  // User resolvers
  GetAllUsersResolver,
  CreateUserResolver,
  CreateUserFavoriteResolver,
  // Category resolvers
  GetAllCategoriesResolver,
  CreateCategoryResolver,
);

export const schema = [...GetAllUsers, ...GetAllCategories];

export const mutations = [
  ...CreateUser,
  ...CreateUserFavorite,
  ...CreateCategory,
];

export const queries = [...GetAllUsersQueries, ...GetAllUCategoryQueries];
