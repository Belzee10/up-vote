<template>
  <v-row>
    <v-col
      v-for="article in orderedArticles"
      :key="article.id"
      md="8"
      offset="2"
    >
      <Article
        v-bind="article"
        @up-vote="handleUpVote"
        @down-vote="handleUpVote"
      />
    </v-col>
  </v-row>
</template>

<script>
import { getArticles, editArticle } from '../../api/api.js';
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
  },
  methods: {
    handleUpVote({ id, ...rest }) {
      editArticle(id, rest).then(res => {
        const index = this.articles.findIndex(item => item.id === res.id);
        this.articles.splice(index, 1, res);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
