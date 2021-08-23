import React from 'react';
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/resigter';
import Home from './pages/home';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={'/login'} exact component={Login} />
          <Route path={'/register'} exact component={Register} />
          <Route path={'/'}  component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
