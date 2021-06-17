<template>
  <div class="quiz-question">
    <div class="quiz-question__progress-bar"></div>
    <component :is="questionType" :question="question"></component>
  </div>
</template>

<script>
import MultiSelect from './ScreenerMultiSelectPage';
import SingleSelect from './ScreenerSingleSelectPage';
import store from '@/modules/store.js';

export default {
  name: 'ScreenerQuestions',
  components: { MultiSelect, SingleSelect },
  props: {
    currentQuestion: Number,
  },
  computed: {
    question() {
      return store.screener[this.currentQuestion];
    },
    questionType() {
      if (this.question.questionType === 'singleSelection') {
        return SingleSelect;
      } else {
        return MultiSelect;
      }
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
