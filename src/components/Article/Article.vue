<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col :md="2">
          <!-- <v-img :src="image" max-width="100" max-height="100"></v-img> -->
        </v-col>
        <v-col :md="8">
          some txt sfsdf sadfdfa saasdasd
        </v-col>
        <v-col :md="2">
          <v-btn
            icon
            text
            :disabled="votes === 20"
            data-test-id="up-vote"
            @click="upVote"
          >
            <v-icon>mdi-star</v-icon>
          </v-btn>
          <span>{{ votes }}</span>
          <v-btn
            icon
            text
            :disabled="votes === 0"
            data-test-id="down-vote"
            @click="downVote"
          >
            <v-icon>mdi-star</v-icon>
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
      this.$emit('up-vote');
    },
    downVote() {
      this.$emit('down-vote');
    }
  }
};
</script>

<style lang="scss" scoped></style>
