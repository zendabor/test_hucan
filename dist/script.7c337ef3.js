// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script/index.js":[function(require,module,exports) {
document.querySelector(".header__btn").onclick = function (e) {
  e.target.classList.toggle('active');
  document.querySelector('.hookah__nav').classList.toggle('active');
  document.querySelector('.wrapper').classList.toggle('active');
};

var btn = document.querySelectorAll('.wrapper__btn');
var content = document.querySelectorAll('.content');

function f1(e) {
  e.preventDefault();

  for (var i = 0; i < btn.length; i++) {
    btn[i].classList.add('active');
    content[i].classList.add('active');

    if (btn[i] !== e.target) {
      btn[i].classList.remove('active');
      content[i].classList.remove('active');
    }
  }
}

btn.forEach(function (e) {
  return e.addEventListener('mouseover', f1);
});

document.querySelectorAll('.wrapper__btn').onclick = function (e) {
  e.preventDefault();
  document.querySelector('.wrapper__form').classList.add('active');
};

document.querySelector('.form__close').onclick = function (e) {
  e.preventDefault();
  document.querySelector('.wrapper__form').classList.remove('active');
};

var main = document.querySelectorAll('.wrapper__btn');
var betta = document.querySelectorAll('.wrapper__form');

function f2(e) {
  e.preventDefault();

  for (var i = 0; i < main.length; i++) {
    betta[i].classList.remove('active');

    if (e.target === main[i]) {
      betta[i].classList.add('active');
    }
  }
}

main.forEach(function (e) {
  return e.addEventListener('click', f2);
});
},{}]},{},["script/index.js"], "moduleName")
//# sourceMappingURL=script.7c337ef3.js.map