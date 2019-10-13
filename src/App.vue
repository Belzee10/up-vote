<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex>
            <articles />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Articles from './components/Articles/Articles.vue';
export default {
  name: 'App',
  components: {
    Articles
  },
  data: () => ({
    //
  })
};
</script>
