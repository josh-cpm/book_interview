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
      ></QuizSelectButton>
    </div>
  </div>
</template>

<script>
import QuizSelectButton from '../Reusible/quizSelectButons/QuizSelectDefault';

export default {
  name: 'ScreenerSingleSelect',
  props: ['question'],
  components: { QuizSelectButton },
  computed: {},
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
