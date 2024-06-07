const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  const reponse = await fetch(`${BASE_URL}${queryString}`);
  const body = await reponse.json();

  return body;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = query => apiGet(`/search/people?q=${query}`);

export const getShowById = showId => apiGet(`/shows/${showId}`)