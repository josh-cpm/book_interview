<template>
  <div class="screener-flow-container">
    <p>The current question is {{ currentQuestion }}</p>
    <component :is="showComponent"></component>
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
      if (this.participantStatus && this.participantStatus.length > 0) {
        return ScreenerComplete;
      } else if (this.currentQuestion > 0) {
        return ScreenerQuestions;
      } else {
        return ScreenerWelcome;
      }
    },
  },
};
</script>

<style scoped>
.screener-flow-container {
  margin: var(--margin-sides);
}
</style>
