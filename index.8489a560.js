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
})({"d7IaF":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "42ac1ebc8489a560";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
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
            it = o[Symbol.iterator]();
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
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
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
        checkedAssets = {
        };
        acceptedAssets = {
        };
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
    bundle.hotData = {
    };
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

},{}],"ik5cl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _hyperapp = require("hyperapp");
var _hyperlit = require("hyperlit");
var _hyperlitDefault = parcelHelpers.interopDefault(_hyperlit);
var _hyperappRouter = require("@mrbarrysoftware/hyperapp-router");
var _hyperappRouterDefault = parcelHelpers.interopDefault(_hyperappRouter);
var _component = require("./ui/components/component");
var _componentDefault = parcelHelpers.interopDefault(_component);
const baseState = {
    viewFn: ()=>_hyperlitDefault.default`<div></div>`
};
_hyperappRouterDefault.default(_hyperapp.app)({
    router: {
        disableAnchorCapture: true,
        routes: {
            "/": {
                OnEnter: (state)=>({
                        ...state,
                        viewFn: ()=>{
                            return _componentDefault.default.homePage;
                        }
                    })
            },
            "/xbull": {
                OnEnter: (state)=>({
                        ...state,
                        viewFn: ()=>{
                            return _componentDefault.default.xbullPage;
                        }
                    })
            },
            "/albedo": {
                OnEnter: (state)=>({
                        ...state,
                        viewFn: ()=>{
                            return _componentDefault.default.albedoPage;
                        }
                    })
            },
            "/freighter": {
                OnEnter: (state)=>({
                        ...state,
                        viewFn: ()=>{
                            return _componentDefault.default.freighterPage;
                        }
                    })
            }
        }
    },
    init: baseState,
    view: (state)=>state.viewFn()
    ,
    node: document.getElementById("app")
}); //comment to be able to make a new PR

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","hyperapp":"gtMBc","hyperlit":"2IpSX","@mrbarrysoftware/hyperapp-router":"2kEVy","./ui/components/component":"cF9fA"}],"ciiiV":[function(require,module,exports) {
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

},{}],"gtMBc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memo", ()=>memo
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "h", ()=>h
);
parcelHelpers.export(exports, "app", ()=>app
);
var SSR_NODE = 1;
var TEXT_NODE = 3;
var EMPTY_OBJ = {
};
var EMPTY_ARR = [];
var SVG_NS = "http://www.w3.org/2000/svg";
var id = (a)=>a
;
var map = EMPTY_ARR.map;
var isArray = Array.isArray;
var enqueue = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : setTimeout;
var createClass = (obj)=>{
    var out = "";
    if (typeof obj === "string") return obj;
    if (isArray(obj)) {
        for(var k = 0, tmp; k < obj.length; k++)if (tmp = createClass(obj[k])) out += (out && " ") + tmp;
    } else {
        for(var k in obj)if (obj[k]) out += (out && " ") + k;
    }
    return out;
};
var shouldRestart = (a, b)=>{
    for(var k in {
        ...a,
        ...b
    }){
        if (typeof (isArray(a[k]) ? a[k][0] : a[k]) === "function") b[k] = a[k];
        else if (a[k] !== b[k]) return true;
    }
};
var patchSubs = (oldSubs, newSubs = EMPTY_ARR, dispatch)=>{
    for(var subs = [], i = 0, oldSub, newSub; i < oldSubs.length || i < newSubs.length; i++){
        oldSub = oldSubs[i];
        newSub = newSubs[i];
        subs.push(newSub && newSub !== true ? !oldSub || newSub[0] !== oldSub[0] || shouldRestart(newSub[1], oldSub[1]) ? [
            newSub[0],
            newSub[1],
            (oldSub && oldSub[2](), newSub[0](dispatch, newSub[1])), 
        ] : oldSub : oldSub && oldSub[2]());
    }
    return subs;
};
var getKey = (vdom)=>vdom == null ? vdom : vdom.key
;
var patchProperty = (node, key, oldValue, newValue, listener, isSvg)=>{
    if (key === "key") ;
    else if (key === "style") for(var k in {
        ...oldValue,
        ...newValue
    }){
        oldValue = newValue == null || newValue[k] == null ? "" : newValue[k];
        if (k[0] === "-") node[key].setProperty(k, oldValue);
        else node[key][k] = oldValue;
    }
    else if (key[0] === "o" && key[1] === "n") {
        if (!((node.events || (node.events = {
        }))[key = key.slice(2)] = newValue)) node.removeEventListener(key, listener);
        else if (!oldValue) node.addEventListener(key, listener);
    } else if (!isSvg && key !== "list" && key !== "form" && key in node) node[key] = newValue == null ? "" : newValue;
    else if (newValue == null || newValue === false || key === "class" && !(newValue = createClass(newValue))) node.removeAttribute(key);
    else node.setAttribute(key, newValue);
};
var createNode = (vdom, listener, isSvg)=>{
    var props = vdom.props;
    var node = vdom.type === TEXT_NODE ? document.createTextNode(vdom.tag) : (isSvg = isSvg || vdom.tag === "svg") ? document.createElementNS(SVG_NS, vdom.tag, props.is && props) : document.createElement(vdom.tag, props.is && props);
    for(var k in props)patchProperty(node, k, null, props[k], listener, isSvg);
    for(var i = 0; i < vdom.children.length; i++)node.appendChild(createNode(vdom.children[i] = maybeVNode(vdom.children[i]), listener, isSvg));
    return vdom.node = node;
};
var patch = (parent, node, oldVNode, newVNode, listener, isSvg)=>{
    if (oldVNode === newVNode) ;
    else if (oldVNode != null && oldVNode.type === TEXT_NODE && newVNode.type === TEXT_NODE) {
        if (oldVNode.tag !== newVNode.tag) node.nodeValue = newVNode.tag;
    } else if (oldVNode == null || oldVNode.tag !== newVNode.tag) {
        node = parent.insertBefore(createNode(newVNode = maybeVNode(newVNode), listener, isSvg), node);
        if (oldVNode != null) parent.removeChild(oldVNode.node);
    } else {
        var tmpVKid;
        var oldVKid;
        var oldKey;
        var newKey;
        var oldProps = oldVNode.props;
        var newProps = newVNode.props;
        var oldVKids = oldVNode.children;
        var newVKids = newVNode.children;
        var oldHead = 0;
        var newHead = 0;
        var oldTail = oldVKids.length - 1;
        var newTail = newVKids.length - 1;
        isSvg = isSvg || newVNode.tag === "svg";
        for(var i in {
            ...oldProps,
            ...newProps
        })if ((i === "value" || i === "selected" || i === "checked" ? node[i] : oldProps[i]) !== newProps[i]) patchProperty(node, i, oldProps[i], newProps[i], listener, isSvg);
        while(newHead <= newTail && oldHead <= oldTail){
            if ((oldKey = getKey(oldVKids[oldHead])) == null || oldKey !== getKey(newVKids[newHead])) break;
            patch(node, oldVKids[oldHead].node, oldVKids[oldHead], newVKids[newHead] = maybeVNode(newVKids[newHead++], oldVKids[oldHead++]), listener, isSvg);
        }
        while(newHead <= newTail && oldHead <= oldTail){
            if ((oldKey = getKey(oldVKids[oldTail])) == null || oldKey !== getKey(newVKids[newTail])) break;
            patch(node, oldVKids[oldTail].node, oldVKids[oldTail], newVKids[newTail] = maybeVNode(newVKids[newTail--], oldVKids[oldTail--]), listener, isSvg);
        }
        if (oldHead > oldTail) while(newHead <= newTail)node.insertBefore(createNode(newVKids[newHead] = maybeVNode(newVKids[newHead++]), listener, isSvg), (oldVKid = oldVKids[oldHead]) && oldVKid.node);
        else if (newHead > newTail) while(oldHead <= oldTail)node.removeChild(oldVKids[oldHead++].node);
        else {
            for(var keyed = {
            }, newKeyed = {
            }, i = oldHead; i <= oldTail; i++)if ((oldKey = oldVKids[i].key) != null) keyed[oldKey] = oldVKids[i];
            while(newHead <= newTail){
                oldKey = getKey(oldVKid = oldVKids[oldHead]);
                newKey = getKey(newVKids[newHead] = maybeVNode(newVKids[newHead], oldVKid));
                if (newKeyed[oldKey] || newKey != null && newKey === getKey(oldVKids[oldHead + 1])) {
                    if (oldKey == null) node.removeChild(oldVKid.node);
                    oldHead++;
                    continue;
                }
                if (newKey == null || oldVNode.type === SSR_NODE) {
                    if (oldKey == null) {
                        patch(node, oldVKid && oldVKid.node, oldVKid, newVKids[newHead], listener, isSvg);
                        newHead++;
                    }
                    oldHead++;
                } else {
                    if (oldKey === newKey) {
                        patch(node, oldVKid.node, oldVKid, newVKids[newHead], listener, isSvg);
                        newKeyed[newKey] = true;
                        oldHead++;
                    } else if ((tmpVKid = keyed[newKey]) != null) {
                        patch(node, node.insertBefore(tmpVKid.node, oldVKid && oldVKid.node), tmpVKid, newVKids[newHead], listener, isSvg);
                        newKeyed[newKey] = true;
                    } else patch(node, oldVKid && oldVKid.node, null, newVKids[newHead], listener, isSvg);
                    newHead++;
                }
            }
            while(oldHead <= oldTail)if (getKey(oldVKid = oldVKids[oldHead++]) == null) node.removeChild(oldVKid.node);
            for(var i in keyed)if (newKeyed[i] == null) node.removeChild(keyed[i].node);
        }
    }
    return newVNode.node = node;
};
var propsChanged = (a, b)=>{
    for(var k in a)if (a[k] !== b[k]) return true;
    for(var k in b)if (a[k] !== b[k]) return true;
};
var maybeVNode = (newVNode, oldVNode)=>newVNode !== true && newVNode !== false && newVNode ? typeof newVNode.tag === "function" ? ((!oldVNode || oldVNode.memo == null || propsChanged(oldVNode.memo, newVNode.memo)) && ((oldVNode = newVNode.tag(newVNode.memo)).memo = newVNode.memo), oldVNode) : newVNode : text("")
;
var recycleNode = (node)=>node.nodeType === TEXT_NODE ? text(node.nodeValue, node) : createVNode(node.nodeName.toLowerCase(), EMPTY_OBJ, map.call(node.childNodes, recycleNode), SSR_NODE, node)
;
var createVNode = (tag, props, children, type, node)=>({
        tag,
        props,
        key: props.key,
        children,
        type,
        node
    })
