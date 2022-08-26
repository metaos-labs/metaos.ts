import Axios from 'axios';
import qs from 'qs';
import Decimal from 'decimal.js';
import { Decimal as Decimal$1 } from '@cosmjs/math';
import moment from 'moment';
import { Bech32, toUtf8, fromBase64 } from '@cosmjs/encoding';
import { sha256 } from '@cosmjs/crypto';
import invariant from 'tiny-invariant';
import { Registry } from '@cosmjs/proto-signing';
import { Any as Any$1 } from 'cosmjs-types/google/protobuf/any';
import Long from 'long';
import '@improbable-eng/grpc-web';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import 'browser-headers';
import { SigningStargateClient } from '@cosmjs/stargate';

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var APIRequester = /*#__PURE__*/function () {
  function APIRequester(baseURL) {
    this.axios = void 0;
    this.axios = Axios.create({
      baseURL: baseURL,
      headers: {
        Accept: "application/json"
      },
      timeout: 60000
    });
  }

  var _proto = APIRequester.prototype;

  _proto.get = /*#__PURE__*/function () {
    var _get = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint, params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (params === void 0) {
                params = {};
              }

              return _context.abrupt("return", this.axios.get(endpoint, {
                params: params
              }).then(function (d) {
                return toCamelCase(d.data);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function get(_x, _x2) {
      return _get.apply(this, arguments);
    }

    return get;
  }();

  _proto.post = /*#__PURE__*/function () {
    var _post = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(endpoint, data) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.axios.post(endpoint, data).then(function (d) {
                return toCamelCase(d.data);
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function post(_x3, _x4) {
      return _post.apply(this, arguments);
    }

    return post;
  }();

  return APIRequester;
}();

function toCamelCase(obj) {
  var rtn = obj;

  if (!rtn) {
    return rtn;
  } else if (typeof obj === 'object') {
    if (obj instanceof Array) {
      rtn = obj.map(toCamelCase);
    } else {
      rtn = {};

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          var newKey = key.replace(/(_\w)/g, function (k) {
            return k[1].toUpperCase();
          });
          rtn[newKey] = toCamelCase(obj[key]);
        }
      }
    }
  }

  return rtn;
}

var BaseAPI = function BaseAPI(request) {
  this.request = void 0;
  this.request = request;
};

var AuthAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(AuthAPI, _BaseAPI);

  function AuthAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = AuthAPI.prototype;

  _proto.accounts = /*#__PURE__*/function () {
    var _accounts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(accountAddress) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/cosmos/auth/v1beta1/accounts/" + accountAddress));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function accounts(_x) {
      return _accounts.apply(this, arguments);
    }

    return accounts;
  }();

  return AuthAPI;
}(BaseAPI);

var AuthzAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(AuthzAPI, _BaseAPI);

  function AuthzAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = AuthzAPI.prototype;

  _proto.grants = /*#__PURE__*/function () {
    var _grants = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(granter, grantee, msgTypeUrl, params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/cosmos/authz/v1beta1/grants", _extends({
                granter: granter,
                grantee: grantee,
                msg_type_url: msgTypeUrl
              }, params)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function grants(_x, _x2, _x3, _x4) {
      return _grants.apply(this, arguments);
    }

    return grants;
  }();

  return AuthzAPI;
}(BaseAPI);

var BankAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(BankAPI, _BaseAPI);

  function BankAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = BankAPI.prototype;

  _proto.allBalances = /*#__PURE__*/function () {
    var _allBalances = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(accountAddress, params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/cosmos/bank/v1beta1/balances/" + accountAddress, _extends({}, params)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function allBalances(_x, _x2) {
      return _allBalances.apply(this, arguments);
    }

    return allBalances;
  }();

  _proto.balance = /*#__PURE__*/function () {
    var _balance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(denom, accountAddress) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/cosmos/bank/v1beta1/balances/" + accountAddress + "/by_denom", {
                denom: denom
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function balance(_x3, _x4) {
      return _balance.apply(this, arguments);
    }

    return balance;
  }();

  _proto.totalSupply = /*#__PURE__*/function () {
    var _totalSupply = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(params) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/cosmos/bank/v1beta1/supply", _extends({}, params)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function totalSupply(_x5) {
      return _totalSupply.apply(this, arguments);
    }

    return totalSupply;
  }();

  _proto.supplyOf = /*#__PURE__*/function () {
    var _supplyOf = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(denom) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request.get("/cosmos/bank/v1beta1/supply/" + denom));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function supplyOf(_x6) {
      return _supplyOf.apply(this, arguments);
    }

    return supplyOf;
  }();

  return BankAPI;
}(BaseAPI);

var DeflationAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(DeflationAPI, _BaseAPI);

  function DeflationAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = DeflationAPI.prototype;

  _proto.allRepurchase = /*#__PURE__*/function () {
    var _allRepurchase = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/metaos-labs/metaos/deflation/repurchases", _extends({}, params)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function allRepurchase(_x) {
      return _allRepurchase.apply(this, arguments);
    }

    return allRepurchase;
  }();

  _proto.getRepurchase = /*#__PURE__*/function () {
    var _getRepurchase = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(denom) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/metaos-labs/metaos/deflation/repurchases/" + denom));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getRepurchase(_x2) {
      return _getRepurchase.apply(this, arguments);
    }

    return getRepurchase;
  }();

  _proto.params = /*#__PURE__*/function () {
    var _params = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/metaos-labs/metaos/deflation/params"));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function params() {
      return _params.apply(this, arguments);
    }

    return params;
  }();

  return DeflationAPI;
}(BaseAPI);

var GovAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(GovAPI, _BaseAPI);

  function GovAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = GovAPI.prototype;

  _proto.proposals = /*#__PURE__*/function () {
    var _proposals = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/cosmos/gov/v1beta1/proposals", _extends({}, params)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function proposals(_x) {
      return _proposals.apply(this, arguments);
    }

    return proposals;
  }();

  _proto.proposal = /*#__PURE__*/function () {
    var _proposal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(proposalId) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/cosmos/gov/v1beta1/proposals/" + proposalId));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function proposal(_x2) {
      return _proposal.apply(this, arguments);
    }

    return proposal;
  }();

  _proto.deposits = /*#__PURE__*/function () {
    var _deposits = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(proposalId, params) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/cosmos/gov/v1beta1/proposals/" + proposalId + "/deposits", _extends({}, params)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function deposits(_x3, _x4) {
      return _deposits.apply(this, arguments);
    }

    return deposits;
  }();

  _proto.deposit = /*#__PURE__*/function () {
    var _deposit = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(proposalId, depositor) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request.get("/cosmos/gov/v1beta1/proposals/" + proposalId + "/deposits/" + depositor));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function deposit(_x5, _x6) {
      return _deposit.apply(this, arguments);
    }

    return deposit;
  }();

  _proto.votes = /*#__PURE__*/function () {
    var _votes = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(proposalId, params) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.request.get("/cosmos/gov/v1beta1/proposals/" + proposalId + "/votes", _extends({}, params)));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function votes(_x7, _x8) {
      return _votes.apply(this, arguments);
    }

    return votes;
  }();

  _proto.vote = /*#__PURE__*/function () {
    var _vote = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(proposalId, voter) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.request.get("/cosmos/gov/v1beta1/proposals/" + proposalId + "/votes/" + voter));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function vote(_x9, _x10) {
      return _vote.apply(this, arguments);
    }

    return vote;
  }();

  _proto.tallyResult = /*#__PURE__*/function () {
    var _tallyResult = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(proposalId) {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.request.get("/cosmos/gov/v1beta1/proposals/" + proposalId + "/tally"));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function tallyResult(_x11) {
      return _tallyResult.apply(this, arguments);
    }

    return tallyResult;
  }();

  _proto.params = /*#__PURE__*/function () {
    var _params = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(paramsType) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.request.get("/cosmos/gov/v1beta1/params/" + paramsType));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function params(_x12) {
      return _params.apply(this, arguments);
    }

    return params;
  }();

  return GovAPI;
}(BaseAPI);

var MintAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(MintAPI, _BaseAPI);

  function MintAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = MintAPI.prototype;

  _proto.inflation = /*#__PURE__*/function () {
    var _inflation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/cosmos/mint/v1beta1/inflation"));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function inflation() {
      return _inflation.apply(this, arguments);
    }

    return inflation;
  }();

  _proto.annualProvisions = /*#__PURE__*/function () {
    var _annualProvisions = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("cosmos/mint/v1beta1/annual_provisions"));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function annualProvisions() {
      return _annualProvisions.apply(this, arguments);
    }

    return annualProvisions;
  }();

  _proto.params = /*#__PURE__*/function () {
    var _params = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/cosmos/mint/v1beta1/params"));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function params() {
      return _params.apply(this, arguments);
    }

    return params;
  }();

  return MintAPI;
}(BaseAPI);

var PoolIncentiveAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(PoolIncentiveAPI, _BaseAPI);

  function PoolIncentiveAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = PoolIncentiveAPI.prototype;

  _proto.allLiquidityPoolReward = /*#__PURE__*/function () {
    var _allLiquidityPoolReward = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/liquidity_pool_rewards", _extends({}, params)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function allLiquidityPoolReward(_x) {
      return _allLiquidityPoolReward.apply(this, arguments);
    }

    return allLiquidityPoolReward;
  }();

  _proto.getLiquidityPoolReward = /*#__PURE__*/function () {
    var _getLiquidityPoolReward = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(address) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/liquidity_pool_rewards/" + address));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getLiquidityPoolReward(_x2) {
      return _getLiquidityPoolReward.apply(this, arguments);
    }

    return getLiquidityPoolReward;
  }();

  _proto.allLiquidityRewardConfig = /*#__PURE__*/function () {
    var _allLiquidityRewardConfig = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(params) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/liquidity_reward_configs", _extends({}, params)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function allLiquidityRewardConfig(_x3) {
      return _allLiquidityRewardConfig.apply(this, arguments);
    }

    return allLiquidityRewardConfig;
  }();

  _proto.getLiquidityRewardConfig = /*#__PURE__*/function () {
    var _getLiquidityRewardConfig = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/liquidity_reward_configs/" + id));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getLiquidityRewardConfig(_x4) {
      return _getLiquidityRewardConfig.apply(this, arguments);
    }

    return getLiquidityRewardConfig;
  }();

  _proto.allLiquidityRewardDenomR = /*#__PURE__*/function () {
    var _allLiquidityRewardDenomR = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(params) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/liquidity_reward_denoms", _extends({}, params)));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function allLiquidityRewardDenomR(_x5) {
      return _allLiquidityRewardDenomR.apply(this, arguments);
    }

    return allLiquidityRewardDenomR;
  }();

  _proto.getLiquidityRewardDenom = /*#__PURE__*/function () {
    var _getLiquidityRewardDenom = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(denom) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/liquidity_reward_denoms/by_denom", {
                denom: denom
              }));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function getLiquidityRewardDenom(_x6) {
      return _getLiquidityRewardDenom.apply(this, arguments);
    }

    return getLiquidityRewardDenom;
  }();

  _proto.params = /*#__PURE__*/function () {
    var _params = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/params"));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function params() {
      return _params.apply(this, arguments);
    }

    return params;
  }();

  _proto.allRandSwapAccountReward = /*#__PURE__*/function () {
    var _allRandSwapAccountReward = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(params) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/rand_swap_account_rewards", _extends({}, params)));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function allRandSwapAccountReward(_x7) {
      return _allRandSwapAccountReward.apply(this, arguments);
    }

    return allRandSwapAccountReward;
  }();

  _proto.getRandSwapAccountReward = /*#__PURE__*/function () {
    var _getRandSwapAccountReward = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(account, denom) {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/rand_swap_account_rewards/" + account + "/by_denom", {
                denom: denom
              }));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function getRandSwapAccountReward(_x8, _x9) {
      return _getRandSwapAccountReward.apply(this, arguments);
    }

    return getRandSwapAccountReward;
  }();

  _proto.allRandSwapPoolReward = /*#__PURE__*/function () {
    var _allRandSwapPoolReward = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(params) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/rand_swap_pool_rewards", _extends({}, params)));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function allRandSwapPoolReward(_x10) {
      return _allRandSwapPoolReward.apply(this, arguments);
    }

    return allRandSwapPoolReward;
  }();

  _proto.getRandSwapPoolReward = /*#__PURE__*/function () {
    var _getRandSwapPoolReward = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(address) {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/rand_swap_pool_rewards/" + address));

            case 1:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function getRandSwapPoolReward(_x11) {
      return _getRandSwapPoolReward.apply(this, arguments);
    }

    return getRandSwapPoolReward;
  }();

  _proto.allRandSwapRewardConfig = /*#__PURE__*/function () {
    var _allRandSwapRewardConfig = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(params) {
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/rand_swap_reward_configs", _extends({}, params)));

            case 1:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function allRandSwapRewardConfig(_x12) {
      return _allRandSwapRewardConfig.apply(this, arguments);
    }

    return allRandSwapRewardConfig;
  }();

  _proto.getRandSwapRewardConfig = /*#__PURE__*/function () {
    var _getRandSwapRewardConfig = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(id) {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/rand_swap_reward_configs/" + id));

            case 1:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function getRandSwapRewardConfig(_x13) {
      return _getRandSwapRewardConfig.apply(this, arguments);
    }

    return getRandSwapRewardConfig;
  }();

  _proto.allRandSwapRewardDenom = /*#__PURE__*/function () {
    var _allRandSwapRewardDenom = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(params) {
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/rand_swap_reward_denoms", _extends({}, params)));

            case 1:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function allRandSwapRewardDenom(_x14) {
      return _allRandSwapRewardDenom.apply(this, arguments);
    }

    return allRandSwapRewardDenom;
  }();

  _proto.getRandSwapRewardDenom = /*#__PURE__*/function () {
    var _getRandSwapRewardDenom = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(denom) {
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              return _context15.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/rand_swap_reward_denoms/by_denom", {
                denom: denom
              }));

            case 1:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function getRandSwapRewardDenom(_x15) {
      return _getRandSwapRewardDenom.apply(this, arguments);
    }

    return getRandSwapRewardDenom;
  }();

  _proto.allRandSwapRewardReveal = /*#__PURE__*/function () {
    var _allRandSwapRewardReveal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(params) {
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/rand_swap_reward_reveals", _extends({}, params)));

            case 1:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function allRandSwapRewardReveal(_x16) {
      return _allRandSwapRewardReveal.apply(this, arguments);
    }

    return allRandSwapRewardReveal;
  }();

  _proto.getRandSwapRewardReveal = /*#__PURE__*/function () {
    var _getRandSwapRewardReveal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(configId, round) {
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              return _context17.abrupt("return", this.request.get("/metaos-labs/metaos/pool-incentives/rand_swap_reward_reveals/" + configId + "/" + round));

            case 1:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    function getRandSwapRewardReveal(_x17, _x18) {
      return _getRandSwapRewardReveal.apply(this, arguments);
    }

    return getRandSwapRewardReveal;
  }();

  return PoolIncentiveAPI;
}(BaseAPI);

var SlashingAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(SlashingAPI, _BaseAPI);

  function SlashingAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = SlashingAPI.prototype;

  _proto.signingInfos = /*#__PURE__*/function () {
    var _signingInfos = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/cosmos/slashing/v1beta1/signing_infos", _extends({}, params)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function signingInfos(_x) {
      return _signingInfos.apply(this, arguments);
    }

    return signingInfos;
  }();

  _proto.signingInfo = /*#__PURE__*/function () {
    var _signingInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(valConsAddress) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/cosmos/slashing/v1beta1/signing_infos/" + valConsAddress));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function signingInfo(_x2) {
      return _signingInfo.apply(this, arguments);
    }

    return signingInfo;
  }();

  _proto.params = /*#__PURE__*/function () {
    var _params = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/cosmos/slashing/v1beta1/params"));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function params() {
      return _params.apply(this, arguments);
    }

    return params;
  }();

  return SlashingAPI;
}(BaseAPI);

var StakingAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(StakingAPI, _BaseAPI);

  function StakingAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = StakingAPI.prototype;

  _proto.delegations = /*#__PURE__*/function () {
    var _delegations = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(delegator, params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/cosmos/staking/v1beta1/delegations/" + delegator, _extends({}, params)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function delegations(_x, _x2) {
      return _delegations.apply(this, arguments);
    }

    return delegations;
  }();

  _proto.redelegations = /*#__PURE__*/function () {
    var _redelegations = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(delegator, params) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/cosmos/staking/v1beta1/delegators/" + delegator + "/redelegations", _extends({}, params)));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function redelegations(_x3, _x4) {
      return _redelegations.apply(this, arguments);
    }

    return redelegations;
  }();

  _proto.unbondingDelegations = /*#__PURE__*/function () {
    var _unbondingDelegations = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(delegator, params) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/cosmos/staking/v1beta1/delegators/" + delegator + "/unbonding_redelegations", _extends({}, params)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function unbondingDelegations(_x5, _x6) {
      return _unbondingDelegations.apply(this, arguments);
    }

    return unbondingDelegations;
  }();

  _proto.delegatorDelegations = /*#__PURE__*/function () {
    var _delegatorDelegations = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(delegator, validator, params) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request.get("/cosmos/staking/v1beta1/delegations/" + validator, _extends({}, params)));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function delegatorDelegations(_x7, _x8, _x9) {
      return _delegatorDelegations.apply(this, arguments);
    }

    return delegatorDelegations;
  }();

  _proto.delegationsByDelegator = /*#__PURE__*/function () {
    var _delegationsByDelegator = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(delegator, params) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.request.get("/cosmos/staking/v1beta1/delegators/" + delegator + "/validators", _extends({}, params)));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function delegationsByDelegator(_x10, _x11) {
      return _delegationsByDelegator.apply(this, arguments);
    }

    return delegationsByDelegator;
  }();

  _proto.delegationsByDelegatorValidator = /*#__PURE__*/function () {
    var _delegationsByDelegatorValidator = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(delegator, validator, params) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.request.get("/cosmos/staking/v1beta1/delegators/" + delegator + "/validators/" + validator, _extends({}, params)));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function delegationsByDelegatorValidator(_x12, _x13, _x14) {
      return _delegationsByDelegatorValidator.apply(this, arguments);
    }

    return delegationsByDelegatorValidator;
  }();

  _proto.validators = /*#__PURE__*/function () {
    var _validators = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(params) {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.request.get("/cosmos/staking/v1beta1/validators", _extends({}, params)));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function validators(_x15) {
      return _validators.apply(this, arguments);
    }

    return validators;
  }();

  _proto.validatorsByValidator = /*#__PURE__*/function () {
    var _validatorsByValidator = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(validator) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.request.get("/cosmos/staking/v1beta1/validators/" + validator));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function validatorsByValidator(_x16) {
      return _validatorsByValidator.apply(this, arguments);
    }

    return validatorsByValidator;
  }();

  _proto.validatorsDelegationsByValidator = /*#__PURE__*/function () {
    var _validatorsDelegationsByValidator = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(validator) {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", this.request.get("/cosmos/staking/v1beta1/validators/" + validator + "/delegations"));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function validatorsDelegationsByValidator(_x17) {
      return _validatorsDelegationsByValidator.apply(this, arguments);
    }

    return validatorsDelegationsByValidator;
  }();

  _proto.validatorsDelegationsByValidatorDelegator = /*#__PURE__*/function () {
    var _validatorsDelegationsByValidatorDelegator = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(validator, delegator) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", this.request.get("/cosmos/staking/v1beta1/validators/" + validator + "/delegations/" + delegator));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function validatorsDelegationsByValidatorDelegator(_x18, _x19) {
      return _validatorsDelegationsByValidatorDelegator.apply(this, arguments);
    }

    return validatorsDelegationsByValidatorDelegator;
  }();

  _proto.validatorsUnbondingDelegationsByValidatorDelegator = /*#__PURE__*/function () {
    var _validatorsUnbondingDelegationsByValidatorDelegator = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(validator, delegator) {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", this.request.get("/cosmos/staking/v1beta1/validators/" + validator + "/delegations/" + delegator + "/unbonding_delegation"));

            case 1:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function validatorsUnbondingDelegationsByValidatorDelegator(_x20, _x21) {
      return _validatorsUnbondingDelegationsByValidatorDelegator.apply(this, arguments);
    }

    return validatorsUnbondingDelegationsByValidatorDelegator;
  }();

  _proto.validatorsUnbondingDelegations = /*#__PURE__*/function () {
    var _validatorsUnbondingDelegations = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(validator) {
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", this.request.get("/cosmos/staking/v1beta1/validators/" + validator + "/unbonding_delegations"));

            case 1:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function validatorsUnbondingDelegations(_x22) {
      return _validatorsUnbondingDelegations.apply(this, arguments);
    }

    return validatorsUnbondingDelegations;
  }();

  _proto.pool = /*#__PURE__*/function () {
    var _pool = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", this.request.get("/cosmos/staking/v1beta1/pool"));

            case 1:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function pool() {
      return _pool.apply(this, arguments);
    }

    return pool;
  }();

  _proto.params = /*#__PURE__*/function () {
    var _params = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", this.request.get("/cosmos/staking/v1beta1/params"));

            case 1:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function params() {
      return _params.apply(this, arguments);
    }

    return params;
  }();

  return StakingAPI;
}(BaseAPI);

var SwapAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(SwapAPI, _BaseAPI);

  function SwapAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = SwapAPI.prototype;

  _proto.allCorePool = /*#__PURE__*/function () {
    var _allCorePool = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/metaos-labs/metaos/swap/core_pools", _extends({}, params)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function allCorePool(_x) {
      return _allCorePool.apply(this, arguments);
    }

    return allCorePool;
  }();

  _proto.getCorePool = /*#__PURE__*/function () {
    var _getCorePool = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(address) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/metaos-labs/metaos/swap/core_pools/" + address));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getCorePool(_x2) {
      return _getCorePool.apply(this, arguments);
    }

    return getCorePool;
  }();

  _proto.liquidityPositionByIds = /*#__PURE__*/function () {
    var _liquidityPositionByIds = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(tokenIds) {
      var params;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              params = qs.stringify({
                tokenIds: tokenIds
              }, {
                indices: false
              });
              return _context3.abrupt("return", this.request.get("/metaos-labs/metaos/swap/liquidity_position_by_ids?" + params));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function liquidityPositionByIds(_x3) {
      return _liquidityPositionByIds.apply(this, arguments);
    }

    return liquidityPositionByIds;
  }();

  _proto.liquidityPositionById = /*#__PURE__*/function () {
    var _liquidityPositionById = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(tokenId) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request.get("/metaos-labs/metaos/swap/liquidity_positions/" + tokenId));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function liquidityPositionById(_x4) {
      return _liquidityPositionById.apply(this, arguments);
    }

    return liquidityPositionById;
  }();

  _proto.getLiquidityPositionTokenUri = /*#__PURE__*/function () {
    var _getLiquidityPositionTokenUri = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(tokenId) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.request.get("/metaos-labs/metaos/swap/liquidity_positions/" + tokenId + "/token_uri"));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getLiquidityPositionTokenUri(_x5) {
      return _getLiquidityPositionTokenUri.apply(this, arguments);
    }

    return getLiquidityPositionTokenUri;
  }();

  _proto.allLiquidityPositionOwner = /*#__PURE__*/function () {
    var _allLiquidityPositionOwner = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(accountAddress, skip_zero_liquidity) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.request.get("/metaos-labs/metaos/swap/liquidity_positions_owner/" + accountAddress, {
                skip_zero_liquidity: skip_zero_liquidity
              }));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function allLiquidityPositionOwner(_x6, _x7) {
      return _allLiquidityPositionOwner.apply(this, arguments);
    }

    return allLiquidityPositionOwner;
  }();

  _proto.params = /*#__PURE__*/function () {
    var _params = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.request.get("/metaos-labs/metaos/swap/params"));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function params() {
      return _params.apply(this, arguments);
    }

    return params;
  }();

  _proto.allPoolFee = /*#__PURE__*/function () {
    var _allPoolFee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(params) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pool/fees", _extends({}, params)));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function allPoolFee(_x8) {
      return _allPoolFee.apply(this, arguments);
    }

    return allPoolFee;
  }();

  _proto.getPoolFee = /*#__PURE__*/function () {
    var _getPoolFee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(fee) {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pool/fees/" + fee));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function getPoolFee(_x9) {
      return _getPoolFee.apply(this, arguments);
    }

    return getPoolFee;
  }();

  _proto.allPoolObservation = /*#__PURE__*/function () {
    var _allPoolObservation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(params) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pool_observations", _extends({}, params)));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function allPoolObservation(_x10) {
      return _allPoolObservation.apply(this, arguments);
    }

    return allPoolObservation;
  }();

  _proto.allPoolPosition = /*#__PURE__*/function () {
    var _allPoolPosition = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(address, owner, params) {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pool_positions", _extends({
                address: address,
                owner: owner
              }, params)));

            case 1:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function allPoolPosition(_x11, _x12, _x13) {
      return _allPoolPosition.apply(this, arguments);
    }

    return allPoolPosition;
  }()
  /**
   * find pool list by address array
   * @param addresses
   */
  ;

  _proto.poolSlot0Aggregation =
  /*#__PURE__*/
  function () {
    var _poolSlot0Aggregation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(addresses) {
      var params;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              params = qs.stringify({
                addresses: addresses
              }, {
                indices: false
              });
              return _context12.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pool_slot0_aggregations?" + params));

            case 2:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function poolSlot0Aggregation(_x14) {
      return _poolSlot0Aggregation.apply(this, arguments);
    }

    return poolSlot0Aggregation;
  }();

  _proto.allPoolSlot0 = /*#__PURE__*/function () {
    var _allPoolSlot = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(params) {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pool_slot0s", _extends({}, params)));

            case 1:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function allPoolSlot0(_x15) {
      return _allPoolSlot.apply(this, arguments);
    }

    return allPoolSlot0;
  }();

  _proto.allPoolTick = /*#__PURE__*/function () {
    var _allPoolTick = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(address, params) {
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pool_ticks", _extends({
                address: address
              }, params)));

            case 1:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function allPoolTick(_x16, _x17) {
      return _allPoolTick.apply(this, arguments);
    }

    return allPoolTick;
  }();

  _proto.allPool = /*#__PURE__*/function () {
    var _allPool = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(params) {
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              return _context15.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pools", _extends({}, params)));

            case 1:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function allPool(_x18) {
      return _allPool.apply(this, arguments);
    }

    return allPool;
  }();

  _proto.getPool = /*#__PURE__*/function () {
    var _getPool = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(address) {
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pools/" + address));

            case 1:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function getPool(_x19) {
      return _getPool.apply(this, arguments);
    }

    return getPool;
  }();

  _proto.getPoolObservation = /*#__PURE__*/function () {
    var _getPoolObservation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(address, index) {
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              return _context17.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pools/" + address + "/observations/" + index));

            case 1:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    function getPoolObservation(_x20, _x21) {
      return _getPoolObservation.apply(this, arguments);
    }

    return getPoolObservation;
  }();

  _proto.getPoolPosition = /*#__PURE__*/function () {
    var _getPoolPosition = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(address, owner, tickLower, tickUpper) {
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              return _context18.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pools/" + address + "/positions/" + owner + "/" + tickLower + "/" + tickUpper));

            case 1:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function getPoolPosition(_x22, _x23, _x24, _x25) {
      return _getPoolPosition.apply(this, arguments);
    }

    return getPoolPosition;
  }();

  _proto.getPoolSlot0 = /*#__PURE__*/function () {
    var _getPoolSlot = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(address) {
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              return _context19.abrupt("return", this.request.get("/metaos-labs/metaos/swap/pools/" + address + "/slot0"));

            case 1:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));

    function getPoolSlot0(_x26) {
      return _getPoolSlot.apply(this, arguments);
    }

    return getPoolSlot0;
  }();

  _proto.quoteSwapExactIn = /*#__PURE__*/function () {
    var _quoteSwapExactIn = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(params) {
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              return _context20.abrupt("return", this.request.get("/metaos-labs/metaos/swap/quote_swap_exact_in", _extends({}, params)));

            case 1:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function quoteSwapExactIn(_x27) {
      return _quoteSwapExactIn.apply(this, arguments);
    }

    return quoteSwapExactIn;
  }();

  _proto.quoteSwapExactOut = /*#__PURE__*/function () {
    var _quoteSwapExactOut = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(params) {
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              return _context21.abrupt("return", this.request.get("/metaos-labs/metaos/swap/quote_swap_exact_out", _extends({}, params)));

            case 1:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));

    function quoteSwapExactOut(_x28) {
      return _quoteSwapExactOut.apply(this, arguments);
    }

    return quoteSwapExactOut;
  }();

  return SwapAPI;
}(BaseAPI);

var TendermintAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(TendermintAPI, _BaseAPI);

  function TendermintAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = TendermintAPI.prototype;

  _proto.blockInfo = /*#__PURE__*/function () {
    var _blockInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(height) {
      var url;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = height !== undefined ? "/cosmos/base/tendermint/v1beta1/blocks/" + height : "/cosmos/base/tendermint/v1beta1/blocks/latest";
              return _context.abrupt("return", this.request.get(url));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function blockInfo(_x) {
      return _blockInfo.apply(this, arguments);
    }

    return blockInfo;
  }();

  _proto.nodeInfo = /*#__PURE__*/function () {
    var _nodeInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/cosmos/base/tendermint/v1beta1/node_info"));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function nodeInfo() {
      return _nodeInfo.apply(this, arguments);
    }

    return nodeInfo;
  }();

  _proto.syncing = /*#__PURE__*/function () {
    var _syncing = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/cosmos/base/tendermint/v1beta1/syncing"));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function syncing() {
      return _syncing.apply(this, arguments);
    }

    return syncing;
  }();

  _proto.validatorSet = /*#__PURE__*/function () {
    var _validatorSet = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(height, params) {
      var url;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              url = height !== undefined ? "/cosmos/base/tendermint/v1beta1/validatorsets/" + height : "/cosmos/base/tendermint/v1beta1/validatorsets/latest";
              return _context4.abrupt("return", this.request.get(url, _extends({}, params)));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function validatorSet(_x2, _x3) {
      return _validatorSet.apply(this, arguments);
    }

    return validatorSet;
  }();

  return TendermintAPI;
}(BaseAPI);

var TokenAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(TokenAPI, _BaseAPI);

  function TokenAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = TokenAPI.prototype;

  _proto.allMetadata = /*#__PURE__*/function () {
    var _allMetadata = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/metaos-labs/metaos/token/metadatas", _extends({}, params)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function allMetadata(_x) {
      return _allMetadata.apply(this, arguments);
    }

    return allMetadata;
  }();

  _proto.getMetadata = /*#__PURE__*/function () {
    var _getMetadata = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(denom) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/metaos-labs/metaos/token/metadatas/by_denom", {
                denom: denom
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getMetadata(_x2) {
      return _getMetadata.apply(this, arguments);
    }

    return getMetadata;
  }();

  _proto.allOwnershipConfirmation = /*#__PURE__*/function () {
    var _allOwnershipConfirmation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(params) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/metaos-labs/metaos/token/ownership_confirmations", _extends({}, params)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function allOwnershipConfirmation(_x3) {
      return _allOwnershipConfirmation.apply(this, arguments);
    }

    return allOwnershipConfirmation;
  }();

  _proto.getOwnershipConfirmation = /*#__PURE__*/function () {
    var _getOwnershipConfirmation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(denom) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request.get("/metaos-labs/metaos/token/ownership_confirmations/by_denom", {
                denom: denom
              }));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getOwnershipConfirmation(_x4) {
      return _getOwnershipConfirmation.apply(this, arguments);
    }

    return getOwnershipConfirmation;
  }();

  return TokenAPI;
}(BaseAPI);

var TxAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(TxAPI, _BaseAPI);

  function TxAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = TxAPI.prototype;

  _proto.simulate = /*#__PURE__*/function () {
    var _simulate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.post("/cosmos/tx/v1beta1/simulate", params));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function simulate(_x) {
      return _simulate.apply(this, arguments);
    }

    return simulate;
  }();

  _proto.broadcast = /*#__PURE__*/function () {
    var _broadcast = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tx) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.post("/cosmos/tx/v1beta1/txs", tx));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function broadcast(_x2) {
      return _broadcast.apply(this, arguments);
    }

    return broadcast;
  }();

  _proto.txBlock = /*#__PURE__*/function () {
    var _txBlock = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(height, params) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/cosmos/tx/v1beta1/txs/block/" + height, _extends({}, params)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function txBlock(_x3, _x4) {
      return _txBlock.apply(this, arguments);
    }

    return txBlock;
  }();

  _proto.txInfo = /*#__PURE__*/function () {
    var _txInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(txHash) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request.get("/cosmos/tx/v1beta1/txs/" + txHash));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function txInfo(_x5) {
      return _txInfo.apply(this, arguments);
    }

    return txInfo;
  }();

  _proto.search = /*#__PURE__*/function () {
    var _search = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(options) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.request.get("cosmos/tx/v1beta1/txs", _extends({}, options)));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function search(_x6) {
      return _search.apply(this, arguments);
    }

    return search;
  }();

  return TxAPI;
}(BaseAPI);

var WasmAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(WasmAPI, _BaseAPI);

  function WasmAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = WasmAPI.prototype;

  _proto.codes = /*#__PURE__*/function () {
    var _codes = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/cosmwasm/wasm/v1/code", _extends({}, params)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function codes(_x) {
      return _codes.apply(this, arguments);
    }

    return codes;
  }();

  _proto.code = /*#__PURE__*/function () {
    var _code = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(codeID) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/cosmwasm/wasm/v1/code/" + codeID));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function code(_x2) {
      return _code.apply(this, arguments);
    }

    return code;
  }();

  _proto.contractsByCode = /*#__PURE__*/function () {
    var _contractsByCode = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(codeID, params) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/cosmwasm/wasm/v1/code/" + codeID + "/contracts", _extends({}, params)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function contractsByCode(_x3, _x4) {
      return _contractsByCode.apply(this, arguments);
    }

    return contractsByCode;
  }();

  _proto.contractInfo = /*#__PURE__*/function () {
    var _contractInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(contractAddress) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request.get("/cosmwasm/wasm/v1/contract/" + contractAddress));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function contractInfo(_x5) {
      return _contractInfo.apply(this, arguments);
    }

    return contractInfo;
  }();

  return WasmAPI;
}(BaseAPI);

function to32(value) {
  var arr = value.split(",");
  var len = 32 - arr.length;
  var result = [];
  arr.forEach(function (item) {
    result.push(+item);
  });

  for (var i = 0; i < len; i++) {
    result.unshift(0);
  }

  return result;
}

function deepCopy(source) {
  // if (typeof source != "object") {
  //   return source;
  // }
  // if (source == null) {
  //   return source;
  // }
  // const newObj = source.constructor === Array ? [] as Array<T> : {};
  // for (const i in source) {
  //   newObj[i] = deepCopy(source[i]);
  // }
  // return newObj;
  return JSON.parse(JSON.stringify(source));
}

function encrypt(value, prefix, suffix) {
  if (prefix === void 0) {
    prefix = 6;
  }

  if (suffix === void 0) {
    suffix = 4;
  }

  if (value) {
    return value.substr(0, prefix) + "..." + value.substr(-suffix);
  } else {
    return value;
  }
}

var ONE_DAY_TO_SECONDS = 86400;
var ONE_YEAR_TO_DAYS = 365;

var _FEE_AMOUNT_DETAIL;

var Fee_Amount;

(function (Fee_Amount) {
  Fee_Amount[Fee_Amount["LOWEST"] = 100] = "LOWEST";
  Fee_Amount[Fee_Amount["LOW"] = 500] = "LOW";
  Fee_Amount[Fee_Amount["MEDIUM"] = 3000] = "MEDIUM";
  Fee_Amount[Fee_Amount["HIGH"] = 10000] = "HIGH";
})(Fee_Amount || (Fee_Amount = {}));

var FEE_AMOUNT_DETAIL = (_FEE_AMOUNT_DETAIL = {}, _FEE_AMOUNT_DETAIL[Fee_Amount.LOWEST] = {
  label: "0.01",
  value: Fee_Amount.LOWEST,
  description: "Best for very stable pairs."
}, _FEE_AMOUNT_DETAIL[Fee_Amount.LOW] = {
  label: "0.05",
  value: Fee_Amount.LOW,
  description: "Best for stable pairs."
}, _FEE_AMOUNT_DETAIL[Fee_Amount.MEDIUM] = {
  label: "0.3",
  value: Fee_Amount.MEDIUM,
  description: "Best for most pairs."
}, _FEE_AMOUNT_DETAIL[Fee_Amount.HIGH] = {
  label: "1",
  value: Fee_Amount.HIGH,
  description: "Best for exotic pairs."
}, _FEE_AMOUNT_DETAIL);

var _CHAIN_NAMES, _NETWORK_DETAILS;

var Chain_Id;

(function (Chain_Id) {
  Chain_Id["Mainnet"] = "metaos_99237-1";
  Chain_Id["Testnet"] = "metaos_99237-2";
  Chain_Id["Devnet"] = "metaos_99237-3";
})(Chain_Id || (Chain_Id = {}));

var CHAIN_NAMES = (_CHAIN_NAMES = {}, _CHAIN_NAMES[Chain_Id.Mainnet] = 'Mainnet', _CHAIN_NAMES[Chain_Id.Testnet] = 'Testnet', _CHAIN_NAMES[Chain_Id.Devnet] = 'Devnet', _CHAIN_NAMES);
var NETWORK_DETAILS = (_NETWORK_DETAILS = {}, _NETWORK_DETAILS[Chain_Id.Mainnet] = {
  chainId: 'metaos_99237-1',
  chainName: 'Metaos Mainnet',
  nativeCurrency: {
    base: 'umtos',
    name: 'MetaOS',
    symbol: 'MTOS',
    display_exponent: 18,
    logo_uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2025.png'
  },
  nodeUrl: 'https://node.metaos.im',
  rpcUrl: 'https://tendermint.metaos.im',
  blockExplorerUrl: 'https://scan.metaos.im'
}, _NETWORK_DETAILS[Chain_Id.Testnet] = {
  chainId: 'metaos_99237-2',
  chainName: 'Metaos Mainnet',
  nativeCurrency: {
    base: 'umtos',
    name: 'MetaOS',
    symbol: 'MTOS',
    display_exponent: 18,
    logo_uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2025.png'
  },
  nodeUrl: 'https://node.metaos.im',
  rpcUrl: 'https://tendermint.metaos.im',
  blockExplorerUrl: 'https://scan.metaos.im'
}, _NETWORK_DETAILS[Chain_Id.Devnet] = {
  chainId: 'metaos_99237-3',
  chainName: 'Metaos Mainnet',
  nativeCurrency: {
    base: 'umtos',
    name: 'MetaOS',
    symbol: 'MTOS',
    display_exponent: 18,
    logo_uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2025.png'
  },
  nodeUrl: 'https://node.metaos.im',
  rpcUrl: 'https://tendermint.metaos.im',
  blockExplorerUrl: 'https://scan.metaos.im'
}, _NETWORK_DETAILS);

var ZERO = "0";

var DEFAULT_USER_PRECISION = 6;
var DEFAULT_PRECISION = 18;
var MAX_PRECISION = 28;
var REG_NUMBER = /*#__PURE__*/new RegExp("^[1-9]+[0-9]*(\\.\\d{0," + DEFAULT_PRECISION + "})?$");
var REG_DECIMAL_SIMPLE = /^\d*(\.\d*)?$/;
var REG_DECIMAL = /*#__PURE__*/new RegExp("^0(\\.\\d{0," + DEFAULT_PRECISION + "})?$");

var TICK_SPACINGS = {
  100: 1,
  500: 10,
  3000: 60,
  10000: 200
};
var BASE_UNIT_TICK = 1.0001;

function toDecimalPlaces(value, precision) {
  if (precision === void 0) {
    precision = DEFAULT_PRECISION;
  }

  try {
    return new Decimal(value).toDecimalPlaces(precision, Decimal.ROUND_UP).toString();
  } catch (e) {
    return String(value || "-");
  }
}
function toAmountString(value, precision, roundingMode) {
  if (value === void 0) {
    value = "";
  }

  if (precision === void 0) {
    precision = DEFAULT_USER_PRECISION;
  }

  if (roundingMode === void 0) {
    roundingMode = Decimal.ROUND_DOWN;
  }

  try {
    return new Decimal(value).toSignificantDigits(precision, roundingMode).toString();
  } catch (e) {
    return String(value || "-");
  }
}
function toAmountFloor(value, precision) {
  if (precision === void 0) {
    precision = DEFAULT_USER_PRECISION;
  }

  return toAmountString(value, precision, Decimal.ROUND_DOWN);
}
function toAmountCeil(value, precision) {
  if (precision === void 0) {
    precision = DEFAULT_USER_PRECISION;
  }

  return toAmountString(value, precision, Decimal.ROUND_UP);
}
function toAmountFee(value, precision) {
  if (precision === void 0) {
    precision = DEFAULT_PRECISION;
  }

  try {
    return new Decimal(value).toDecimalPlaces(precision, Decimal.ROUND_DOWN).toString();
  } catch (e) {
    return String(value || "-");
  }
}
function isEmptyAmount(value, precision) {
  if (precision === void 0) {
    precision = MAX_PRECISION;
  }

  var _value = new Decimal(value).mul(Math.pow(10, precision)).floor();

  return _value.isZero();
}
function toExactAmount(value, precision) {
  if (precision === void 0) {
    precision = MAX_PRECISION;
  }

  try {
    return Decimal$1.fromUserInput(value, precision).toString();
  } catch (e) {
    return String(value || "-");
  }
}
var formatNumber = function formatNumber(value, seperator, fixed) {
  if (seperator === void 0) {
    seperator = 3;
  }

  if (fixed === void 0) {
    fixed = 2;
  }

  return new Decimal(value).div(new Decimal(10).pow(seperator)).toFixed(fixed) + "k";
};

moment.locale("en-ca");
function formatMoment(value, pattern) {
  if (pattern === void 0) {
    pattern = "YYYY/MM/DD HH:mm:ss";
  }

  return moment(+value).format(pattern);
}
function formatUnixMoment(value, pattern) {
  if (pattern === void 0) {
    pattern = "MM/DD HH:mm:ss";
  }

  return moment(+value * 1000).format(pattern);
}
var formatTime = function formatTime(time) {
  return moment(time).format("YYYY-MM-DD HH:mm:ss");
};
var formatDiffTime = function formatDiffTime(time) {
  return moment(time).fromNow();
};

function toUsd(value) {
  try {
    return "$" + new Decimal(value).toFixed(2);
  } catch (e) {
    return String(value || "-");
  }
}

function getPoolAddress(denom0, denom1, fee) {
  var key;

  if (denom0 > denom1) {
    key = denom1 + "-" + denom0 + "-" + fee;
  } else {
    key = denom0 + "-" + denom1 + "-" + fee;
  }

  return Bech32.encode("mtos", sha256(toUtf8(key)).slice(0, 20));
}

function getPercentByFeeAmount(fee) {
  if (fee) {
    return FEE_AMOUNT_DETAIL[fee].label + "%";
  } else {
    return "-";
  }
}

function isNumeric(value) {
  return !isNaN(parseFloat(value)); // return new Decimal(value).lessThan(ZERO);
}
function checkInputNumber(value) {
  if (REG_NUMBER.test(value) || REG_DECIMAL.test(value) === true) {
    return true;
  }

  return false;
}

function plus(value1, value2) {
  return new Decimal(value1).plus(value2).toString();
}
function minus(value1, value2) {
  return new Decimal(value1).minus(value2).toString();
}
function multipliedBy(value1, value2) {
  return new Decimal(value1).mul(value2).toString();
}
function div(value1, value2) {
  return new Decimal(value1).div(value2).toString();
}
function isGreaterThan(value1, value2) {
  return new Decimal(value1).greaterThanOrEqualTo(value2);
}
function isLessThan(value1, value2) {
  return new Decimal(value1).lessThan(value2);
}
function isEqualTo(value1, value2) {
  return new Decimal(value1).equals(value2);
}
function pow18(value) {
  return new Decimal(value).mul(Math.pow(10, DEFAULT_PRECISION)).toFixed();
}
function pow(value, precision, round) {
  if (precision === void 0) {
    precision = DEFAULT_PRECISION;
  }

  if (round === void 0) {
    round = Decimal.ROUND_DOWN;
  }

  if (value === "") {
    return "0";
  }

  var _value = new Decimal(value).mul(Math.pow(10, precision));

  if (round === Decimal.ROUND_UP) {
    return _value.ceil().toFixed();
  }

  return _value.floor().toFixed();
}
function powM18(value) {
  return new Decimal(value).div(Math.pow(10, DEFAULT_PRECISION)).toString();
}
function shift(value, precision) {
  if (precision === void 0) {
    precision = DEFAULT_PRECISION;
  }

  return new Decimal(value).div(Math.pow(10, precision)).toFixed();
}
function isPositive(value) {
  if (!value) {
    return false;
  }

  return new Decimal(value).greaterThan(0);
}

function objectToMap(source) {
  return new Map(Object.entries(source));
}
function arrayToMap(array, property) {
  var map = new Map();

  for (var _iterator = _createForOfIteratorHelperLoose(array), _step; !(_step = _iterator()).done;) {
    var item = _step.value;
    map.set(item[property], item);
  }

  return map;
}

function sortsBefore(baseToken, quoteToken) {
  return baseToken.base.toLowerCase() < quoteToken.base.toLowerCase();
}

function toPercent(value, hundred) {
  if (hundred === void 0) {
    hundred = true;
  }

  try {
    if (hundred) {
      return new Decimal(value).mul(100).toFixed(2) + "%";
    } else {
      return new Decimal(value).toFixed(2) + "%";
    }
  } catch (e) {
    return value.toString();
  }
}

var decimalNumber = function decimalNumber(number) {
  if (number === void 0) {
    number = " ";
  }

  var _number$toString$repl = number.toString().replace("$", "").split("."),
      _number$toString$repl2 = _number$toString$repl[0],
      _int = _number$toString$repl2 === void 0 ? "" : _number$toString$repl2,
      _number$toString$repl3 = _number$toString$repl[1],
      _float = _number$toString$repl3 === void 0 ? "" : _number$toString$repl3;

  if (_int.length > 10) {
    return new Decimal(_int).div(new Decimal(10).pow(10)).toFixed(2) + "B";
  } else if (_int.length > 7) {
    return new Decimal(_int).div(new Decimal(10).pow(7)).toFixed(2) + "M";
  } else if (_int.length > 3) {
    return new Decimal(_int).div(new Decimal(10).pow(3)).toFixed(2) + "K";
  } else {
    return (Number(_int) > 0 ? _int : 0) + "." + (_float.length > 0 ? _float.slice(0, 2) : "00");
  }
};

var Transaction_Status;

(function (Transaction_Status) {
  Transaction_Status["Wallet"] = "wallet";
  Transaction_Status["Pending"] = "pending";
  Transaction_Status["Complete"] = "complete";
  Transaction_Status["Success"] = "success";
  Transaction_Status["Error"] = "error";
  Transaction_Status["Reject"] = "reject";
})(Transaction_Status || (Transaction_Status = {}));

function longToNumber(_long) {
  if (_long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }

  return _long.toNumber();
}

var Tip_Level;

(function (Tip_Level) {
  Tip_Level["Info"] = "info";
  Tip_Level["Warning"] = "warning";
  Tip_Level["Error"] = "error";
})(Tip_Level || (Tip_Level = {}));

var Direction;

(function (Direction) {
  Direction["In"] = "exactIn";
  Direction["Out"] = "exactOut";
})(Direction || (Direction = {}));

var LiquidityMath = /*#__PURE__*/function () {
  function LiquidityMath() {}

  LiquidityMath.getRightSideLiquidity = function getRightSideLiquidity(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount) {
    var numerator = new Decimal(amount);

    var _value1 = new Decimal(1).div(Decimal.sqrt(leftRangeValue));

    var _value2 = new Decimal(1).div(Decimal.sqrt(rightRangeValue));

    var denominator = Decimal.sub(_value1, _value2);
    return numerator.div(denominator);
  };

  LiquidityMath.getLeftSideLiquidity = function getLeftSideLiquidity(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount) {
    var numerator = new Decimal(amount);
    var denominator = Decimal.sub(Decimal.sqrt(rightRangeValue), Decimal.sqrt(leftRangeValue));
    return numerator.div(denominator);
  };

  LiquidityMath.getLiquidityFromAmount0 = function getLiquidityFromAmount0(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount0) {
    var pc = new Decimal(priceValue);

    if (pc.lessThan(leftRangeValue)) {
      return this.getRightSideLiquidity(leftRangeValue, rightRangeValue, priceValue, amount0);
    } else if (pc.greaterThan(rightRangeValue)) {
      return this.getLeftSideLiquidity(leftRangeValue, rightRangeValue, priceValue, amount0);
    }

    var deltaX = new Decimal(amount0);

    var _value1 = new Decimal(1).div(Decimal.sqrt(priceValue));

    var _value2 = new Decimal(1).div(Decimal.sqrt(rightRangeValue));

    var denominator = Decimal.sub(_value1, _value2);
    return deltaX.div(denominator);
  };

  LiquidityMath._getDiverForDeltaX = function _getDiverForDeltaX(lower, upper) {
    var _value1 = new Decimal(1).div(Decimal.sqrt(lower));

    var _value2 = new Decimal(1).div(Decimal.sqrt(upper));

    return Decimal.sub(_value1, _value2);
  };

  LiquidityMath._getDiverForDeltaY = function _getDiverForDeltaY(lower, upper) {
    return Decimal.sub(Decimal.sqrt(upper), Decimal.sqrt(lower));
  };

  LiquidityMath.getLiquidityFromAmount1 = function getLiquidityFromAmount1(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount1) {
    var pc = new Decimal(priceValue);

    if (pc.lessThan(leftRangeValue)) {
      return this.getRightSideLiquidity(leftRangeValue, rightRangeValue, priceValue, amount1);
    } else if (pc.greaterThan(rightRangeValue)) {
      return this.getLeftSideLiquidity(leftRangeValue, rightRangeValue, priceValue, amount1);
    }

    var deltaY = new Decimal(amount1);
    var denominator = Decimal.sub(Decimal.sqrt(priceValue), Decimal.sqrt(leftRangeValue));
    return deltaY.div(denominator);
  };

  LiquidityMath.getAmount1FromAmount0 = function getAmount1FromAmount0(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount0, token0) {
    var liquidity = this.getLiquidityFromAmount0(leftRangeValue, rightRangeValue, priceValue, amount0); // console.log("liquidity: " + liquidity);

    var _value1 = new Decimal(liquidity);

    var _value2 = this._getDiverForDeltaY(leftRangeValue, priceValue);

    return _value1.mul(_value2).toString();
  };

  LiquidityMath.getAmount0FromAmount1 = function getAmount0FromAmount1(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount1, token1) {
    var liquidity = this.getLiquidityFromAmount1(leftRangeValue, rightRangeValue, priceValue, amount1); // console.log("liquidity: " + liquidity);

    var _value1 = new Decimal(liquidity);

    var _value2 = this._getDiverForDeltaX(priceValue, rightRangeValue);

    return _value1.mul(_value2).toString();
  };

  LiquidityMath.getAmountByLiquidity = function getAmountByLiquidity(leftRangeValue, rightRangeValue, priceValue, liquidity, token0, token1) {
    var pc = new Decimal(priceValue);

    var _value1 = new Decimal(liquidity);

    if (pc.lessThan(leftRangeValue)) {
      var _value2 = this._getDiverForDeltaX(leftRangeValue, rightRangeValue);

      return {
        amount0: _value1.mul(_value2),
        amount1: "0"
      };
    } else if (pc.greaterThan(rightRangeValue)) {
      var _value = this._getDiverForDeltaY(leftRangeValue, rightRangeValue);

      return {
        amount0: "0",
        amount1: _value1.mul(_value)
      };
    }

    var deltaXDiver = this._getDiverForDeltaX(priceValue, rightRangeValue);

    var deltaYDiver = this._getDiverForDeltaY(leftRangeValue, priceValue);

    return {
      amount0: _value1.mul(deltaXDiver),
      amount1: _value1.mul(deltaYDiver)
    };
  };

  return LiquidityMath;
}();

