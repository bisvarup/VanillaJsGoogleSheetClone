import "./header.scss";
import appState from "../state/";
document.getElementById("filename").innerHTML =
  appState.state.application.fileName;
