import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'style/reset.scss';
import Watch from 'pages/watch';
import Home from 'pages/home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path={['/', 'home']} component={Home} />
        <Route path={['watch']} component={Watch} />
        {/*<Route/>*/}
        {/*<Route/>*/}
      </Switch>
    </>
  );
}

export default App;
