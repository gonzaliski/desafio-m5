function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=n.parcelRequire8cb6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire8cb6=a),a.register("27Lyk",(function(n,t){var o,a;e(n.exports,"register",(()=>o),(e=>o=e)),e(n.exports,"resolve",(()=>a),(e=>a=e));var i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},a=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),a.register("fw6a9",(function(e,n){e.exports=new URL(a("27Lyk").resolve("hJPD1"),import.meta.url).toString()})),a.register("60jVI",(function(e,n){e.exports=new URL(a("27Lyk").resolve("9FfCk"),import.meta.url).toString()})),a.register("etGmb",(function(e,n){e.exports=new URL(a("27Lyk").resolve("1Bffm"),import.meta.url).toString()})),a.register("jxzvX",(function(e,n){e.exports=new URL(a("27Lyk").resolve("1p8IE"),import.meta.url).toString()})),a("27Lyk").register(JSON.parse('{"dZpbI":"index.5b0b84ce.js","hJPD1":"tijera.670ddcb9.png","9FfCk":"piedra.7fca2d9b.png","1Bffm":"papel.7cda7258.png","1p8IE":"star.3a88d763.png"}')),customElements.define("play-button",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=document.createElement("style"),n=this.textContent;e.innerHTML="\n            .blue-button{\n                background: #006CFC;\n                border: 10px solid #001997;\n                border-radius: 10px;\n                width:322px;\n                height:87px;\n                font-size:45px;\n                font-family:'Odibee Sans';\n                color:white;\n            }\n        ",this.shadow.innerHTML=`\n         <button class="blue-button">${n}</button>\n        `,this.shadow.appendChild(e)}});const i={data:{playerPlay:"",comPlay:"",history:{player:0,com:0},hasWon:!1},init(){const e=JSON.parse(localStorage.getItem("saved-item"));if(localStorage.getItem("saved-item"))return this.data.history=e;console.log(e)},getState(){return this.data},setComSelection(){const e=this.getRandomSelection(),n=this.getState();n.comPlay=e,this.setState(n)},getRandomSelection(){const e=["piedra","papel","tijera"].filter((e=>e!=i.getPlayerSelection()));return e[Math.floor(Math.random()*e.length)]},getComSelection(){return this.getState().comPlay},getPlayerSelection(){return this.getState().playerPlay},setState(e){this.data=e},savePlayerPlay(e){const n=this.getState();n.playerPlay=e,this.setComSelection(),this.setState(n)},parameters:{},saveParams(e){this.parameters=e},getParams(){return this.parameters},whoWins(){const e=this.getPlayerSelection(),n=this.getComSelection(),t=["papel"==e&&"piedra"==n,"piedra"==e&&"tijera"==n,"tijera"==e&&"papel"==n].includes(!0);return this.getState().hasWon=t,this.saveHistory(t),t},isDraw(){return this.getPlayerSelection()==this.getComSelection()},lastResult(){return this.getState().hasWon},saveHistory(e){const n=this.getState();e?n.history.player+=1:n.history.com+=1,localStorage.setItem("saved-item",JSON.stringify(n.history)),this.setState(n)}};customElements.define("elemento-el",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.elemento=this.getAttribute("elemento")||"tijera",this.render()}addListeners(){this.shadow.querySelector(".elemento-container").addEventListener("click",(()=>{if("piedra"==this.elemento||"papel"==this.elemento||"tijera"==this.elemento){const e=i.getParams();i.savePlayerPlay(this.elemento),e.goTo("/instructions")}}))}render(){var e="";"tijera"==this.elemento&&(e=a("fw6a9")),"piedra"==this.elemento&&(e=a("60jVI")),"papel"==this.elemento&&(e=a("etGmb")),this.shadow.innerHTML=`\n         <div class="elemento-container">\n           <img src=${e}></img>\n         </div>\n        `,this.addListeners()}}),customElements.define("play-options",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=document.createElement("style");e.innerHTML="\n         .options_container{\n             display:flex;\n             gap:48px;\n             \n         }\n         @media(min-widht:960px){\n          .options_container{\n            gap:68px;\n            transform:scale(1.5);\n            }\n         }\n        ",this.shadow.innerHTML='\n         <div class="options_container">\n         <elemento-el elemento="piedra"></elemento-el>\n         <elemento-el elemento="papel"></elemento-el>\n         <elemento-el elemento="tijera"></elemento-el>\n         </div>\n        ',this.shadow.appendChild(e)}});const s=[{path:/\/welcome/,component:function(e){const n=document.createElement("div");n.innerHTML='\n        <h1 class="title">Piedra\n        Papel ó\n        Tijera</h1>\n        <play-button class="button-play">Jugar!</play-button>\n        <play-options class="options"></play-options>\n    ',n.className="title_container";const t=document.createElement("style");return t.innerHTML="\n      .title_container{\n          display:grid;\n          grid-template-rows: 350px 150px 200px;\n          align-items: center;\n          justify-items:center;\n          height:100vh;\n          position:relative;\n      }\n      .title{\n        text-align:center;\n        font-family:'Roboto';\n        font-weight: 700;\n        font-size: 80px;  \n        color:#009048;\n      }\n      .options{\n        pointer-events:none;\n        position:absolute;\n        bottom:0px;\n\n      }\n    ",n.querySelector(".button-play").addEventListener("click",(()=>{e.goTo("/instructions")})),n.appendChild(t),n}},{path:/\/instructions/,component:function(e){const n=document.createElement("div");n.innerHTML='\n        <h2 class="title">Presioná jugar\n        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n        </h2>\n        <play-button class="button-play">Jugar!</play-button>\n        <play-options class="options"></play-options>\n    ',n.className="title_container";const t=document.createElement("style");return t.innerHTML="\n      .title_container{\n          display:grid;\n          grid-template-rows: 350px 150px 200px;\n          align-items: center;\n          justify-items:center;\n          height:100vh;\n          position:relative;\n      }\n      .title{\n        padding:10px;\n        text-align:center;\n        font-family:'Roboto';\n        font-size: 40px;  \n        color:#009048;\n      }\n      .options{\n        pointer-events:none;\n        position:absolute;\n        bottom:0px;\n\n      }\n    ",n.querySelector(".button-play").addEventListener("click",(()=>{e.goTo("/game")})),n.appendChild(t),n}},{path:/\/game/,component:function(e){i.saveParams(e);const n=document.createElement("div");n.innerHTML='\n        <countdown-el seconds="3" class="countdown-game"></countdown-el>\n        <play-options class="options"></play-options>\n    ',n.className="title_container";const t=document.createElement("style");t.innerHTML="\n      .title_container{\n          display:grid;\n          grid-template-rows: 500px;\n          align-items: center;\n          justify-items:center;\n          height:100vh;\n          position:relative;\n      }\n      .options{\n        position:absolute;\n        bottom:0px;\n      }\n    ";return n.querySelector(".options").addEventListener("click",(()=>{e.goTo("/showHands")})),n.appendChild(t),n}},{path:/\/showHands/,component:function(e){const n=document.createElement("div"),t=i.getPlayerSelection(),o=i.getComSelection(),s=a("jxzvX");n.innerHTML=`\n  <div class="hands__container">\n  <elemento-el elemento="${o}" class="option-com"></elemento-el>\n  <elemento-el elemento="${t}" class="option-player"></elemento-el>\n  </div>\n      `,n.className="container";const r=document.createElement("style");r.innerHTML="\n      :root{\n        --won-color: #888949E5;\n        --loose-color: #894949;\n      }\n      .container{\n        height:100vh;\n        position:relative;\n        font-family:'Odibee Sans'\n      }\n      .hands__container{\n        height:100vh;\n        width:100%;\n        display:flex;\n        flex-direction:column;\n        align-items: center;\n        justify-items:center;\n        position:absolute;\n        overflow: hidden;\n      }\n      .option-player{\n        transform: scale(1.5);\n        position: absolute;\n        bottom:0px;\n        animation: move-up 2s ease 1;\n      }\n      .option-com{\n        transform: scale(1.5) rotate(180deg);\n        position: absolute;\n        top:0px;\n        animation: move-down 2s ease 1;\n      }\n      @keyframes move-down{\n        0%{\n          transform:translateY(-70px) scale(1.5) rotate(180deg);\n        }\n \n        100%{\n          transform:translateY(0px) scale(1.5) rotate(180deg);\n        }\n      }\n      @keyframes move-up{\n        0%{\n          transform:translateY(70px) scale(1.5);\n        }\n \n        100%{\n          transform:translateY(0px) scale(1.5);\n        }\n      }\n    ",i.whoWins();const l=document.createElement("div");return l.innerHTML=`\n  <div class="result__container">\n  <div class="star__container">\n  <img src=${s} class="star-img">\n  <p class="result-text">${i.data.hasWon?"Ganaste":"Perdiste"}</p>\n    </div>\n    <div class="score__container">\n    <p class="score-title">Score</p>\n    <div class="score-result__container">\n    <p>Vos: ${i.data.history.player}</p>\n    <p>Maquina:${i.data.history.com} </p>\n    </div>\n    </div>\n    <play-button class="play-again__button">Volver a jugar</play-button> \n    </div>\n    <div class="background-container"></div>\n    <style>\n    .star-img{\n      height:259px;\n      width:254px;\n      filter: ${i.data.hasWon?"":"invert(7%) sepia(13%) saturate(3689%) hue-rotate(601deg) brightness(95%) contrast(188%)"};\n    }\n    .star__container{\n      margin-top:20px;\n      position:relative;\n      \n    }\n    .result__container{\n      position:absolute;\n      z-index:9;\n      display:flex;\n      width:100%;\n      height:100vh;\n      flex-direction:column;\n      align-items:center;\n      gap:20px;\n      }\n      .result-text{\n        position:absolute;\n        font-size:55px;\n        top: 45%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n      .score__container{\n        display:grid;\n        justify-items:center;\n        width:260px;\n        height:218px;\n        border:10px solid #000000;\n        background-color: white;\n        align-items:center;\n        font-size:45px;\n        box-sizing:content-box;\n      }\n      .score-result__container{\n      text-align:right;\n      }\n      p{\n        margin:0;\n      }\n      .background-container{\n        height:100vh;\n        width:100%;\n        background-color:var(${i.data.hasWon?"--won-color":"--loose-color"});\n        opacity:0.5;\n      }\n      </style>\n      `,setTimeout((()=>{n.appendChild(l)}),3e3),l.querySelector(".play-again__button").addEventListener("click",(()=>{e.goTo("/game")})),n.appendChild(r),n}}];function r(){return location.host.includes("github.io")}customElements.define("countdown-el",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.seconds=this.getAttribute("seconds")||"3";const e=document.createElement("style");e.innerHTML=`\n        .circulo{\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            border:10px solid black;  \n            border-radius:50%;\n            width:243px;\n            height:243px;\n            animation: circulo ${parseInt(this.seconds,10)+2+"s"} ease 1;\n            animation-delay: 0s;\n        }\n        @keyframes circulo{\n            0%{\n                transform: scale(0.5)\n            }\n            80%{\n                transform: scale(1.0)\n            }\n            100%{\n                transform: scale(0.2)\n              }\n            }\n            .cuenta-regresiva{\n                font-family:'Roboto';\n                font-weight:700;\n                font-size:100px;\n            }\n            `,this.shadow.appendChild(e),this.render()}render(){const e=document.createElement("div");e.setAttribute("seconds",this.seconds),e.innerHTML='\n            <div class="circulo">\n            <h1 class="cuenta-regresiva"></h1>       \n            </div>\n        ',function(e){let n=e.getAttribute("seconds"),t=parseInt(n,10);const o=e.querySelector(".cuenta-regresiva");o.textContent=t;const a=setInterval((()=>{0==t&&("/desafio-m5/game"==location.pathname&&(i.savePlayerPlay("tijera"),i.getParams().goTo("/showHands"),clearInterval(a)),clearInterval(a)),o.textContent=t,t--}),1e3)}(e),this.shadow.appendChild(e)}}),i.init(),function(e){function n(e){const n=r()?"/desafio-m5"+e:e;history.pushState({},"",n),t(n)}function t(t){const o=r()?t.replace("/desafio-m5",""):t;for(const t of s)if(t.path.test(o)){const o=t.component({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(o)}}"/desafio-m5/"==location.pathname?n("/welcome"):t(location.pathname)}(document.querySelector(".root"));
//# sourceMappingURL=index.5b0b84ce.js.map
