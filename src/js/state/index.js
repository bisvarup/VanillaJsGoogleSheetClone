const lib = require("../lib/helers");
const maxPaginationSize = require("../../../constants/config")
  .maxPaginationSize;

state = {
  pagination: {
    page: 1,
    start: 1,
    total: lib.totalPages(),
    maxSize: 5
  },
  application: {
    fileName: "movies.json"
  }
};

const updatePage = pageNo => {
  state.pagination.page = pageNo;
};

const setStart = start => {
  state.pagination.start = start;
};

const setPage = page => {
  state.pagination.page = page;
};

module.exports = {
  state,
  updatePage,
  setStart,
  setPage
};