var TickMath = /*#__PURE__*/function () {
  function TickMath() {}

  TickMath.priceToClosestTick = function priceToClosestTick(price) {
    var numerator = Decimal.log2(Decimal.sqrt(price));
    var denominator = Decimal.log2(Decimal.sqrt(BASE_UNIT_TICK));
    return numerator.div(denominator).toNumber();
  }
  /**
   * Compute nearest tick of price for input
   * @param feeAmount
   * @param value
   */
  ;

  TickMath.getNearestTickByPrice = function getNearestTickByPrice(feeAmount, value) {
    var _value = value.trim();

    if (_value === "") {
      return this.INVALID_TICK;
    }

    if (value === this.MIN_TICK_VALUE) {
      return this.MIN_TICK;
    }

    if (value === this.MAX_TICK_VALUE) {
      return this.MAX_TICK;
    }

    var tick = this.priceToClosestTick(value); // console.log(`[priceToClosestTick]: ` + tick);

    var result = this.nearestUsableTick(tick, TICK_SPACINGS[feeAmount]); // console.log(`[nearestUsableTick]: ` + result);

    return result;
  };

  TickMath.getFormattedPriceByTick = function getFormattedPriceByTick(tick, fee) {
    if (tick === this.INVALID_TICK) {
      return "";
    }

    if (this.isLowestTick(tick, fee)) {
      return this.MIN_TICK_VALUE;
    }

    if (this.isHighestTick(tick, fee)) {
      return this.MAX_TICK_VALUE;
    }

    var base = Decimal.pow(Decimal.sqrt(BASE_UNIT_TICK), tick);
    return Decimal.pow(base, 2).toString();
  };

  TickMath.getPriceByTick = function getPriceByTick(tick) {
    if (tick === this.INVALID_TICK) {
      return "";
    } // if (this.isLowestTick(tick, fee)) {
    //   return this.MIN_TICK_VALUE;
    // }
    // if (this.isHighestTick(tick, fee)) {
    //   return this.MAX_TICK_VALUE;
    // }


    var base = Decimal.pow(Decimal.sqrt(BASE_UNIT_TICK), tick);
    return Decimal.pow(base, 2).toString();
  };

  TickMath.getNearestPriceByInput = function getNearestPriceByInput(feeAmount, price) {
    // console.log('INPUT price: ' + price);
    var nearestTick = this.getNearestTickByPrice(feeAmount, price);
    var result = this.getPriceByTick(nearestTick); // console.log('getPriceByTick: ' + result);
    // console.log('==========');

    return result;
  };

  TickMath.getPriceBySqrtPrice = function getPriceBySqrtPrice(sqrtPrice) {
    if (!sqrtPrice) {
      return "";
    }

    if (sqrtPrice === "0") {
      return "0";
    }

    return new Decimal(sqrtPrice).pow(2).toString();
  };

  TickMath.getSqrtPriceByPrice = function getSqrtPriceByPrice(price) {
    if (price === "0") {
      return "0";
    }

    return new Decimal(price).sqrt().toString();
  };

  TickMath.getBaseTickRange = function getBaseTickRange(fromToken, toToken, fee, leftRange, rightRange) {
    var tickLower;
    var tickUpper;

    if (sortsBefore(fromToken, toToken)) {
      tickLower = leftRange === TickMath.MIN_TICK_VALUE ? TickMath.getNearestLowestTick(fee) : TickMath.getNearestTickByPrice(fee, leftRange);
      tickUpper = rightRange === TickMath.MAX_TICK_VALUE ? TickMath.getNearestHighestTick(fee) : TickMath.getNearestTickByPrice(fee, rightRange);
    } else {
      if (leftRange === TickMath.MIN_TICK_VALUE) {
        tickUpper = TickMath.getNearestHighestTick(fee);
      } else {
        tickUpper = TickMath.getNearestTickByPrice(fee, new Decimal(1).div(leftRange).toString());
      }

      if (rightRange === TickMath.MAX_TICK_VALUE) {
        tickLower = TickMath.getNearestLowestTick(fee);
      } else {
        tickLower = TickMath.getNearestTickByPrice(fee, new Decimal(1).div(rightRange).toString());
      }
    } // console.log("tickLower: " + tickLower);
    // console.log("tickUpper: " + tickUpper);


    return {
      tickLower: tickLower,
      tickUpper: tickUpper
    };
  };

  TickMath.getNearestLowestTick = function getNearestLowestTick(fee) {
    var tickLower = this.nearestUsableTick(this.MIN_TICK, TICK_SPACINGS[fee]); // console.log('getNearestLowestTick: ' + tickLower);

    return tickLower;
  };

  TickMath.getNearestHighestTick = function getNearestHighestTick(fee) {
    var tickUpper = this.nearestUsableTick(this.MAX_TICK, TICK_SPACINGS[fee]); // console.log('getNearestHighestTick: ' + tickUpper);

    return tickUpper;
  };

  TickMath.getNearestPricesByFullTick = function getNearestPricesByFullTick(fee) {
    var tickLower = this.nearestUsableTick(this.MIN_TICK, TICK_SPACINGS[fee]);
    var tickUpper = this.nearestUsableTick(this.MAX_TICK, TICK_SPACINGS[fee]);
    var lowestPrice = this.getPriceByTick(tickLower);
    var highestPrice = this.getPriceByTick(tickUpper);
    return {
      lowestPrice: lowestPrice,
      highestPrice: highestPrice
    };
  };

  TickMath.isHighestTick = function isHighestTick(tick, fee) {
    var highestTick = this.getNearestHighestTick(fee);
    return tick >= highestTick;
  };

  TickMath.isLowestTick = function isLowestTick(tick, fee) {
    var lowestTick = this.getNearestLowestTick(fee);
    return tick <= lowestTick;
  };

  return TickMath;
}();
TickMath.INVALID_TICK = -99999999;
TickMath.MIN_TICK = -887272;
TickMath.MIN_TICK_VALUE = "0";
TickMath.MAX_TICK = -TickMath.MIN_TICK;
TickMath.MAX_TICK_VALUE = "∞";

TickMath.nearestUsableTick = function (tick, tickSpacing) {
  var rounded = Math.round(tick / tickSpacing) * tickSpacing;
  if (rounded < TickMath.MIN_TICK) return rounded + tickSpacing;else if (rounded > TickMath.MAX_TICK) return rounded - tickSpacing;else return rounded;
};

var TransactionLooper = function TransactionLooper(txHash, description, status, onTransactionSuccess) {
  this.transactionHash = void 0;
  this.description = void 0;
  this.status = void 0;
  this.counter = void 0;
  this.onTransactionSuccess = void 0;
  this.transactionHash = txHash;
  this.description = description;
  this.status = status;
  this.counter = 0;
  this.onTransactionSuccess = onTransactionSuccess;
};

var APIClient = // API access
function APIClient(URL, chainId) {

  this.apiRequester = void 0;
  this.nodeUrl = void 0;
  this.authAPI = void 0;
  this.authzAPI = void 0;
  this.bankAPI = void 0;
  this.deflationAPI = void 0;
  this.govAPI = void 0;
  this.mintAPI = void 0;
  this.poolIncentiveAPI = void 0;
  this.slashingAPI = void 0;
  this.stakingAPI = void 0;
  this.swapAPI = void 0;
  this.tendermintAPI = void 0;
  this.tokenAPI = void 0;
  this.txAPI = void 0;
  this.wasmAPI = void 0;
  this.nodeUrl = URL;
  this.apiRequester = new APIRequester(URL); // instantiate APIs

  this.authAPI = new AuthAPI(this.apiRequester);
  this.authzAPI = new AuthzAPI(this.apiRequester);
  this.bankAPI = new BankAPI(this.apiRequester);
  this.deflationAPI = new DeflationAPI(this.apiRequester);
  this.govAPI = new GovAPI(this.apiRequester);
  this.mintAPI = new MintAPI(this.apiRequester);
  this.poolIncentiveAPI = new PoolIncentiveAPI(this.apiRequester);
  this.slashingAPI = new SlashingAPI(this.apiRequester);
  this.stakingAPI = new StakingAPI(this.apiRequester);
  this.swapAPI = new SwapAPI(this.apiRequester);
  this.tendermintAPI = new TendermintAPI(this.apiRequester);
  this.tokenAPI = new TokenAPI(this.apiRequester);
  this.txAPI = new TxAPI(this.apiRequester);
  this.wasmAPI = new WasmAPI(this.apiRequester);
};

var BaseMsg = function BaseMsg() {};

/* eslint-disable */

function createBaseAny() {
  return {
    typeUrl: "",
    value: new Uint8Array()
  };
}

var Any = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAny();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.typeUrl = reader.string();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$typeUrl, _object$value;

    var message = createBaseAny();
    message.typeUrl = (_object$typeUrl = object.typeUrl) != null ? _object$typeUrl : "";
    message.value = (_object$value = object.value) != null ? _object$value : new Uint8Array();
    return message;
  }
};

var globalThis$1 = /*#__PURE__*/function () {
  if (typeof globalThis$1 !== "undefined") return globalThis$1;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
}();

var atob = globalThis$1.atob || function (b64) {
  return globalThis$1.Buffer.from(b64, "base64").toString("binary");
};

function bytesFromBase64(b64) {
  var bin = atob(b64);
  var arr = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

var btoa = globalThis$1.btoa || function (bin) {
  return globalThis$1.Buffer.from(bin, "binary").toString("base64");
};

function base64FromBytes(arr) {
  var bin = [];
  arr.forEach(function (_byte) {
    bin.push(String.fromCharCode(_byte));
  });
  return btoa(bin.join(""));
}

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet(value) {
  return value !== null && value !== undefined;
}

/* eslint-disable */

function createBaseTimestamp() {
  return {
    seconds: Long.ZERO,
    nanos: 0
  };
}

var Timestamp = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (!message.seconds.isZero()) {
      writer.uint32(8).int64(message.seconds);
    }

    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTimestamp();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int64();
          break;

        case 2:
          message.nanos = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      seconds: isSet$1(object.seconds) ? Long.fromValue(object.seconds) : Long.ZERO,
      nanos: isSet$1(object.nanos) ? Number(object.nanos) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.seconds !== undefined && (obj.seconds = (message.seconds || Long.ZERO).toString());
    message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$nanos;

    var message = createBaseTimestamp();
    message.seconds = object.seconds !== undefined && object.seconds !== null ? Long.fromValue(object.seconds) : Long.ZERO;
    message.nanos = (_object$nanos = object.nanos) != null ? _object$nanos : 0;
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$1(value) {
  return value !== null && value !== undefined;
}

/* eslint-disable */

function createBaseGrant() {
  return {
    authorization: undefined,
    expiration: undefined
  };
}

var Grant = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.authorization !== undefined) {
      Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGrant();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authorization = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      authorization: isSet$2(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
      expiration: isSet$2(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.authorization !== undefined && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$expiration;

    var message = createBaseGrant();
    message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
    message.expiration = (_object$expiration = object.expiration) != null ? _object$expiration : undefined;
    return message;
  }
};

function toTimestamp(date) {
  var seconds = numberToLong(date.getTime() / 1000);
  var nanos = date.getTime() % 1000 * 1000000;
  return {
    seconds: seconds,
    nanos: nanos
  };
}

function fromTimestamp(t) {
  var millis = t.seconds.toNumber() * 1000;
  millis += t.nanos / 1000000;
  return new Date(millis);
}

function fromJsonTimestamp(o) {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number) {
  return Long.fromNumber(number);
}

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$2(value) {
  return value !== null && value !== undefined;
}

var protobufPackage = "cosmos.authz.v1beta1";

function createBaseMsgGrant() {
  return {
    granter: "",
    grantee: "",
    grant: undefined
  };
}

var MsgGrant = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgGrant();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.grant = Grant.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      granter: isSet$3(object.granter) ? String(object.granter) : "",
      grantee: isSet$3(object.grantee) ? String(object.grantee) : "",
      grant: isSet$3(object.grant) ? Grant.fromJSON(object.grant) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.grant !== undefined && (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$granter, _object$grantee;

    var message = createBaseMsgGrant();
    message.granter = (_object$granter = object.granter) != null ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) != null ? _object$grantee : "";
    message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
    return message;
  }
};

function createBaseMsgExec() {
  return {
    grantee: "",
    msgs: []
  };
}

var MsgExec = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.msgs), _step2; !(_step2 = _iterator2()).done;) {
      var v = _step2.value;
      Any.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExec();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;

        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      grantee: isSet$3(object.grantee) ? String(object.grantee) : "",
      msgs: Array.isArray(object == null ? void 0 : object.msgs) ? object.msgs.map(function (e) {
        return Any.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);

    if (message.msgs) {
      obj.msgs = message.msgs.map(function (e) {
        return e ? Any.toJSON(e) : undefined;
      });
    } else {
      obj.msgs = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$grantee2, _object$msgs;

    var message = createBaseMsgExec();
    message.grantee = (_object$grantee2 = object.grantee) != null ? _object$grantee2 : "";
    message.msgs = ((_object$msgs = object.msgs) == null ? void 0 : _object$msgs.map(function (e) {
      return Any.fromPartial(e);
    })) || [];
    return message;
  }
};

function createBaseMsgRevoke() {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}

var MsgRevoke = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRevoke();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.msgTypeUrl = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      granter: isSet$3(object.granter) ? String(object.granter) : "",
      grantee: isSet$3(object.grantee) ? String(object.grantee) : "",
      msgTypeUrl: isSet$3(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$granter2, _object$grantee3, _object$msgTypeUrl;

    var message = createBaseMsgRevoke();
    message.granter = (_object$granter2 = object.granter) != null ? _object$granter2 : "";
    message.grantee = (_object$grantee3 = object.grantee) != null ? _object$grantee3 : "";
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) != null ? _object$msgTypeUrl : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$3(value) {
  return value !== null && value !== undefined;
}

var MsgGrant$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgGrant$1, _BaseMsg);

  function MsgGrant$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgGrant$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgGrant$1.typeUrl,
      value: MsgGrant.fromPartial(this.protoMsg)
    };
  };

  return MsgGrant$1;
}(BaseMsg);

(function (MsgGrant$1) {
  MsgGrant$1.typeUrl = "/" + protobufPackage + ".MsgGrant";
  MsgGrant$1.Proto = MsgGrant;
})(MsgGrant$1 || (MsgGrant$1 = {}));

var MsgExec$1 = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgExec$1, _BaseMsg2);

  function MsgExec$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgExec$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgExec$1.typeUrl,
      value: MsgExec.fromPartial(this.protoMsg)
    };
  };

  return MsgExec$1;
}(BaseMsg);

(function (MsgExec$1) {
  MsgExec$1.typeUrl = "/" + protobufPackage + ".MsgExec";
  MsgExec$1.Proto = MsgExec;
})(MsgExec$1 || (MsgExec$1 = {}));

var MsgRevoke$1 = /*#__PURE__*/function (_BaseMsg3) {
  _inheritsLoose(MsgRevoke$1, _BaseMsg3);

  function MsgRevoke$1(msg) {
    var _this3;

    _this3 = _BaseMsg3.call(this) || this;
    _this3.protoMsg = void 0;
    _this3.protoMsg = msg;
    return _this3;
  }

  var _proto3 = MsgRevoke$1.prototype;

  _proto3.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgExec$1.typeUrl,
      value: MsgRevoke.fromPartial(this.protoMsg)
    };
  };

  return MsgRevoke$1;
}(BaseMsg);

(function (MsgRevoke$1) {
  MsgRevoke$1.typeUrl = "/" + protobufPackage + ".MsgRevoke";
  MsgRevoke$1.Proto = MsgRevoke;
})(MsgRevoke$1 || (MsgRevoke$1 = {}));

/* eslint-disable */

function createBaseCoin() {
  return {
    denom: "",
    amount: ""
  };
}

var Coin = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCoin();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      denom: isSet$4(object.denom) ? String(object.denom) : "",
      amount: isSet$4(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom, _object$amount;

    var message = createBaseCoin();
    message.denom = (_object$denom = object.denom) != null ? _object$denom : "";
    message.amount = (_object$amount = object.amount) != null ? _object$amount : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$4(value) {
  return value !== null && value !== undefined;
}

function createBaseInput() {
  return {
    address: "",
    coins: []
  };
}

var Input = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.coins), _step2; !(_step2 = _iterator2()).done;) {
      var v = _step2.value;
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInput();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      address: isSet$5(object.address) ? String(object.address) : "",
      coins: Array.isArray(object == null ? void 0 : object.coins) ? object.coins.map(function (e) {
        return Coin.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.coins) {
      obj.coins = message.coins.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.coins = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$coins;

    var message = createBaseInput();
    message.address = (_object$address = object.address) != null ? _object$address : "";
    message.coins = ((_object$coins = object.coins) == null ? void 0 : _object$coins.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    return message;
  }
};

function createBaseOutput() {
  return {
    address: "",
    coins: []
  };
}

var Output = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(message.coins), _step3; !(_step3 = _iterator3()).done;) {
      var v = _step3.value;
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseOutput();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      address: isSet$5(object.address) ? String(object.address) : "",
      coins: Array.isArray(object == null ? void 0 : object.coins) ? object.coins.map(function (e) {
        return Coin.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.coins) {
      obj.coins = message.coins.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.coins = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address2, _object$coins2;

    var message = createBaseOutput();
    message.address = (_object$address2 = object.address) != null ? _object$address2 : "";
    message.coins = ((_object$coins2 = object.coins) == null ? void 0 : _object$coins2.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$5(value) {
  return value !== null && value !== undefined;
}

var protobufPackage$1 = "cosmos.bank.v1beta1";

function createBaseMsgSend() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}

var MsgSend = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }

    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.amount), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSend();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;

        case 2:
          message.toAddress = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      fromAddress: isSet$6(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet$6(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object == null ? void 0 : object.amount) ? object.amount.map(function (e) {
        return Coin.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);

    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.amount = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$fromAddress, _object$toAddress, _object$amount;

    var message = createBaseMsgSend();
    message.fromAddress = (_object$fromAddress = object.fromAddress) != null ? _object$fromAddress : "";
    message.toAddress = (_object$toAddress = object.toAddress) != null ? _object$toAddress : "";
    message.amount = ((_object$amount = object.amount) == null ? void 0 : _object$amount.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    return message;
  }
};

function createBaseMsgMultiSend() {
  return {
    inputs: [],
    outputs: []
  };
}

var MsgMultiSend = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.inputs), _step2; !(_step2 = _iterator2()).done;) {
      var v = _step2.value;
      Input.encode(v, writer.uint32(10).fork()).ldelim();
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(message.outputs), _step3; !(_step3 = _iterator3()).done;) {
      var _v = _step3.value;
      Output.encode(_v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgMultiSend();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;

        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      inputs: Array.isArray(object == null ? void 0 : object.inputs) ? object.inputs.map(function (e) {
        return Input.fromJSON(e);
      }) : [],
      outputs: Array.isArray(object == null ? void 0 : object.outputs) ? object.outputs.map(function (e) {
        return Output.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.inputs) {
      obj.inputs = message.inputs.map(function (e) {
        return e ? Input.toJSON(e) : undefined;
      });
    } else {
      obj.inputs = [];
    }

    if (message.outputs) {
      obj.outputs = message.outputs.map(function (e) {
        return e ? Output.toJSON(e) : undefined;
      });
    } else {
      obj.outputs = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$inputs, _object$outputs;

    var message = createBaseMsgMultiSend();
    message.inputs = ((_object$inputs = object.inputs) == null ? void 0 : _object$inputs.map(function (e) {
      return Input.fromPartial(e);
    })) || [];
    message.outputs = ((_object$outputs = object.outputs) == null ? void 0 : _object$outputs.map(function (e) {
      return Output.fromPartial(e);
    })) || [];
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$6(value) {
  return value !== null && value !== undefined;
}

var MsgSend$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgSend$1, _BaseMsg);

  function MsgSend$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgSend$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgSend$1.typeUrl,
      value: MsgSend.fromPartial(this.protoMsg)
    };
  };

  return MsgSend$1;
}(BaseMsg);

(function (MsgSend$1) {
  MsgSend$1.typeUrl = "/" + protobufPackage$1 + ".MsgSend";
  MsgSend$1.Proto = MsgSend;
})(MsgSend$1 || (MsgSend$1 = {}));

var MsgMultiSend$1 = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgMultiSend$1, _BaseMsg2);

  function MsgMultiSend$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgMultiSend$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgMultiSend$1.typeUrl,
      value: MsgMultiSend.fromPartial(this.protoMsg)
    };
  };

  return MsgMultiSend$1;
}(BaseMsg);

(function (MsgMultiSend$1) {
  MsgMultiSend$1.typeUrl = "/" + protobufPackage$1 + ".MsgMultiSend";
  MsgMultiSend$1.Proto = MsgMultiSend;
})(MsgMultiSend$1 || (MsgMultiSend$1 = {}));

var protobufPackage$2 = "cosmos.crisis.v1beta1";

function createBaseMsgVerifyInvariant() {
  return {
    sender: "",
    invariantModuleName: "",
    invariantRoute: ""
  };
}

var MsgVerifyInvariant = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }

    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVerifyInvariant();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.invariantModuleName = reader.string();
          break;

        case 3:
          message.invariantRoute = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      sender: isSet$7(object.sender) ? String(object.sender) : "",
      invariantModuleName: isSet$7(object.invariantModuleName) ? String(object.invariantModuleName) : "",
      invariantRoute: isSet$7(object.invariantRoute) ? String(object.invariantRoute) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invariantModuleName !== undefined && (obj.invariantModuleName = message.invariantModuleName);
    message.invariantRoute !== undefined && (obj.invariantRoute = message.invariantRoute);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender, _object$invariantModu, _object$invariantRout;

    var message = createBaseMsgVerifyInvariant();
    message.sender = (_object$sender = object.sender) != null ? _object$sender : "";
    message.invariantModuleName = (_object$invariantModu = object.invariantModuleName) != null ? _object$invariantModu : "";
    message.invariantRoute = (_object$invariantRout = object.invariantRoute) != null ? _object$invariantRout : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$7(value) {
  return value !== null && value !== undefined;
}

var MsgVerifyInvariant$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgVerifyInvariant$1, _BaseMsg);

  function MsgVerifyInvariant$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgVerifyInvariant$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgVerifyInvariant$1.typeUrl,
      value: MsgVerifyInvariant.fromPartial(this.protoMsg)
    };
  };

  return MsgVerifyInvariant$1;
}(BaseMsg);

(function (MsgVerifyInvariant$1) {
  MsgVerifyInvariant$1.typeUrl = "/" + protobufPackage$2 + ".MsgVerifyInvariant";
  MsgVerifyInvariant$1.Proto = MsgVerifyInvariant;
})(MsgVerifyInvariant$1 || (MsgVerifyInvariant$1 = {}));

var protobufPackage$3 = "cosmos.distribution.v1beta1";

function createBaseMsgSetWithdrawAddress() {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}

var MsgSetWithdrawAddress = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetWithdrawAddress();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.withdrawAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: isSet$8(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      withdrawAddress: isSet$8(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr, _object$withdrawAddre;

    var message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) != null ? _object$delegatorAddr : "";
    message.withdrawAddress = (_object$withdrawAddre = object.withdrawAddress) != null ? _object$withdrawAddre : "";
    return message;
  }
};

function createBaseMsgWithdrawDelegatorReward() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}

var MsgWithdrawDelegatorReward = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawDelegatorReward();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: isSet$8(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet$8(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorAddr;

    var message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) != null ? _object$delegatorAddr2 : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) != null ? _object$validatorAddr : "";
    return message;
  }
};

function createBaseMsgWithdrawValidatorCommission() {
  return {
    validatorAddress: ""
  };
}

var MsgWithdrawValidatorCommission = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawValidatorCommission();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      validatorAddress: isSet$8(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr2;

    var message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) != null ? _object$validatorAddr2 : "";
    return message;
  }
};

function createBaseMsgFundCommunityPool() {
  return {
    amount: [],
    depositor: ""
  };
}

var MsgFundCommunityPool = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.amount), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgFundCommunityPool();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.depositor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      amount: Array.isArray(object == null ? void 0 : object.amount) ? object.amount.map(function (e) {
        return Coin.fromJSON(e);
      }) : [],
      depositor: isSet$8(object.depositor) ? String(object.depositor) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.amount = [];
    }

    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$amount, _object$depositor;

    var message = createBaseMsgFundCommunityPool();
    message.amount = ((_object$amount = object.amount) == null ? void 0 : _object$amount.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    message.depositor = (_object$depositor = object.depositor) != null ? _object$depositor : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$8(value) {
  return value !== null && value !== undefined;
}

var MsgFundCommunityPool$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgFundCommunityPool$1, _BaseMsg);

  function MsgFundCommunityPool$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgFundCommunityPool$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgFundCommunityPool$1.typeUrl,
      value: MsgFundCommunityPool.fromPartial(this.protoMsg)
    };
  };

  return MsgFundCommunityPool$1;
}(BaseMsg);

(function (MsgFundCommunityPool$1) {
  MsgFundCommunityPool$1.typeUrl = "/" + protobufPackage$3 + ".MsgFundCommunityPool";
  MsgFundCommunityPool$1.Proto = MsgFundCommunityPool;
})(MsgFundCommunityPool$1 || (MsgFundCommunityPool$1 = {}));

var MsgSetWithdrawAddress$1 = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgSetWithdrawAddress$1, _BaseMsg2);

  function MsgSetWithdrawAddress$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgSetWithdrawAddress$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgSetWithdrawAddress$1.typeUrl,
      value: MsgSetWithdrawAddress.fromPartial(this.protoMsg)
    };
  };

  return MsgSetWithdrawAddress$1;
}(BaseMsg);

(function (MsgSetWithdrawAddress$1) {
  MsgSetWithdrawAddress$1.typeUrl = "/" + protobufPackage$3 + ".MsgSetWithdrawAddress";
  MsgSetWithdrawAddress$1.Proto = MsgSetWithdrawAddress;
})(MsgSetWithdrawAddress$1 || (MsgSetWithdrawAddress$1 = {}));

var MsgWithdrawDelegatorReward$1 = /*#__PURE__*/function (_BaseMsg3) {
  _inheritsLoose(MsgWithdrawDelegatorReward$1, _BaseMsg3);

  function MsgWithdrawDelegatorReward$1(msg) {
    var _this3;

    _this3 = _BaseMsg3.call(this) || this;
    _this3.protoMsg = void 0;
    _this3.protoMsg = msg;
    return _this3;
  }

  var _proto3 = MsgWithdrawDelegatorReward$1.prototype;

  _proto3.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgWithdrawDelegatorReward$1.typeUrl,
      value: MsgWithdrawDelegatorReward.fromPartial(this.protoMsg)
    };
  };

  return MsgWithdrawDelegatorReward$1;
}(BaseMsg);

(function (MsgWithdrawDelegatorReward$1) {
  MsgWithdrawDelegatorReward$1.typeUrl = "/" + protobufPackage$3 + ".MsgWithdrawDelegatorReward";
  MsgWithdrawDelegatorReward$1.Proto = MsgWithdrawDelegatorReward;
})(MsgWithdrawDelegatorReward$1 || (MsgWithdrawDelegatorReward$1 = {}));

var MsgWithdrawValidatorCommission$1 = /*#__PURE__*/function (_BaseMsg4) {
  _inheritsLoose(MsgWithdrawValidatorCommission$1, _BaseMsg4);

  function MsgWithdrawValidatorCommission$1(msg) {
    var _this4;

    _this4 = _BaseMsg4.call(this) || this;
    _this4.protoMsg = void 0;
    _this4.protoMsg = msg;
    return _this4;
  }

  var _proto4 = MsgWithdrawValidatorCommission$1.prototype;

  _proto4.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgWithdrawValidatorCommission$1.typeUrl,
      value: MsgWithdrawValidatorCommission.fromPartial(this.protoMsg)
    };
  };

  return MsgWithdrawValidatorCommission$1;
}(BaseMsg);

(function (MsgWithdrawValidatorCommission$1) {
  MsgWithdrawValidatorCommission$1.typeUrl = "/" + protobufPackage$3 + ".MsgWithdrawValidatorCommission";
  MsgWithdrawValidatorCommission$1.Proto = MsgWithdrawValidatorCommission;
})(MsgWithdrawValidatorCommission$1 || (MsgWithdrawValidatorCommission$1 = {}));

var protobufPackage$4 = "cosmos.evidence.v1beta1";

function createBaseMsgSubmitEvidence() {
  return {
    submitter: "",
    evidence: undefined
  };
}

var MsgSubmitEvidence = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }

    if (message.evidence !== undefined) {
      Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitEvidence();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;

        case 2:
          message.evidence = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      submitter: isSet$9(object.submitter) ? String(object.submitter) : "",
      evidence: isSet$9(object.evidence) ? Any.fromJSON(object.evidence) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$submitter;

    var message = createBaseMsgSubmitEvidence();
    message.submitter = (_object$submitter = object.submitter) != null ? _object$submitter : "";
    message.evidence = object.evidence !== undefined && object.evidence !== null ? Any.fromPartial(object.evidence) : undefined;
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$9(value) {
  return value !== null && value !== undefined;
}

var MsgSubmitEvidence$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgSubmitEvidence$1, _BaseMsg);

  function MsgSubmitEvidence$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgSubmitEvidence$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgSubmitEvidence$1.typeUrl,
      value: MsgSubmitEvidence.fromPartial(this.protoMsg)
    };
  };

  return MsgSubmitEvidence$1;
}(BaseMsg);

(function (MsgSubmitEvidence$1) {
  MsgSubmitEvidence$1.typeUrl = "/" + protobufPackage$4 + ".MsgSubmitEvidence";
  MsgSubmitEvidence$1.Proto = MsgSubmitEvidence;
})(MsgSubmitEvidence$1 || (MsgSubmitEvidence$1 = {}));

var protobufPackage$5 = "cosmos.feegrant.v1beta1";

function createBaseMsgGrantAllowance() {
  return {
    granter: "",
    grantee: "",
    allowance: undefined
  };
}

var MsgGrantAllowance = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgGrantAllowance();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      granter: isSet$a(object.granter) ? String(object.granter) : "",
      grantee: isSet$a(object.grantee) ? String(object.grantee) : "",
      allowance: isSet$a(object.allowance) ? Any.fromJSON(object.allowance) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$granter, _object$grantee;

    var message = createBaseMsgGrantAllowance();
    message.granter = (_object$granter = object.granter) != null ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) != null ? _object$grantee : "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    return message;
  }
};

