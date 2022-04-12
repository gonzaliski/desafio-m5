import "./components/play-button"
import "./components/piedra"
import "./components/papel"
import "./components/tijera"
import "./components/play-options"
import "./components/countdown"
import { initRouter } from "./root"
(function main(){
    initRouter(document.querySelector(".root"))
})();