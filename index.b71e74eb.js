// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8wcER":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _playButton = require("./components/play-button");
var _elemento = require("./components/elemento");
var _playOptions = require("./components/play-options");
var _countdown = require("./components/countdown");
var _root = require("./root");
var _state = require("./state");
(function main() {
    _state.state.init();
    _root.initRouter(document.querySelector(".root"));
})();

},{"./components/play-button":"2yhne","./components/play-options":"gGNTY","./root":"iV5tF","./components/countdown":"aGzWk","./components/elemento":"5Vl4q","./state":"1Yeju"}],"2yhne":[function(require,module,exports) {
customElements.define('play-button', class PlayButton extends HTMLElement {
    shadow = this.attachShadow({
        mode: "open"
    });
    constructor(){
        super();
        this.render();
    }
    render() {
        const style = document.createElement("style");
        const content = this.textContent;
        style.innerHTML = `
            .blue-button{
                background: #006CFC;
                border: 10px solid #001997;
                border-radius: 10px;
                width:322px;
                height:87px;
                font-size:45px;
                font-family:'Odibee Sans';
                color:white;
            }
        `;
        this.shadow.innerHTML = `
         <button class="blue-button">${content}</button>
        `;
        this.shadow.appendChild(style);
    }
});

},{}],"gGNTY":[function(require,module,exports) {
var _elemento = require("../elemento");
customElements.define('play-options', class PlayOptions extends HTMLElement {
    shadow = this.attachShadow({
        mode: "open"
    });
    constructor(){
        super();
        this.render();
    }
    render() {
        const style = document.createElement("style");
        style.innerHTML = `
         .options_container{
             display:flex;
             gap:48px;
             
         }
         @media(min-widht:960px){
          .options_container{
            gap:68px;
            transform:scale(1.5);
            }
         }
        `;
        this.shadow.innerHTML = `
         <div class="options_container">
         <elemento-el elemento="piedra"></elemento-el>
         <elemento-el elemento="papel"></elemento-el>
         <elemento-el elemento="tijera"></elemento-el>
         </div>
        `;
        this.shadow.appendChild(style);
    }
});

},{"../elemento":"5Vl4q"}],"5Vl4q":[function(require,module,exports) {
var _state = require("../../state");
customElements.define('elemento-el', class Elemento extends HTMLElement {
    shadow = this.attachShadow({
        mode: "open"
    });
    constructor(){
        super();
    }
    connectedCallback() {
        this.elemento = this.getAttribute("elemento") || "tijera";
        this.render();
    }
    addListeners() {
        const elemento = this.shadow.querySelector(".elemento-container");
        elemento.addEventListener("click", ()=>{
            if (this.elemento == "piedra" || this.elemento == "papel" || this.elemento == "tijera") _state.state.savePlayerPlay(this.elemento);
        });
    }
    render() {
        var imageURL = "";
        if (this.elemento == "tijera") imageURL = require("url:../../assets/tijera.png");
        if (this.elemento == "piedra") imageURL = require("url:../../assets/piedra.png");
        if (this.elemento == "papel") imageURL = require("url:../../assets/papel.png");
        this.shadow.innerHTML = `
         <div class="elemento-container">
           <img src=${imageURL}></img>
         </div>
        `;
        this.addListeners();
    }
});

},{"../../state":"1Yeju","url:../../assets/tijera.png":"6cLYs","url:../../assets/piedra.png":"4bqM6","url:../../assets/papel.png":"gHwV3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        playerPlay: "",
        comPlay: "",
        history: {
            player: 0,
            com: 0
        },
        hasWon: false
    },
    init () {
        const localData = localStorage.getItem("saved-item");
        this.setState(JSON.parse(localData));
    },
    getState () {
        return this.data;
    },
    setComSelection () {
        const comSelection = this.getRandomSelection();
        console.log("jugada de COM", comSelection);
        const currentState = this.getState();
        currentState.comPlay = comSelection;
        this.setState(currentState);
    },
    getRandomSelection () {
        const possiblePlays = [
            "piedra",
            "papel",
            "tijera"
        ].filter((p)=>{
            return p != state.getPlayerSelection();
        });
        const randomSelection = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
        return randomSelection;
    },
    getComSelection () {
        return this.getState().comPlay;
    },
    getPlayerSelection () {
        const lastState = this.getState();
        console.log("player move:", lastState.playerPlay);
        return lastState.playerPlay;
    },
    setState (newState) {
        // modifica this.data (el state) e invoca los callbacks
        this.data = newState;
    },
    savePlayerPlay (play) {
        const currentState = this.getState();
        currentState.playerPlay = play;
        console.log("saving player move:", currentState.playerPlay);
        this.setState(currentState);
        this.setComSelection();
    },
    parameters: {},
    saveParams (params) {
        this.parameters = params;
    },
    getParams () {
        return this.parameters;
    },
    whoWins () {
        const playerMove = this.getPlayerSelection();
        const comMove = this.getComSelection();
        const ganeConTijera = playerMove == "tijera" && comMove == "papel";
        const ganeConPapel = playerMove == "papel" && comMove == "piedra";
        const ganeConPiedra = playerMove == "piedra" && comMove == "tijera";
        const gane = [
            ganeConPapel,
            ganeConPiedra,
            ganeConTijera
        ].includes(true);
        localStorage.setItem("saved-item", JSON.stringify(this.getState()));
        this.getState().hasWon = gane;
        this.saveHistory(gane);
        return gane;
    },
    isDraw () {
        const playerMove = this.getPlayerSelection();
        const comMove = this.getComSelection();
        return playerMove == comMove;
    },
    lastResult () {
        return this.getState().hasWon;
    },
    saveHistory (result) {
        const currentState = this.getState();
        if (result) {
            console.log("jugador gana tenia:", currentState.history.player, "victorias");
            currentState.history.player += 1;
            console.log("ahora tiene:", currentState.history.player, "victorias");
        } else {
            console.log("com gana tenia:", currentState.history.com, "victorias");
            currentState.history.com += 1;
            console.log("ahora tiene:", currentState.history.com, "victorias");
        }
        this.setState(currentState);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6cLYs":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "tijera.2df6857a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4bqM6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "piedra.c2a3c43e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gHwV3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "papel.73504e79.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iV5tF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _game = require("./pages/game");
var _showHands = require("./pages/showHands");
const routes = [
    {
        path: /\/welcome/,
        component: _welcome.initPage
    },
    {
        path: /\/instructions/,
        component: _instructions.initPage
    },
    {
        path: /\/game/,
        component: _game.initPage
    },
    {
        path: /\/showHands/,
        component: _showHands.initPage
    }
];
const BASE_PATH = "/desafio-m5";
function isGithubPages() {
    return location.host.includes("github.io");
}
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibió una nueva ruta", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        //recibe una ruta, la compara con las rutas del array routes y
        //pregunta si alguna coincide con el patron y ejecuta la funcion asociada con esa ruta
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            }); // le pasa la funcion goTo para que pueda hacer el cambio en la url
            if (container.firstChild) //si tiene algo lo vacio
            container.firstChild.remove();
            container.appendChild(el);
        }
    // newRoute entonces ya no tiene el BASE_PATH
    // y podemos seguir procesando la ruta como siempre
    // resto del router...
    }
    handleRoute("/welcome");
}

},{"./pages/welcome":"fNSF3","./pages/instructions":"c8fMJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/game":"c5SNR","./pages/showHands":"cvgp1"}],"fNSF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPage", ()=>initPage
);
var _root = require("../../root");
function initPage(params) {
    const div = document.createElement("div");
    div.innerHTML = `
        <h1 class="title">Piedra
        Papel ó
        Tijera</h1>
        <play-button class="button-play">Jugar!</play-button>
        <play-options class="options"></play-options>
    `;
    div.className = "title_container";
    const style = document.createElement("style");
    style.innerHTML = `
      .title_container{
          display:grid;
          grid-template-rows: 350px 150px 200px;
          align-items: center;
          justify-items:center;
          height:100vh;
          position:relative;
      }
      .title{
        text-align:center;
        font-family:'Roboto';
        font-weight: 700;
        font-size: 80px;  
        color:#009048;
      }
      .options{
        pointer-events:none;
        position:absolute;
        bottom:0px;

      }
    `;
    const buttonEl = div.querySelector(".button-play");
    buttonEl.addEventListener('click', ()=>{
        params.goTo("/instructions");
    });
    div.appendChild(style);
    return div;
}

},{"../../root":"iV5tF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8fMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPage", ()=>initPage
);
var _root = require("../../root");
function initPage(params) {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2 class="title">Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </h2>
        <play-button class="button-play">Jugar!</play-button>
        <play-options class="options"></play-options>
    `;
    div.className = "title_container";
    const style = document.createElement("style");
    style.innerHTML = `
      .title_container{
          display:grid;
          grid-template-rows: 350px 150px 200px;
          align-items: center;
          justify-items:center;
          height:100vh;
          position:relative;
      }
      .title{
        padding:10px;
        text-align:center;
        font-family:'Roboto';
        font-size: 40px;  
        color:#009048;
      }
      .options{
        pointer-events:none;
        position:absolute;
        bottom:0px;

      }
    `;
    const buttonEl = div.querySelector(".button-play");
    buttonEl.addEventListener('click', ()=>{
        params.goTo("/game");
    });
    div.appendChild(style);
    return div;
}

},{"../../root":"iV5tF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c5SNR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPage", ()=>initPage
);
var _root = require("../../root");
var _state = require("../../state");
function initPage(params) {
    const div = document.createElement("div");
    div.innerHTML = `
        <countdown-el seconds="3" class="countdown-game"></countdown-el>
        <play-options class="options"></play-options>
    `;
    div.className = "title_container";
    const style = document.createElement("style");
    style.innerHTML = `
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
    `;
    const playerOption = div.querySelector(".options");
    playerOption.addEventListener("click", ()=>{
        params.goTo("/showHands");
    });
    _state.state.saveParams(params);
    div.appendChild(style);
    return div;
}

},{"../../root":"iV5tF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju"}],"cvgp1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPage", ()=>initPage
);
var _root = require("../../root");
var _state = require("../../state");
function initPage(params) {
    const div = document.createElement("div");
    const playerMove = _state.state.getPlayerSelection();
    const comMove = _state.state.getComSelection();
    const imageURL = require("url:../../assets/star.png");
    div.innerHTML = `
  <div class="hands__container">
  <elemento-el elemento="${comMove}" class="option-com"></elemento-el>
  <elemento-el elemento="${playerMove}" class="option-player"></elemento-el>
  </div>
      `;
    div.className = "container";
    const style = document.createElement("style");
    style.innerHTML = `
      :root{
        --won-color: #888949E5;
        --loose-color: #894949;
      }
      .container{
        height:100vh;
        position:relative;
        font-family:'Odibee Sans'
      }
      .hands__container{
        height:100vh;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-items:center;
        position:absolute;
        overflow: hidden;
      }
      .option-player{
        transform: scale(1.5);
        position: absolute;
        bottom:0px;
        animation: move-up 2s ease 1;
      }
      .option-com{
        transform: scale(1.5) rotate(180deg);
        position: absolute;
        top:0px;
        animation: move-down 2s ease 1;
      }
      @keyframes move-down{
        0%{
          transform:translateY(-70px) scale(1.5) rotate(180deg);
        }
 
        100%{
          transform:translateY(0px) scale(1.5) rotate(180deg);
        }
      }
      @keyframes move-up{
        0%{
          transform:translateY(70px) scale(1.5);
        }
 
        100%{
          transform:translateY(0px) scale(1.5);
        }
      }
    `;
    _state.state.whoWins();
    const resultEl = document.createElement("div");
    resultEl.innerHTML = `
  <div class="result__container">
  <div class="star__container">
  <img src=${imageURL} class="star-img">
  <p class="result-text">${_state.state.data.hasWon ? "Ganaste" : "Perdiste"}</p>
    </div>
    <div class="score__container">
    <p class="score-title">Score</p>
    <div class="score-result__container">
    <p>Vos: ${_state.state.data.history.player}</p>
    <p>Maquina:${_state.state.data.history.com} </p>
    </div>
    </div>
    <play-button class="play-again__button">Volver a jugar</play-button> 
    </div>
    <div class="background-container"></div>
    <style>
    .star-img{
      height:259px;
      width:254px;
      filter: ${_state.state.data.hasWon ? "" : "invert(7%) sepia(13%) saturate(3689%) hue-rotate(601deg) brightness(95%) contrast(188%)"};
    }
    .star__container{
      margin-top:20px;
      position:relative;
      
    }
    .result__container{
      position:absolute;
      z-index:9;
      display:flex;
      width:100%;
      height:100vh;
      flex-direction:column;
      align-items:center;
      gap:20px;
      }
      .result-text{
        position:absolute;
        font-size:55px;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .score__container{
        display:grid;
        justify-items:center;
        width:260px;
        height:218px;
        border:10px solid #000000;
        background-color: white;
        align-items:center;
        font-size:45px;
        box-sizing:content-box;
      }
      .score-result__container{
      text-align:right;
      }
      p{
        margin:0;
      }
      .background-container{
        height:100vh;
        width:100%;
        background-color:var(${_state.state.data.hasWon ? "--won-color" : "--loose-color"});
        opacity:0.5;
      }
      </style>
      `;
    setTimeout(()=>{
        div.appendChild(resultEl);
    }, 3000);
    resultEl.querySelector(".play-again__button").addEventListener("click", ()=>{
        params.goTo("/game");
    });
    div.appendChild(style);
    return div;
}

},{"../../root":"iV5tF","../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../assets/star.png":"i4blh"}],"i4blh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "star.a2986609.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aGzWk":[function(require,module,exports) {
var _setSeconds = require("./setSeconds");
customElements.define('countdown-el', class countdown extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.seconds = this.getAttribute("seconds") || "3";
        const style = document.createElement("style");
        style.innerHTML = `
        .circulo{
            display:flex;
            justify-content:center;
            align-items:center;
            border:10px solid black;  
            border-radius:50%;
            width:243px;
            height:243px;
            animation: circulo ${parseInt(this.seconds, 10) + 2 + "s"} ease 1;
            animation-delay: 0s;
        }
        @keyframes circulo{
            0%{
                transform: scale(0.5)
            }
            80%{
                transform: scale(1.0)
            }
            100%{
                transform: scale(0.2)
              }
            }
            .cuenta-regresiva{
                font-family:'Roboto';
                font-weight:700;
                font-size:100px;
            }
            `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.setAttribute("seconds", this.seconds);
        div.innerHTML = `
            <div class="circulo">
            <h1 class="cuenta-regresiva"></h1>       
            </div>
        `;
        _setSeconds.setSeconds(div);
        this.shadow.appendChild(div);
    }
});

},{"./setSeconds":"5wUfi"}],"5wUfi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setSeconds", ()=>setSeconds
);
var _game = require("../../pages/game");
var _state = require("../../state");
function setSeconds(container) {
    let getSeconds = container.getAttribute("seconds");
    let countdown = parseInt(getSeconds, 10);
    const secondEl = container.querySelector(".cuenta-regresiva");
    secondEl.textContent = countdown;
    const intervalId = setInterval(()=>{
        if (countdown == 0) {
            if (location.pathname == "/game") {
                _state.state.savePlayerPlay("tijera");
                _state.state.getParams().goTo("/showHands");
                clearInterval(intervalId);
            }
            clearInterval(intervalId);
        }
        secondEl.textContent = countdown;
        countdown--;
    }, 1000);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../pages/game":"c5SNR","../../state":"1Yeju"}]},["8wcER","h7u1C"], "h7u1C", "parcelRequire8cb6")

//# sourceMappingURL=index.b71e74eb.js.map