function createBaseMsgRevokeAllowance() {
  return {
    granter: "",
    grantee: ""
  };
}

var MsgRevokeAllowance = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRevokeAllowance();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      granter: isSet$a(object.granter) ? String(object.granter) : "",
      grantee: isSet$a(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$granter2, _object$grantee2;

    var message = createBaseMsgRevokeAllowance();
    message.granter = (_object$granter2 = object.granter) != null ? _object$granter2 : "";
    message.grantee = (_object$grantee2 = object.grantee) != null ? _object$grantee2 : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$a(value) {
  return value !== null && value !== undefined;
}

var MsgGrantAllowance$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgGrantAllowance$1, _BaseMsg);

  function MsgGrantAllowance$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgGrantAllowance$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgGrantAllowance$1.typeUrl,
      value: MsgGrantAllowance.fromPartial(this.protoMsg)
    };
  };

  return MsgGrantAllowance$1;
}(BaseMsg);

(function (MsgGrantAllowance$1) {
  MsgGrantAllowance$1.typeUrl = "/" + protobufPackage$5 + ".MsgGrantAllowance";
  MsgGrantAllowance$1.Proto = MsgGrantAllowance;
})(MsgGrantAllowance$1 || (MsgGrantAllowance$1 = {}));

var MsgRevokeAllowance$1 = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgRevokeAllowance$1, _BaseMsg2);

  function MsgRevokeAllowance$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgRevokeAllowance$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgRevokeAllowance$1.typeUrl,
      value: MsgRevokeAllowance.fromPartial(this.protoMsg)
    };
  };

  return MsgRevokeAllowance$1;
}(BaseMsg);

(function (MsgRevokeAllowance$1) {
  MsgRevokeAllowance$1.typeUrl = "/" + protobufPackage$5 + ".MsgRevokeAllowance";
  MsgRevokeAllowance$1.Proto = MsgRevokeAllowance;
})(MsgRevokeAllowance$1 || (MsgRevokeAllowance$1 = {}));

/* eslint-disable */

function createBaseDuration() {
  return {
    seconds: Long.ZERO,
    nanos: 0
  };
}

var Duration = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (!message.seconds.isZero()) {
      writer.uint32(8).int64(message.seconds);
    }

    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDuration();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int64();
          break;

        case 2:
          message.nanos = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      seconds: isSet$b(object.seconds) ? Long.fromValue(object.seconds) : Long.ZERO,
      nanos: isSet$b(object.nanos) ? Number(object.nanos) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.seconds !== undefined && (obj.seconds = (message.seconds || Long.ZERO).toString());
    message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$nanos;

    var message = createBaseDuration();
    message.seconds = object.seconds !== undefined && object.seconds !== null ? Long.fromValue(object.seconds) : Long.ZERO;
    message.nanos = (_object$nanos = object.nanos) != null ? _object$nanos : 0;
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$b(value) {
  return value !== null && value !== undefined;
}

/** VoteOption enumerates the valid vote options for a given governance proposal. */

var VoteOption;

(function (VoteOption) {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */

  VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */

  VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */

  VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */

  VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
  VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (VoteOption = {}));

function voteOptionFromJSON(object) {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;

    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;

    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;

    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;

    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;

    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
function voteOptionToJSON(object) {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";

    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";

    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";

    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";

    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";

    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */

var ProposalStatus;

(function (ProposalStatus) {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */

  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */

  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */

  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */

  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */

  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
  ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (ProposalStatus = {}));

function createBaseWeightedVoteOption() {
  return {
    option: 0,
    weight: ""
  };
}

var WeightedVoteOption = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseWeightedVoteOption();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32();
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      option: isSet$c(object.option) ? voteOptionFromJSON(object.option) : 0,
      weight: isSet$c(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$option, _object$weight;

    var message = createBaseWeightedVoteOption();
    message.option = (_object$option = object.option) != null ? _object$option : 0;
    message.weight = (_object$weight = object.weight) != null ? _object$weight : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$c(value) {
  return value !== null && value !== undefined;
}

var protobufPackage$6 = "cosmos.gov.v1beta1";

function createBaseMsgSubmitProposal() {
  return {
    content: undefined,
    initialDeposit: [],
    proposer: ""
  };
}

var MsgSubmitProposal = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.initialDeposit), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }

    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.proposer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      content: isSet$d(object.content) ? Any.fromJSON(object.content) : undefined,
      initialDeposit: Array.isArray(object == null ? void 0 : object.initialDeposit) ? object.initialDeposit.map(function (e) {
        return Coin.fromJSON(e);
      }) : [],
      proposer: isSet$d(object.proposer) ? String(object.proposer) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);

    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.initialDeposit = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$initialDeposi, _object$proposer;

    var message = createBaseMsgSubmitProposal();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.initialDeposit = ((_object$initialDeposi = object.initialDeposit) == null ? void 0 : _object$initialDeposi.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    message.proposer = (_object$proposer = object.proposer) != null ? _object$proposer : "";
    return message;
  }
};

function createBaseMsgVote() {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0
  };
}

var MsgVote = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVote();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.option = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      proposalId: isSet$d(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet$d(object.voter) ? String(object.voter) : "",
      option: isSet$d(object.option) ? voteOptionFromJSON(object.option) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$option;

    var message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = (_object$voter = object.voter) != null ? _object$voter : "";
    message.option = (_object$option = object.option) != null ? _object$option : 0;
    return message;
  }
};

function createBaseMsgVoteWeighted() {
  return {
    proposalId: Long.UZERO,
    voter: "",
    options: []
  };
}

var MsgVoteWeighted = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.options), _step2; !(_step2 = _iterator2()).done;) {
      var v = _step2.value;
      WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVoteWeighted();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      proposalId: isSet$d(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet$d(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object == null ? void 0 : object.options) ? object.options.map(function (e) {
        return WeightedVoteOption.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);

    if (message.options) {
      obj.options = message.options.map(function (e) {
        return e ? WeightedVoteOption.toJSON(e) : undefined;
      });
    } else {
      obj.options = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$voter2, _object$options;

    var message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = (_object$voter2 = object.voter) != null ? _object$voter2 : "";
    message.options = ((_object$options = object.options) == null ? void 0 : _object$options.map(function (e) {
      return WeightedVoteOption.fromPartial(e);
    })) || [];
    return message;
  }
};

function createBaseMsgDeposit() {
  return {
    proposalId: Long.UZERO,
    depositor: "",
    amount: []
  };
}

var MsgDeposit = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(message.amount), _step3; !(_step3 = _iterator3()).done;) {
      var v = _step3.value;
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDeposit();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      proposalId: isSet$d(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      depositor: isSet$d(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object == null ? void 0 : object.amount) ? object.amount.map(function (e) {
        return Coin.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.amount = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$depositor, _object$amount;

    var message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.depositor = (_object$depositor = object.depositor) != null ? _object$depositor : "";
    message.amount = ((_object$amount = object.amount) == null ? void 0 : _object$amount.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$d(value) {
  return value !== null && value !== undefined;
}

var MsgSubmitProposal$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgSubmitProposal$1, _BaseMsg);

  function MsgSubmitProposal$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgSubmitProposal$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgSubmitProposal$1.typeUrl,
      value: MsgSubmitProposal.fromPartial(this.protoMsg)
    };
  };

  return MsgSubmitProposal$1;
}(BaseMsg);

(function (MsgSubmitProposal$1) {
  MsgSubmitProposal$1.typeUrl = "/" + protobufPackage$6 + ".MsgSubmitProposal";
  MsgSubmitProposal$1.Proto = MsgSubmitProposal;
})(MsgSubmitProposal$1 || (MsgSubmitProposal$1 = {}));

var MsgDeposit$1 = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgDeposit$1, _BaseMsg2);

  function MsgDeposit$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgDeposit$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgDeposit$1.typeUrl,
      value: MsgDeposit.fromPartial(this.protoMsg)
    };
  };

  return MsgDeposit$1;
}(BaseMsg);

(function (MsgDeposit$1) {
  MsgDeposit$1.typeUrl = "/" + protobufPackage$6 + ".MsgDeposit";
  MsgDeposit$1.Proto = MsgDeposit;
})(MsgDeposit$1 || (MsgDeposit$1 = {}));

var MsgVote$1 = /*#__PURE__*/function (_BaseMsg3) {
  _inheritsLoose(MsgVote$1, _BaseMsg3);

  function MsgVote$1(msg) {
    var _this3;

    _this3 = _BaseMsg3.call(this) || this;
    _this3.protoMsg = void 0;
    _this3.protoMsg = msg;
    return _this3;
  }

  var _proto3 = MsgVote$1.prototype;

  _proto3.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgVote$1.typeUrl,
      value: MsgVote.fromPartial(this.protoMsg)
    };
  };

  return MsgVote$1;
}(BaseMsg);

(function (MsgVote$1) {
  MsgVote$1.typeUrl = "/" + protobufPackage$6 + ".MsgVote";
  MsgVote$1.Proto = MsgVote;
})(MsgVote$1 || (MsgVote$1 = {}));

var MsgVoteWeighted$1 = /*#__PURE__*/function (_BaseMsg4) {
  _inheritsLoose(MsgVoteWeighted$1, _BaseMsg4);

  function MsgVoteWeighted$1(msg) {
    var _this4;

    _this4 = _BaseMsg4.call(this) || this;
    _this4.protoMsg = void 0;
    _this4.protoMsg = msg;
    return _this4;
  }

  var _proto4 = MsgVoteWeighted$1.prototype;

  _proto4.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgVoteWeighted$1.typeUrl,
      value: MsgVoteWeighted.fromPartial(this.protoMsg)
    };
  };

  return MsgVoteWeighted$1;
}(BaseMsg);

(function (MsgVoteWeighted$1) {
  MsgVoteWeighted$1.typeUrl = "/" + protobufPackage$6 + ".MsgVoteWeighted";
  MsgVoteWeighted$1.Proto = MsgVoteWeighted;
})(MsgVoteWeighted$1 || (MsgVoteWeighted$1 = {}));

var protobufPackage$7 = "cosmos.vesting.v1beta1";

function createBaseMsgCreateVestingAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
    endTime: Long.ZERO,
    delayed: false
  };
}

var MsgCreateVestingAccount = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }

    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.amount), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }

    if (!message.endTime.isZero()) {
      writer.uint32(32).int64(message.endTime);
    }

    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateVestingAccount();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;

        case 2:
          message.toAddress = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.endTime = reader.int64();
          break;

        case 5:
          message.delayed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      fromAddress: isSet$e(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet$e(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object == null ? void 0 : object.amount) ? object.amount.map(function (e) {
        return Coin.fromJSON(e);
      }) : [],
      endTime: isSet$e(object.endTime) ? Long.fromValue(object.endTime) : Long.ZERO,
      delayed: isSet$e(object.delayed) ? Boolean(object.delayed) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);

    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.amount = [];
    }

    message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$fromAddress, _object$toAddress, _object$amount, _object$delayed;

    var message = createBaseMsgCreateVestingAccount();
    message.fromAddress = (_object$fromAddress = object.fromAddress) != null ? _object$fromAddress : "";
    message.toAddress = (_object$toAddress = object.toAddress) != null ? _object$toAddress : "";
    message.amount = ((_object$amount = object.amount) == null ? void 0 : _object$amount.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Long.fromValue(object.endTime) : Long.ZERO;
    message.delayed = (_object$delayed = object.delayed) != null ? _object$delayed : false;
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$e(value) {
  return value !== null && value !== undefined;
}

var MsgCreateVestingAccount$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgCreateVestingAccount$1, _BaseMsg);

  function MsgCreateVestingAccount$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgCreateVestingAccount$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCreateVestingAccount$1.typeUrl,
      value: MsgCreateVestingAccount.fromPartial(this.protoMsg)
    };
  };

  return MsgCreateVestingAccount$1;
}(BaseMsg);

(function (MsgCreateVestingAccount$1) {
  MsgCreateVestingAccount$1.typeUrl = "/" + protobufPackage$7 + ".MsgCreateVestingAccount";
  MsgCreateVestingAccount$1.Proto = MsgCreateVestingAccount;
})(MsgCreateVestingAccount$1 || (MsgCreateVestingAccount$1 = {}));

function createBaseRepurchase() {
  return {
    denom: "",
    sellMinAmount: "",
    sellMaxAmount: "",
    denoms: [],
    fees: []
  };
}

var Repurchase = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.sellMinAmount !== "") {
      writer.uint32(18).string(message.sellMinAmount);
    }

    if (message.sellMaxAmount !== "") {
      writer.uint32(26).string(message.sellMaxAmount);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.denoms), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      writer.uint32(34).string(v);
    }

    writer.uint32(42).fork();

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.fees), _step2; !(_step2 = _iterator2()).done;) {
      var _v = _step2.value;
      writer.int32(_v);
    }

    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRepurchase();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.sellMinAmount = reader.string();
          break;

        case 3:
          message.sellMaxAmount = reader.string();
          break;

        case 4:
          message.denoms.push(reader.string());
          break;

        case 5:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.fees.push(reader.int32());
            }
          } else {
            message.fees.push(reader.int32());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      denom: isSet$f(object.denom) ? String(object.denom) : "",
      sellMinAmount: isSet$f(object.sellMinAmount) ? String(object.sellMinAmount) : "",
      sellMaxAmount: isSet$f(object.sellMaxAmount) ? String(object.sellMaxAmount) : "",
      denoms: Array.isArray(object == null ? void 0 : object.denoms) ? object.denoms.map(function (e) {
        return String(e);
      }) : [],
      fees: Array.isArray(object == null ? void 0 : object.fees) ? object.fees.map(function (e) {
        return Number(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.sellMinAmount !== undefined && (obj.sellMinAmount = message.sellMinAmount);
    message.sellMaxAmount !== undefined && (obj.sellMaxAmount = message.sellMaxAmount);

    if (message.denoms) {
      obj.denoms = message.denoms.map(function (e) {
        return e;
      });
    } else {
      obj.denoms = [];
    }

    if (message.fees) {
      obj.fees = message.fees.map(function (e) {
        return Math.round(e);
      });
    } else {
      obj.fees = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom, _object$sellMinAmount, _object$sellMaxAmount, _object$denoms, _object$fees;

    var message = createBaseRepurchase();
    message.denom = (_object$denom = object.denom) != null ? _object$denom : "";
    message.sellMinAmount = (_object$sellMinAmount = object.sellMinAmount) != null ? _object$sellMinAmount : "";
    message.sellMaxAmount = (_object$sellMaxAmount = object.sellMaxAmount) != null ? _object$sellMaxAmount : "";
    message.denoms = ((_object$denoms = object.denoms) == null ? void 0 : _object$denoms.map(function (e) {
      return e;
    })) || [];
    message.fees = ((_object$fees = object.fees) == null ? void 0 : _object$fees.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$f(value) {
  return value !== null && value !== undefined;
}

var protobufPackage$8 = "metaoslabs.metaos.deflation";

function createBaseMsgGovRepurchase() {
  return {
    creator: "",
    repurchase: undefined
  };
}

var MsgGovRepurchase = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.repurchase !== undefined) {
      Repurchase.encode(message.repurchase, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgGovRepurchase();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.repurchase = Repurchase.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$g(object.creator) ? String(object.creator) : "",
      repurchase: isSet$g(object.repurchase) ? Repurchase.fromJSON(object.repurchase) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.repurchase !== undefined && (obj.repurchase = message.repurchase ? Repurchase.toJSON(message.repurchase) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator;

    var message = createBaseMsgGovRepurchase();
    message.creator = (_object$creator = object.creator) != null ? _object$creator : "";
    message.repurchase = object.repurchase !== undefined && object.repurchase !== null ? Repurchase.fromPartial(object.repurchase) : undefined;
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$g(value) {
  return value !== null && value !== undefined;
}

var MsgGovRepurchase$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgGovRepurchase$1, _BaseMsg);

  function MsgGovRepurchase$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgGovRepurchase$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgGovRepurchase$1.typeUrl,
      value: MsgGovRepurchase.fromPartial(this.protoMsg)
    };
  };

  return MsgGovRepurchase$1;
}(BaseMsg);

(function (MsgGovRepurchase$1) {
  MsgGovRepurchase$1.typeUrl = "/" + protobufPackage$8 + ".MsgGovRepurchase";
  MsgGovRepurchase$1.Proto = MsgGovRepurchase;
})(MsgGovRepurchase$1 || (MsgGovRepurchase$1 = {}));

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

var protobufPackage$9 = "ethermint.evm.v1";

function createBaseMsgEthereumTx() {
  return {
    data: undefined,
    size: 0,
    hash: "",
    from: ""
  };
}

var MsgEthereumTx = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }

    if (message.size !== 0) {
      writer.uint32(17)["double"](message.size);
    }

    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }

    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgEthereumTx();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.size = reader["double"]();
          break;

        case 3:
          message.hash = reader.string();
          break;

        case 4:
          message.from = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      data: isSet$h(object.data) ? Any.fromJSON(object.data) : undefined,
      size: isSet$h(object.size) ? Number(object.size) : 0,
      hash: isSet$h(object.hash) ? String(object.hash) : "",
      from: isSet$h(object.from) ? String(object.from) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.size !== undefined && (obj.size = message.size);
    message.hash !== undefined && (obj.hash = message.hash);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$size, _object$hash, _object$from;

    var message = createBaseMsgEthereumTx();
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    message.size = (_object$size = object.size) != null ? _object$size : 0;
    message.hash = (_object$hash = object.hash) != null ? _object$hash : "";
    message.from = (_object$from = object.from) != null ? _object$from : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$h(value) {
  return value !== null && value !== undefined;
}

var MsgEthereumTx$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgEthereumTx$1, _BaseMsg);

  function MsgEthereumTx$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgEthereumTx$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgEthereumTx$1.typeUrl,
      value: MsgEthereumTx.fromPartial(this.protoMsg)
    };
  };

  return MsgEthereumTx$1;
}(BaseMsg);

(function (MsgEthereumTx$1) {
  MsgEthereumTx$1.typeUrl = "/" + protobufPackage$9 + ".MsgEthereumTx";
  MsgEthereumTx$1.Proto = MsgEthereumTx;
})(MsgEthereumTx$1 || (MsgEthereumTx$1 = {}));

var protobufPackage$a = "metaoslabs.metaos.nft";

function createBaseMsgSend$1() {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}

var MsgSend$2 = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }

    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSend$1();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.sender = reader.string();
          break;

        case 4:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      classId: isSet$i(object.classId) ? String(object.classId) : "",
      id: isSet$i(object.id) ? String(object.id) : "",
      sender: isSet$i(object.sender) ? String(object.sender) : "",
      receiver: isSet$i(object.receiver) ? String(object.receiver) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$classId, _object$id, _object$sender, _object$receiver;

    var message = createBaseMsgSend$1();
    message.classId = (_object$classId = object.classId) != null ? _object$classId : "";
    message.id = (_object$id = object.id) != null ? _object$id : "";
    message.sender = (_object$sender = object.sender) != null ? _object$sender : "";
    message.receiver = (_object$receiver = object.receiver) != null ? _object$receiver : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$i(value) {
  return value !== null && value !== undefined;
}

var MsgSendNft = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgSendNft, _BaseMsg);

  function MsgSendNft(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgSendNft.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgSendNft.typeUrl,
      value: MsgSend$2.fromPartial(this.protoMsg)
    };
  };

  return MsgSendNft;
}(BaseMsg);

(function (MsgSendNft) {
  MsgSendNft.typeUrl = "/" + protobufPackage$a + ".MsgSend";
  MsgSendNft.Proto = MsgSend$2;
})(MsgSendNft || (MsgSendNft = {}));

function createBaseRandSwapRewardSubConfig() {
  return {
    title: "",
    weight: 0,
    numberOfReveal: 0
  };
}

var RandSwapRewardSubConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.weight !== 0) {
      writer.uint32(16).int32(message.weight);
    }

    if (message.numberOfReveal !== 0) {
      writer.uint32(24).uint32(message.numberOfReveal);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRandSwapRewardSubConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.weight = reader.int32();
          break;

        case 3:
          message.numberOfReveal = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      title: isSet$j(object.title) ? String(object.title) : "",
      weight: isSet$j(object.weight) ? Number(object.weight) : 0,
      numberOfReveal: isSet$j(object.numberOfReveal) ? Number(object.numberOfReveal) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.weight !== undefined && (obj.weight = Math.round(message.weight));
    message.numberOfReveal !== undefined && (obj.numberOfReveal = Math.round(message.numberOfReveal));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title, _object$weight, _object$numberOfRevea;

    var message = createBaseRandSwapRewardSubConfig();
    message.title = (_object$title = object.title) != null ? _object$title : "";
    message.weight = (_object$weight = object.weight) != null ? _object$weight : 0;
    message.numberOfReveal = (_object$numberOfRevea = object.numberOfReveal) != null ? _object$numberOfRevea : 0;
    return message;
  }
};

function createBaseRandSwapRewardConfig() {
  return {
    id: Long.UZERO,
    enabled: false,
    intervalPeriod: undefined,
    mintable: false,
    owner: "",
    denom: "",
    decimal: 0,
    totalReward: "",
    subConfigs: [],
    pools: []
  };
}

var RandSwapRewardConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }

    if (message.intervalPeriod !== undefined) {
      Duration.encode(message.intervalPeriod, writer.uint32(26).fork()).ldelim();
    }

    if (message.mintable === true) {
      writer.uint32(32).bool(message.mintable);
    }

    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(50).string(message.denom);
    }

    if (message.decimal !== 0) {
      writer.uint32(56).int32(message.decimal);
    }

    if (message.totalReward !== "") {
      writer.uint32(66).string(message.totalReward);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.subConfigs), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      RandSwapRewardSubConfig.encode(v, writer.uint32(74).fork()).ldelim();
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.pools), _step2; !(_step2 = _iterator2()).done;) {
      var _v = _step2.value;
      writer.uint32(82).string(_v);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRandSwapRewardConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;

        case 2:
          message.enabled = reader.bool();
          break;

        case 3:
          message.intervalPeriod = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.mintable = reader.bool();
          break;

        case 5:
          message.owner = reader.string();
          break;

        case 6:
          message.denom = reader.string();
          break;

        case 7:
          message.decimal = reader.int32();
          break;

        case 8:
          message.totalReward = reader.string();
          break;

        case 9:
          message.subConfigs.push(RandSwapRewardSubConfig.decode(reader, reader.uint32()));
          break;

        case 10:
          message.pools.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      id: isSet$j(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      enabled: isSet$j(object.enabled) ? Boolean(object.enabled) : false,
      intervalPeriod: isSet$j(object.intervalPeriod) ? Duration.fromJSON(object.intervalPeriod) : undefined,
      mintable: isSet$j(object.mintable) ? Boolean(object.mintable) : false,
      owner: isSet$j(object.owner) ? String(object.owner) : "",
      denom: isSet$j(object.denom) ? String(object.denom) : "",
      decimal: isSet$j(object.decimal) ? Number(object.decimal) : 0,
      totalReward: isSet$j(object.totalReward) ? String(object.totalReward) : "",
      subConfigs: Array.isArray(object == null ? void 0 : object.subConfigs) ? object.subConfigs.map(function (e) {
        return RandSwapRewardSubConfig.fromJSON(e);
      }) : [],
      pools: Array.isArray(object == null ? void 0 : object.pools) ? object.pools.map(function (e) {
        return String(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.intervalPeriod !== undefined && (obj.intervalPeriod = message.intervalPeriod ? Duration.toJSON(message.intervalPeriod) : undefined);
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimal !== undefined && (obj.decimal = Math.round(message.decimal));
    message.totalReward !== undefined && (obj.totalReward = message.totalReward);

    if (message.subConfigs) {
      obj.subConfigs = message.subConfigs.map(function (e) {
        return e ? RandSwapRewardSubConfig.toJSON(e) : undefined;
      });
    } else {
      obj.subConfigs = [];
    }

    if (message.pools) {
      obj.pools = message.pools.map(function (e) {
        return e;
      });
    } else {
      obj.pools = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$enabled, _object$mintable, _object$owner, _object$denom, _object$decimal, _object$totalReward, _object$subConfigs, _object$pools;

    var message = createBaseRandSwapRewardConfig();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.enabled = (_object$enabled = object.enabled) != null ? _object$enabled : false;
    message.intervalPeriod = object.intervalPeriod !== undefined && object.intervalPeriod !== null ? Duration.fromPartial(object.intervalPeriod) : undefined;
    message.mintable = (_object$mintable = object.mintable) != null ? _object$mintable : false;
    message.owner = (_object$owner = object.owner) != null ? _object$owner : "";
    message.denom = (_object$denom = object.denom) != null ? _object$denom : "";
    message.decimal = (_object$decimal = object.decimal) != null ? _object$decimal : 0;
    message.totalReward = (_object$totalReward = object.totalReward) != null ? _object$totalReward : "";
    message.subConfigs = ((_object$subConfigs = object.subConfigs) == null ? void 0 : _object$subConfigs.map(function (e) {
      return RandSwapRewardSubConfig.fromPartial(e);
    })) || [];
    message.pools = ((_object$pools = object.pools) == null ? void 0 : _object$pools.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$j(value) {
  return value !== null && value !== undefined;
}

function createBaseLiquidityRewardSubConfig() {
  return {
    address: "",
    weight: 0,
    index: 0
  };
}

var LiquidityRewardSubConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.weight !== 0) {
      writer.uint32(16).int32(message.weight);
    }

    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLiquidityRewardSubConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.weight = reader.int32();
          break;

        case 3:
          message.index = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      address: isSet$k(object.address) ? String(object.address) : "",
      weight: isSet$k(object.weight) ? Number(object.weight) : 0,
      index: isSet$k(object.index) ? Number(object.index) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = Math.round(message.weight));
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$weight, _object$index;

    var message = createBaseLiquidityRewardSubConfig();
    message.address = (_object$address = object.address) != null ? _object$address : "";
    message.weight = (_object$weight = object.weight) != null ? _object$weight : 0;
    message.index = (_object$index = object.index) != null ? _object$index : 0;
    return message;
  }
};

function createBaseLiquidityRewardConfig() {
  return {
    id: Long.UZERO,
    enabled: false,
    mintable: false,
    owner: "",
    denom: "",
    decimal: 0,
    totalRewardPerDay: "",
    subConfigs: []
  };
}

var LiquidityRewardConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }

    if (message.mintable === true) {
      writer.uint32(24).bool(message.mintable);
    }

    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }

    if (message.decimal !== 0) {
      writer.uint32(48).int32(message.decimal);
    }

    if (message.totalRewardPerDay !== "") {
      writer.uint32(58).string(message.totalRewardPerDay);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.subConfigs), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      LiquidityRewardSubConfig.encode(v, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLiquidityRewardConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;

        case 2:
          message.enabled = reader.bool();
          break;

        case 3:
          message.mintable = reader.bool();
          break;

        case 4:
          message.owner = reader.string();
          break;

        case 5:
          message.denom = reader.string();
          break;

        case 6:
          message.decimal = reader.int32();
          break;

        case 7:
          message.totalRewardPerDay = reader.string();
          break;

        case 8:
          message.subConfigs.push(LiquidityRewardSubConfig.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      id: isSet$k(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      enabled: isSet$k(object.enabled) ? Boolean(object.enabled) : false,
      mintable: isSet$k(object.mintable) ? Boolean(object.mintable) : false,
      owner: isSet$k(object.owner) ? String(object.owner) : "",
      denom: isSet$k(object.denom) ? String(object.denom) : "",
      decimal: isSet$k(object.decimal) ? Number(object.decimal) : 0,
      totalRewardPerDay: isSet$k(object.totalRewardPerDay) ? String(object.totalRewardPerDay) : "",
      subConfigs: Array.isArray(object == null ? void 0 : object.subConfigs) ? object.subConfigs.map(function (e) {
        return LiquidityRewardSubConfig.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimal !== undefined && (obj.decimal = Math.round(message.decimal));
    message.totalRewardPerDay !== undefined && (obj.totalRewardPerDay = message.totalRewardPerDay);

    if (message.subConfigs) {
      obj.subConfigs = message.subConfigs.map(function (e) {
        return e ? LiquidityRewardSubConfig.toJSON(e) : undefined;
      });
    } else {
      obj.subConfigs = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$enabled, _object$mintable, _object$owner, _object$denom, _object$decimal, _object$totalRewardPe, _object$subConfigs;

    var message = createBaseLiquidityRewardConfig();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.enabled = (_object$enabled = object.enabled) != null ? _object$enabled : false;
    message.mintable = (_object$mintable = object.mintable) != null ? _object$mintable : false;
    message.owner = (_object$owner = object.owner) != null ? _object$owner : "";
    message.denom = (_object$denom = object.denom) != null ? _object$denom : "";
    message.decimal = (_object$decimal = object.decimal) != null ? _object$decimal : 0;
    message.totalRewardPerDay = (_object$totalRewardPe = object.totalRewardPerDay) != null ? _object$totalRewardPe : "";
    message.subConfigs = ((_object$subConfigs = object.subConfigs) == null ? void 0 : _object$subConfigs.map(function (e) {
      return LiquidityRewardSubConfig.fromPartial(e);
    })) || [];
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$k(value) {
  return value !== null && value !== undefined;
}

var protobufPackage$b = "metaoslabs.metaos.poolincentives";

function createBaseMsgCreateRandSwapRewardConfig() {
  return {
    creator: "",
    config: undefined
  };
}

var MsgCreateRandSwapRewardConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.config !== undefined) {
      RandSwapRewardConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateRandSwapRewardConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.config = RandSwapRewardConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$l(object.creator) ? String(object.creator) : "",
      config: isSet$l(object.config) ? RandSwapRewardConfig.fromJSON(object.config) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.config !== undefined && (obj.config = message.config ? RandSwapRewardConfig.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator;

    var message = createBaseMsgCreateRandSwapRewardConfig();
    message.creator = (_object$creator = object.creator) != null ? _object$creator : "";
    message.config = object.config !== undefined && object.config !== null ? RandSwapRewardConfig.fromPartial(object.config) : undefined;
    return message;
  }
};

function createBaseMsgOpenRandSwapReward() {
  return {
    creator: "",
    configId: Long.UZERO
  };
}

var MsgOpenRandSwapReward = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.configId.isZero()) {
      writer.uint32(16).uint64(message.configId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgOpenRandSwapReward();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.configId = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$l(object.creator) ? String(object.creator) : "",
      configId: isSet$l(object.configId) ? Long.fromValue(object.configId) : Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.configId !== undefined && (obj.configId = (message.configId || Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2;

    var message = createBaseMsgOpenRandSwapReward();
    message.creator = (_object$creator2 = object.creator) != null ? _object$creator2 : "";
    message.configId = object.configId !== undefined && object.configId !== null ? Long.fromValue(object.configId) : Long.UZERO;
    return message;
  }
};

function createBaseMsgCloseRandSwapReward() {
  return {
    creator: "",
    configId: Long.UZERO
  };
}

var MsgCloseRandSwapReward = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.configId.isZero()) {
      writer.uint32(16).uint64(message.configId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCloseRandSwapReward();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.configId = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$l(object.creator) ? String(object.creator) : "",
      configId: isSet$l(object.configId) ? Long.fromValue(object.configId) : Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.configId !== undefined && (obj.configId = (message.configId || Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator3;

    var message = createBaseMsgCloseRandSwapReward();
    message.creator = (_object$creator3 = object.creator) != null ? _object$creator3 : "";
    message.configId = object.configId !== undefined && object.configId !== null ? Long.fromValue(object.configId) : Long.UZERO;
    return message;
  }
};

function createBaseMsgUpdateRandSwapRewardConfig() {
  return {
    creator: "",
    configId: Long.UZERO,
    config: undefined
  };
}

var MsgUpdateRandSwapRewardConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.configId.isZero()) {
      writer.uint32(16).uint64(message.configId);
    }

    if (message.config !== undefined) {
      RandSwapRewardConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateRandSwapRewardConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.configId = reader.uint64();
          break;

        case 3:
          message.config = RandSwapRewardConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$l(object.creator) ? String(object.creator) : "",
      configId: isSet$l(object.configId) ? Long.fromValue(object.configId) : Long.UZERO,
      config: isSet$l(object.config) ? RandSwapRewardConfig.fromJSON(object.config) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.configId !== undefined && (obj.configId = (message.configId || Long.UZERO).toString());
    message.config !== undefined && (obj.config = message.config ? RandSwapRewardConfig.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator4;

    var message = createBaseMsgUpdateRandSwapRewardConfig();
    message.creator = (_object$creator4 = object.creator) != null ? _object$creator4 : "";
    message.configId = object.configId !== undefined && object.configId !== null ? Long.fromValue(object.configId) : Long.UZERO;
    message.config = object.config !== undefined && object.config !== null ? RandSwapRewardConfig.fromPartial(object.config) : undefined;
    return message;
  }
};

function createBaseMsgCollectRandSwapReward() {
  return {
    creator: "",
    denom: "",
    recipient: ""
  };
}

var MsgCollectRandSwapReward = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCollectRandSwapReward();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$l(object.creator) ? String(object.creator) : "",
      denom: isSet$l(object.denom) ? String(object.denom) : "",
      recipient: isSet$l(object.recipient) ? String(object.recipient) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator5, _object$denom, _object$recipient;

    var message = createBaseMsgCollectRandSwapReward();
    message.creator = (_object$creator5 = object.creator) != null ? _object$creator5 : "";
    message.denom = (_object$denom = object.denom) != null ? _object$denom : "";
    message.recipient = (_object$recipient = object.recipient) != null ? _object$recipient : "";
    return message;
  }
};

function createBaseMsgCreateLiquidityRewardConfig() {
  return {
    creator: "",
    config: undefined
  };
}

var MsgCreateLiquidityRewardConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.config !== undefined) {
      LiquidityRewardConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateLiquidityRewardConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 3:
          message.config = LiquidityRewardConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$l(object.creator) ? String(object.creator) : "",
      config: isSet$l(object.config) ? LiquidityRewardConfig.fromJSON(object.config) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.config !== undefined && (obj.config = message.config ? LiquidityRewardConfig.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator6;

    var message = createBaseMsgCreateLiquidityRewardConfig();
    message.creator = (_object$creator6 = object.creator) != null ? _object$creator6 : "";
    message.config = object.config !== undefined && object.config !== null ? LiquidityRewardConfig.fromPartial(object.config) : undefined;
    return message;
  }
};

function createBaseMsgUpdateLiquidityRewardConfig() {
  return {
    creator: "",
    configId: Long.UZERO,
    config: undefined
  };
}

var MsgUpdateLiquidityRewardConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.configId.isZero()) {
      writer.uint32(16).uint64(message.configId);
    }

    if (message.config !== undefined) {
      LiquidityRewardConfig.encode(message.config, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateLiquidityRewardConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.configId = reader.uint64();
          break;

        case 4:
          message.config = LiquidityRewardConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$l(object.creator) ? String(object.creator) : "",
      configId: isSet$l(object.configId) ? Long.fromValue(object.configId) : Long.UZERO,
      config: isSet$l(object.config) ? LiquidityRewardConfig.fromJSON(object.config) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.configId !== undefined && (obj.configId = (message.configId || Long.UZERO).toString());
    message.config !== undefined && (obj.config = message.config ? LiquidityRewardConfig.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator7;

    var message = createBaseMsgUpdateLiquidityRewardConfig();
    message.creator = (_object$creator7 = object.creator) != null ? _object$creator7 : "";
    message.configId = object.configId !== undefined && object.configId !== null ? Long.fromValue(object.configId) : Long.UZERO;
    message.config = object.config !== undefined && object.config !== null ? LiquidityRewardConfig.fromPartial(object.config) : undefined;
    return message;
  }
};

function createBaseMsgOpenLiquidityReward() {
  return {
    creator: "",
    configId: Long.UZERO
  };
}

var MsgOpenLiquidityReward = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.configId.isZero()) {
      writer.uint32(16).uint64(message.configId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgOpenLiquidityReward();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.configId = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$l(object.creator) ? String(object.creator) : "",
      configId: isSet$l(object.configId) ? Long.fromValue(object.configId) : Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.configId !== undefined && (obj.configId = (message.configId || Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator8;

    var message = createBaseMsgOpenLiquidityReward();
    message.creator = (_object$creator8 = object.creator) != null ? _object$creator8 : "";
    message.configId = object.configId !== undefined && object.configId !== null ? Long.fromValue(object.configId) : Long.UZERO;
    return message;
  }
};

function createBaseMsgCloseLiquidityReward() {
  return {
    creator: "",
    configId: Long.UZERO
  };
}

var MsgCloseLiquidityReward = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.configId.isZero()) {
      writer.uint32(16).uint64(message.configId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCloseLiquidityReward();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.configId = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$l(object.creator) ? String(object.creator) : "",
      configId: isSet$l(object.configId) ? Long.fromValue(object.configId) : Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.configId !== undefined && (obj.configId = (message.configId || Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator9;

    var message = createBaseMsgCloseLiquidityReward();
    message.creator = (_object$creator9 = object.creator) != null ? _object$creator9 : "";
    message.configId = object.configId !== undefined && object.configId !== null ? Long.fromValue(object.configId) : Long.UZERO;
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$l(value) {
  return value !== null && value !== undefined;
}

var MsgCreateRandSwapRewardConfig$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgCreateRandSwapRewardConfig$1, _BaseMsg);

  function MsgCreateRandSwapRewardConfig$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgCreateRandSwapRewardConfig$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCreateRandSwapRewardConfig$1.typeUrl,
      value: MsgCreateRandSwapRewardConfig.fromPartial(this.protoMsg)
    };
  };

  return MsgCreateRandSwapRewardConfig$1;
}(BaseMsg);

(function (MsgCreateRandSwapRewardConfig$1) {
  MsgCreateRandSwapRewardConfig$1.typeUrl = "/" + protobufPackage$b + ".MsgCreateRandSwapRewardConfig";
  MsgCreateRandSwapRewardConfig$1.Proto = MsgCreateRandSwapRewardConfig;
})(MsgCreateRandSwapRewardConfig$1 || (MsgCreateRandSwapRewardConfig$1 = {}));

var MsgCollectRandSwapReward$1 = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgCollectRandSwapReward$1, _BaseMsg2);

  function MsgCollectRandSwapReward$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgCollectRandSwapReward$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCollectRandSwapReward$1.typeUrl,
      value: MsgCollectRandSwapReward.fromPartial(this.protoMsg)
    };
  };

  return MsgCollectRandSwapReward$1;
}(BaseMsg);

(function (MsgCollectRandSwapReward$1) {
  MsgCollectRandSwapReward$1.typeUrl = "/" + protobufPackage$b + ".MsgCollectRandSwapReward";
  MsgCollectRandSwapReward$1.Proto = MsgCollectRandSwapReward;
})(MsgCollectRandSwapReward$1 || (MsgCollectRandSwapReward$1 = {}));

var MsgOpenRandSwapReward$1 = /*#__PURE__*/function (_BaseMsg3) {
  _inheritsLoose(MsgOpenRandSwapReward$1, _BaseMsg3);

  function MsgOpenRandSwapReward$1(msg) {
    var _this3;

    _this3 = _BaseMsg3.call(this) || this;
    _this3.protoMsg = void 0;
    _this3.protoMsg = msg;
    return _this3;
  }

  var _proto3 = MsgOpenRandSwapReward$1.prototype;

  _proto3.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgOpenRandSwapReward$1.typeUrl,
      value: MsgOpenRandSwapReward.fromPartial(this.protoMsg)
    };
  };

  return MsgOpenRandSwapReward$1;
}(BaseMsg);

(function (MsgOpenRandSwapReward$1) {
  MsgOpenRandSwapReward$1.typeUrl = "/" + protobufPackage$b + ".MsgOpenRandSwapReward";
  MsgOpenRandSwapReward$1.Proto = MsgOpenRandSwapReward;
})(MsgOpenRandSwapReward$1 || (MsgOpenRandSwapReward$1 = {}));

var MsgCloseRandSwapReward$1 = /*#__PURE__*/function (_BaseMsg4) {
  _inheritsLoose(MsgCloseRandSwapReward$1, _BaseMsg4);

  function MsgCloseRandSwapReward$1(msg) {
    var _this4;

    _this4 = _BaseMsg4.call(this) || this;
    _this4.protoMsg = void 0;
    _this4.protoMsg = msg;
    return _this4;
  }

  var _proto4 = MsgCloseRandSwapReward$1.prototype;

  _proto4.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCloseRandSwapReward$1.typeUrl,
      value: MsgCloseRandSwapReward.fromPartial(this.protoMsg)
    };
  };

  return MsgCloseRandSwapReward$1;
}(BaseMsg);

(function (MsgCloseRandSwapReward$1) {
  MsgCloseRandSwapReward$1.typeUrl = "/" + protobufPackage$b + ".MsgCloseRandSwapReward";
  MsgCloseRandSwapReward$1.Proto = MsgCloseRandSwapReward;
})(MsgCloseRandSwapReward$1 || (MsgCloseRandSwapReward$1 = {}));

var MsgUpdateRandSwapRewardConfig$1 = /*#__PURE__*/function (_BaseMsg5) {
  _inheritsLoose(MsgUpdateRandSwapRewardConfig$1, _BaseMsg5);

  function MsgUpdateRandSwapRewardConfig$1(msg) {
    var _this5;

    _this5 = _BaseMsg5.call(this) || this;
    _this5.protoMsg = void 0;
    _this5.protoMsg = msg;
    return _this5;
  }

  var _proto5 = MsgUpdateRandSwapRewardConfig$1.prototype;

  _proto5.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgUpdateRandSwapRewardConfig$1.typeUrl,
      value: MsgUpdateRandSwapRewardConfig.fromPartial(this.protoMsg)
    };
  };

  return MsgUpdateRandSwapRewardConfig$1;
}(BaseMsg);

(function (MsgUpdateRandSwapRewardConfig$1) {
  MsgUpdateRandSwapRewardConfig$1.typeUrl = "/" + protobufPackage$b + ".MsgUpdateRandSwapRewardConfig";
  MsgUpdateRandSwapRewardConfig$1.Proto = MsgUpdateRandSwapRewardConfig;
})(MsgUpdateRandSwapRewardConfig$1 || (MsgUpdateRandSwapRewardConfig$1 = {}));

var MsgCreateLiquidityRewardConfig$1 = /*#__PURE__*/function (_BaseMsg6) {
  _inheritsLoose(MsgCreateLiquidityRewardConfig$1, _BaseMsg6);

  function MsgCreateLiquidityRewardConfig$1(msg) {
    var _this6;

    _this6 = _BaseMsg6.call(this) || this;
    _this6.protoMsg = void 0;
    _this6.protoMsg = msg;
    return _this6;
  }

  var _proto6 = MsgCreateLiquidityRewardConfig$1.prototype;

  _proto6.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCreateLiquidityRewardConfig$1.typeUrl,
      value: MsgCreateLiquidityRewardConfig.fromPartial(this.protoMsg)
    };
  };

  return MsgCreateLiquidityRewardConfig$1;
}(BaseMsg);

(function (MsgCreateLiquidityRewardConfig$1) {
  MsgCreateLiquidityRewardConfig$1.typeUrl = "/" + protobufPackage$b + ".MsgCreateLiquidityRewardConfig";
  MsgCreateLiquidityRewardConfig$1.Proto = MsgCreateLiquidityRewardConfig;
})(MsgCreateLiquidityRewardConfig$1 || (MsgCreateLiquidityRewardConfig$1 = {}));

var MsgUpdateLiquidityRewardConfig$1 = /*#__PURE__*/function (_BaseMsg7) {
  _inheritsLoose(MsgUpdateLiquidityRewardConfig$1, _BaseMsg7);

  function MsgUpdateLiquidityRewardConfig$1(msg) {
    var _this7;

    _this7 = _BaseMsg7.call(this) || this;
    _this7.protoMsg = void 0;
    _this7.protoMsg = msg;
    return _this7;
  }

  var _proto7 = MsgUpdateLiquidityRewardConfig$1.prototype;

  _proto7.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgUpdateLiquidityRewardConfig$1.typeUrl,
      value: MsgUpdateLiquidityRewardConfig.fromPartial(this.protoMsg)
    };
  };

  return MsgUpdateLiquidityRewardConfig$1;
}(BaseMsg);

(function (MsgUpdateLiquidityRewardConfig$1) {
  MsgUpdateLiquidityRewardConfig$1.typeUrl = "/" + protobufPackage$b + ".MsgUpdateLiquidityRewardConfig";
  MsgUpdateLiquidityRewardConfig$1.Proto = MsgUpdateLiquidityRewardConfig;
})(MsgUpdateLiquidityRewardConfig$1 || (MsgUpdateLiquidityRewardConfig$1 = {}));

var MsgOpenLiquidityReward$1 = /*#__PURE__*/function (_BaseMsg8) {
  _inheritsLoose(MsgOpenLiquidityReward$1, _BaseMsg8);

  function MsgOpenLiquidityReward$1(msg) {
    var _this8;

    _this8 = _BaseMsg8.call(this) || this;
    _this8.protoMsg = void 0;
    _this8.protoMsg = msg;
    return _this8;
  }

  var _proto8 = MsgOpenLiquidityReward$1.prototype;

  _proto8.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgOpenLiquidityReward$1.typeUrl,
      value: MsgOpenLiquidityReward.fromPartial(this.protoMsg)
    };
  };

  return MsgOpenLiquidityReward$1;
}(BaseMsg);

(function (MsgOpenLiquidityReward$1) {
  MsgOpenLiquidityReward$1.typeUrl = "/" + protobufPackage$b + ".MsgOpenLiquidityReward";
  MsgOpenLiquidityReward$1.Proto = MsgOpenLiquidityReward;
})(MsgOpenLiquidityReward$1 || (MsgOpenLiquidityReward$1 = {}));

var MsgCloseLiquidityReward$1 = /*#__PURE__*/function (_BaseMsg9) {
  _inheritsLoose(MsgCloseLiquidityReward$1, _BaseMsg9);

  function MsgCloseLiquidityReward$1(msg) {
    var _this9;

    _this9 = _BaseMsg9.call(this) || this;
    _this9.protoMsg = void 0;
    _this9.protoMsg = msg;
    return _this9;
  }

  var _proto9 = MsgCloseLiquidityReward$1.prototype;

  _proto9.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCloseLiquidityReward$1.typeUrl,
      value: MsgCloseLiquidityReward.fromPartial(this.protoMsg)
    };
  };

  return MsgCloseLiquidityReward$1;
}(BaseMsg);

(function (MsgCloseLiquidityReward$1) {
  MsgCloseLiquidityReward$1.typeUrl = "/" + protobufPackage$b + ".MsgCloseLiquidityReward";
  MsgCloseLiquidityReward$1.Proto = MsgCloseLiquidityReward;
})(MsgCloseLiquidityReward$1 || (MsgCloseLiquidityReward$1 = {}));

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

/* eslint-disable */

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

/* eslint-disable */

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

/** BlockIdFlag indicates which BlcokID the signature is for */

var BlockIDFlag;

(function (BlockIDFlag) {
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
  BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (BlockIDFlag = {}));
/** SignedMsgType is a type of signed message in the consensus. */

var SignedMsgType;

(function (SignedMsgType) {
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
  /** SIGNED_MSG_TYPE_PREVOTE - Votes */

  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */

  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
  SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (SignedMsgType = {}));

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

/** BondStatus is the status of a validator. */

var BondStatus;

(function (BondStatus) {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */

  BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */

  BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */

  BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
  BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (BondStatus = {}));

function createBaseCommissionRates() {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: ""
  };
}

var CommissionRates = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }

    if (message.maxRate !== "") {
      writer.uint32(18).string(message.maxRate);
    }

    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(message.maxChangeRate);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommissionRates();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;

        case 2:
          message.maxRate = reader.string();
          break;

        case 3:
          message.maxChangeRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      rate: isSet$m(object.rate) ? String(object.rate) : "",
      maxRate: isSet$m(object.maxRate) ? String(object.maxRate) : "",
      maxChangeRate: isSet$m(object.maxChangeRate) ? String(object.maxChangeRate) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.maxRate !== undefined && (obj.maxRate = message.maxRate);
    message.maxChangeRate !== undefined && (obj.maxChangeRate = message.maxChangeRate);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$rate, _object$maxRate, _object$maxChangeRate;

    var message = createBaseCommissionRates();
    message.rate = (_object$rate = object.rate) != null ? _object$rate : "";
    message.maxRate = (_object$maxRate = object.maxRate) != null ? _object$maxRate : "";
    message.maxChangeRate = (_object$maxChangeRate = object.maxChangeRate) != null ? _object$maxChangeRate : "";
    return message;
  }
};

function createBaseDescription() {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: ""
  };
}

var Description = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }

    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }

    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }

    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }

    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescription();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;

        case 2:
          message.identity = reader.string();
          break;

        case 3:
          message.website = reader.string();
          break;

        case 4:
          message.securityContact = reader.string();
          break;

        case 5:
          message.details = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      moniker: isSet$m(object.moniker) ? String(object.moniker) : "",
      identity: isSet$m(object.identity) ? String(object.identity) : "",
      website: isSet$m(object.website) ? String(object.website) : "",
      securityContact: isSet$m(object.securityContact) ? String(object.securityContact) : "",
      details: isSet$m(object.details) ? String(object.details) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$moniker, _object$identity, _object$website, _object$securityConta, _object$details;

    var message = createBaseDescription();
    message.moniker = (_object$moniker = object.moniker) != null ? _object$moniker : "";
    message.identity = (_object$identity = object.identity) != null ? _object$identity : "";
    message.website = (_object$website = object.website) != null ? _object$website : "";
    message.securityContact = (_object$securityConta = object.securityContact) != null ? _object$securityConta : "";
    message.details = (_object$details = object.details) != null ? _object$details : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$m(value) {
  return value !== null && value !== undefined;
}

var protobufPackage$c = "cosmos.staking.v1beta1";

function createBaseMsgCreateValidator() {
  return {
    description: undefined,
    commission: undefined,
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
    pubkey: undefined,
    value: undefined
  };
}

var MsgCreateValidator = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }

    if (message.commission !== undefined) {
      CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }

    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(34).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }

    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }

    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateValidator();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 2:
          message.commission = CommissionRates.decode(reader, reader.uint32());
          break;

        case 3:
          message.minSelfDelegation = reader.string();
          break;

        case 4:
          message.delegatorAddress = reader.string();
          break;

        case 5:
          message.validatorAddress = reader.string();
          break;

        case 6:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;

        case 7:
          message.value = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      description: isSet$n(object.description) ? Description.fromJSON(object.description) : undefined,
      commission: isSet$n(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
      minSelfDelegation: isSet$n(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
      delegatorAddress: isSet$n(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet$n(object.validatorAddress) ? String(object.validatorAddress) : "",
      pubkey: isSet$n(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
      value: isSet$n(object.value) ? Coin.fromJSON(object.value) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? CommissionRates.toJSON(message.commission) : undefined);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$minSelfDelega, _object$delegatorAddr, _object$validatorAddr;

    var message = createBaseMsgCreateValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = (_object$minSelfDelega = object.minSelfDelegation) != null ? _object$minSelfDelega : "";
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) != null ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) != null ? _object$validatorAddr : "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  }
};

function createBaseMsgEditValidator() {
  return {
    description: undefined,
    validatorAddress: "",
    commissionRate: "",
    minSelfDelegation: ""
  };
}

var MsgEditValidator = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.commissionRate !== "") {
      writer.uint32(26).string(message.commissionRate);
    }

    if (message.minSelfDelegation !== "") {
      writer.uint32(34).string(message.minSelfDelegation);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgEditValidator();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.commissionRate = reader.string();
          break;

        case 4:
          message.minSelfDelegation = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      description: isSet$n(object.description) ? Description.fromJSON(object.description) : undefined,
      validatorAddress: isSet$n(object.validatorAddress) ? String(object.validatorAddress) : "",
      commissionRate: isSet$n(object.commissionRate) ? String(object.commissionRate) : "",
      minSelfDelegation: isSet$n(object.minSelfDelegation) ? String(object.minSelfDelegation) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr2, _object$commissionRat, _object$minSelfDelega2;

    var message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) != null ? _object$validatorAddr2 : "";
    message.commissionRate = (_object$commissionRat = object.commissionRate) != null ? _object$commissionRat : "";
    message.minSelfDelegation = (_object$minSelfDelega2 = object.minSelfDelegation) != null ? _object$minSelfDelega2 : "";
    return message;
  }
};

function createBaseMsgDelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined
  };
}

var MsgDelegate = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelegate();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: isSet$n(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet$n(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet$n(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorAddr3;

    var message = createBaseMsgDelegate();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) != null ? _object$delegatorAddr2 : "";
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) != null ? _object$validatorAddr3 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};

function createBaseMsgBeginRedelegate() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: undefined
  };
}

var MsgBeginRedelegate = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }

    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginRedelegate();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorSrcAddress = reader.string();
          break;

        case 3:
          message.validatorDstAddress = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: isSet$n(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorSrcAddress: isSet$n(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
      validatorDstAddress: isSet$n(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
      amount: isSet$n(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr3, _object$validatorSrcA, _object$validatorDstA;

    var message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) != null ? _object$delegatorAddr3 : "";
    message.validatorSrcAddress = (_object$validatorSrcA = object.validatorSrcAddress) != null ? _object$validatorSrcA : "";
    message.validatorDstAddress = (_object$validatorDstA = object.validatorDstAddress) != null ? _object$validatorDstA : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};

function createBaseMsgUndelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined
  };
}

var MsgUndelegate = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUndelegate();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: isSet$n(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet$n(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet$n(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr4, _object$validatorAddr4;

    var message = createBaseMsgUndelegate();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) != null ? _object$delegatorAddr4 : "";
    message.validatorAddress = (_object$validatorAddr4 = object.validatorAddress) != null ? _object$validatorAddr4 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$n(value) {
  return value !== null && value !== undefined;
}

var MsgCreateValidator$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgCreateValidator$1, _BaseMsg);

  function MsgCreateValidator$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgCreateValidator$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCreateValidator$1.typeUrl,
      value: MsgCreateValidator.fromPartial(this.protoMsg)
    };
  };

  return MsgCreateValidator$1;
}(BaseMsg);

(function (MsgCreateValidator$1) {
  MsgCreateValidator$1.typeUrl = "/" + protobufPackage$c + ".MsgCreateValidator";
  MsgCreateValidator$1.Proto = MsgCreateValidator;
})(MsgCreateValidator$1 || (MsgCreateValidator$1 = {}));

var MsgEditValidator$1 = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgEditValidator$1, _BaseMsg2);

  function MsgEditValidator$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgEditValidator$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgEditValidator$1.typeUrl,
      value: MsgEditValidator.fromPartial(this.protoMsg)
    };
  };

  return MsgEditValidator$1;
}(BaseMsg);

