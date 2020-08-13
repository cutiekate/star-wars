import React from 'react';
import './App.scss';
import HomePage from './components/HomePage';
import PeoplePage from './components/PeoplePage';
import FilmsPage from './components/FilmsPage';
import PlanetsPage from './components/PlanetsPage';
import SpeciesPage from './components/SpeciesPage';
import StarshipsPage from './components/StarshipsPage';
import VehiclesPage from './components/StarshipsPage';
import {
  Route, NavLink, Redirect, Switch,
} from 'react-router-dom';

function App() {
  return (
  <>
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="films">
            Films
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="people">
            People
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="planets">
            Planets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="species">
            Species
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="starships">
            Starships
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="vehicles">
            Vehicles
          </NavLink>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Redirect from="/home" to="/" />
      <Route path="/films" component={FilmsPage} />
      <Route path="/people" component={PeoplePage} />
      <Route path="/planets" component={PlanetsPage} />
      <Route path="/species" component={SpeciesPage} />
      <Route path="/starships" component={StarshipsPage} />
      <Route path="/vehicles" component={VehiclesPage} />

    </Switch>
  </>
  );
}

export default App;
