require("./lib/importCss");
const lib = require("./lib/helers");

/**load the json data of the movies to memory */
lib.loadDataToWindow(lib.loadDataFromFile());

require("./header");
require("./table");
require("./pagination");
