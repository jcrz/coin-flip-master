import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Vuex from 'vuex';
import * as flipUtils from '@/utils/flip-utils';

const localVue = createLocalVue(); // Devuelve una clase Vue para agregar componentes sin alterar la clase Vue Global.
localVue.use(Vuex);
const store = new Vuex.Store();
store.commit = jest.fn();

describe('Home.vue', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('user chooses heads', () => {
    it('calls `makeChoice()` with "heads"', () => {
      const makeChoiceMock = jest.fn();

      const wrapper = shallowMount(Home, {
        methods: {
          makeChoice: makeChoiceMock,
        },
      });

      wrapper.find('#heads-button').trigger('click');
      expect(makeChoiceMock).toHaveBeenCalledWith('heads');
    });

    it('calls `router.push()` with argument: "/results"', () => {
      const pushMock = jest.fn();

      const wrapper = shallowMount(Home, {
        localVue,
        store,
        mocks: {
          $router: {
            push: pushMock,
          },
        },
      });

      wrapper.find('#heads-button').trigger('click');
      expect(pushMock).toHaveBeenCalledWith('/results');
    });

    it('calls `store.commit("incrementWins")` when the flip is a "heads"', () => {
      flipUtils.createRandomInteger = jest.fn(() => 0);
      const wrapper = shallowMount(Home, {
        localVue,
        store,
        mocks: {
          $router: {
            push: jest.fn(),
          },
        },
      });

      wrapper.find('#heads-button').trigger('click');
      expect(store.commit).toHaveBeenCalledWith('incrementWins');
    });

    it('calls `store.commit("incrementLosses")` when the flip is a "tails"', () => {
      flipUtils.createRandomInteger = jest.fn(() => 1);
      const wrapper = shallowMount(Home, {
        localVue,
        store,
        mocks: {
          $router: {
            push: jest.fn(),
          },
        },
      });

      wrapper.find('#heads-button').trigger('click');
      expect(store.commit).toHaveBeenCalledWith('incrementLosses');
    });
  });

  describe('user chooses tails', () => {});
});
