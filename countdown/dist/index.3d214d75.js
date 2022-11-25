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
})({"awEvQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _viewJs = require("./view.js");
var _dateAndTime = require("date-and-time");
var _dateAndTimeDefault = parcelHelpers.interopDefault(_dateAndTime);
(0, _viewJs.button).addEventListener("click", getLeftTime);
function getLeftTime() {
    event.preventDefault();
    const leftTime = {
        "years": "",
        "days": "",
        "hours": ""
    };
    const now = new Date();
    const desiredDate = (0, _dateAndTimeDefault.default).parse((0, _viewJs.input).value, "DD/MM/YYYY");
    leftTime["years"] = Math.floor((0, _dateAndTimeDefault.default).subtract(desiredDate, now).toDays() / 365);
    leftTime["days"] = Math.floor((0, _dateAndTimeDefault.default).subtract(desiredDate, now).toDays() - leftTime["years"] * 365);
    leftTime["hours"] = Math.floor((0, _dateAndTimeDefault.default).subtract(desiredDate, now).toHours() - 24 * leftTime["days"] - 8760 * leftTime["years"]);
    (0, _viewJs.output).textContent = "left " + leftTime["years"] + " years " + leftTime["days"] + " days " + leftTime["hours"] + " hours";
}

},{"./view.js":"de63B","date-and-time":"7UnO6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"de63B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "button", ()=>button);
parcelHelpers.export(exports, "output", ()=>output);
parcelHelpers.export(exports, "input", ()=>input);
let button = document.querySelector(".countdown-form__button");
let output = document.querySelector(".countdown-form__output__content");
let input = document.querySelector(".countdown-form__input");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"7UnO6":[function(require,module,exports) {
/**
 * @preserve date-and-time (c) KNOWLEDGECODE | MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>date$1);
var locales = {}, plugins = {}, lang = "en", _res = {
    MMMM: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    MMM: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    dddd: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    ddd: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    dd: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    A: [
        "AM",
        "PM"
    ]
}, _formatter = {
    YYYY: function(d /*, formatString*/ ) {
        return ("000" + d.getFullYear()).slice(-4);
    },
    YY: function(d /*, formatString*/ ) {
        return ("0" + d.getFullYear()).slice(-2);
    },
    Y: function(d /*, formatString*/ ) {
        return "" + d.getFullYear();
    },
    MMMM: function(d /*, formatString*/ ) {
        return this.res.MMMM[d.getMonth()];
    },
    MMM: function(d /*, formatString*/ ) {
        return this.res.MMM[d.getMonth()];
    },
    MM: function(d /*, formatString*/ ) {
        return ("0" + (d.getMonth() + 1)).slice(-2);
    },
    M: function(d /*, formatString*/ ) {
        return "" + (d.getMonth() + 1);
    },
    DD: function(d /*, formatString*/ ) {
        return ("0" + d.getDate()).slice(-2);
    },
    D: function(d /*, formatString*/ ) {
        return "" + d.getDate();
    },
    HH: function(d /*, formatString*/ ) {
        return ("0" + d.getHours()).slice(-2);
    },
    H: function(d /*, formatString*/ ) {
        return "" + d.getHours();
    },
    A: function(d /*, formatString*/ ) {
        return this.res.A[d.getHours() > 11 | 0];
    },
    hh: function(d /*, formatString*/ ) {
        return ("0" + (d.getHours() % 12 || 12)).slice(-2);
    },
    h: function(d /*, formatString*/ ) {
        return "" + (d.getHours() % 12 || 12);
    },
    mm: function(d /*, formatString*/ ) {
        return ("0" + d.getMinutes()).slice(-2);
    },
    m: function(d /*, formatString*/ ) {
        return "" + d.getMinutes();
    },
    ss: function(d /*, formatString*/ ) {
        return ("0" + d.getSeconds()).slice(-2);
    },
    s: function(d /*, formatString*/ ) {
        return "" + d.getSeconds();
    },
    SSS: function(d /*, formatString*/ ) {
        return ("00" + d.getMilliseconds()).slice(-3);
    },
    SS: function(d /*, formatString*/ ) {
        return ("0" + (d.getMilliseconds() / 10 | 0)).slice(-2);
    },
    S: function(d /*, formatString*/ ) {
        return "" + (d.getMilliseconds() / 100 | 0);
    },
    dddd: function(d /*, formatString*/ ) {
        return this.res.dddd[d.getDay()];
    },
    ddd: function(d /*, formatString*/ ) {
        return this.res.ddd[d.getDay()];
    },
    dd: function(d /*, formatString*/ ) {
        return this.res.dd[d.getDay()];
    },
    Z: function(d /*, formatString*/ ) {
        var offset = d.getTimezoneOffset() / 0.6 | 0;
        return (offset > 0 ? "-" : "+") + ("000" + Math.abs(offset - (offset % 100 * 0.4 | 0))).slice(-4);
    },
    ZZ: function(d /*, formatString*/ ) {
        var offset = d.getTimezoneOffset();
        var mod = Math.abs(offset);
        return (offset > 0 ? "-" : "+") + ("0" + (mod / 60 | 0)).slice(-2) + ":" + ("0" + mod % 60).slice(-2);
    },
    post: function(str) {
        return str;
    },
    res: _res
}, _parser = {
    YYYY: function(str /*, formatString */ ) {
        return this.exec(/^\d{4}/, str);
    },
    Y: function(str /*, formatString */ ) {
        return this.exec(/^\d{1,4}/, str);
    },
    MMMM: function(str /*, formatString */ ) {
        var result = this.find(this.res.MMMM, str);
        result.value++;
        return result;
    },
    MMM: function(str /*, formatString */ ) {
        var result = this.find(this.res.MMM, str);
        result.value++;
        return result;
    },
    MM: function(str /*, formatString */ ) {
        return this.exec(/^\d\d/, str);
    },
    M: function(str /*, formatString */ ) {
        return this.exec(/^\d\d?/, str);
    },
    DD: function(str /*, formatString */ ) {
        return this.exec(/^\d\d/, str);
    },
    D: function(str /*, formatString */ ) {
        return this.exec(/^\d\d?/, str);
    },
    HH: function(str /*, formatString */ ) {
        return this.exec(/^\d\d/, str);
    },
    H: function(str /*, formatString */ ) {
        return this.exec(/^\d\d?/, str);
    },
    A: function(str /*, formatString */ ) {
        return this.find(this.res.A, str);
    },
    hh: function(str /*, formatString */ ) {
        return this.exec(/^\d\d/, str);
    },
    h: function(str /*, formatString */ ) {
        return this.exec(/^\d\d?/, str);
    },
    mm: function(str /*, formatString */ ) {
        return this.exec(/^\d\d/, str);
    },
    m: function(str /*, formatString */ ) {
        return this.exec(/^\d\d?/, str);
    },
    ss: function(str /*, formatString */ ) {
        return this.exec(/^\d\d/, str);
    },
    s: function(str /*, formatString */ ) {
        return this.exec(/^\d\d?/, str);
    },
    SSS: function(str /*, formatString */ ) {
        return this.exec(/^\d{1,3}/, str);
    },
    SS: function(str /*, formatString */ ) {
        var result = this.exec(/^\d\d?/, str);
        result.value *= 10;
        return result;
    },
    S: function(str /*, formatString */ ) {
        var result = this.exec(/^\d/, str);
        result.value *= 100;
        return result;
    },
    Z: function(str /*, formatString */ ) {
        var result = this.exec(/^[\+-]\d{2}[0-5]\d/, str);
        result.value = (result.value / 100 | 0) * -60 - result.value % 100;
        return result;
    },
    ZZ: function(str /*, formatString */ ) {
        var arr = /^([\+-])(\d{2}):([0-5]\d)/.exec(str) || [
            "",
            "",
            "",
            ""
        ];
        return {
            value: 0 - ((arr[1] + arr[2] | 0) * 60 + (arr[1] + arr[3] | 0)),
            length: arr[0].length
        };
    },
    h12: function(h, a) {
        return (h === 12 ? 0 : h) + a * 12;
    },
    exec: function(re, str) {
        var result = (re.exec(str) || [
            ""
        ])[0];
        return {
            value: result | 0,
            length: result.length
        };
    },
    find: function(array, str) {
        var index = -1, length = 0;
        for(var i = 0, len = array.length, item; i < len; i++){
            item = array[i];
            if (!str.indexOf(item) && item.length > length) {
                index = i;
                length = item.length;
            }
        }
        return {
            value: index,
            length: length
        };
    },
    pre: function(str) {
        return str;
    },
    res: _res
}, extend = function(base, props, override, res) {
    var obj = {}, key;
    for(key in base)obj[key] = base[key];
    for(key in props || {})if (!(!!override ^ !!obj[key])) obj[key] = props[key];
    if (res) obj.res = res;
    return obj;
}, proto = {
    _formatter: _formatter,
    _parser: _parser
}, localized_proto, date;
/**
 * Compiling format strings
 * @param {string} formatString - A format string
 * @returns {Array.<string>} A compiled object
 */ proto.compile = function(formatString) {
    var re = /\[([^\[\]]|\[[^\[\]]*])*]|([A-Za-z])\2+|\.{3}|./g, keys, pattern = [
        formatString
    ];
    while(keys = re.exec(formatString))pattern[pattern.length] = keys[0];
    return pattern;
};
/**
 * Formatting date and time objects (Date -> String)
 * @param {Date} dateObj - A Date object
 * @param {string|Array.<string>} arg - A format string or its compiled object
 * @param {boolean} [utc] - Output as UTC
 * @returns {string} A formatted string
 */ proto.format = function(dateObj, arg, utc) {
    var ctx = this || date, pattern = typeof arg === "string" ? ctx.compile(arg) : arg, offset = dateObj.getTimezoneOffset(), d = ctx.addMinutes(dateObj, utc ? offset : 0), formatter = ctx._formatter, str = "";
    d.getTimezoneOffset = function() {
        return utc ? 0 : offset;
    };
    for(var i = 1, len = pattern.length, token; i < len; i++){
        token = pattern[i];
        str += formatter[token] ? formatter.post(formatter[token](d, pattern[0])) : token.replace(/\[(.*)]/, "$1");
    }
    return str;
};
/**
 * Pre-parsing date and time strings
 * @param {string} dateString - A date and time string
 * @param {string|Array.<string>} arg - A format string or its compiled object
 * @param {boolean} [utc] - Input as UTC
 * @returns {Object} A pre-parsed result object
 */ proto.preparse = function(dateString, arg) {
    var ctx = this || date, pattern = typeof arg === "string" ? ctx.compile(arg) : arg, dt = {
        Y: 1970,
        M: 1,
        D: 1,
        H: 0,
        A: 0,
        h: 0,
        m: 0,
        s: 0,
        S: 0,
        Z: 0,
        _index: 0,
        _length: 0,
        _match: 0
    }, comment = /\[(.*)]/, parser = ctx._parser, offset = 0;
    dateString = parser.pre(dateString);
    for(var i = 1, len = pattern.length, token, result; i < len; i++){
        token = pattern[i];
        if (parser[token]) {
            result = parser[token](dateString.slice(offset), pattern[0]);
            if (!result.length) break;
            offset += result.length;
            dt[result.token || token.charAt(0)] = result.value;
            dt._match++;
        } else if (token === dateString.charAt(offset) || token === " ") offset++;
        else if (comment.test(token) && !dateString.slice(offset).indexOf(comment.exec(token)[1])) offset += token.length - 2;
        else if (token === "...") {
            offset = dateString.length;
            break;
        } else break;
    }
    dt.H = dt.H || parser.h12(dt.h, dt.A);
    dt._index = offset;
    dt._length = dateString.length;
    return dt;
};
/**
 * Parsing of date and time string (String -> Date)
 * @param {string} dateString - A date-time string
 * @param {string|Array.<string>} arg - A format string or its compiled object
 * @param {boolean} [utc] - Input as UTC
 * @returns {Date} A Date object
 */ proto.parse = function(dateString, arg, utc) {
    var ctx = this || date, pattern = typeof arg === "string" ? ctx.compile(arg) : arg, dt = ctx.preparse(dateString, pattern);
    if (ctx.isValid(dt)) {
        dt.M -= dt.Y < 100 ? 22801 : 1; // 22801 = 1900 * 12 + 1
        if (utc || ~ctx._parser.find(pattern, "ZZ").value) return new Date(Date.UTC(dt.Y, dt.M, dt.D, dt.H, dt.m + dt.Z, dt.s, dt.S));
        return new Date(dt.Y, dt.M, dt.D, dt.H, dt.m, dt.s, dt.S);
    }
    return new Date(NaN);
};
/**
 * Date and time string validation
 * @param {Object|string} arg1 - A pre-parsed result object or a date and time string
 * @param {string|Array.<string>} [arg2] - A format string or its compiled object
 * @returns {boolean} Whether the date and time string is a valid date and time
 */ proto.isValid = function(arg1, arg2) {
    var ctx = this || date, dt = typeof arg1 === "string" ? ctx.preparse(arg1, arg2) : arg1, last = [
        31,
        28 + ctx.isLeapYear(dt.Y) | 0,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ][dt.M - 1];
    return !(dt._index < 1 || dt._length < 1 || dt._index - dt._length || dt._match < 1 || dt.Y < 1 || dt.Y > 9999 || dt.M < 1 || dt.M > 12 || dt.D < 1 || dt.D > last || dt.H < 0 || dt.H > 23 || dt.m < 0 || dt.m > 59 || dt.s < 0 || dt.s > 59 || dt.S < 0 || dt.S > 999 || dt.Z < -840 || dt.Z > 720);
};
/**
 * Format transformation of date and time string (String -> String)
 * @param {string} dateString - A date and time string
 * @param {string|Array.<string>} arg1 - A format string or its compiled object before transformation
 * @param {string|Array.<string>} arg2 - A format string or its compiled object after transformation
 * @param {boolean} [utc] - Output as UTC
 * @returns {string} A formatted string
 */ proto.transform = function(dateString, arg1, arg2, utc) {
    const ctx = this || date;
    return ctx.format(ctx.parse(dateString, arg1), arg2, utc);
};
/**
 * Adding years
 * @param {Date} dateObj - A Date object
 * @param {number} years - Number of years to add
 * @returns {Date} The Date object after adding the value
 */ proto.addYears = function(dateObj, years) {
    return (this || date).addMonths(dateObj, years * 12);
};
/**
 * Adding months
 * @param {Date} dateObj - A Date object
 * @param {number} months - Number of months to add
 * @returns {Date} The Date object after adding the value
 */ proto.addMonths = function(dateObj, months) {
    var d = new Date(dateObj.getTime());
    d.setMonth(d.getMonth() + months);
    return d;
};
/**
 * Adding days
 * @param {Date} dateObj - A Date object
 * @param {number} days - Number of days to add
 * @returns {Date} The Date object after adding the value
 */ proto.addDays = function(dateObj, days) {
    var d = new Date(dateObj.getTime());
    d.setDate(d.getDate() + days);
    return d;
};
/**
 * Adding hours
 * @param {Date} dateObj - A Date object
 * @param {number} hours - Number of hours to add
 * @returns {Date} The Date object after adding the value
 */ proto.addHours = function(dateObj, hours) {
    return (this || date).addMinutes(dateObj, hours * 60);
};
/**
 * Adding minutes
 * @param {Date} dateObj - A Date object
 * @param {number} minutes - Number of minutes to add
 * @returns {Date} The Date object after adding the value
 */ proto.addMinutes = function(dateObj, minutes) {
    return (this || date).addSeconds(dateObj, minutes * 60);
};
/**
 * Adding seconds
 * @param {Date} dateObj - A Date object
 * @param {number} seconds - Number of seconds to add
 * @returns {Date} The Date object after adding the value
 */ proto.addSeconds = function(dateObj, seconds) {
    return (this || date).addMilliseconds(dateObj, seconds * 1000);
};
/**
 * Adding milliseconds
 * @param {Date} dateObj - A Date object
 * @param {number} milliseconds - Number of milliseconds to add
 * @returns {Date} The Date object after adding the value
 */ proto.addMilliseconds = function(dateObj, milliseconds) {
    return new Date(dateObj.getTime() + milliseconds);
};
/**
 * Subtracting two dates (date1 - date2)
 * @param {Date} date1 - A Date object
 * @param {Date} date2 - A Date object
 * @returns {Object} The result object of subtracting date2 from date1
 */ proto.subtract = function(date1, date2) {
    var delta = date1.getTime() - date2.getTime();
    return {
        toMilliseconds: function() {
            return delta;
        },
        toSeconds: function() {
            return delta / 1000;
        },
        toMinutes: function() {
            return delta / 60000;
        },
        toHours: function() {
            return delta / 3600000;
        },
        toDays: function() {
            return delta / 86400000;
        }
    };
};
/**
 * Whether a year is a leap year
 * @param {number} y - A year to check
 * @returns {boolean} Whether the year is a leap year
 */ proto.isLeapYear = function(y) {
    return !(y % 4) && !!(y % 100) || !(y % 400);
};
/**
 * Comparison of two dates
 * @param {Date} date1 - A Date object
 * @param {Date} date2 - A Date object
 * @returns {boolean} Whether the two dates are the same day (time is ignored)
 */ proto.isSameDay = function(date1, date2) {
    return date1.toDateString() === date2.toDateString();
};
/**
 * Definition of new locale
 * @param {string} code - A language code
 * @param {Function} locale - A locale installer
 * @returns {void}
 */ proto.locale = function(code, locale) {
    if (!locales[code]) locales[code] = locale;
};
/**
 * Definition of new plugin
 * @param {string} name - A plugin name
 * @param {Function} plugin - A plugin installer
 * @returns {void}
 */ proto.plugin = function(name, plugin) {
    if (!plugins[name]) plugins[name] = plugin;
};
localized_proto = extend(proto);
date = extend(proto);
/**
 * Changing locales
 * @param {Function|string} [locale] - A locale installer or language code
 * @returns {string} The current language code
 */ date.locale = function(locale) {
    var install = typeof locale === "function" ? locale : date.locale[locale];
    if (!install) return lang;
    lang = install(proto);
    var extension = locales[lang] || {};
    var res = extend(_res, extension.res, true);
    var formatter = extend(_formatter, extension.formatter, true, res);
    var parser = extend(_parser, extension.parser, true, res);
    date._formatter = localized_proto._formatter = formatter;
    date._parser = localized_proto._parser = parser;
    for(var plugin in plugins)date.extend(plugins[plugin]);
    return lang;
};
/**
 * Functional extension
 * @param {Object} extension - An extension object
 * @returns {void}
 */ date.extend = function(extension) {
    var res = extend(date._parser.res, extension.res);
    var extender = extension.extender || {};
    date._formatter = extend(date._formatter, extension.formatter, false, res);
    date._parser = extend(date._parser, extension.parser, false, res);
    for(var key in extender)if (!date[key]) date[key] = extender[key];
};
/**
 * Importing plugins
 * @param {Function|string} plugin - A plugin installer or plugin name
 * @returns {void}
 */ date.plugin = function(plugin) {
    var install = typeof plugin === "function" ? plugin : date.plugin[plugin];
    if (install) date.extend(plugins[install(proto, localized_proto)] || {});
};
var date$1 = date;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["awEvQ","bB7Pu"], "bB7Pu", "parcelRequire94c2")

//# sourceMappingURL=index.3d214d75.js.map
