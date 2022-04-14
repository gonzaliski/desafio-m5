import { state } from "../../state";

customElements.define('tijera-el', class Tijera extends HTMLElement {
    elemento:string;

    shadow = this.attachShadow({ mode: "open"});
    constructor() {
      super();
    }
    
    connectedCallback(){
      this.elemento = this.getAttribute("elemento") || "tijera";
      this.render();
    }

    addListeners(){
        const elemento = this.shadow.querySelector(".elemento-container");
        elemento.addEventListener("click",()=>{
          if(this.elemento == ("piedra" || "papel" || "tijera")){
            state.savePlayerPlay(this.elemento)
          }
        })
    }

    render(){
        const imageURL = require(`url:../../assets/${this.elemento}.png`);
        
        this.shadow.innerHTML = `
         <div class="elemento-container">
           <img src=${imageURL}></img>
         </div>
        `
        this.addListeners();
    }
  });