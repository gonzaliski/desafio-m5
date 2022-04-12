import "../../root"
import {state} from "../../state"
export function initPage(params){
    const div = document.createElement("div");
    div.innerHTML = `
        <countdown-el seconds="4" class="countdown-game"></countdown-el>
        <play-options class="options"></play-options>
    `;
    div.className = "title_container"
    const style = document.createElement("style");
    style.innerHTML=`
      .title_container{
          display:grid;
          grid-template-rows: 500px;
          align-items: center;
          justify-items:center;
          height:100vh;
          position:relative;
      }
      .options{
        position:absolute;
        bottom:0px;
      }
    `
    const playerOption = div.querySelector(".options")
    playerOption.addEventListener("click",()=>{
      params.goTo("/result")
    })

    // console.log(div.querySelector(".countdown-game").shadowRoot.querySelector(``));
    const cuentaRegresivaDiv = div.querySelector("countdown-game");
    const h1El = cuentaRegresivaDiv.querySelector(".cuenta-regresiva");

    console.log("cuentaRegresivaDiv:",cuentaRegresivaDiv);
    console.log("h1El",h1El);
    
    div.appendChild(style);
    return div
}
