import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import Article from './Article.vue';

const localVue = createLocalVue();

describe('Article.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test('should disable "down-vote" button', () => {
    const wrapper = mount(Article, {
      vuetify,
      localVue,
      propsData: {
        votes: 0
      }
    });
    expect(
      wrapper.find('[data-test-id="down-vote"]').attributes('disabled')
    ).toBe('disabled');
  });

  test('should disable "up-vote" button', () => {
    const wrapper = mount(Article, {
      vuetify,
      localVue,
      propsData: {
        votes: 20
      }
    });
    expect(
      wrapper.find('[data-test-id="up-vote"]').attributes('disabled')
    ).toBe('disabled');
  });

  test('should emit an "down-vote" event', () => {
    const wrapper = mount(Article, {
      vuetify,
      localVue,
      propsData: {
        votes: 1
      }
    });
    wrapper.find('[data-test-id="down-vote"]').trigger('click');
    expect(wrapper.emitted('down-vote')).toHaveLength(1);
  });

  test('should emit an "up-vote" event', () => {
    const wrapper = mount(Article, {
      vuetify,
      localVue,
      propsData: {
        votes: 1
      }
    });
    wrapper.find('[data-test-id="up-vote"]').trigger('click');
    expect(wrapper.emitted('up-vote')).toHaveLength(1);
  });
});