(function (MsgEditValidator$1) {
  MsgEditValidator$1.typeUrl = "/" + protobufPackage$c + ".MsgEditValidator";
  MsgEditValidator$1.Proto = MsgEditValidator;
})(MsgEditValidator$1 || (MsgEditValidator$1 = {}));

var MsgDelegate$1 = /*#__PURE__*/function (_BaseMsg3) {
  _inheritsLoose(MsgDelegate$1, _BaseMsg3);

  function MsgDelegate$1(msg) {
    var _this3;

    _this3 = _BaseMsg3.call(this) || this;
    _this3.protoMsg = void 0;
    _this3.protoMsg = msg;
    return _this3;
  }

  var _proto3 = MsgDelegate$1.prototype;

  _proto3.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgDelegate$1.typeUrl,
      value: MsgDelegate.fromPartial(this.protoMsg)
    };
  };

  return MsgDelegate$1;
}(BaseMsg);

(function (MsgDelegate$1) {
  MsgDelegate$1.typeUrl = "/" + protobufPackage$c + ".MsgDelegate";
  MsgDelegate$1.Proto = MsgDelegate;
})(MsgDelegate$1 || (MsgDelegate$1 = {}));

var MsgBeginRedelegate$1 = /*#__PURE__*/function (_BaseMsg4) {
  _inheritsLoose(MsgBeginRedelegate$1, _BaseMsg4);

  function MsgBeginRedelegate$1(msg) {
    var _this4;

    _this4 = _BaseMsg4.call(this) || this;
    _this4.protoMsg = void 0;
    _this4.protoMsg = msg;
    return _this4;
  }

  var _proto4 = MsgBeginRedelegate$1.prototype;

  _proto4.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgBeginRedelegate$1.typeUrl,
      value: MsgBeginRedelegate.fromPartial(this.protoMsg)
    };
  };

  return MsgBeginRedelegate$1;
}(BaseMsg);

(function (MsgBeginRedelegate$1) {
  MsgBeginRedelegate$1.typeUrl = "/" + protobufPackage$c + ".MsgBeginRedelegate";
  MsgBeginRedelegate$1.Proto = MsgBeginRedelegate;
})(MsgBeginRedelegate$1 || (MsgBeginRedelegate$1 = {}));

var MsgUndelegate$1 = /*#__PURE__*/function (_BaseMsg5) {
  _inheritsLoose(MsgUndelegate$1, _BaseMsg5);

  function MsgUndelegate$1(msg) {
    var _this5;

    _this5 = _BaseMsg5.call(this) || this;
    _this5.protoMsg = void 0;
    _this5.protoMsg = msg;
    return _this5;
  }

  var _proto5 = MsgUndelegate$1.prototype;

  _proto5.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgUndelegate$1.typeUrl,
      value: MsgUndelegate.fromPartial(this.protoMsg)
    };
  };

  return MsgUndelegate$1;
}(BaseMsg);

(function (MsgUndelegate$1) {
  MsgUndelegate$1.typeUrl = "/" + protobufPackage$c + ".MsgUndelegate";
  MsgUndelegate$1.Proto = MsgUndelegate;
})(MsgUndelegate$1 || (MsgUndelegate$1 = {}));

var protobufPackage$d = "metaoslabs.metaos.swap";

function createBaseMsgCreatePool() {
  return {
    creator: "",
    denom0: "",
    denom1: "",
    fee: 0,
    sqrtPrice: ""
  };
}

var MsgCreatePool = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }

    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }

    if (message.fee !== 0) {
      writer.uint32(32).int32(message.fee);
    }

    if (message.sqrtPrice !== "") {
      writer.uint32(42).string(message.sqrtPrice);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePool();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom0 = reader.string();
          break;

        case 3:
          message.denom1 = reader.string();
          break;

        case 4:
          message.fee = reader.int32();
          break;

        case 5:
          message.sqrtPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$o(object.creator) ? String(object.creator) : "",
      denom0: isSet$o(object.denom0) ? String(object.denom0) : "",
      denom1: isSet$o(object.denom1) ? String(object.denom1) : "",
      fee: isSet$o(object.fee) ? Number(object.fee) : 0,
      sqrtPrice: isSet$o(object.sqrtPrice) ? String(object.sqrtPrice) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.sqrtPrice !== undefined && (obj.sqrtPrice = message.sqrtPrice);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$denom, _object$denom2, _object$fee, _object$sqrtPrice;

    var message = createBaseMsgCreatePool();
    message.creator = (_object$creator = object.creator) != null ? _object$creator : "";
    message.denom0 = (_object$denom = object.denom0) != null ? _object$denom : "";
    message.denom1 = (_object$denom2 = object.denom1) != null ? _object$denom2 : "";
    message.fee = (_object$fee = object.fee) != null ? _object$fee : 0;
    message.sqrtPrice = (_object$sqrtPrice = object.sqrtPrice) != null ? _object$sqrtPrice : "";
    return message;
  }
};

function createBaseMsgCreatePosition() {
  return {
    creator: "",
    denom0: "",
    denom1: "",
    fee: 0,
    tickLower: 0,
    tickUpper: 0,
    amount0Desired: "",
    amount1Desired: "",
    amount0Min: "",
    amount1Min: "",
    recipient: "",
    deadline: undefined
  };
}

var MsgCreatePosition = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }

    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }

    if (message.fee !== 0) {
      writer.uint32(32).int32(message.fee);
    }

    if (message.tickLower !== 0) {
      writer.uint32(40).int32(message.tickLower);
    }

    if (message.tickUpper !== 0) {
      writer.uint32(48).int32(message.tickUpper);
    }

    if (message.amount0Desired !== "") {
      writer.uint32(58).string(message.amount0Desired);
    }

    if (message.amount1Desired !== "") {
      writer.uint32(66).string(message.amount1Desired);
    }

    if (message.amount0Min !== "") {
      writer.uint32(74).string(message.amount0Min);
    }

    if (message.amount1Min !== "") {
      writer.uint32(82).string(message.amount1Min);
    }

    if (message.recipient !== "") {
      writer.uint32(90).string(message.recipient);
    }

    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp$1(message.deadline), writer.uint32(98).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePosition();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom0 = reader.string();
          break;

        case 3:
          message.denom1 = reader.string();
          break;

        case 4:
          message.fee = reader.int32();
          break;

        case 5:
          message.tickLower = reader.int32();
          break;

        case 6:
          message.tickUpper = reader.int32();
          break;

        case 7:
          message.amount0Desired = reader.string();
          break;

        case 8:
          message.amount1Desired = reader.string();
          break;

        case 9:
          message.amount0Min = reader.string();
          break;

        case 10:
          message.amount1Min = reader.string();
          break;

        case 11:
          message.recipient = reader.string();
          break;

        case 12:
          message.deadline = fromTimestamp$1(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$o(object.creator) ? String(object.creator) : "",
      denom0: isSet$o(object.denom0) ? String(object.denom0) : "",
      denom1: isSet$o(object.denom1) ? String(object.denom1) : "",
      fee: isSet$o(object.fee) ? Number(object.fee) : 0,
      tickLower: isSet$o(object.tickLower) ? Number(object.tickLower) : 0,
      tickUpper: isSet$o(object.tickUpper) ? Number(object.tickUpper) : 0,
      amount0Desired: isSet$o(object.amount0Desired) ? String(object.amount0Desired) : "",
      amount1Desired: isSet$o(object.amount1Desired) ? String(object.amount1Desired) : "",
      amount0Min: isSet$o(object.amount0Min) ? String(object.amount0Min) : "",
      amount1Min: isSet$o(object.amount1Min) ? String(object.amount1Min) : "",
      recipient: isSet$o(object.recipient) ? String(object.recipient) : "",
      deadline: isSet$o(object.deadline) ? fromJsonTimestamp$1(object.deadline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.tickLower !== undefined && (obj.tickLower = Math.round(message.tickLower));
    message.tickUpper !== undefined && (obj.tickUpper = Math.round(message.tickUpper));
    message.amount0Desired !== undefined && (obj.amount0Desired = message.amount0Desired);
    message.amount1Desired !== undefined && (obj.amount1Desired = message.amount1Desired);
    message.amount0Min !== undefined && (obj.amount0Min = message.amount0Min);
    message.amount1Min !== undefined && (obj.amount1Min = message.amount1Min);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.deadline !== undefined && (obj.deadline = message.deadline.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$denom3, _object$denom4, _object$fee2, _object$tickLower, _object$tickUpper, _object$amount0Desire, _object$amount1Desire, _object$amount0Min, _object$amount1Min, _object$recipient, _object$deadline;

    var message = createBaseMsgCreatePosition();
    message.creator = (_object$creator2 = object.creator) != null ? _object$creator2 : "";
    message.denom0 = (_object$denom3 = object.denom0) != null ? _object$denom3 : "";
    message.denom1 = (_object$denom4 = object.denom1) != null ? _object$denom4 : "";
    message.fee = (_object$fee2 = object.fee) != null ? _object$fee2 : 0;
    message.tickLower = (_object$tickLower = object.tickLower) != null ? _object$tickLower : 0;
    message.tickUpper = (_object$tickUpper = object.tickUpper) != null ? _object$tickUpper : 0;
    message.amount0Desired = (_object$amount0Desire = object.amount0Desired) != null ? _object$amount0Desire : "";
    message.amount1Desired = (_object$amount1Desire = object.amount1Desired) != null ? _object$amount1Desire : "";
    message.amount0Min = (_object$amount0Min = object.amount0Min) != null ? _object$amount0Min : "";
    message.amount1Min = (_object$amount1Min = object.amount1Min) != null ? _object$amount1Min : "";
    message.recipient = (_object$recipient = object.recipient) != null ? _object$recipient : "";
    message.deadline = (_object$deadline = object.deadline) != null ? _object$deadline : undefined;
    return message;
  }
};

function createBaseMsgIncreaseLiquidity() {
  return {
    creator: "",
    tokenId: "",
    amount0Desired: "",
    amount1Desired: "",
    amount0Min: "",
    amount1Min: "",
    deadline: undefined
  };
}

var MsgIncreaseLiquidity = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }

    if (message.amount0Desired !== "") {
      writer.uint32(26).string(message.amount0Desired);
    }

    if (message.amount1Desired !== "") {
      writer.uint32(34).string(message.amount1Desired);
    }

    if (message.amount0Min !== "") {
      writer.uint32(42).string(message.amount0Min);
    }

    if (message.amount1Min !== "") {
      writer.uint32(50).string(message.amount1Min);
    }

    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp$1(message.deadline), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgIncreaseLiquidity();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.tokenId = reader.string();
          break;

        case 3:
          message.amount0Desired = reader.string();
          break;

        case 4:
          message.amount1Desired = reader.string();
          break;

        case 5:
          message.amount0Min = reader.string();
          break;

        case 6:
          message.amount1Min = reader.string();
          break;

        case 7:
          message.deadline = fromTimestamp$1(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$o(object.creator) ? String(object.creator) : "",
      tokenId: isSet$o(object.tokenId) ? String(object.tokenId) : "",
      amount0Desired: isSet$o(object.amount0Desired) ? String(object.amount0Desired) : "",
      amount1Desired: isSet$o(object.amount1Desired) ? String(object.amount1Desired) : "",
      amount0Min: isSet$o(object.amount0Min) ? String(object.amount0Min) : "",
      amount1Min: isSet$o(object.amount1Min) ? String(object.amount1Min) : "",
      deadline: isSet$o(object.deadline) ? fromJsonTimestamp$1(object.deadline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.amount0Desired !== undefined && (obj.amount0Desired = message.amount0Desired);
    message.amount1Desired !== undefined && (obj.amount1Desired = message.amount1Desired);
    message.amount0Min !== undefined && (obj.amount0Min = message.amount0Min);
    message.amount1Min !== undefined && (obj.amount1Min = message.amount1Min);
    message.deadline !== undefined && (obj.deadline = message.deadline.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator3, _object$tokenId, _object$amount0Desire2, _object$amount1Desire2, _object$amount0Min2, _object$amount1Min2, _object$deadline2;

    var message = createBaseMsgIncreaseLiquidity();
    message.creator = (_object$creator3 = object.creator) != null ? _object$creator3 : "";
    message.tokenId = (_object$tokenId = object.tokenId) != null ? _object$tokenId : "";
    message.amount0Desired = (_object$amount0Desire2 = object.amount0Desired) != null ? _object$amount0Desire2 : "";
    message.amount1Desired = (_object$amount1Desire2 = object.amount1Desired) != null ? _object$amount1Desire2 : "";
    message.amount0Min = (_object$amount0Min2 = object.amount0Min) != null ? _object$amount0Min2 : "";
    message.amount1Min = (_object$amount1Min2 = object.amount1Min) != null ? _object$amount1Min2 : "";
    message.deadline = (_object$deadline2 = object.deadline) != null ? _object$deadline2 : undefined;
    return message;
  }
};

function createBaseMsgDecreaseLiquidity() {
  return {
    creator: "",
    tokenId: "",
    liquidity: "",
    amount0Min: "",
    amount1Min: "",
    deadline: undefined
  };
}

var MsgDecreaseLiquidity = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }

    if (message.liquidity !== "") {
      writer.uint32(26).string(message.liquidity);
    }

    if (message.amount0Min !== "") {
      writer.uint32(34).string(message.amount0Min);
    }

    if (message.amount1Min !== "") {
      writer.uint32(42).string(message.amount1Min);
    }

    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp$1(message.deadline), writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDecreaseLiquidity();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.tokenId = reader.string();
          break;

        case 3:
          message.liquidity = reader.string();
          break;

        case 4:
          message.amount0Min = reader.string();
          break;

        case 5:
          message.amount1Min = reader.string();
          break;

        case 6:
          message.deadline = fromTimestamp$1(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$o(object.creator) ? String(object.creator) : "",
      tokenId: isSet$o(object.tokenId) ? String(object.tokenId) : "",
      liquidity: isSet$o(object.liquidity) ? String(object.liquidity) : "",
      amount0Min: isSet$o(object.amount0Min) ? String(object.amount0Min) : "",
      amount1Min: isSet$o(object.amount1Min) ? String(object.amount1Min) : "",
      deadline: isSet$o(object.deadline) ? fromJsonTimestamp$1(object.deadline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.amount0Min !== undefined && (obj.amount0Min = message.amount0Min);
    message.amount1Min !== undefined && (obj.amount1Min = message.amount1Min);
    message.deadline !== undefined && (obj.deadline = message.deadline.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator4, _object$tokenId2, _object$liquidity, _object$amount0Min3, _object$amount1Min3, _object$deadline3;

    var message = createBaseMsgDecreaseLiquidity();
    message.creator = (_object$creator4 = object.creator) != null ? _object$creator4 : "";
    message.tokenId = (_object$tokenId2 = object.tokenId) != null ? _object$tokenId2 : "";
    message.liquidity = (_object$liquidity = object.liquidity) != null ? _object$liquidity : "";
    message.amount0Min = (_object$amount0Min3 = object.amount0Min) != null ? _object$amount0Min3 : "";
    message.amount1Min = (_object$amount1Min3 = object.amount1Min) != null ? _object$amount1Min3 : "";
    message.deadline = (_object$deadline3 = object.deadline) != null ? _object$deadline3 : undefined;
    return message;
  }
};

function createBaseMsgCollect() {
  return {
    creator: "",
    tokenId: "",
    recipient: "",
    amount0Max: "",
    amount1Max: "",
    collectOnly: false
  };
}

var MsgCollect = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    if (message.amount0Max !== "") {
      writer.uint32(34).string(message.amount0Max);
    }

    if (message.amount1Max !== "") {
      writer.uint32(42).string(message.amount1Max);
    }

    if (message.collectOnly === true) {
      writer.uint32(48).bool(message.collectOnly);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCollect();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.tokenId = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        case 4:
          message.amount0Max = reader.string();
          break;

        case 5:
          message.amount1Max = reader.string();
          break;

        case 6:
          message.collectOnly = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$o(object.creator) ? String(object.creator) : "",
      tokenId: isSet$o(object.tokenId) ? String(object.tokenId) : "",
      recipient: isSet$o(object.recipient) ? String(object.recipient) : "",
      amount0Max: isSet$o(object.amount0Max) ? String(object.amount0Max) : "",
      amount1Max: isSet$o(object.amount1Max) ? String(object.amount1Max) : "",
      collectOnly: isSet$o(object.collectOnly) ? Boolean(object.collectOnly) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount0Max !== undefined && (obj.amount0Max = message.amount0Max);
    message.amount1Max !== undefined && (obj.amount1Max = message.amount1Max);
    message.collectOnly !== undefined && (obj.collectOnly = message.collectOnly);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator5, _object$tokenId3, _object$recipient2, _object$amount0Max, _object$amount1Max, _object$collectOnly;

    var message = createBaseMsgCollect();
    message.creator = (_object$creator5 = object.creator) != null ? _object$creator5 : "";
    message.tokenId = (_object$tokenId3 = object.tokenId) != null ? _object$tokenId3 : "";
    message.recipient = (_object$recipient2 = object.recipient) != null ? _object$recipient2 : "";
    message.amount0Max = (_object$amount0Max = object.amount0Max) != null ? _object$amount0Max : "";
    message.amount1Max = (_object$amount1Max = object.amount1Max) != null ? _object$amount1Max : "";
    message.collectOnly = (_object$collectOnly = object.collectOnly) != null ? _object$collectOnly : false;
    return message;
  }
};

function createBaseMsgSwapExactIn() {
  return {
    creator: "",
    recipient: "",
    amountIn: "",
    amountOutMin: "",
    denoms: [],
    fees: [],
    deadline: undefined
  };
}

var MsgSwapExactIn = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    if (message.amountIn !== "") {
      writer.uint32(26).string(message.amountIn);
    }

    if (message.amountOutMin !== "") {
      writer.uint32(34).string(message.amountOutMin);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.denoms), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      writer.uint32(42).string(v);
    }

    writer.uint32(50).fork();

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.fees), _step2; !(_step2 = _iterator2()).done;) {
      var _v = _step2.value;
      writer.int32(_v);
    }

    writer.ldelim();

    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp$1(message.deadline), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSwapExactIn();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.amountIn = reader.string();
          break;

        case 4:
          message.amountOutMin = reader.string();
          break;

        case 5:
          message.denoms.push(reader.string());
          break;

        case 6:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.fees.push(reader.int32());
            }
          } else {
            message.fees.push(reader.int32());
          }

          break;

        case 7:
          message.deadline = fromTimestamp$1(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$o(object.creator) ? String(object.creator) : "",
      recipient: isSet$o(object.recipient) ? String(object.recipient) : "",
      amountIn: isSet$o(object.amountIn) ? String(object.amountIn) : "",
      amountOutMin: isSet$o(object.amountOutMin) ? String(object.amountOutMin) : "",
      denoms: Array.isArray(object == null ? void 0 : object.denoms) ? object.denoms.map(function (e) {
        return String(e);
      }) : [],
      fees: Array.isArray(object == null ? void 0 : object.fees) ? object.fees.map(function (e) {
        return Number(e);
      }) : [],
      deadline: isSet$o(object.deadline) ? fromJsonTimestamp$1(object.deadline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOutMin !== undefined && (obj.amountOutMin = message.amountOutMin);

    if (message.denoms) {
      obj.denoms = message.denoms.map(function (e) {
        return e;
      });
    } else {
      obj.denoms = [];
    }

    if (message.fees) {
      obj.fees = message.fees.map(function (e) {
        return Math.round(e);
      });
    } else {
      obj.fees = [];
    }

    message.deadline !== undefined && (obj.deadline = message.deadline.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator6, _object$recipient3, _object$amountIn, _object$amountOutMin, _object$denoms, _object$fees, _object$deadline4;

    var message = createBaseMsgSwapExactIn();
    message.creator = (_object$creator6 = object.creator) != null ? _object$creator6 : "";
    message.recipient = (_object$recipient3 = object.recipient) != null ? _object$recipient3 : "";
    message.amountIn = (_object$amountIn = object.amountIn) != null ? _object$amountIn : "";
    message.amountOutMin = (_object$amountOutMin = object.amountOutMin) != null ? _object$amountOutMin : "";
    message.denoms = ((_object$denoms = object.denoms) == null ? void 0 : _object$denoms.map(function (e) {
      return e;
    })) || [];
    message.fees = ((_object$fees = object.fees) == null ? void 0 : _object$fees.map(function (e) {
      return e;
    })) || [];
    message.deadline = (_object$deadline4 = object.deadline) != null ? _object$deadline4 : undefined;
    return message;
  }
};

function createBaseMsgSwapExactOut() {
  return {
    creator: "",
    recipient: "",
    amountOut: "",
    amountInMax: "",
    denoms: [],
    fees: [],
    deadline: undefined
  };
}

var MsgSwapExactOut = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }

    if (message.amountInMax !== "") {
      writer.uint32(34).string(message.amountInMax);
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(message.denoms), _step3; !(_step3 = _iterator3()).done;) {
      var v = _step3.value;
      writer.uint32(42).string(v);
    }

    writer.uint32(50).fork();

    for (var _iterator4 = _createForOfIteratorHelperLoose(message.fees), _step4; !(_step4 = _iterator4()).done;) {
      var _v2 = _step4.value;
      writer.int32(_v2);
    }

    writer.ldelim();

    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp$1(message.deadline), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSwapExactOut();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.amountOut = reader.string();
          break;

        case 4:
          message.amountInMax = reader.string();
          break;

        case 5:
          message.denoms.push(reader.string());
          break;

        case 6:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.fees.push(reader.int32());
            }
          } else {
            message.fees.push(reader.int32());
          }

          break;

        case 7:
          message.deadline = fromTimestamp$1(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$o(object.creator) ? String(object.creator) : "",
      recipient: isSet$o(object.recipient) ? String(object.recipient) : "",
      amountOut: isSet$o(object.amountOut) ? String(object.amountOut) : "",
      amountInMax: isSet$o(object.amountInMax) ? String(object.amountInMax) : "",
      denoms: Array.isArray(object == null ? void 0 : object.denoms) ? object.denoms.map(function (e) {
        return String(e);
      }) : [],
      fees: Array.isArray(object == null ? void 0 : object.fees) ? object.fees.map(function (e) {
        return Number(e);
      }) : [],
      deadline: isSet$o(object.deadline) ? fromJsonTimestamp$1(object.deadline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.amountInMax !== undefined && (obj.amountInMax = message.amountInMax);

    if (message.denoms) {
      obj.denoms = message.denoms.map(function (e) {
        return e;
      });
    } else {
      obj.denoms = [];
    }

    if (message.fees) {
      obj.fees = message.fees.map(function (e) {
        return Math.round(e);
      });
    } else {
      obj.fees = [];
    }

    message.deadline !== undefined && (obj.deadline = message.deadline.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator7, _object$recipient4, _object$amountOut, _object$amountInMax, _object$denoms2, _object$fees2, _object$deadline5;

    var message = createBaseMsgSwapExactOut();
    message.creator = (_object$creator7 = object.creator) != null ? _object$creator7 : "";
    message.recipient = (_object$recipient4 = object.recipient) != null ? _object$recipient4 : "";
    message.amountOut = (_object$amountOut = object.amountOut) != null ? _object$amountOut : "";
    message.amountInMax = (_object$amountInMax = object.amountInMax) != null ? _object$amountInMax : "";
    message.denoms = ((_object$denoms2 = object.denoms) == null ? void 0 : _object$denoms2.map(function (e) {
      return e;
    })) || [];
    message.fees = ((_object$fees2 = object.fees) == null ? void 0 : _object$fees2.map(function (e) {
      return e;
    })) || [];
    message.deadline = (_object$deadline5 = object.deadline) != null ? _object$deadline5 : undefined;
    return message;
  }
};

function createBaseMsgCollectReward() {
  return {
    creator: "",
    tokenId: "",
    recipient: "",
    collectOnly: false
  };
}

var MsgCollectReward = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    if (message.collectOnly === true) {
      writer.uint32(32).bool(message.collectOnly);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCollectReward();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.tokenId = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        case 4:
          message.collectOnly = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$o(object.creator) ? String(object.creator) : "",
      tokenId: isSet$o(object.tokenId) ? String(object.tokenId) : "",
      recipient: isSet$o(object.recipient) ? String(object.recipient) : "",
      collectOnly: isSet$o(object.collectOnly) ? Boolean(object.collectOnly) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.collectOnly !== undefined && (obj.collectOnly = message.collectOnly);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator8, _object$tokenId4, _object$recipient5, _object$collectOnly2;

    var message = createBaseMsgCollectReward();
    message.creator = (_object$creator8 = object.creator) != null ? _object$creator8 : "";
    message.tokenId = (_object$tokenId4 = object.tokenId) != null ? _object$tokenId4 : "";
    message.recipient = (_object$recipient5 = object.recipient) != null ? _object$recipient5 : "";
    message.collectOnly = (_object$collectOnly2 = object.collectOnly) != null ? _object$collectOnly2 : false;
    return message;
  }
};

function createBaseMsgCollectFeeProtocol() {
  return {
    creator: "",
    address: ""
  };
}

var MsgCollectFeeProtocol = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCollectFeeProtocol();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$o(object.creator) ? String(object.creator) : "",
      address: isSet$o(object.address) ? String(object.address) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator9, _object$address;

    var message = createBaseMsgCollectFeeProtocol();
    message.creator = (_object$creator9 = object.creator) != null ? _object$creator9 : "";
    message.address = (_object$address = object.address) != null ? _object$address : "";
    return message;
  }
};

function createBaseMsgGovCorePool() {
  return {
    creator: "",
    address: "",
    action: "",
    triggerTime: undefined
  };
}

var MsgGovCorePool = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }

    if (message.triggerTime !== undefined) {
      Timestamp.encode(toTimestamp$1(message.triggerTime), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgGovCorePool();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.action = reader.string();
          break;

        case 4:
          message.triggerTime = fromTimestamp$1(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$o(object.creator) ? String(object.creator) : "",
      address: isSet$o(object.address) ? String(object.address) : "",
      action: isSet$o(object.action) ? String(object.action) : "",
      triggerTime: isSet$o(object.triggerTime) ? fromJsonTimestamp$1(object.triggerTime) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.action !== undefined && (obj.action = message.action);
    message.triggerTime !== undefined && (obj.triggerTime = message.triggerTime.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator10, _object$address2, _object$action, _object$triggerTime;

    var message = createBaseMsgGovCorePool();
    message.creator = (_object$creator10 = object.creator) != null ? _object$creator10 : "";
    message.address = (_object$address2 = object.address) != null ? _object$address2 : "";
    message.action = (_object$action = object.action) != null ? _object$action : "";
    message.triggerTime = (_object$triggerTime = object.triggerTime) != null ? _object$triggerTime : undefined;
    return message;
  }
};

function toTimestamp$1(date) {
  var seconds = numberToLong$1(date.getTime() / 1000);
  var nanos = date.getTime() % 1000 * 1000000;
  return {
    seconds: seconds,
    nanos: nanos
  };
}

function fromTimestamp$1(t) {
  var millis = t.seconds.toNumber() * 1000;
  millis += t.nanos / 1000000;
  return new Date(millis);
}

function fromJsonTimestamp$1(o) {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp$1(Timestamp.fromJSON(o));
  }
}

function numberToLong$1(number) {
  return Long.fromNumber(number);
}

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$o(value) {
  return value !== null && value !== undefined;
}

var MsgCollectReward$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgCollectReward$1, _BaseMsg);

  function MsgCollectReward$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgCollectReward$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCollectReward$1.typeUrl,
      value: MsgCollectReward.fromPartial(this.protoMsg)
    };
  };

  return MsgCollectReward$1;
}(BaseMsg);

