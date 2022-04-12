customElements.define('papel-el', class Papel extends HTMLElement {
    shadow = this.attachShadow({ mode: "open"});
    constructor() {
      super();
      this.render();
    }

    addListeners(){
        const papelEl = this.shadow.querySelector(".papel-container");
        papelEl.addEventListener("click",()=>{
            console.log("papel")
        })
    }

    render(){
        const style = document.createElement("style");
        const imageURL = require("url:../../assets/papel.png");
        style.innerHTML = `
         
        `
        this.shadow.innerHTML = `
         <div class="papel-container">
           <img src=${imageURL}></img>
         </div>
        `
        this.shadow.appendChild(style);
        this.addListeners();
    }
  });