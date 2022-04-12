customElements.define('tijera-el', class Tijera extends HTMLElement {
    shadow = this.attachShadow({ mode: "open"});
    constructor() {
      super();
      this.render();
    }

    addListeners(){
        const tijeraEl = this.shadow.querySelector(".tijera-container");
        tijeraEl.addEventListener("click",()=>{
            console.log("tijera")
        })
    }

    render(){
        const style = document.createElement("style");
        const imageURL = require("url:../../assets/tijera.png");
        style.innerHTML = `
         
        `
        this.shadow.innerHTML = `
         <div class="tijera-container">
           <img src=${imageURL}></img>
         </div>
        `
        this.shadow.appendChild(style);
        this.addListeners();
    }
  });