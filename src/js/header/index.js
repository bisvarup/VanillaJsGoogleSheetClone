import "./header.scss";
import appState from "../state/";
document.getElementById("filename").innerHTML =
  appState.state.application.fileName;

let lis = [...document.querySelectorAll("#mainMenu>li")];
lis.forEach(element => {
  if (element.getElementsByClassName("dropdown").length > 0) {
    element.addEventListener("click", () => {
      let dropdown1 = element.getElementsByClassName("dropdown")[0];
      console.log(dropdown1);
      dropdown1.classList.toggle("show");
    });
  }
});