(function (MsgCollectReward$1) {
  MsgCollectReward$1.typeUrl = "/" + protobufPackage$d + ".MsgCollectReward";
  MsgCollectReward$1.Proto = MsgCollectReward;
})(MsgCollectReward$1 || (MsgCollectReward$1 = {}));

var MsgSwapExactOut$1 = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgSwapExactOut$1, _BaseMsg2);

  function MsgSwapExactOut$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgSwapExactOut$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgSwapExactOut$1.typeUrl,
      value: MsgSwapExactOut.fromPartial(this.protoMsg)
    };
  };

  return MsgSwapExactOut$1;
}(BaseMsg);

(function (MsgSwapExactOut$1) {
  MsgSwapExactOut$1.typeUrl = "/" + protobufPackage$d + ".MsgSwapExactOut";
  MsgSwapExactOut$1.Proto = MsgSwapExactOut;
})(MsgSwapExactOut$1 || (MsgSwapExactOut$1 = {}));

var MsgSwapExactIn$1 = /*#__PURE__*/function (_BaseMsg3) {
  _inheritsLoose(MsgSwapExactIn$1, _BaseMsg3);

  function MsgSwapExactIn$1(msg) {
    var _this3;

    _this3 = _BaseMsg3.call(this) || this;
    _this3.protoMsg = void 0;
    _this3.protoMsg = msg;
    return _this3;
  }

  var _proto3 = MsgSwapExactIn$1.prototype;

  _proto3.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgSwapExactIn$1.typeUrl,
      value: MsgSwapExactIn.fromPartial(this.protoMsg)
    };
  };

  return MsgSwapExactIn$1;
}(BaseMsg);

(function (MsgSwapExactIn$1) {
  MsgSwapExactIn$1.typeUrl = "/" + protobufPackage$d + ".MsgSwapExactIn";
  MsgSwapExactIn$1.Proto = MsgSwapExactIn;
})(MsgSwapExactIn$1 || (MsgSwapExactIn$1 = {}));

var MsgCreatePool$1 = /*#__PURE__*/function (_BaseMsg4) {
  _inheritsLoose(MsgCreatePool$1, _BaseMsg4);

  function MsgCreatePool$1(msg) {
    var _this4;

    _this4 = _BaseMsg4.call(this) || this;
    _this4.protoMsg = void 0;
    _this4.protoMsg = msg;
    return _this4;
  }

  var _proto4 = MsgCreatePool$1.prototype;

  _proto4.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCreatePool$1.typeUrl,
      value: MsgCreatePool.fromPartial(this.protoMsg)
    };
  };

  return MsgCreatePool$1;
}(BaseMsg);

(function (MsgCreatePool$1) {
  MsgCreatePool$1.typeUrl = "/" + protobufPackage$d + ".MsgCreatePool";
  MsgCreatePool$1.Proto = MsgCreatePool;
})(MsgCreatePool$1 || (MsgCreatePool$1 = {}));

var MsgCollect$1 = /*#__PURE__*/function (_BaseMsg5) {
  _inheritsLoose(MsgCollect$1, _BaseMsg5);

  function MsgCollect$1(msg) {
    var _this5;

    _this5 = _BaseMsg5.call(this) || this;
    _this5.protoMsg = void 0;
    _this5.protoMsg = msg;
    return _this5;
  }

  var _proto5 = MsgCollect$1.prototype;

  _proto5.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCollect$1.typeUrl,
      value: MsgCollect.fromPartial(this.protoMsg)
    };
  };

  return MsgCollect$1;
}(BaseMsg);

(function (MsgCollect$1) {
  MsgCollect$1.typeUrl = "/" + protobufPackage$d + ".MsgCollect";
  MsgCollect$1.Proto = MsgCollect;
})(MsgCollect$1 || (MsgCollect$1 = {}));

var MsgCreatePosition$1 = /*#__PURE__*/function (_BaseMsg6) {
  _inheritsLoose(MsgCreatePosition$1, _BaseMsg6);

  function MsgCreatePosition$1(msg) {
    var _this6;

    _this6 = _BaseMsg6.call(this) || this;
    _this6.protoMsg = void 0;
    _this6.protoMsg = msg;
    return _this6;
  }

  var _proto6 = MsgCreatePosition$1.prototype;

  _proto6.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCreatePosition$1.typeUrl,
      value: MsgCreatePosition.fromPartial(this.protoMsg)
    };
  };

  return MsgCreatePosition$1;
}(BaseMsg);

(function (MsgCreatePosition$1) {
  MsgCreatePosition$1.typeUrl = "/" + protobufPackage$d + ".MsgCreatePosition";
  MsgCreatePosition$1.Proto = MsgCreatePosition;
})(MsgCreatePosition$1 || (MsgCreatePosition$1 = {}));

var MsgDecreaseLiquidity$1 = /*#__PURE__*/function (_BaseMsg7) {
  _inheritsLoose(MsgDecreaseLiquidity$1, _BaseMsg7);

  function MsgDecreaseLiquidity$1(msg) {
    var _this7;

    _this7 = _BaseMsg7.call(this) || this;
    _this7.protoMsg = void 0;
    _this7.protoMsg = msg;
    return _this7;
  }

  var _proto7 = MsgDecreaseLiquidity$1.prototype;

  _proto7.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgDecreaseLiquidity$1.typeUrl,
      value: MsgDecreaseLiquidity.fromPartial(this.protoMsg)
    };
  };

  return MsgDecreaseLiquidity$1;
}(BaseMsg);

(function (MsgDecreaseLiquidity$1) {
  MsgDecreaseLiquidity$1.typeUrl = "/" + protobufPackage$d + ".MsgDecreaseLiquidity";
  MsgDecreaseLiquidity$1.Proto = MsgDecreaseLiquidity;
})(MsgDecreaseLiquidity$1 || (MsgDecreaseLiquidity$1 = {}));

var MsgIncreaseLiquidity$1 = /*#__PURE__*/function (_BaseMsg8) {
  _inheritsLoose(MsgIncreaseLiquidity$1, _BaseMsg8);

  function MsgIncreaseLiquidity$1(msg) {
    var _this8;

    _this8 = _BaseMsg8.call(this) || this;
    _this8.protoMsg = void 0;
    _this8.protoMsg = msg;
    return _this8;
  }

  var _proto8 = MsgIncreaseLiquidity$1.prototype;

  _proto8.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgIncreaseLiquidity$1.typeUrl,
      value: MsgIncreaseLiquidity.fromPartial(this.protoMsg)
    };
  };

  return MsgIncreaseLiquidity$1;
}(BaseMsg);

(function (MsgIncreaseLiquidity$1) {
  MsgIncreaseLiquidity$1.typeUrl = "/" + protobufPackage$d + ".MsgIncreaseLiquidity";
  MsgIncreaseLiquidity$1.Proto = MsgIncreaseLiquidity;
})(MsgIncreaseLiquidity$1 || (MsgIncreaseLiquidity$1 = {}));

var MsgCollectFeeProtocol$1 = /*#__PURE__*/function (_BaseMsg9) {
  _inheritsLoose(MsgCollectFeeProtocol$1, _BaseMsg9);

  function MsgCollectFeeProtocol$1(msg) {
    var _this9;

    _this9 = _BaseMsg9.call(this) || this;
    _this9.protoMsg = void 0;
    _this9.protoMsg = msg;
    return _this9;
  }

  var _proto9 = MsgCollectFeeProtocol$1.prototype;

  _proto9.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCollectFeeProtocol$1.typeUrl,
      value: MsgCollectFeeProtocol.fromPartial(this.protoMsg)
    };
  };

  return MsgCollectFeeProtocol$1;
}(BaseMsg);

(function (MsgCollectFeeProtocol$1) {
  MsgCollectFeeProtocol$1.typeUrl = "/" + protobufPackage$d + ".MsgCollectFeeProtocol";
  MsgCollectFeeProtocol$1.Proto = MsgCollectFeeProtocol;
})(MsgCollectFeeProtocol$1 || (MsgCollectFeeProtocol$1 = {}));

var MsgGovCorePool$1 = /*#__PURE__*/function (_BaseMsg10) {
  _inheritsLoose(MsgGovCorePool$1, _BaseMsg10);

  function MsgGovCorePool$1(msg) {
    var _this10;

    _this10 = _BaseMsg10.call(this) || this;
    _this10.protoMsg = void 0;
    _this10.protoMsg = msg;
    return _this10;
  }

  var _proto10 = MsgGovCorePool$1.prototype;

  _proto10.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgGovCorePool$1.typeUrl,
      value: MsgGovCorePool.fromPartial(this.protoMsg)
    };
  };

  return MsgGovCorePool$1;
}(BaseMsg);

(function (MsgGovCorePool$1) {
  MsgGovCorePool$1.typeUrl = "/" + protobufPackage$d + ".MsgGovCorePool";
  MsgGovCorePool$1.Proto = MsgGovCorePool;
})(MsgGovCorePool$1 || (MsgGovCorePool$1 = {}));

var protobufPackage$e = "metaoslabs.metaos.token";

function createBaseMsgIssue() {
  return {
    creator: "",
    name: "",
    symbol: "",
    decimals: 0,
    initialSupply: "",
    maxSupply: "",
    description: ""
  };
}

var MsgIssue = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }

    if (message.decimals !== 0) {
      writer.uint32(32).int32(message.decimals);
    }

    if (message.initialSupply !== "") {
      writer.uint32(42).string(message.initialSupply);
    }

    if (message.maxSupply !== "") {
      writer.uint32(50).string(message.maxSupply);
    }

    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgIssue();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.symbol = reader.string();
          break;

        case 4:
          message.decimals = reader.int32();
          break;

        case 5:
          message.initialSupply = reader.string();
          break;

        case 6:
          message.maxSupply = reader.string();
          break;

        case 7:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$p(object.creator) ? String(object.creator) : "",
      name: isSet$p(object.name) ? String(object.name) : "",
      symbol: isSet$p(object.symbol) ? String(object.symbol) : "",
      decimals: isSet$p(object.decimals) ? Number(object.decimals) : 0,
      initialSupply: isSet$p(object.initialSupply) ? String(object.initialSupply) : "",
      maxSupply: isSet$p(object.maxSupply) ? String(object.maxSupply) : "",
      description: isSet$p(object.description) ? String(object.description) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
    message.initialSupply !== undefined && (obj.initialSupply = message.initialSupply);
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$name, _object$symbol, _object$decimals, _object$initialSupply, _object$maxSupply, _object$description;

    var message = createBaseMsgIssue();
    message.creator = (_object$creator = object.creator) != null ? _object$creator : "";
    message.name = (_object$name = object.name) != null ? _object$name : "";
    message.symbol = (_object$symbol = object.symbol) != null ? _object$symbol : "";
    message.decimals = (_object$decimals = object.decimals) != null ? _object$decimals : 0;
    message.initialSupply = (_object$initialSupply = object.initialSupply) != null ? _object$initialSupply : "";
    message.maxSupply = (_object$maxSupply = object.maxSupply) != null ? _object$maxSupply : "";
    message.description = (_object$description = object.description) != null ? _object$description : "";
    return message;
  }
};

function createBaseMsgMint() {
  return {
    creator: "",
    amount: ""
  };
}

var MsgMint = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgMint();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$p(object.creator) ? String(object.creator) : "",
      amount: isSet$p(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$amount;

    var message = createBaseMsgMint();
    message.creator = (_object$creator2 = object.creator) != null ? _object$creator2 : "";
    message.amount = (_object$amount = object.amount) != null ? _object$amount : "";
    return message;
  }
};

function createBaseMsgBurn() {
  return {
    creator: "",
    amount: ""
  };
}

var MsgBurn = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBurn();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$p(object.creator) ? String(object.creator) : "",
      amount: isSet$p(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator3, _object$amount2;

    var message = createBaseMsgBurn();
    message.creator = (_object$creator3 = object.creator) != null ? _object$creator3 : "";
    message.amount = (_object$amount2 = object.amount) != null ? _object$amount2 : "";
    return message;
  }
};

function createBaseMsgTransferOwnership() {
  return {
    creator: "",
    denom: "",
    address: ""
  };
}

var MsgTransferOwnership = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgTransferOwnership();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$p(object.creator) ? String(object.creator) : "",
      denom: isSet$p(object.denom) ? String(object.denom) : "",
      address: isSet$p(object.address) ? String(object.address) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator4, _object$denom2, _object$address;

    var message = createBaseMsgTransferOwnership();
    message.creator = (_object$creator4 = object.creator) != null ? _object$creator4 : "";
    message.denom = (_object$denom2 = object.denom) != null ? _object$denom2 : "";
    message.address = (_object$address = object.address) != null ? _object$address : "";
    return message;
  }
};

function createBaseMsgConfirmOwnership() {
  return {
    creator: "",
    denom: ""
  };
}

var MsgConfirmOwnership = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConfirmOwnership();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$p(object.creator) ? String(object.creator) : "",
      denom: isSet$p(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator5, _object$denom3;

    var message = createBaseMsgConfirmOwnership();
    message.creator = (_object$creator5 = object.creator) != null ? _object$creator5 : "";
    message.denom = (_object$denom3 = object.denom) != null ? _object$denom3 : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$p(value) {
  return value !== null && value !== undefined;
}

var MsgIssue$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgIssue$1, _BaseMsg);

  function MsgIssue$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgIssue$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgIssue$1.typeUrl,
      value: MsgIssue.fromPartial(this.protoMsg)
    };
  };

  return MsgIssue$1;
}(BaseMsg);

(function (MsgIssue$1) {
  MsgIssue$1.typeUrl = "/" + protobufPackage$e + ".MsgIssue";
  MsgIssue$1.Proto = MsgIssue;
})(MsgIssue$1 || (MsgIssue$1 = {}));

var MsgMint$1 = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgMint$1, _BaseMsg2);

  function MsgMint$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgMint$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgMint$1.typeUrl,
      value: MsgMint.fromPartial(this.protoMsg)
    };
  };

  return MsgMint$1;
}(BaseMsg);

(function (MsgMint$1) {
  MsgMint$1.typeUrl = "/" + protobufPackage$e + ".MsgMint";
  MsgMint$1.Proto = MsgMint;
})(MsgMint$1 || (MsgMint$1 = {}));

var MsgBurn$1 = /*#__PURE__*/function (_BaseMsg3) {
  _inheritsLoose(MsgBurn$1, _BaseMsg3);

  function MsgBurn$1(msg) {
    var _this3;

    _this3 = _BaseMsg3.call(this) || this;
    _this3.protoMsg = void 0;
    _this3.protoMsg = msg;
    return _this3;
  }

  var _proto3 = MsgBurn$1.prototype;

  _proto3.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgBurn$1.typeUrl,
      value: MsgBurn.fromPartial(this.protoMsg)
    };
  };

  return MsgBurn$1;
}(BaseMsg);

(function (MsgBurn$1) {
  MsgBurn$1.typeUrl = "/" + protobufPackage$e + ".MsgBurn";
  MsgBurn$1.Proto = MsgBurn;
})(MsgBurn$1 || (MsgBurn$1 = {}));

var MsgTransferOwnership$1 = /*#__PURE__*/function (_BaseMsg4) {
  _inheritsLoose(MsgTransferOwnership$1, _BaseMsg4);

  function MsgTransferOwnership$1(msg) {
    var _this4;

    _this4 = _BaseMsg4.call(this) || this;
    _this4.protoMsg = void 0;
    _this4.protoMsg = msg;
    return _this4;
  }

  var _proto4 = MsgTransferOwnership$1.prototype;

  _proto4.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgTransferOwnership$1.typeUrl,
      value: MsgTransferOwnership.fromPartial(this.protoMsg)
    };
  };

  return MsgTransferOwnership$1;
}(BaseMsg);

(function (MsgTransferOwnership$1) {
  MsgTransferOwnership$1.typeUrl = "/" + protobufPackage$e + ".MsgTransferOwnership";
  MsgTransferOwnership$1.Proto = MsgTransferOwnership;
})(MsgTransferOwnership$1 || (MsgTransferOwnership$1 = {}));

var MsgConfirmOwnership$1 = /*#__PURE__*/function (_BaseMsg5) {
  _inheritsLoose(MsgConfirmOwnership$1, _BaseMsg5);

  function MsgConfirmOwnership$1(msg) {
    var _this5;

    _this5 = _BaseMsg5.call(this) || this;
    _this5.protoMsg = void 0;
    _this5.protoMsg = msg;
    return _this5;
  }

  var _proto5 = MsgConfirmOwnership$1.prototype;

  _proto5.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgConfirmOwnership$1.typeUrl,
      value: MsgConfirmOwnership.fromPartial(this.protoMsg)
    };
  };

  return MsgConfirmOwnership$1;
}(BaseMsg);

(function (MsgConfirmOwnership$1) {
  MsgConfirmOwnership$1.typeUrl = "/" + protobufPackage$e + ".MsgConfirmOwnership";
  MsgConfirmOwnership$1.Proto = MsgConfirmOwnership;
})(MsgConfirmOwnership$1 || (MsgConfirmOwnership$1 = {}));

/* eslint-disable */
/** AccessType permission types */

var AccessType;

