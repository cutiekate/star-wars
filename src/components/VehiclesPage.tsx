import React, { useState, useEffect} from 'react';
import { getVehicles } from '../api';

const VehiclesPage = () => {
const [vehicles, setVehicles] = useState<Vehicles[]>([]);

useEffect(() => {
    getVehicles()
      .then(data => {
        setVehicles(data.results);
      })
  }, []);

return (
  <div>
      {vehicles.map(item => (
          <div className="card border-secondary mb-3">
          <p className="card-header">{item.name}</p>
          <div className="card-body">
            <p className="card-text">Model: {item.model}</p>
            <p className="card-text">Manufacturer: {item.manufacturer}</p>
            <p className="card-text"> Cost in credits: {item.cost_in_credits}</p>
            <p className="card-text">Lenght: {item.length}</p>
            <p className="card-text">Max atmosphering speed: {item.max_atmosphering_speed}</p>
            <p className="card-text">Crew: {item.crew}</p>
            <p className="card-text">Passengers: {item.passengers}</p>
            <p className="card-text">Cargo capacity: {item.cargo_capacity}</p>
            <p className="card-text"> Consumables: {item.consumables}</p>
            <p className="card-text">Vehicle class: {item.vehicle_class}</p>
          </div>
          </div>
          ))}
  </div>
)
};

export default VehiclesPage;