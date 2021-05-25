import React from 'react';
import Layout from './pages/Layout/Layout';
import Main from './pages/main/Main'
import Badge from "./components/Badge"
import NewBadge from './pages/NewBadge/NewBadge';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <NewBadge></NewBadge>
      </Layout>
    </React.Fragment>
  );
}

export default App;
