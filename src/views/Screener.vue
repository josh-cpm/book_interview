<template>
  Hello world
  <ScreenerWelcome></ScreenerWelcome>
  <ScreenerQuestions></ScreenerQuestions>
  <ScreenerSuccess></ScreenerSuccess>
</template>

<script>
import ScreenerWelcome from '../components/Screener/ScreenerWelcome';
import ScreenerQuestions from '../components/Screener/ScreenerQuestions';
import ScreenerSuccess from '../components/Screener/ScreenerSuccess';

export default {
  name: 'Screener',
  components: { ScreenerWelcome, ScreenerQuestions, ScreenerSuccess },
};
</script>
