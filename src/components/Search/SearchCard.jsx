import SearchRequisicao from './SearchRequisicao';

const BASE = 'https://swapi.co/api/';

const getFilms = () => xhr(`${BASE}films`);

export default getFilms;