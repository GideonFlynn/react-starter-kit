import ApolloClient, { createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql',
    opts: {
      // Additional fetch options like `credentials` or `headers`
      credentials: 'include',
    },
  }),
  queryDeduplication: true,
  reduxRootSelector: state => state.apollo,
  ssrMode: true,
  ssrForceFetchDelay: 100,
});

export default function createApolloClient() {
  return client;
}
