import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VehicleDetailPage } from './VehicleDetailPage';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

// const client = ...




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
        <BrowserRouter>
      <Routes>
        <Route path="/" index element={<App />}></Route>
          <Route path="vehicles">
            <Route path=":id" element={<VehicleDetailPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
);


