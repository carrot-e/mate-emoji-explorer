import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue';

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

describe('App.vue', () => {
  window.fetch = mockFetch([]);

  it('is Vue component', () => {
    const component = shallowMount(App);
    expect(component.isVueInstance()).toBe(true);
  });

  it('has shownEmojis array', () => {
    const component = shallowMount(App);
    expect(Array.isArray(component.vm.shownEmojis)).toBe(true);
  });
});
