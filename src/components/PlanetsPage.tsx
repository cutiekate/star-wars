import React, { useState, useEffect} from 'react';
import { getPlanets } from '../api';

const PlanetsPage = () => {
const [planets, setPlanets] = useState<Planet[]>([]);

useEffect(() => {
    getPlanets()
      .then(data => {
        setPlanets(data.results);
      })
  }, []);

return (
  <div>
      {planets.map(item => (
          <div className="card border-secondary mb-3">
          <p className="card-header">{item.name}</p>
          <div className="card-body">
            <p className="card-text"> Rotation period: {item.rotation_period}</p>
            <p className="card-text">Orbital period: {item.orbital_period}</p>
            <p className="card-text">Diameter: {item.diameter}</p>
            <p className="card-text">Climate: {item.climate}</p>
            <p className="card-text">Gravity: {item.gravity}</p>
            <p className="card-text">Terrain: {item.terrain}</p>
            <p className="card-text">Surface water: {item.surface_water}</p>
            </div>
          </div>
          ))}
  </div>
)
};

export default PlanetsPage;