(function (AccessType) {
  /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
  AccessType[AccessType["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
  /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */

  AccessType[AccessType["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
  /** ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to an address */

  AccessType[AccessType["ACCESS_TYPE_ONLY_ADDRESS"] = 2] = "ACCESS_TYPE_ONLY_ADDRESS";
  /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */

  AccessType[AccessType["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
  AccessType[AccessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessType || (AccessType = {}));

function accessTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_UNSPECIFIED":
      return AccessType.ACCESS_TYPE_UNSPECIFIED;

    case 1:
    case "ACCESS_TYPE_NOBODY":
      return AccessType.ACCESS_TYPE_NOBODY;

    case 2:
    case "ACCESS_TYPE_ONLY_ADDRESS":
      return AccessType.ACCESS_TYPE_ONLY_ADDRESS;

    case 3:
    case "ACCESS_TYPE_EVERYBODY":
      return AccessType.ACCESS_TYPE_EVERYBODY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
function accessTypeToJSON(object) {
  switch (object) {
    case AccessType.ACCESS_TYPE_UNSPECIFIED:
      return "ACCESS_TYPE_UNSPECIFIED";

    case AccessType.ACCESS_TYPE_NOBODY:
      return "ACCESS_TYPE_NOBODY";

    case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
      return "ACCESS_TYPE_ONLY_ADDRESS";

    case AccessType.ACCESS_TYPE_EVERYBODY:
      return "ACCESS_TYPE_EVERYBODY";

    case AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ContractCodeHistoryOperationType actions that caused a code change */

var ContractCodeHistoryOperationType;

(function (ContractCodeHistoryOperationType) {
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */

  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */

  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */

  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractCodeHistoryOperationType || (ContractCodeHistoryOperationType = {}));

function createBaseAccessConfig() {
  return {
    permission: 0,
    address: ""
  };
}

var AccessConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccessConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.permission = reader.int32();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      permission: isSet$q(object.permission) ? accessTypeFromJSON(object.permission) : 0,
      address: isSet$q(object.address) ? String(object.address) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.permission !== undefined && (obj.permission = accessTypeToJSON(message.permission));
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$permission, _object$address;

    var message = createBaseAccessConfig();
    message.permission = (_object$permission = object.permission) != null ? _object$permission : 0;
    message.address = (_object$address = object.address) != null ? _object$address : "";
    return message;
  }
};

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$q(value) {
  return value !== null && value !== undefined;
}

var protobufPackage$f = "cosmwasm.wasm.v1";

function createBaseMsgStoreCode() {
  return {
    sender: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined
  };
}

var MsgStoreCode = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }

    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStoreCode();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.wasmByteCode = reader.bytes();
          break;

        case 5:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      sender: isSet$r(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet$r(object.wasmByteCode) ? bytesFromBase64$1(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet$r(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes$1(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender, _object$wasmByteCode;

    var message = createBaseMsgStoreCode();
    message.sender = (_object$sender = object.sender) != null ? _object$sender : "";
    message.wasmByteCode = (_object$wasmByteCode = object.wasmByteCode) != null ? _object$wasmByteCode : new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  }
};

var globalThis$2 = /*#__PURE__*/function () {
  if (typeof globalThis$2 !== "undefined") return globalThis$2;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
}();

var atob$1 = globalThis$2.atob || function (b64) {
  return globalThis$2.Buffer.from(b64, "base64").toString("binary");
};

function bytesFromBase64$1(b64) {
  var bin = atob$1(b64);
  var arr = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

var btoa$1 = globalThis$2.btoa || function (bin) {
  return globalThis$2.Buffer.from(bin, "binary").toString("base64");
};

function base64FromBytes$1(arr) {
  var bin = [];
  arr.forEach(function (_byte) {
    bin.push(String.fromCharCode(_byte));
  });
  return btoa$1(bin.join(""));
}

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$r(value) {
  return value !== null && value !== undefined;
}

var MsgStoreCode$1 = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgStoreCode$1, _BaseMsg);

  function MsgStoreCode$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgStoreCode$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgStoreCode$1.typeUrl,
      value: MsgStoreCode.fromPartial(this.protoMsg)
    };
  };

  return MsgStoreCode$1;
}(BaseMsg);

(function (MsgStoreCode$1) {
  MsgStoreCode$1.typeUrl = "/" + protobufPackage$f + ".MsgStoreCode";
  MsgStoreCode$1.Proto = MsgStoreCode;
})(MsgStoreCode$1 || (MsgStoreCode$1 = {}));

/* eslint-disable */

function createBasePubKey() {
  return {
    key: new Uint8Array()
  };
}

var PubKey = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePubKey();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      key: isSet$s(object.key) ? bytesFromBase64$2(object.key) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = base64FromBytes$2(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$key;

    var message = createBasePubKey();
    message.key = (_object$key = object.key) != null ? _object$key : new Uint8Array();
    return message;
  }
};

var globalThis$3 = /*#__PURE__*/function () {
  if (typeof globalThis$3 !== "undefined") return globalThis$3;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
}();

var atob$2 = globalThis$3.atob || function (b64) {
  return globalThis$3.Buffer.from(b64, "base64").toString("binary");
};

function bytesFromBase64$2(b64) {
  var bin = atob$2(b64);
  var arr = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

var btoa$2 = globalThis$3.btoa || function (bin) {
  return globalThis$3.Buffer.from(bin, "binary").toString("base64");
};

function base64FromBytes$2(arr) {
  var bin = [];
  arr.forEach(function (_byte) {
    bin.push(String.fromCharCode(_byte));
  });
  return btoa$2(bin.join(""));
}

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$s(value) {
  return value !== null && value !== undefined;
}

function createBaseCompactBitArray() {
  return {
    extraBitsStored: 0,
    elems: new Uint8Array()
  };
}

var CompactBitArray = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.extraBitsStored !== 0) {
      writer.uint32(8).uint32(message.extraBitsStored);
    }

    if (message.elems.length !== 0) {
      writer.uint32(18).bytes(message.elems);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCompactBitArray();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.extraBitsStored = reader.uint32();
          break;

        case 2:
          message.elems = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      extraBitsStored: isSet$t(object.extraBitsStored) ? Number(object.extraBitsStored) : 0,
      elems: isSet$t(object.elems) ? bytesFromBase64$3(object.elems) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.extraBitsStored !== undefined && (obj.extraBitsStored = Math.round(message.extraBitsStored));
    message.elems !== undefined && (obj.elems = base64FromBytes$3(message.elems !== undefined ? message.elems : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$extraBitsStor, _object$elems;

    var message = createBaseCompactBitArray();
    message.extraBitsStored = (_object$extraBitsStor = object.extraBitsStored) != null ? _object$extraBitsStor : 0;
    message.elems = (_object$elems = object.elems) != null ? _object$elems : new Uint8Array();
    return message;
  }
};

var globalThis$4 = /*#__PURE__*/function () {
  if (typeof globalThis$4 !== "undefined") return globalThis$4;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
}();

var atob$3 = globalThis$4.atob || function (b64) {
  return globalThis$4.Buffer.from(b64, "base64").toString("binary");
};

function bytesFromBase64$3(b64) {
  var bin = atob$3(b64);
  var arr = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

var btoa$3 = globalThis$4.btoa || function (bin) {
  return globalThis$4.Buffer.from(bin, "binary").toString("base64");
};

function base64FromBytes$3(arr) {
  var bin = [];
  arr.forEach(function (_byte) {
    bin.push(String.fromCharCode(_byte));
  });
  return btoa$3(bin.join(""));
}

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$t(value) {
  return value !== null && value !== undefined;
}

/** SignMode represents a signing mode with its own security guarantees. */

var SignMode;

(function (SignMode) {
  /**
   * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
   * rejected
   */
  SignMode[SignMode["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
  /**
   * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
   * verified with raw bytes from Tx
   */

  SignMode[SignMode["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
  /**
   * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
   * human-readable textual representation on top of the binary representation
   * from SIGN_MODE_DIRECT
   */

  SignMode[SignMode["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
  /**
   * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
   * Amino JSON and will be removed in the future
   */

  SignMode[SignMode["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
  /**
   * SIGN_MODE_EIP_191 - SIGN_MODE_EIP_191 specifies the sign mode for EIP 191 signing on the Cosmos
   * SDK. Ref: https://eips.ethereum.org/EIPS/eip-191
   *
   * Currently, SIGN_MODE_EIP_191 is registered as a SignMode enum variant,
   * but is not implemented on the SDK by default. To enable EIP-191, you need
   * to pass a custom `TxConfig` that has an implementation of
   * `SignModeHandler` for EIP-191. The SDK may decide to fully support
   * EIP-191 in the future.
   *
   * Since: cosmos-sdk 0.45.2
   */

  SignMode[SignMode["SIGN_MODE_EIP_191"] = 191] = "SIGN_MODE_EIP_191";
  SignMode[SignMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignMode || (SignMode = {}));

function signModeFromJSON(object) {
  switch (object) {
    case 0:
    case "SIGN_MODE_UNSPECIFIED":
      return SignMode.SIGN_MODE_UNSPECIFIED;

    case 1:
    case "SIGN_MODE_DIRECT":
      return SignMode.SIGN_MODE_DIRECT;

    case 2:
    case "SIGN_MODE_TEXTUAL":
      return SignMode.SIGN_MODE_TEXTUAL;

    case 127:
    case "SIGN_MODE_LEGACY_AMINO_JSON":
      return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;

    case 191:
    case "SIGN_MODE_EIP_191":
      return SignMode.SIGN_MODE_EIP_191;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SignMode.UNRECOGNIZED;
  }
}
function signModeToJSON(object) {
  switch (object) {
    case SignMode.SIGN_MODE_UNSPECIFIED:
      return "SIGN_MODE_UNSPECIFIED";

    case SignMode.SIGN_MODE_DIRECT:
      return "SIGN_MODE_DIRECT";

    case SignMode.SIGN_MODE_TEXTUAL:
      return "SIGN_MODE_TEXTUAL";

    case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
      return "SIGN_MODE_LEGACY_AMINO_JSON";

    case SignMode.SIGN_MODE_EIP_191:
      return "SIGN_MODE_EIP_191";

    case SignMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function createBaseTxRaw() {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    signatures: []
  };
}

var TxRaw = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }

    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.signatures), _step2; !(_step2 = _iterator2()).done;) {
      var v = _step2.value;
      writer.uint32(26).bytes(v);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxRaw();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;

        case 2:
          message.authInfoBytes = reader.bytes();
          break;

        case 3:
          message.signatures.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      bodyBytes: isSet$u(object.bodyBytes) ? bytesFromBase64$4(object.bodyBytes) : new Uint8Array(),
      authInfoBytes: isSet$u(object.authInfoBytes) ? bytesFromBase64$4(object.authInfoBytes) : new Uint8Array(),
      signatures: Array.isArray(object == null ? void 0 : object.signatures) ? object.signatures.map(function (e) {
        return bytesFromBase64$4(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bodyBytes !== undefined && (obj.bodyBytes = base64FromBytes$4(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
    message.authInfoBytes !== undefined && (obj.authInfoBytes = base64FromBytes$4(message.authInfoBytes !== undefined ? message.authInfoBytes : new Uint8Array()));

    if (message.signatures) {
      obj.signatures = message.signatures.map(function (e) {
        return base64FromBytes$4(e !== undefined ? e : new Uint8Array());
      });
    } else {
      obj.signatures = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$bodyBytes, _object$authInfoBytes, _object$signatures2;

    var message = createBaseTxRaw();
    message.bodyBytes = (_object$bodyBytes = object.bodyBytes) != null ? _object$bodyBytes : new Uint8Array();
    message.authInfoBytes = (_object$authInfoBytes = object.authInfoBytes) != null ? _object$authInfoBytes : new Uint8Array();
    message.signatures = ((_object$signatures2 = object.signatures) == null ? void 0 : _object$signatures2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};

function createBaseSignDoc() {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    chainId: "",
    accountNumber: Long.UZERO
  };
}

var SignDoc = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }

    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }

    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }

    if (!message.accountNumber.isZero()) {
      writer.uint32(32).uint64(message.accountNumber);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignDoc();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;

        case 2:
          message.authInfoBytes = reader.bytes();
          break;

        case 3:
          message.chainId = reader.string();
          break;

        case 4:
          message.accountNumber = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      bodyBytes: isSet$u(object.bodyBytes) ? bytesFromBase64$4(object.bodyBytes) : new Uint8Array(),
      authInfoBytes: isSet$u(object.authInfoBytes) ? bytesFromBase64$4(object.authInfoBytes) : new Uint8Array(),
      chainId: isSet$u(object.chainId) ? String(object.chainId) : "",
      accountNumber: isSet$u(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bodyBytes !== undefined && (obj.bodyBytes = base64FromBytes$4(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
    message.authInfoBytes !== undefined && (obj.authInfoBytes = base64FromBytes$4(message.authInfoBytes !== undefined ? message.authInfoBytes : new Uint8Array()));
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$bodyBytes2, _object$authInfoBytes2, _object$chainId;

    var message = createBaseSignDoc();
    message.bodyBytes = (_object$bodyBytes2 = object.bodyBytes) != null ? _object$bodyBytes2 : new Uint8Array();
    message.authInfoBytes = (_object$authInfoBytes2 = object.authInfoBytes) != null ? _object$authInfoBytes2 : new Uint8Array();
    message.chainId = (_object$chainId = object.chainId) != null ? _object$chainId : "";
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    return message;
  }
};

function createBaseAuthInfo() {
  return {
    signerInfos: [],
    fee: undefined
  };
}

var AuthInfo = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    for (var _iterator6 = _createForOfIteratorHelperLoose(message.signerInfos), _step6; !(_step6 = _iterator6()).done;) {
      var v = _step6.value;
      SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAuthInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signerInfos.push(SignerInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      signerInfos: Array.isArray(object == null ? void 0 : object.signerInfos) ? object.signerInfos.map(function (e) {
        return SignerInfo.fromJSON(e);
      }) : [],
      fee: isSet$u(object.fee) ? Fee.fromJSON(object.fee) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.signerInfos) {
      obj.signerInfos = message.signerInfos.map(function (e) {
        return e ? SignerInfo.toJSON(e) : undefined;
      });
    } else {
      obj.signerInfos = [];
    }

    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$signerInfos;

    var message = createBaseAuthInfo();
    message.signerInfos = ((_object$signerInfos = object.signerInfos) == null ? void 0 : _object$signerInfos.map(function (e) {
      return SignerInfo.fromPartial(e);
    })) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  }
};

function createBaseSignerInfo() {
  return {
    publicKey: undefined,
    modeInfo: undefined,
    sequence: Long.UZERO
  };
}

var SignerInfo = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.modeInfo !== undefined) {
      ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignerInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.modeInfo = ModeInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.sequence = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      publicKey: isSet$u(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined,
      modeInfo: isSet$u(object.modeInfo) ? ModeInfo.fromJSON(object.modeInfo) : undefined,
      sequence: isSet$u(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    message.modeInfo !== undefined && (obj.modeInfo = message.modeInfo ? ModeInfo.toJSON(message.modeInfo) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignerInfo();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? ModeInfo.fromPartial(object.modeInfo) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }
};

function createBaseModeInfo() {
  return {
    single: undefined,
    multi: undefined
  };
}

var ModeInfo = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.single !== undefined) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }

    if (message.multi !== undefined) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.single = ModeInfo_Single.decode(reader, reader.uint32());
          break;

        case 2:
          message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      single: isSet$u(object.single) ? ModeInfo_Single.fromJSON(object.single) : undefined,
      multi: isSet$u(object.multi) ? ModeInfo_Multi.fromJSON(object.multi) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.single !== undefined && (obj.single = message.single ? ModeInfo_Single.toJSON(message.single) : undefined);
    message.multi !== undefined && (obj.multi = message.multi ? ModeInfo_Multi.toJSON(message.multi) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseModeInfo();
    message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
    return message;
  }
};

function createBaseModeInfo_Single() {
  return {
    mode: 0
  };
}

var ModeInfo_Single = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo_Single();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      mode: isSet$u(object.mode) ? signModeFromJSON(object.mode) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$mode;

    var message = createBaseModeInfo_Single();
    message.mode = (_object$mode = object.mode) != null ? _object$mode : 0;
    return message;
  }
};

function createBaseModeInfo_Multi() {
  return {
    bitarray: undefined,
    modeInfos: []
  };
}

var ModeInfo_Multi = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }

    for (var _iterator7 = _createForOfIteratorHelperLoose(message.modeInfos), _step7; !(_step7 = _iterator7()).done;) {
      var v = _step7.value;
      ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo_Multi();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;

        case 2:
          message.modeInfos.push(ModeInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      bitarray: isSet$u(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : undefined,
      modeInfos: Array.isArray(object == null ? void 0 : object.modeInfos) ? object.modeInfos.map(function (e) {
        return ModeInfo.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bitarray !== undefined && (obj.bitarray = message.bitarray ? CompactBitArray.toJSON(message.bitarray) : undefined);

    if (message.modeInfos) {
      obj.modeInfos = message.modeInfos.map(function (e) {
        return e ? ModeInfo.toJSON(e) : undefined;
      });
    } else {
      obj.modeInfos = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$modeInfos;

    var message = createBaseModeInfo_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.modeInfos = ((_object$modeInfos = object.modeInfos) == null ? void 0 : _object$modeInfos.map(function (e) {
      return ModeInfo.fromPartial(e);
    })) || [];
    return message;
  }
};

function createBaseFee() {
  return {
    amount: [],
    gasLimit: Long.UZERO,
    payer: "",
    granter: ""
  };
}

var Fee = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = Writer.create();
    }

    for (var _iterator8 = _createForOfIteratorHelperLoose(message.amount), _step8; !(_step8 = _iterator8()).done;) {
      var v = _step8.value;
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (!message.gasLimit.isZero()) {
      writer.uint32(16).uint64(message.gasLimit);
    }

    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }

    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Reader ? input : new Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFee();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.gasLimit = reader.uint64();
          break;

        case 3:
          message.payer = reader.string();
          break;

        case 4:
          message.granter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      amount: Array.isArray(object == null ? void 0 : object.amount) ? object.amount.map(function (e) {
        return Coin.fromJSON(e);
      }) : [],
      gasLimit: isSet$u(object.gasLimit) ? Long.fromValue(object.gasLimit) : Long.UZERO,
      payer: isSet$u(object.payer) ? String(object.payer) : "",
      granter: isSet$u(object.granter) ? String(object.granter) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.amount = [];
    }

    message.gasLimit !== undefined && (obj.gasLimit = (message.gasLimit || Long.UZERO).toString());
    message.payer !== undefined && (obj.payer = message.payer);
    message.granter !== undefined && (obj.granter = message.granter);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$amount, _object$payer, _object$granter;

    var message = createBaseFee();
    message.amount = ((_object$amount = object.amount) == null ? void 0 : _object$amount.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? Long.fromValue(object.gasLimit) : Long.UZERO;
    message.payer = (_object$payer = object.payer) != null ? _object$payer : "";
    message.granter = (_object$granter = object.granter) != null ? _object$granter : "";
    return message;
  }
};

var globalThis$5 = /*#__PURE__*/function () {
  if (typeof globalThis$5 !== "undefined") return globalThis$5;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
}();

var atob$4 = globalThis$5.atob || function (b64) {
  return globalThis$5.Buffer.from(b64, "base64").toString("binary");
};

function bytesFromBase64$4(b64) {
  var bin = atob$4(b64);
  var arr = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

var btoa$4 = globalThis$5.btoa || function (bin) {
  return globalThis$5.Buffer.from(bin, "binary").toString("base64");
};

function base64FromBytes$4(arr) {
  var bin = [];
  arr.forEach(function (_byte) {
    bin.push(String.fromCharCode(_byte));
  });
  return btoa$4(bin.join(""));
}

if (util.Long !== Long) {
  util.Long = Long;

  configure();
}

function isSet$u(value) {
  return value !== null && value !== undefined;
}

var SIGN_DIRECT = SignMode.SIGN_MODE_DIRECT;
var TxClient = /*#__PURE__*/function () {
  // public walletClient: SigningStargateClient | null = null;
  // public sender: ISender | null = null;
  function TxClient(chainId, apiClient, rpcUrl, signer, accountAddress) {
    this.chainId = void 0;
    this.apiClient = void 0;
    this.rpcUrl = void 0;
    this.accountAddress = void 0;
    this.signer = void 0;
    this.registry = void 0;
    !!!signer ? process.env.NODE_ENV !== "production" ? invariant(false, "wallet is required!") : invariant(false) : void 0;
    this.chainId = chainId;
    this.apiClient = apiClient;
    this.rpcUrl = rpcUrl;
    this.signer = signer;
    this.accountAddress = accountAddress;
    var registryTypes = new Map();
    registryTypes.set(MsgGrant$1.typeUrl, MsgGrant$1.Proto);
    registryTypes.set(MsgExec$1.typeUrl, MsgExec$1.Proto);
    registryTypes.set(MsgRevoke$1.typeUrl, MsgRevoke$1.Proto);
    registryTypes.set(MsgSend$1.typeUrl, MsgSend$1.Proto);
    registryTypes.set(MsgMultiSend$1.typeUrl, MsgMultiSend$1.Proto);
    registryTypes.set(MsgVerifyInvariant$1.typeUrl, MsgVerifyInvariant$1.Proto);
    registryTypes.set(MsgFundCommunityPool$1.typeUrl, MsgFundCommunityPool$1.Proto);
    registryTypes.set(MsgSetWithdrawAddress$1.typeUrl, MsgSetWithdrawAddress$1.Proto);
    registryTypes.set(MsgWithdrawDelegatorReward$1.typeUrl, MsgWithdrawDelegatorReward$1.Proto);
    registryTypes.set(MsgWithdrawValidatorCommission$1.typeUrl, MsgWithdrawValidatorCommission$1.Proto);
    registryTypes.set(MsgSubmitEvidence$1.typeUrl, MsgSubmitEvidence$1.Proto);
    registryTypes.set(MsgGrantAllowance$1.typeUrl, MsgGrantAllowance$1.Proto);
    registryTypes.set(MsgRevokeAllowance$1.typeUrl, MsgRevokeAllowance$1.Proto);
    registryTypes.set(MsgCreateVestingAccount$1.typeUrl, MsgCreateVestingAccount$1.Proto);
    registryTypes.set(MsgGovRepurchase$1.typeUrl, MsgGovRepurchase$1.Proto);
    registryTypes.set(MsgEthereumTx$1.typeUrl, MsgEthereumTx$1.Proto);
    registryTypes.set(MsgSendNft.typeUrl, MsgSendNft.Proto);
    registryTypes.set(MsgCreateRandSwapRewardConfig$1.typeUrl, MsgCreateRandSwapRewardConfig$1.Proto);
    registryTypes.set(MsgOpenRandSwapReward$1.typeUrl, MsgOpenRandSwapReward$1.Proto);
    registryTypes.set(MsgCloseRandSwapReward$1.typeUrl, MsgCloseRandSwapReward$1.Proto);
    registryTypes.set(MsgUpdateRandSwapRewardConfig$1.typeUrl, MsgUpdateRandSwapRewardConfig$1.Proto);
    registryTypes.set(MsgCreateLiquidityRewardConfig$1.typeUrl, MsgCreateLiquidityRewardConfig$1.Proto);
    registryTypes.set(MsgUpdateLiquidityRewardConfig$1.typeUrl, MsgUpdateLiquidityRewardConfig$1.Proto);
    registryTypes.set(MsgOpenLiquidityReward$1.typeUrl, MsgOpenLiquidityReward$1.Proto);
    registryTypes.set(MsgCloseLiquidityReward$1.typeUrl, MsgCloseLiquidityReward$1.Proto);
    registryTypes.set(MsgCollectFeeProtocol$1.typeUrl, MsgCollectFeeProtocol$1.Proto);
    registryTypes.set(MsgGovCorePool$1.typeUrl, MsgGovCorePool$1.Proto);
    registryTypes.set(MsgIssue$1.typeUrl, MsgIssue$1.Proto);
    registryTypes.set(MsgMint$1.typeUrl, MsgMint$1.Proto);
    registryTypes.set(MsgBurn$1.typeUrl, MsgBurn$1.Proto);
    registryTypes.set(MsgTransferOwnership$1.typeUrl, MsgTransferOwnership$1.Proto);
    registryTypes.set(MsgConfirmOwnership$1.typeUrl, MsgConfirmOwnership$1.Proto);
    registryTypes.set(MsgStoreCode$1.typeUrl, MsgStoreCode$1.Proto);
    registryTypes.set(MsgCollect$1.typeUrl, MsgCollect$1.Proto);
    registryTypes.set(MsgCollectReward$1.typeUrl, MsgCollectReward$1.Proto);
    registryTypes.set(MsgCreatePool$1.typeUrl, MsgCreatePool$1.Proto);
    registryTypes.set(MsgCreatePosition$1.typeUrl, MsgCreatePosition$1.Proto);
    registryTypes.set(MsgDecreaseLiquidity$1.typeUrl, MsgDecreaseLiquidity$1.Proto);
    registryTypes.set(MsgIncreaseLiquidity$1.typeUrl, MsgIncreaseLiquidity$1.Proto);
    registryTypes.set(MsgSwapExactIn$1.typeUrl, MsgSwapExactIn$1.Proto);
    registryTypes.set(MsgSwapExactOut$1.typeUrl, MsgSwapExactOut$1.Proto);
    registryTypes.set(MsgSubmitProposal$1.typeUrl, MsgSubmitProposal$1.Proto);
    registryTypes.set(MsgDeposit$1.typeUrl, MsgDeposit$1.Proto);
    registryTypes.set(MsgVote$1.typeUrl, MsgVote$1.Proto);
    registryTypes.set(MsgVoteWeighted$1.typeUrl, MsgVoteWeighted$1.Proto);
    registryTypes.set(MsgCreateValidator$1.typeUrl, MsgCreateValidator$1.Proto);
    registryTypes.set(MsgEditValidator$1.typeUrl, MsgEditValidator$1.Proto);
    registryTypes.set(MsgDelegate$1.typeUrl, MsgDelegate$1.Proto);
    registryTypes.set(MsgBeginRedelegate$1.typeUrl, MsgBeginRedelegate$1.Proto);
    registryTypes.set(MsgUndelegate$1.typeUrl, MsgUndelegate$1.Proto);
    registryTypes.set(MsgCollectRandSwapReward$1.typeUrl, MsgCollectRandSwapReward$1.Proto);
    this.registry = new Registry(registryTypes);
  }

  var _proto = TxClient.prototype;

  _proto.getSender = /*#__PURE__*/function () {
    var _getSender = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var authAPI, _yield$authAPI$accoun, _yield$authAPI$accoun2, account_number, sequence, _yield$this$signer$ge, pubkey;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              authAPI = this.apiClient.authAPI;
              _context.next = 3;
              return authAPI.accounts(this.accountAddress);

            case 3:
              _yield$authAPI$accoun = _context.sent;
              _yield$authAPI$accoun2 = _yield$authAPI$accoun.account.base_account;
              account_number = _yield$authAPI$accoun2.account_number;
              sequence = _yield$authAPI$accoun2.sequence;
              _context.next = 10;
              return this.signer.getAccounts();

            case 10:
              _yield$this$signer$ge = _context.sent[0];
              pubkey = _yield$this$signer$ge.pubkey;
              return _context.abrupt("return", {
                address: this.accountAddress,
                pubkey: pubkey,
                accountNumber: parseInt(account_number),
                sequence: parseInt(sequence)
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getSender() {
      return _getSender.apply(this, arguments);
    }

    return getSender;
  }();

  _proto.sendTransaction = /*#__PURE__*/function () {
    var _sendTransaction = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(messages, gasLimit, memo) {
      var sender, signInfoDirect, authInfoDirect, feeMessage, _messages, body, signDocDirect, walletClient, _yield$walletClient$s, signed, signature, txRaw, txBytes;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (memo === void 0) {
                memo = "";
              }

              _context2.next = 3;
              return this.getSender();

            case 3:
              sender = _context2.sent;
              // const pubKeyDecoded = Buffer.from(sender.pubkey, "base64");
              // 1. SignDirect
              signInfoDirect = createSignerInfo(sender.pubkey, sender.sequence, SIGN_DIRECT); // 2. authInfo

              if (gasLimit) {
                // 2. Fee
                feeMessage = createFee('', NETWORK_DETAILS[this.chainId].nativeCurrency.base, gasLimit);
                authInfoDirect = createAuthInfo(signInfoDirect, feeMessage);
              } else {
                authInfoDirect = AuthInfo.fromPartial({
                  signerInfos: [signInfoDirect],
                  fee: {}
                });
              } // 3. txbody
              // const body = createBodyWithMultipleMessages(messages, memo);


              _messages = messages instanceof Array ? messages : [messages];
              body = createTxBodyEncodeObject(_messages, memo); // 4. signDoc

              signDocDirect = createSigDoc(this.registry.encode(body), AuthInfo.encode(authInfoDirect).finish(), this.chainId, sender.accountNumber); // 5. sign

              _context2.next = 11;
              return SigningStargateClient.connectWithSigner(this.rpcUrl, this.signer, {
                registry: this.registry,
                prefix: NETWORK_DETAILS[this.chainId].nativeCurrency.symbol.toLowerCase()
              });

            case 11:
              walletClient = _context2.sent;
              _context2.next = 14;
              return walletClient.signer.signDirect(this.accountAddress, signDocDirect);

            case 14:
              _yield$walletClient$s = _context2.sent;
              signed = _yield$walletClient$s.signed;
              signature = _yield$walletClient$s.signature;
              txRaw = TxRaw.fromPartial({
                bodyBytes: signed.bodyBytes,
                authInfoBytes: signed.authInfoBytes,
                signatures: [fromBase64(signature.signature)]
              });
              txBytes = TxRaw.encode(txRaw).finish();
              return _context2.abrupt("return", walletClient.broadcastTx(txBytes));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function sendTransaction(_x, _x2, _x3) {
      return _sendTransaction.apply(this, arguments);
    }

    return sendTransaction;
  }();

  _proto.getEstimatedFee = /*#__PURE__*/function () {
    var _getEstimatedFee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(messages, memo) {
      var sender, signInfoDirect, authInfoDirect, _messages, body, signDocDirect, txRaw, txBytes, _yield$this$apiClient, gasInfo;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (memo === void 0) {
                memo = "";
              }

              _context3.next = 3;
              return this.getSender();

            case 3:
              sender = _context3.sent;
              // const pubKeyDecoded = Buffer.from(sender.pubkey, "base64");
              // 1. SignDirect
              signInfoDirect = createSignerInfo(sender.pubkey, sender.sequence, SIGN_DIRECT); // 2. authInfo

              authInfoDirect = AuthInfo.fromPartial({
                signerInfos: [signInfoDirect],
                fee: {}
              }); // 3. txbody
              // const body = createBodyWithMultipleMessages(messages, memo);

              _messages = messages instanceof Array ? messages : [messages];
              body = createTxBodyEncodeObject(_messages, memo); // 4. signDoc

              signDocDirect = createSigDoc(this.registry.encode(body), AuthInfo.encode(authInfoDirect).finish(), this.chainId, sender.accountNumber);
              console.log(signDocDirect);
              txRaw = TxRaw.fromPartial({
                bodyBytes: signDocDirect.bodyBytes,
                authInfoBytes: signDocDirect.authInfoBytes,
                signatures: [new Uint8Array()]
              });
              txBytes = TxRaw.encode(txRaw).finish();
              _context3.next = 14;
              return this.apiClient.txAPI.simulate({
                txBytes: txBytes
              });

            case 14:
              _yield$this$apiClient = _context3.sent;
              gasInfo = _yield$this$apiClient.gasInfo;
              console.log('gas_used: ' + (gasInfo == null ? void 0 : gasInfo.gasUsed));
              return _context3.abrupt("return", gasInfo == null ? void 0 : gasInfo.gasUsed);

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getEstimatedFee(_x4, _x5) {
      return _getEstimatedFee.apply(this, arguments);
    }

    return getEstimatedFee;
  }();

  return TxClient;
}();
function createTxBodyEncodeObject(messages, memo) {
  var results = messages.map(function (item) {
    return item.generateMessage();
  });
  return {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    value: {
      messages: results,
      memo: memo
    }
  };
}
function createSigDoc(bodyBytes, authInfoBytes, chainId, accountNumber) {
  return SignDoc.fromPartial({
    bodyBytes: bodyBytes,
    authInfoBytes: authInfoBytes,
    chainId: chainId,
    accountNumber: accountNumber
  });
}

function createAuthInfo(signerInfo, fee) {
  return AuthInfo.fromPartial({
    signerInfos: [signerInfo],
    fee: fee
  });
}

function createFee(fee, denom, gasLimit) {
  return Fee.fromPartial({
    amount: [Coin.fromPartial({
      denom: denom,
      amount: fee
    })],
    gasLimit: gasLimit
  });
}

function createSignerInfo(publicKey, sequence, mode) {
  var pubkey = Any$1.fromPartial({
    typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
    value: PubKey.encode({
      key: publicKey
    }).finish()
  });
  var signerInfo = SignerInfo.fromPartial({
    publicKey: pubkey,
    modeInfo: ModeInfo.fromPartial({
      single: ModeInfo_Single.fromPartial({
        mode: mode
      })
    }),
    sequence: sequence
  });
  return signerInfo;
}

export { APIClient, APIRequester, AuthAPI, AuthzAPI, BASE_UNIT_TICK, BankAPI, BaseAPI, BaseMsg, CHAIN_NAMES, Chain_Id, DEFAULT_PRECISION, DEFAULT_USER_PRECISION, DeflationAPI, Direction, FEE_AMOUNT_DETAIL, Fee_Amount, GovAPI, LiquidityMath, MAX_PRECISION, MintAPI, MsgBeginRedelegate$1 as MsgBeginRedelegate, MsgBurn$1 as MsgBurn, MsgCloseLiquidityReward$1 as MsgCloseLiquidityReward, MsgCloseRandSwapReward$1 as MsgCloseRandSwapReward, MsgCollect$1 as MsgCollect, MsgCollectFeeProtocol$1 as MsgCollectFeeProtocol, MsgCollectRandSwapReward$1 as MsgCollectRandSwapReward, MsgCollectReward$1 as MsgCollectReward, MsgConfirmOwnership$1 as MsgConfirmOwnership, MsgCreateLiquidityRewardConfig$1 as MsgCreateLiquidityRewardConfig, MsgCreatePool$1 as MsgCreatePool, MsgCreatePosition$1 as MsgCreatePosition, MsgCreateRandSwapRewardConfig$1 as MsgCreateRandSwapRewardConfig, MsgCreateValidator$1 as MsgCreateValidator, MsgCreateVestingAccount$1 as MsgCreateVestingAccount, MsgDecreaseLiquidity$1 as MsgDecreaseLiquidity, MsgDelegate$1 as MsgDelegate, MsgDeposit$1 as MsgDeposit, MsgEditValidator$1 as MsgEditValidator, MsgEthereumTx$1 as MsgEthereumTx, MsgExec$1 as MsgExec, MsgFundCommunityPool$1 as MsgFundCommunityPool, MsgGovCorePool$1 as MsgGovCorePool, MsgGovRepurchase$1 as MsgGovRepurchase, MsgGrant$1 as MsgGrant, MsgGrantAllowance$1 as MsgGrantAllowance, MsgIncreaseLiquidity$1 as MsgIncreaseLiquidity, MsgIssue$1 as MsgIssue, MsgMint$1 as MsgMint, MsgMultiSend$1 as MsgMultiSend, MsgOpenLiquidityReward$1 as MsgOpenLiquidityReward, MsgOpenRandSwapReward$1 as MsgOpenRandSwapReward, MsgRevoke$1 as MsgRevoke, MsgRevokeAllowance$1 as MsgRevokeAllowance, MsgSend$1 as MsgSend, MsgSendNft, MsgSetWithdrawAddress$1 as MsgSetWithdrawAddress, MsgStoreCode$1 as MsgStoreCode, MsgSubmitEvidence$1 as MsgSubmitEvidence, MsgSubmitProposal$1 as MsgSubmitProposal, MsgSwapExactIn$1 as MsgSwapExactIn, MsgSwapExactOut$1 as MsgSwapExactOut, MsgTransferOwnership$1 as MsgTransferOwnership, MsgUndelegate$1 as MsgUndelegate, MsgUpdateLiquidityRewardConfig$1 as MsgUpdateLiquidityRewardConfig, MsgUpdateRandSwapRewardConfig$1 as MsgUpdateRandSwapRewardConfig, MsgVerifyInvariant$1 as MsgVerifyInvariant, MsgVote$1 as MsgVote, MsgVoteWeighted$1 as MsgVoteWeighted, MsgWithdrawDelegatorReward$1 as MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission$1 as MsgWithdrawValidatorCommission, NETWORK_DETAILS, ONE_DAY_TO_SECONDS, ONE_YEAR_TO_DAYS, PoolIncentiveAPI, REG_DECIMAL, REG_DECIMAL_SIMPLE, REG_NUMBER, SIGN_DIRECT, SlashingAPI, StakingAPI, SwapAPI, TICK_SPACINGS, TendermintAPI, TickMath, Tip_Level, TokenAPI, TransactionLooper, Transaction_Status, TxAPI, TxClient, WasmAPI, ZERO, arrayToMap, checkInputNumber, createSigDoc, createTxBodyEncodeObject, decimalNumber, deepCopy, div, encrypt, formatDiffTime, formatMoment, formatNumber, formatTime, formatUnixMoment, getPercentByFeeAmount, getPoolAddress, isEmptyAmount, isEqualTo, isGreaterThan, isLessThan, isNumeric, isPositive, longToNumber, minus, multipliedBy, objectToMap, plus, pow, pow18, powM18, shift, sortsBefore, to32, toAmountCeil, toAmountFee, toAmountFloor, toAmountString, toDecimalPlaces, toExactAmount, toPercent, toUsd };
//# sourceMappingURL=metaos.ts.esm.js.map
