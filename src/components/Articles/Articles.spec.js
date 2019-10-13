import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import Articles from './Articles.vue';
import Article from '../Article/Article.vue';
import { getArticles } from '../../api/api.js';
import flushPromises from 'flush-promises';

const localVue = createLocalVue();
jest.mock('../../api/api.js');

describe('Articles.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test('should pass all articles to the Articles cmp', async () => {
    expect.assertions(2);
    const items = [
      {
        author: {},
        description: '',
        id: '1',
        image: '',
        number: 0,
        title: '',
        votes: 10
      }
    ];
    getArticles.mockResolvedValueOnce(items);
    const wrapper = mount(Articles, {
      vuetify,
      localVue
    });
    await flushPromises();

    const articles = wrapper.findAll(Article);
    expect(articles).toHaveLength(items.length);
    articles.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props()).toEqual(items[i]);
    });
  });

  test.only('should render all articles DESC', async () => {
    const items = [
      {
        author: {},
        description: '',
        id: '1',
        image: '',
        number: 0,
        title: '',
        votes: 2
      },
      {
        author: {},
        description: '',
        id: '2',
        image: '',
        number: 0,
        title: '',
        votes: 20
      }
    ];
    getArticles.mockResolvedValueOnce(items);
    const wrapper = mount(Articles, {
      vuetify,
      localVue
    });
    await flushPromises();
    const article = wrapper.findAll(Article);
    expect(article.at(0).props().votes).toBe(20);
  });
});
