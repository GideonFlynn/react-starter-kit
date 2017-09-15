/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          updatedAt: PropTypes.string.isRequired,
        }),
      ),
    }).isRequired,
  };

  render() {
    const { data: { loading, databaseGetAllUsers } } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Er det vegansk?</h1>
          {loading
            ? 'Loading...'
            : databaseGetAllUsers.map(item =>
                <article key={item.id} className={s.newsItem}>
                  <h1 className={s.newsTitle}>
                    <a href={item.id}>
                      {item.id}
                    </a>
                  </h1>
                  <div
                    className={s.newsDesc}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: item.updatedAt }}
                  />
                </article>,
              )}
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
  graphql(gql`
    query {
      databaseGetAllUsers {
        id
        updatedAt
      }
    }
  `),
)(Home);
