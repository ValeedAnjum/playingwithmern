import React from 'react';
import './App.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/companies"  render={() => <h1>companies</h1>} />
        <Route path="/projects"  render={() => <h1>projects</h1>} />
        <Route path="/profiles"  render={() => <h1>profiles</h1>} />
        <Route path="/jobs"  render={() => <h1>jobs</h1>} />
        <Route path="/messages"  render={() => <h1>messages</h1>} />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
