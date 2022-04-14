import "../piedra"
import "../papel"
import "../tijera"
customElements.define('play-options', class PlayOptions extends HTMLElement {
    shadow = this.attachShadow({ mode: "open"});
    constructor() {
      super();
      this.render();
    }

    render(){
        const style = document.createElement("style");
        style.innerHTML = `
         .options_container{
             display:flex;
             gap:10px;
         }
        `
        this.shadow.innerHTML = `
         <div class="options_container">
         <piedra-el ></piedra-el>
         <papel-el></papel-el>
         <tijera-el></tijera-el>
         </div>
        `
        this.shadow.appendChild(style);
        
    }
  });