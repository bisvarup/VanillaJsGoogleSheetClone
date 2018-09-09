import "./main.scss";
import header from "./header";
import body from "./body";

(function() {
  makeStickyHeader();

  function makeStickyHeader() {
    document.getElementById("excel").addEventListener("scroll", e => {
      const top = e.target.scrollTop;
      document.getElementById("thead").style.transform = `translateY(${top}px)`;
    });
  }
})();

export { header, body };
