import React, { useState, useEffect} from 'react';
import { getStarships } from '../api';

const StarshipsPage = () => {
const [starships, setStarships] = useState<Starship[]>([]);

useEffect(() => {
    getStarships()
      .then(data => {
        setStarships(data.results);
      })
  }, []);

return (
  <div>
      {starships.map(item => (
          <div className="card border-secondary mb-3">
            <p className="card-header">{item.name}</p>
            <div className="card-body">
              <p className="card-text">Model: {item.model}</p>
              <p className="card-text">Manufacturer: {item.manufacturer}</p>
              <p className="card-text">Cost in credits:{item.cost_in_credits}</p>
              <p className="card-text">Length: {item.length}</p>
              <p className="card-text">Max atmosphering speed: {item.max_atmosphering_speed}</p>
              <p className="card-text"> Crew: {item.crew}</p>
              <p className="card-text">Passengers: {item.passengers}</p>
              <p className="card-text">Capacity: {item.cargo_capacity}</p>
              <p className="card-text">Consumables: {item.consumables}</p>
              <p className="card-text">Hyperdrive rating: {item.hyperdrive_rating}</p>
            </div>
          </div>
          ))}
  </div>
)
};

export default StarshipsPage;