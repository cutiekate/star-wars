import React, { useState, useEffect, useMemo, useCallback} from 'react';
import { getFilms } from '../api';
// import debounce from 'lodash/debounce'; 

const FilmsPage = () => {
const [films, setFilms] = useState<Film[]>([]);
// const [filterQuery, setFilterQuery] = useState<string>('');
// const [searchQuery, setSearchQuery] = useState<string>('');

useEffect(() => {
    getFilms()
      .then(data => {
        setFilms(data.results);
      })
}, []);

// const visibleFilms = useMemo(() => {
//   const getVisibleMovies = films.filter(film => {
//   const title = film.title.toLowerCase();

//     return title.includes(filterQuery.toLowerCase());
//   });

//   return getVisibleMovies;
// }, [films, filterQuery]);

// useMemo(() => setFilms(visibleFilms),
// [visibleFilms]);

// const setFilterQueryWithDebounce = useCallback(
//   debounce(setFilterQuery, 1000), [],
// );

// const handleSearchFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setSearchQuery(event.target.value);
//   setFilterQueryWithDebounce(event.target.value);
// };

  

return (
  <>
  <form className="form-inline">
    <input 
    className="form-control" 
    type="search" 
    placeholder="Search.."
    //  value={searchQuery}
    //   onChange={handleSearchFilm}
    />
    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
  </form>
  
  <div className="card-group">
      {films.map(film => (
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <p className="card-text">{film.opening_crawl}</p>
            <div className="card-footer">
            <p className="card-text"><small className="text-muted">Director: {film.director}</small></p>
            <p className="card-text"><small className="text-muted">Producer: {film.producer}</small></p>
            <p className="card-text"><small className="text-muted">Release date: {film.release_date}</small></p>
            </div>
            </div>
          </div>
      ))}
  </div>
  </>
)
};

export default FilmsPage;