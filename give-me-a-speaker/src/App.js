import React, { Component } from 'react';
import Home from '../src/pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
