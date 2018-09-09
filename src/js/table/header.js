(function() {
  const theads = require("../lib/helers").config;
  document.getElementById("thead").innerHTML = generateTable(theads);

  function generateTable(theads) {
    let theadStr = "";
    theads.forEach(element => {
      theadStr += `<th class="px-0">${element}</th>`;
    });
    return theadStr;
  }
})();
