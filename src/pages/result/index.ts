import "../../root"
import {state} from "../../state"
export function initPage(params){
    const div = document.createElement("div");
    const playerMove = state.getPlayerSelection();
    const comMove = state.getComSelection();
      div.innerHTML = `
          <${playerMove}-el class="option com"></${playerMove}-el>
          <${comMove}-el class="option player"></${comMove}-el>
      `;
    div.className = "container"
    const style = document.createElement("style");
    style.innerHTML=`
      .container{
          display:grid;
          grid-template-rows: 500px;
          align-items: center;
          justify-items:center;
          height:100vh;
          position:relative;
      }
      .option{
        transform: scale(1.0)
      }
    `

    div.appendChild(style);
    return div
}
