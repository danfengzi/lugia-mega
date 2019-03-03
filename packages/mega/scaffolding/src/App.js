import React, { Component } from 'react';
import { createRoute } from '@lugia/lugiax-router';
import { Redirect } from '@lugia/lugiax-router/target/lib';
import register from './models/register';

export const firstRouter = {
  '/': {
    exact: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: '/pages',
          }}
        />
      );
    },
  },
  '/pages': {
    render: async () => import('./pages'),
  },
  '/register': {
    render: async () => import('./register'),
  },
  '/login': {
    exact: true,
    render: async () => import('./login'),
  },
  LOGIN: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      );
    },
  },
};

export default () => {
  console.info('init main', firstRouter);
  return <React.Fragment>{createRoute(firstRouter)}</React.Fragment>;
};
