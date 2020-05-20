
export const fetchedAreas = async () => {
  const url = 'https://vrad-api.herokuapp.com';
  const response = await fetch(url + '/api/v1/areas');
  return await response.json();
}

export const fetchedAreaInfo = async (details) => {
  const url = 'https://vrad-api.herokuapp.com';
  const response = await fetch(url + details);
  return await response.json();
}

export const fetchedLocations = async (listing) => {
  const url = 'https://vrad-api.herokuapp.com';
  const response = await fetch(url + listing);
  return await response.json();
}
