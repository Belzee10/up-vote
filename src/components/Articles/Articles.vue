<template>
  <div>
    <div v-for="article in getArticles" :key="article.id">
      <Article v-bind="article" />
    </div>
  </div>
</template>

<script>
import { getArticles } from '../../api/api.js';
import Article from '../Article/Article.vue';

export default {
  name: 'Articles',
  components: {
    Article
  },
  data: () => ({
    articles: []
  }),
  computed: {
    getArticles() {
      const newArticles = [...this.articles];
      return newArticles.sort((a, b) => {
        return a.votes < b.votes;
      });
    }
  },
  mounted() {
    getArticles().then(res => {
      this.articles = res;
    });
  }
};
</script>

<style lang="scss" scoped></style>
