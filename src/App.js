import React from 'react';
import Layout from './pages/Layout/Layout';
import Main from './pages/main/Main'
import Badge from "./components/Badge"

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Badge picture={"C:\UTCH\Mobile Dev\example-project\src\images\profile2.jpg"} ></Badge>
      </Layout>
    </React.Fragment>
  );
}

export default App;
