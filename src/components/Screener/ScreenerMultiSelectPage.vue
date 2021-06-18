<template>
  <div>
    <div class="quiz-question__title">
      {{ question.question }}
    </div>
    <p class="quiz-question__label">
      Select all that apply
    </p>
    <div class="quiz-question__answers">
      <QuizSelectWithCheckMark
        class="quiz-question__answer"
        v-for="answer in question.answers"
        :key="answer.answer"
        :buttonValue="answer.answer"
        :answerData="answer"
        @selectAnswer="selectAnswer"
      ></QuizSelectWithCheckMark>
    </div>
    <PrimaryCta buttonValue="Next"></PrimaryCta>
  </div>
</template>

<script>
import QuizSelectWithCheckMark from '../Reusible/quizSelectButons/QuizSelectWithCheckMark';
import PrimaryCta from '../Reusible/PrimaryCta';

export default {
  name: 'ScreenerMultiSelect',
  props: ['question'],
  data() {
    return {
      selectedAnswers: [],
    };
  },
  components: { QuizSelectWithCheckMark, PrimaryCta },
  computed: {},
  methods: {
    selectAnswer(e) {
      const index = this.selectedAnswers.findIndex((el) => el === e);
      if (index >= 0) {
        this.selectedAnswers.splice(index, 1);
      } else {
        this.selectedAnswers.push(e);
      }
      console.log('Selected Answers:');
      console.log(this.selectedAnswers);
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
  margin-bottom: 2rem;
}

.quiz-question__answer {
  margin-bottom: 0.5rem;
}
</style>
