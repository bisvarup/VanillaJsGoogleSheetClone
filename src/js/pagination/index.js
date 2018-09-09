import "./pagination.scss";
import state from "../state";
import { body } from "../table";

(function() {
  const elem = document.getElementById("pagination");

  renderPagination(
    elem,
    state.state.pagination.start,
    state.state.pagination.maxSize
  );
  pageChange();

  document.getElementById("first").addEventListener("click", () => {
    state.setStart(1);
    renderPagination(
      elem,
      state.state.pagination.start,
      state.state.pagination.maxSize
    );
  });
  document.getElementById("last").addEventListener("click", () => {
    let i = state.state.pagination.total;
    while (--i % 5 != 0);
    state.setStart(i);
    renderPagination(
      elem,
      state.state.pagination.start,
      state.state.pagination.maxSize
    );
  });

  document.getElementById("next").addEventListener("click", () => {
    state.setStart(
      state.state.pagination.start + state.state.pagination.maxSize >=
      state.state.pagination.total
        ? state.state.pagination.start
        : state.state.pagination.start + state.state.pagination.maxSize
    );
    renderPagination(
      elem,
      state.state.pagination.start,
      state.state.pagination.maxSize
    );
  });
  document.getElementById("prev").addEventListener("click", () => {
    state.setStart(
      state.state.pagination.start > 1
        ? state.state.pagination.start - state.state.pagination.maxSize
        : state.state.pagination.start
    );
    renderPagination(
      elem,
      state.state.pagination.start,
      state.state.pagination.maxSize
    );
  });

  function pageChange() {
    let pages = [...document.getElementsByClassName("page")];
    pages.forEach((e, i) => {
      e.addEventListener("click", el => {
        state.setPage(parseInt(el.target.getAttribute("data-page")));
        body.renderBody(state.state.pagination.page);
        renderPagination(
          elem,
          state.state.pagination.start,
          state.state.pagination.maxSize
        );
      });
    });
  }

  function renderPagination() {
    elem.innerHTML = genPages(
      state.state.pagination.start,
      state.state.pagination.maxSize
    );
    pageChange();
  }

  function genPages() {
    let str = "";
    let end =
      state.state.pagination.start + state.state.pagination.maxSize <=
      state.state.pagination.total
        ? state.state.pagination.start + state.state.pagination.maxSize
        : state.state.pagination.total;
    for (let i = state.state.pagination.start; i <= end; i++) {
      str += `<span data-page="${i}" class="page ${
        i === state.state.pagination.page ? "highlight" : ""
      }">${i}</span>`;
    }
    return str;
  }
})();