;
var memo = (tag, memo1)=>({
        tag,
        memo: memo1
    })
;
var text = (value, node)=>createVNode(value, EMPTY_OBJ, EMPTY_ARR, TEXT_NODE, node)
;
var h = (tag, props, children = EMPTY_ARR)=>createVNode(tag, props, isArray(children) ? children : [
        children
    ])
;
var app = ({ node , view , subscriptions , dispatch =id , init =EMPTY_OBJ ,  })=>{
    var vdom = node && recycleNode(node);
    var subs = [];
    var state;
    var busy;
    var update = (newState)=>{
        if (state !== newState) {
            if ((state = newState) == null) dispatch = subscriptions = render = id;
            if (subscriptions) subs = patchSubs(subs, subscriptions(state), dispatch);
            if (view && !busy) enqueue(render, busy = true);
        }
    };
    var render = ()=>node = patch(node.parentNode, node, vdom, vdom = view(state), listener, busy = false)
    ;
    var listener = function(event) {
        dispatch(this.events[event.type], event);
    };
    return (dispatch = dispatch((action, props)=>typeof action === "function" ? dispatch(action(state, props)) : isArray(action) ? typeof action[0] === "function" ? dispatch(action[0], action[1]) : action.slice(1).map((fx)=>fx && fx !== true && fx[0](dispatch, fx[1])
        , update(action[0])) : update(action)
    ))(init), dispatch;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2IpSX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hyperapp = require("hyperapp");
const NEXT = 0;
const TEXT = 1;
const TAG = 2;
const CLOSINGTAG = 3;
const TAGNAME = 4;
const PROPS = 5;
const SELFCLOSING = 6;
const PROPNAME = 7;
const PROPVAL = 8;
const PROPVALSTR = 9;
const ws = (c)=>c == ' ' || c == '\t' || c == '\n' || c == '\r'
;
const parse = (strs, vals)=>{
    let tagname, propname, props, parent, list = [], ch1, buffer = '', mode = NEXT, newline = true;
    const listpush = (x)=>(x || x === 0) && list.push(typeof x == 'string' ? _hyperapp.text(x) : typeof x == 'number' ? _hyperapp.text('' + x) : x)
    ;
    const pushnode = (ch, children = ch.flat(2))=>{
        listpush(tagname.call ? tagname(props, children) : _hyperapp.h(tagname, props, children));
        mode = NEXT;
    };
    const gotText = (trim)=>{
        if (trim) buffer = buffer.trimEnd();
        buffer && listpush(buffer);
        newline = false;
        buffer = '';
    };
    const open = ()=>{
        parent = [
            list,
            tagname,
            props,
            parent
        ];
        list = [];
        mode = NEXT;
    };
    const gotTagName = (m = mode)=>{
        tagname = buffer;
        buffer = '';
        props = {
        };
        mode = m;
    };
    const defaultProp = (m = mode)=>{
        props[buffer] = true;
        mode = m;
        buffer = '';
    };
    const gotProp = (v)=>{
        props[propname] = v;
        mode = PROPS;
        buffer = '';
    };
    const close = ()=>{
        let children = list;
        [list, tagname, props, parent] = parent;
        pushnode(children);
    };
    for(let j = 0; j < strs.length; j++){
        for(let i = 0; i < strs[j].length; i++){
            ch1 = strs[j][i];
            if (mode == NEXT) {
                if (ch1 == '<') mode = TAG;
                else if (!ws(ch1)) {
                    mode = TEXT;
                    buffer = ch1;
                } else if (ch1 == '\n') newline = true;
                else if (!newline) {
                    mode = TEXT;
                    buffer = ch1;
                }
            } else if (mode == TEXT) {
                if (ch1 == '<') mode = TAG;
                else if (ch1 == '\n') {
                    gotText(false);
                    newline = true;
                    mode = NEXT;
                } else buffer += ch1;
            } else if (mode == TAG) {
                if (ch1 == '/') {
                    mode = CLOSINGTAG;
                    gotText(true);
                } else {
                    mode = TAGNAME;
                    gotText(false);
                    buffer = ch1;
                }
            } else if (mode == CLOSINGTAG) {
                if (ch1 == '>') close();
            } else if (mode == TAGNAME) {
                if (ws(ch1)) gotTagName(PROPS);
                else if (ch1 == '/') gotTagName(SELFCLOSING);
                else if (ch1 == '>') {
                    gotTagName();
                    open();
                } else buffer += ch1;
            } else if (mode == SELFCLOSING) {
                if (ch1 == '>') pushnode([]);
            } else if (mode == PROPS) {
                if (ch1 == '.') ;
                else if (ch1 == '/') mode = SELFCLOSING;
                else if (ch1 == '>') open();
                else if (!ws(ch1)) {
                    buffer = ch1;
                    mode = PROPNAME;
                }
            } else if (mode == PROPNAME) {
                if (ch1 == '=') {
                    propname = buffer;
                    mode = PROPVAL;
                } else if (ch1 == '>') {
                    defaultProp();
                    open();
                } else if (ch1 == '/') defaultProp(SELFCLOSING);
                else if (ws(ch1)) defaultProp(PROPS);
                else buffer += ch1;
            } else if (mode == PROPVAL) {
                if (ch1 == '"') {
                    mode = PROPVALSTR;
                    buffer = '';
                }
            } else if (mode == PROPVALSTR) {
                if (ch1 == '"') gotProp(buffer);
                else buffer += ch1;
            }
        }
        if (mode == TAG) {
            tagname = vals[j];
            props = {
            };
            mode = PROPS;
        } else if (mode == TEXT) {
            gotText(!vals[j]);
            listpush(vals[j]);
        } else if (mode == PROPS) props = {
            ...props,
            ...vals[j]
        };
        else if (mode == PROPVAL) gotProp(vals[j]);
        else if (mode == PROPVALSTR) buffer += vals[j];
        else if (mode == NEXT && vals[j] != null) listpush(vals[j]);
    }
    list = list.flat(2);
    return list.length > 1 ? list : list[0];
};
exports.default = (strs, ...vals)=>parse(strs, vals)
;

},{"hyperapp":"gtMBc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2kEVy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscriptions", ()=>_subscriptions
);
parcelHelpers.export(exports, "effects", ()=>_effects
);
var _withRouter = require("./withRouter");
var _withRouterDefault = parcelHelpers.interopDefault(_withRouter);
var _subscriptions = require("./withRouter/subscriptions");
var _effects = require("./withRouter/effects");
exports.default = _withRouterDefault.default;

},{"./withRouter":"6wPzo","./withRouter/subscriptions":"1WY8u","./withRouter/effects":"2fVQy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6wPzo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pathToRegexp = require("path-to-regexp");
var _subscriptions = require("./subscriptions");
const ensureStartsWithSlash = (part)=>`/${part.replace(/^\/+/, '')}`
;
const routesToArray = ({ routes: routesObject , baseUrl  })=>Object.keys(routesObject).reduce((routes, initialPath)=>{
        const path = ensureStartsWithSlash([
            baseUrl.replace(/.+(\/$)/, ''),
            initialPath.replace(/^\/+/, ''), 
        ].map(ensureStartsWithSlash).join(''));
        const route = {
            ...routesObject[initialPath],
            path,
            match: _pathToRegexp.match(path)
        };
        return [
            ...routes,
            route, 
        ];
    }, [])
;
exports.default = (app)=>({ router , ...rest })=>{
        const originalSubscriptions = rest.subscriptions ? rest.subscriptions : ()=>[]
        ;
        const routes = routesToArray({
            baseUrl: '',
            ...router
        });
        return app({
            ...rest,
            subscriptions: (state)=>[
                    ...originalSubscriptions(state),
                    _subscriptions.Push({
                        routes,
                        RouteAction: router.RouteAction
                    }),
                    !router.disableAnchorCapture && _subscriptions.Anchor({
                        routes
                    }), 
                ]
        });
    }
;

},{"path-to-regexp":"3AidT","./subscriptions":"1WY8u","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3AidT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parse a string for the raw tokens.
 */ parcelHelpers.export(exports, "parse", ()=>parse
);
/**
 * Compile a string to a template function for the path.
 */ parcelHelpers.export(exports, "compile", ()=>compile
);
/**
 * Expose a method for transforming tokens into the path function.
 */ parcelHelpers.export(exports, "tokensToFunction", ()=>tokensToFunction
);
/**
 * Create path match function from `path-to-regexp` spec.
 */ parcelHelpers.export(exports, "match", ()=>match
);
/**
 * Create a path match function from `path-to-regexp` output.
 */ parcelHelpers.export(exports, "regexpToFunction", ()=>regexpToFunction
);
/**
 * Expose a function for taking tokens and returning a RegExp.
 */ parcelHelpers.export(exports, "tokensToRegexp", ()=>tokensToRegexp
);
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */ parcelHelpers.export(exports, "pathToRegexp", ()=>pathToRegexp
);
/**
 * Tokenize input string.
 */ function lexer(str) {
    var tokens = [];
    var i = 0;
    while(i < str.length){
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while(j < str.length){
                var code = str.charCodeAt(j);
                if (// `0-9`
                code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError("Missing parameter name at " + i);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") throw new TypeError("Pattern cannot start with \"?\" at " + j);
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") throw new TypeError("Capturing groups are not allowed at " + j);
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern) throw new TypeError("Missing pattern at " + i);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
function parse(str, options) {
    if (options === void 0) options = {
    };
    var tokens = lexer(str);
    var _a1 = options.prefixes, prefixes = _a1 === void 0 ? "./" : _a1;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result1 = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    var mustConsume = function(type) {
        var value = tryConsume(type);
        if (value !== undefined) return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function() {
        var result = "";
        var value;
        // tslint:disable-next-line
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))result += value;
        return result;
    };
    while(i < tokens.length){
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result1.push(path);
                path = "";
            }
            result1.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value1 = char || tryConsume("ESCAPED_CHAR");
        if (value1) {
            path += value1;
            continue;
        }
        if (path) {
            result1.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result1.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result1;
}
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
function tokensToFunction(tokens, options) {
    if (options === void 0) options = {
    };
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function(token) {
        if (typeof token === "object") return new RegExp("^(?:" + token.pattern + ")$", reFlags);
    });
    return function(data) {
        var path = "";
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for(var j = 0; j < value.length; j++){
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
    if (options === void 0) options = {
    };
    var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
    } : _a;
    return function(pathname) {
        var m = re.exec(pathname);
        if (!m) return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function(i) {
            // tslint:disable-next-line
            if (m[i] === undefined) return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
        };
        for(var i = 1; i < m.length; i++)_loop_1(i);
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
/**
 * Escape a regular expression string.
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) options = {
    };
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
    } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        if (typeof token === "string") route += escapeString(encode(token));
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    } else route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                } else route += "(" + token.pattern + ")" + token.modifier;
            } else route += "(?:" + prefix + suffix + ")" + token.modifier;
        }
    }
    if (end) {
        if (!strict) route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        if (!isEndDelimited) route += "(?=" + delimiter + "|" + endsWith + ")";
    }
    return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1WY8u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Push", ()=>Push
);
parcelHelpers.export(exports, "Anchor", ()=>Anchor
);
var _const = require("./const");
var _navigate = require("./lib/navigate");
const makeFindRouteAndMatch = (routes)=>(href)=>{
        let route;
        for (route of routes){
            const match = route.match(href);
            if (!match) continue;
            return {
                route,
                match
            };
        }
        return null;
    }
;
const PushFX = (dispatch, props)=>{
    let currentRoute = {
    };
    const findRouteAndMatch = makeFindRouteAndMatch(props.routes);
    const setCurrentRoute = (route, match)=>{
        if (currentRoute.OnLeave) dispatch(currentRoute.OnLeave, currentRoute.params);
        if (props.RouteAction) dispatch(props.RouteAction, {
            params: match.params,
            path: match.path
        });
        currentRoute = {
            ...route,
            params: match.params
        };
        if (currentRoute.OnEnter) dispatch(currentRoute.OnEnter, currentRoute.params);
    };
    const onPush = (route, match)=>{
        setCurrentRoute(route, match);
        window.history.pushState({
        }, '', match.path);
    };
    const onReplace = (route, match)=>{
        setCurrentRoute(route, match);
        window.history.replaceState({
        }, '', match.path);
    };
    const getNavigateMethod = (type)=>{
        switch(type){
            case 'replace':
                return onReplace;
            default:
                return onPush;
        }
    };
    const onNavigate = (event)=>{
        const method = getNavigateMethod(event.detail.type);
        const result = findRouteAndMatch(event.detail.href);
        return method(result.route, result.match);
    };
    document.addEventListener(_const.ROUTER_EVENT, onNavigate);
    const onPop = (event)=>{
        const result = findRouteAndMatch(event.originalTarget.location.pathname);
        return setCurrentRoute(result.route, result.match);
    };
    window.addEventListener('popstate', onPop);
    const init = ()=>{
        return onPop({
            originalTarget: window
        });
    };
    setTimeout(init, 0);
    return ()=>{
        document.removeEventListener(_const.ROUTER_EVENT, onNavigate);
        window.removeEventListener('popstate', onPop);
    };
};
const Push = (props)=>[
        PushFX,
        props
    ]
;
const AnchorFX = (_dispatch, props)=>{
    const findRouteAndMatch = makeFindRouteAndMatch(props.routes);
    const onClick = (event)=>{
        if (!event.target.matches('a')) return null;
        const href = event.target.getAttribute('href');
        if (!findRouteAndMatch(href)) return null;
        event.preventDefault();
        return _navigate.navigate(href, {
            type: 'push'
        });
    };
    document.addEventListener('click', onClick);
    return ()=>{
        document.removeEventListener('click', onClick);
    };
};
const Anchor = (props)=>[
        AnchorFX,
        props
    ]
;

},{"./const":"962Qh","./lib/navigate":"8rqB4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"962Qh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ROUTER_EVENT", ()=>ROUTER_EVENT
);
const ROUTER_EVENT = 'hyperapp-router-navigate';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8rqB4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navigate", ()=>navigate
);
var _const = require("../const");
const navigate = (href, options = {
    type: 'push'
})=>{
    const event = new CustomEvent(_const.ROUTER_EVENT, {
        detail: {
            ...options,
            href
        }
    });
    document.dispatchEvent(event);
};

},{"../const":"962Qh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2fVQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Navigate", ()=>Navigate
);
var _navigate = require("./lib/navigate");
const NavigateFX = (_dispatch, href)=>{
    _navigate.navigate(href);
};
const Navigate = (props)=>[
        NavigateFX,
        props, 
    ]
;

},{"./lib/navigate":"8rqB4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cF9fA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _home = require("./pages/home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _xbull = require("./pages/xbull");
var _xbullDefault = parcelHelpers.interopDefault(_xbull);
var _freighter = require("./pages/freighter");
var _freighterDefault = parcelHelpers.interopDefault(_freighter);
var _albedo = require("./pages/albedo");
var _albedoDefault = parcelHelpers.interopDefault(_albedo);
const components = {
    homePage: _homeDefault.default,
    xbullPage: _xbullDefault.default,
    freighterPage: _freighterDefault.default,
    albedoPage: _albedoDefault.default
};
exports.default = components;

},{"./pages/home":"2Cslu","./pages/xbull":"eRIZp","./pages/freighter":"l1WxI","./pages/albedo":"xv6t4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2Cslu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hyperlit = require("hyperlit");
var _hyperlitDefault = parcelHelpers.interopDefault(_hyperlit);
const homePage = _hyperlitDefault.default`<div>
  <ul>
    <button><a href="/xbull">Connect with xBull</a></button>
    <button><a href="/albedo">Connect with Albedo</a></button>
    <button><a href="/freighter">Connect with Freighter</a></button>
  </ul>
</div>`;
exports.default = homePage;

},{"hyperlit":"2IpSX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eRIZp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hyperlit = require("hyperlit");
var _hyperlitDefault = parcelHelpers.interopDefault(_hyperlit);
const xbullPage = _hyperlitDefault.default`<div>XBULL</div>`;
exports.default = xbullPage;

},{"hyperlit":"2IpSX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l1WxI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hyperlit = require("hyperlit");
var _hyperlitDefault = parcelHelpers.interopDefault(_hyperlit);
const freighterPage = _hyperlitDefault.default`<div>FREIGHTER</div>`;
exports.default = freighterPage;

},{"hyperlit":"2IpSX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"xv6t4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hyperlit = require("hyperlit");
var _hyperlitDefault = parcelHelpers.interopDefault(_hyperlit);
const albedoPage = _hyperlitDefault.default`<div>ALBEDO</div>`;
exports.default = albedoPage;

},{"hyperlit":"2IpSX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["d7IaF","ik5cl"], "ik5cl", "parcelRequire60fe")

//# sourceMappingURL=index.8489a560.js.map
