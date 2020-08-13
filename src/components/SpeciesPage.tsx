import React, { useState, useEffect} from 'react';
import { getSpecies } from '../api';

const SpeciesPage = () => {
const [species, setSpecies] = useState<Species[]>([]);

useEffect(() => {
    getSpecies()
      .then(data => {
        setSpecies(data.results);
      })
  }, []);

return (
  <div>
      {species.map(item => (
          <div className="card border-secondary mb-3">
            <p className="card-header">{item.name}</p>
            <div className="card-body">
              <p className="card-text">Classification: {item.classification}</p>
              <p className="card-text">Designation: {item.designation}</p>
              <p className="card-text">Height: {item.average_height}</p>
              <p className="card-text">Skin color: {item.skin_colors}</p>
              <p className="card-text">Hair colors: {item.hair_colors}</p>
              <p className="card-text">Eye colors: {item.eye_colors}</p>
              <p className="card-text">Lifespan: {item.average_lifespan}</p>
              <p className="card-text">Language: {item.language}</p>
            </div>
          </div>
          ))}
  </div>
)
};

export default SpeciesPage;