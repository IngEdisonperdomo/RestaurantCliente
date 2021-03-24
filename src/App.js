import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Ordenes from './Components/Paginas/Ordenes';
import Menu from './Components/Paginas/Menu';
import NuevoPlatillo from './Components/Paginas/NuevoPlatillo';
import Sidebar from './Components/Ui/Sidebar';

function App() {
  return (
    <div className="md:flex min-h-screen">
      <Router>
        <Sidebar />
        <div className="md:w-2/5 xl:w-1/5 p-6"> 
          <Switch>
              <Route exact path="/" component={Ordenes} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/nuevo-platillo" component={NuevoPlatillo} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
