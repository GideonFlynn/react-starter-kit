import React from 'react';
import Category from './Category';
import Layout from '../../components/Layout';

const title = 'Category';

function action() {
  return {
    chunks: ['category'],
    title,
    component: (
      <Layout>
        <Category title={title} />
      </Layout>
    ),
  };
}

export default action;
