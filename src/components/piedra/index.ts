customElements.define('piedra-el', class Piedra extends HTMLElement {
    shadow = this.attachShadow({ mode: "open"});
    constructor() {
      super();
      this.render();
    }

    addListeners(){
        const piedraEl = this.shadow.querySelector(".piedra-container");
        piedraEl.addEventListener("click",()=>{
            console.log("piedra")
        })
    }

    render(){
        const style = document.createElement("style");
        const imageURL = require("url:../../assets/piedra.png");
        style.innerHTML = `
         
        `
        this.shadow.innerHTML = `
         <div class="piedra-container">
           <img src=${imageURL}></img>
         </div>
        `
        this.shadow.appendChild(style);
        this.addListeners();
    }
  });