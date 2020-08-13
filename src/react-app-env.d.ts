/// <reference types="react-scripts" />

interface Film {
    title: string;
    url: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    starships: Starship[];
    planets: Planet[];
}

interface People {
    name: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
}
  
interface Planet {
    name: string,
    rotation_period: number,
    orbital_period: number,
    diameter: number,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: number,
    population: number,
}

interface Species {
    name: string,
    classification: string,
    designation: string,
    average_height: number,
    skin_colors: string,
    hair_colors: string,
    eye_colors:  string,
    average_lifespan: number,
    homeworld: string,
    language: string,
}
  
interface Starship {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: number,
    length: number,
    max_atmosphering_speed: number,
    crew: string,
    passengers: number,
    cargo_capacity: number,
    consumables: string,
    hyperdrive_rating: number,
}

interface Vehicles {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: number,
    length: number,
    max_atmosphering_speed: number,
    crew: number,
    passengers: number,
    cargo_capacity: number,
    consumables: string,
    vehicle_class: string,
    pilots: [],
    films: Film[],
}