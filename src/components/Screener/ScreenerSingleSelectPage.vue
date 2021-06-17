<template>
  <div>
    <div class="quiz-question__title">
      {{ question.question }}
    </div>
    <div class="quiz-question__answers">
      <QuizSelectButton
        class="quiz-question__answer"
        v-for="answer in question.answers"
        :key="answer.answer"
        :buttonValue="answer.answer"
        @click="submitAnswer"
      ></QuizSelectButton>
    </div>
  </div>
</template>

<script>
import QuizSelectButton from '../Reusible/quizSelectButons/QuizSelectDefault';
import store from '@/modules/store.js';

export default {
  name: 'ScreenerSingleSelect',
  props: ['question', 'currentQuestion'],
  components: { QuizSelectButton },
  methods: {
    submitAnswer(e) {
      store;
      console.log(e.target.textContent);
      store.screener[this.currentQuestion].userAnswer = e.target.textContent;
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

.quiz-question__answers {
  margin: 1rem 0 2rem 0;
}

.quiz-question__answer {
  margin-bottom: 0.5rem;
}
</style>
