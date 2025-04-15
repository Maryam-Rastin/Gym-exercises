export const exercisesOptions = {
  method: "GET",
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'a2d7550c42msh52330b917992a18p168d9ajsn9e34cb18f9b9',
  },
};


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
