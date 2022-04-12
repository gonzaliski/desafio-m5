import {initPage as initTitle} from "./pages/welcome"
import {initPage as initInstructions} from "./pages/instructions"
import {initPage as initGame} from "./pages/game"
import {initPage as initResult} from "./pages/result"

const routes = [
  {
    path:/\/welcome/,
    component: initTitle
  },
  {
    path:/\/instructions/,
    component: initInstructions
  },
  {
    path:/\/game/,
    component: initGame
  },
  {
    path:/\/result/,
    component: initResult
  }
]
const BASE_PATH = "/desafio-m5";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: Element) {
  function goTo(path) {
    // el goTo va a recibir la ruta de siempre: /jugar
    // por eso, en el caso de GitHub Pages
    // debemos anteponerle el BASE_PATH para que funcione
    // en ese contexto
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    //recibe una ruta, la compara ocn las rutas del array routes y
    //pregunta si alguna coincide con el patron y ejecuta la funcion asociada con esa ruta
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo }); // le pasa la funcion goTo para que pueda hacer el cambio en la url
        if (container.firstChild) {
          //si tiene algo lo vacio
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
    // newRoute entonces ya no tiene el BASE_PATH
    // y podemos seguir procesando la ruta como siempre
    
    // resto del router...
  }
  handleRoute("/welcome");
}