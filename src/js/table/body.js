(function() {
  const lib = require("../lib/helers");
  const page = require("../state").state.page;

  document.getElementById("tbody").innerHTML = generateBody(page);

  generateBody(page);
  function generateBody(page) {
    items = lib.getData(page);
    let bodyStr = "";
    items.forEach(element => {
      bodyStr += `
      <tr>
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
})();
