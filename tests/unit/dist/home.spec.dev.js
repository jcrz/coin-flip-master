"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _testUtils = require("@vue/test-utils");

var _Home = _interopRequireDefault(require("@/views/Home.vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var flipUtils = _interopRequireWildcard(require("@/utils/flip-utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var localVue = (0, _testUtils.createLocalVue)(); // Devuelve una clase Vue para agregar componentes sin alterar la clase Vue Global.

localVue.use(_vuex["default"]);
var store = new _vuex["default"].Store();
store.commit = jest.fn();
describe('Home.vue', function () {
  afterEach(function () {
    jest.clearAllMocks();
  });
  describe('user chooses heads', function () {
    it('calls `makeChoice()` with "heads"', function () {
      var makeChoiceMock = jest.fn();
      var wrapper = (0, _testUtils.shallowMount)(_Home["default"], {
        methods: {
          makeChoice: makeChoiceMock
        }
      });
      wrapper.find('#heads-button').trigger('click');
      expect(makeChoiceMock).toHaveBeenCalledWith('heads');
    });
    it('calls `router.push()` with argument: "/results"', function () {
      var pushMock = jest.fn();
      var wrapper = (0, _testUtils.shallowMount)(_Home["default"], {
        localVue: localVue,
        store: store,
        mocks: {
          $router: {
            push: pushMock
          }
        }
      });
      wrapper.find('#heads-button').trigger('click');
      expect(pushMock).toHaveBeenCalledWith('/results');
    });
    it('calls `store.commit("incrementWins")` when the flip is a "heads"', function () {
      flipUtils.createRandomInteger = jest.fn(function () {
        return 0;
      });
      var wrapper = (0, _testUtils.shallowMount)(_Home["default"], {
        localVue: localVue,
        store: store,
        mocks: {
          $router: {
            push: jest.fn()
          }
        }
      });
      wrapper.find('#heads-button').trigger('click');
      expect(store.commit).toHaveBeenCalledWith('incrementWins');
    });
    it('calls `store.commit("incrementLosses")` when the flip is a "tails"', function () {
      flipUtils.createRandomInteger = jest.fn(function () {
        return 1;
      });
      var wrapper = (0, _testUtils.shallowMount)(_Home["default"], {
        localVue: localVue,
        store: store,
        mocks: {
          $router: {
            push: jest.fn()
          }
        }
      });
      wrapper.find('#heads-button').trigger('click');
      expect(store.commit).toHaveBeenCalledWith('incrementLosses');
    });
  });
  describe('user chooses tails', function () {});
});