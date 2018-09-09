import "./main.scss";
require("./header");
require("./body");

makeStickyHeader();

function makeStickyHeader() {
  document.getElementById("excel").addEventListener("scroll", e => {
    const top = e.target.scrollTop;
    document.getElementById("thead").style.transform = `translateY(${top}px)`;
  });
}
