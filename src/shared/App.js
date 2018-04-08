import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';

class App extends React.Component {
  render() {
    return (<div>
      <p>App is up and running</p>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>);
  }
}

export default App;
