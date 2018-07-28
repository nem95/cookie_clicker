import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { store } from '@/store';
import Cookie from '@/components/Cookie.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Cookie.vue', () => {
  const wrapper = shallowMount(Cookie, { store, localVue });

  it('Change the cookieCounter value on cookie click', () => {
    wrapper.find('.cookie').trigger('click');
    expect(store.getters.cookieCounter).toBeGreaterThan(0);
  });

  it('Change the Counter value on cookie click', () => {
    const counter = wrapper.find('#counter');
    wrapper.find('.cookie').trigger('click');
    expect('' + store.getters.cookieCounter).toMatch(counter.element.innerHTML);
  });
});
