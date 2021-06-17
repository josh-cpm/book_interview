<template>
  <div class="quiz-question">
    <div class="quiz-question__progress-bar"></div>
    <div class="quiz-question__title">
      Which of the following devices do you own?
    </div>
    <p class="quiz-question__label">
      Select all that apply
    </p>
    <div class="quiz-question__answers">
      <QuizSelectButton buttonValue="iPhone"></QuizSelectButton>
    </div>
    <PrimaryCta buttonValue="Next"></PrimaryCta>
  </div>
</template>

<script>
import QuizSelectButton from '../Reusible/quizSelectButons/QuizSelectDefault';
import PrimaryCta from '../Reusible/PrimaryCta';

export default {
  name: 'ScreenerQuestions',
  components: { QuizSelectButton, PrimaryCta },
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
