<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col :md="2">
          <v-img
            :src="image"
            max-width="100"
            max-height="100"
            lazy-src="https://picsum.photos/id/11/100/60"
            aspect-ratio="1"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col :md="8">
          <h5 class="primary--text headline">
            {{ title }}
          </h5>
          <p class="text-truncate">
            {{ description }}
          </p>
          <span>
            Submitted by:
            <v-avatar size="36">
              <img :src="author.avatar" :alt="author.name" />
            </v-avatar>
          </span>
        </v-col>
        <v-col :md="2" class="d-flex flex-column justify-center align-center">
          <v-btn
            icon
            text
            :disabled="votes === 20"
            data-test-id="up-vote"
            @click="upVote"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
          <span class="votes">{{ votes }}</span>
          <v-btn
            icon
            text
            :disabled="votes === 0"
            data-test-id="down-vote"
            @click="downVote"
          >
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Article',
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    number: {
      type: Number,
      default: 0
    },
    votes: {
      type: Number,
      default: 0
    },
    author: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    upVote() {
      this.$emit('up-vote', {
        ...this.$props,
        votes: this.votes + 1
      });
    },
    downVote() {
      this.$emit('down-vote', {
        ...this.$props,
        votes: this.votes - 1
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
