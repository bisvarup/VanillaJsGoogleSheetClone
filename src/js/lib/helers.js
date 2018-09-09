const paginationNumber = require("../../../constants/config").paginationNumber;
const config = [
  "Title",
  "Director",
  "Actors",
  "Genres",
  "Language",
  "Country",
  "Rating",
  "Budget",
  "Year",
  "Keywords",
  "Link"
];

const paginationSize = paginationNumber;

const totalPages = () => {
  return Math.ceil(window.json.length / paginationSize);
};

const getData = page => {
  if (page <= 0) {
    throw new Error(
      `The page number of pagination is less than 0 its ${page}.`
    );
  } else {
    return window.json.slice(
      (page - 1) * paginationSize,
      page * paginationSize
    );
  }
};

const isWebSqlSupported = () => {
  return typeof Storage != undefined;
};

const loadDataToWindow = json => {
  window.json = json;
};

const loadDataFromFile = () => {
  const json = require("../../../constants/movies.json");
  return (json => {
    let ar = [];
    json.forEach(e => {
      let tmp = {
        title: e.movie_title,
        director: e.director_name,
        actor1: e.actor_1_name,
        actor2: e.actor_2_name,
        genres: e.genres.split("|"),
        language: e.language,
        country: e.country,
        rating: e.content_rating,
        budget: e.budget,
        year: e.title_year,
        keywords: e.plot_keywords.split("|"),
        link: e.movie_imdb_link
      };
      ar.push(tmp);
    });
    return ar;
  })(json);
};

export {
  config,
  paginationSize,
  totalPages,
  getData,
  isWebSqlSupported,
  loadDataToWindow,
  loadDataFromFile
};
