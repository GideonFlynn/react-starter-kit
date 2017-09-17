import React from 'react';
import Category from './Category';
import Layout from '../../../components/Layout';

const title = 'Kategori';

function action(params) {
  const URI = params.baseUrl;
  const noSlash = URI.split('/').join('-');
  return {
    chunks: ['category'],
    title,
    component: (
      <Layout>
        <Category title={title} path={noSlash} />
      </Layout>
    ),
  };
}

export default action;
