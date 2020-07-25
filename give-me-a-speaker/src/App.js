import React, { Component } from 'react';
import Home from '../src/pages/Home';
import Chat from '../src/pages/Chat';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:roomId" component={Chat} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
