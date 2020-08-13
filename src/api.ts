const BASE_URL = 'https://swapi.dev/api/';

export const getFilms = async() => {
    return await fetch(`${BASE_URL}films/`)
    .then(response => response.json());
}

export const getPeople = async() => {
    return await fetch(`${BASE_URL}people/`)
    .then(response => response.json());
}

export const getPlanets = async() => {
    return await fetch(`${BASE_URL}planets/`)
    .then(response => response.json());
}

export const getSpecies = async() => {
    return await fetch(`${BASE_URL}species/`)
    .then(response => response.json());
}

export const getStarships = async() => {
    return await fetch(`${BASE_URL}starships/`)
    .then(response => response.json());
}

export const getVehicles = async() => {
    return await fetch(`${BASE_URL}vehicles/`)
    .then(response => response.json());
}