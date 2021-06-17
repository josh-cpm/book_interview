<template>
  <div>
    <div class="quiz-question__title">
      {{ question.question }}
    </div>
    <p class="quiz-question__label">
      Select all that apply
    </p>
    <div class="quiz-question__answers">
      <QuizSelectButton
        class="quiz-question__answer"
        v-for="answer in question.answers"
        :key="answer.answer"
        :buttonValue="answer.answer"
      ></QuizSelectButton>
    </div>
    <PrimaryCta buttonValue="Next"></PrimaryCta>
  </div>
</template>

<script>
import QuizSelectButton from '../Reusible/quizSelectButons/QuizSelectDefault';
import PrimaryCta from '../Reusible/PrimaryCta';

export default {
  name: 'ScreenerMultiSelect',
  props: ['question'],
  components: { QuizSelectButton, PrimaryCta },
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

.quiz-question__label {
  color: var(--color-text-gray);
  font-size: var(--font-size-small);
}

.quiz-question__answers {
  margin-bottom: 2rem;
}

.quiz-question__answer {
  margin-bottom: 0.5rem;
}
</style>
