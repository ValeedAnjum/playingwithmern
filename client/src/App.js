import React , { useEffect } from 'react';
import './App.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import store from './store/store';
import LogIn from './component/auth/LogIn';
import Register from './component/auth/Register';
import PrivateRoute from './component/routing/PrivateRoute';
import setAuthToken from './component/util/setAuthToken';
import { loadUser } from './store/actions/AuthActions';
import ModelManager from './component/Models/ModelManager';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <ModelManager />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/companies"  render={() => <h1>companies</h1>} />
        <Route path="/projects"  render={() => <h1>projects</h1>} />
        <Route path="/profiles"  render={() => <h1>profiles</h1>} />
        <Route path="/jobs"  render={() => <h1>jobs</h1>} />
        <Route path="/messages"  render={() => <h1>messages</h1>} />
        <Route path="/login"  component={LogIn} />
        <Route path="/register"  component={Register} />
        {/* <PrivateRoute path="/iam" exact component={Register} /> */}
        {/* <PrivateRoute path="/login" exact component={LogIn} /> */}

      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
