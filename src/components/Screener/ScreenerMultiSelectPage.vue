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
        v-for="answer in answersList"
        :key="answer.answer"
        :buttonValue="answer.answer"
        :answerData="answer"
        :isSelected="answer.isSelected"
        @selectAnswer="selectAnswer"
      ></QuizSelectWithCheckMark>
    </div>
    <PrimaryCta buttonValue="Next" @click="submitAnswer"></PrimaryCta>
  </div>
</template>

<script>
import QuizSelectWithCheckMark from '../Reusible/quizSelectButons/QuizSelectWithCheckMark';
import PrimaryCta from '../Reusible/PrimaryCta';
import store from '@/modules/store.js';

export default {
  name: 'ScreenerMultiSelect',
  props: ['question', 'currentQuestion'],
  data() {
    return {
      selectedAnswers: [],
    };
  },
  components: { QuizSelectWithCheckMark, PrimaryCta },
  computed: {
    answersList() {
      const answers = this.question.answers;
      const selectedAnswers = this.selectedAnswers;
      answers.forEach((answer) => {
        const index = selectedAnswers.findIndex((el) => el === answer);
        if (index >= 0) {
          answer.isSelected = true;
        } else {
          answer.isSelected = false;
        }
      });
      return answers;
    },
  },
  methods: {
    selectAnswer(e) {
      const index = this.selectedAnswers.findIndex((el) => el === e);
      if (index >= 0) {
        this.selectedAnswers.splice(index, 1);
      } else {
        this.selectedAnswers.push(e);
      }
    },
    showSelectionStatus(answer) {
      answer;
    },
    submitAnswer() {
      store.screener[this.currentQuestion].userAnswer = this.selectedAnswers;
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
