<template>
  <div class="quiz-question">
    <div class="quiz-question__progress-bar"></div>
    <MultiSelect :question="question"></MultiSelect>
  </div>
</template>

<script>
import MultiSelect from './ScreenerMultiSelectPage';
import store from '@/modules/store.js';

export default {
  name: 'ScreenerQuestions',
  components: { MultiSelect },
  props: {
    currentQuestion: Number,
  },
  computed: {
    question() {
      return store.screener[this.currentQuestion];
    },
  },
};
</script>

<style scoped>
.quiz-question {
  margin: 0 var(--margin-sides);
}

.quiz-question__title {
  font-weight: bold;
}

.quiz-question__label {
  color: var(--color-text-gray);
  font-size: var(--font-size-small);
}

.quiz-question__answers {
  margin-bottom: 1rem;
}
</style>
