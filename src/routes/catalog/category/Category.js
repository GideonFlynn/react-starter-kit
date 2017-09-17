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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Category.css';
import getAllCategories from './getAllCategories.gql';

// TODO: Make category a favorite.

class Category extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          shortDescription: PropTypes.string.isRequired,
        }),
      ),
    }).isRequired,
  };

  render() {
    const { data: { loading, databaseGetAllCategories } } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.props.title}
          </h1>
          <h1>
            {this.props.path}
          </h1>
          {loading
            ? 'Jeg prøver at kontakte serveren..'
            : databaseGetAllCategories.map(item =>
                <div key={item.id}>
                  <h2>
                    <a href={item.name}>
                      {item.name}
                    </a>
                  </h2>
                  <h4
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <p
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: item.shortDescription }}
                  />
                </div>,
              )}
        </div>
      </div>
    );
  }
}

export default compose(withStyles(s), graphql(getAllCategories))(Category);
