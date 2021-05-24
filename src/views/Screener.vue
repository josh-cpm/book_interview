<template>
  <div class="screener-flow-container">
    Hello world
    <ScreenerWelcome></ScreenerWelcome>
    <ScreenerQuestions></ScreenerQuestions>
    <ScreenerComplete></ScreenerComplete>
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
  },
};
</script>

<style scoped>
.screener-flow-container {
  margin: var(--margin-sides);
}
</style>
