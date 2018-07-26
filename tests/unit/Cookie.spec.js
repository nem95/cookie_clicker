import { shallowMount } from '@vue/test-utils';
// import Vuex from "vuex";
import Cookie from '@/components/Cookie';
import store from '../../src/store';

describe('Cookie.vue', () => {
  let Store;

  beforeEach(() => {
    // const localStorageMock = {
    //     getItem: jest.fn(),
    //     setItem: jest.fn(),
    //     clear: jest.fn()
    // };
    // global.localStorage = localStorageMock;
    localStorage.clear();
    Store = store;
  });

  it('Change the counter value whene store cookieCounter Change', () => {
    const wrapper = shallowMount(Cookie, { store });
    const counter = wrapper.find('#counter');
    //console.log(Store);
    expect(counter.element.value).toMatch(Store.store.cookieCounter);
  });
});
