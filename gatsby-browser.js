import React from 'react';
import Layout from './components/Layout';
import './styles/global.css';

// Wraps every page in the Layout component to prevent unmounting on navigation
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};