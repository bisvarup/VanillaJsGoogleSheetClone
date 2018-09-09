const lib = require("../lib/helers");
const page = require("../state").state.pagination.page;

(function() {
  renderBody(page);
})();

/**
 *This method sets the body of the table, i.e the data of the table
 * @param {Number} page The page number of pagination, the corresponding page is to be
 * rendered
 */
function renderBody(page) {
  document.getElementById("tbody").innerHTML = generateBody(page);
  generateBody(page);
  function generateBody(page) {
    items = lib.getData(page);
    let bodyStr = "";
    items.forEach((element, i) => {
      bodyStr += `
        <tr>
          <td>${i + 2}</td>
          <td>${element.title}</td>
          <td>${element.director}</td>
          <td>${element.actor1}, ${element.actor2}</td>
          <td>${element.genres.join(", ")}</td>
          <td>${element.language}</td>
          <td>${element.country}</td>
          <td>${element.rating}</td>
          <td>${element.budget}</td>
          <td>${element.year}</td>
          <td>${element.keywords.join(", ")}</td>
          <td>${element.link}</td>
        </tr>
        `;
    });
    return bodyStr;
  }
}

module.exports = {
  renderBody
};
