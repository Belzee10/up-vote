<template>
  <v-row>
    <v-col
      v-for="article in orderedArticles"
      :key="article.id"
      md="8"
      offset="2"
    >
      <Article v-bind="article" />
    </v-col>
  </v-row>
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
    orderedArticles() {
      const newArticles = [...this.articles];
      newArticles.sort((a, b) => {
        return b.votes - a.votes;
      });
      return newArticles;
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
