<template>
  <div class="screener-flow-container">
    <p>The current question is {{ currentQuestion }}</p>
    <p>The current participantStatus is {{ participantStatus }}</p>
    <component
      :is="showComponent"
      :currentQuestion="currentQuestion"
    ></component>
  </div>
</template>

<script>
import ScreenerWelcome from '../components/Screener/ScreenerWelcome';
import ScreenerQuestions from '../components/Screener/ScreenerQuestions';
import ScreenerComplete from '../components/Screener/ScreenerComplete';
import store from '../modules/store.js';

export default {
  name: 'Screener',
  components: { ScreenerWelcome, ScreenerQuestions, ScreenerComplete },
  computed: {
    screenerQuestions() {
      return store.screener;
    },
    participantScreenerAnswers() {
      return store.participantScreenerAnswers;
    },
    participantStatus() {
      return store.participantStatus;
    },
    startedScreener() {
      return store.startedScreener;
    },
    currentQuestion() {
      let curQuestion = 0;
      const screener = Array.from(store.screener);
      screener.forEach((page, index) => {
        if (page.userAnswer !== undefined) {
          curQuestion = index + 1;
        }
      });
      return curQuestion;
    },
    showComponent() {
      this.validateAnswer(); // re-validate participant status anytme the store updates
      if (this.participantStatus && this.participantStatus.length > 0) {
        return ScreenerComplete;
      } else if (this.currentQuestion > 0 || this.startedScreener) {
        return ScreenerQuestions;
      } else {
        return ScreenerWelcome;
      }
    },
  },
  methods: {
    validateAnswer() {
      const questions = Array.from(store.screener);
      questions.forEach((question) => {
        if (question.answers === undefined) {
          return;
        }
        question.answers.forEach((answer) => {
          if (question.userAnswer === answer.answer) {
            if (answer.rejectIfSelected) {
              store.participantStatus = 'rejected';
            }
          }
        });
      });
    },
  },
};
</script>
