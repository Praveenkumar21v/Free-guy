const api_key = "da4c318e94b7f95515b4bb320ecd2c4b";
const imageBaseURL = "https://image.tmdb.org/t/p/";


const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
