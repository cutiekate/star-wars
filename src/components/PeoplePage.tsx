import React, { useState, useEffect} from 'react';
import { getPeople } from '../api';

const PeoplePage = () => {
const [people, setPeople] = useState<People[]>([]);

useEffect(() => {
    getPeople()
      .then(data => {
        setPeople(data.results);
      })
  }, []);

return (
  <div>
      {people.map(item => (
          <div className="card border-secondary mb-3">
              <p className="card-header">{item.name}</p>
              <div className="card-body">
                <p className="card-text"><small className="text-muted">height: {item.height}</small></p>
                <p className="card-text"><small className="text-muted">mass: {item.mass}</small></p>
                <p className="card-text"><small className="text-muted">hair color: {item.hair_color}</small></p>
                <p className="card-text"><small className="text-muted">skin color: {item.skin_color}</small></p>
                <p className="card-text"><small className="text-muted">eye color: {item.eye_color}</small></p>
                <p className="card-text"><small className="text-muted">birth: {item.birth_year}</small></p>
                <p className="card-text"><small className="text-muted">gender: {item.gender}</small></p>
            </div>
          </div>
          ))}
  </div>
)
};

export default PeoplePage;