const theads = require("../lib/helers").config;

(function() {
  renderTable();
})();

function renderTable() {
  document.getElementById("thead").innerHTML = generateTable(theads);

  function generateTable(theads) {
    let theadStr = `<th class="">1</th>`;
    theads.forEach(element => {
      theadStr += `<th class="">${element}</th>`;
    });
    return theadStr;
  }
}

export { generateTable };
