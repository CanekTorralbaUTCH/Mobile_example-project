import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Main from './pages/main/Main'
import NewBadge from './pages/NewBadge/NewBadge';
import Login from './pages/Login/Login';
import SignIn from './pages/SignIn/SignIn';
import NotFound from './pages/NotFound/NotFound';
import Badges from './pages/Badges/Badges'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
