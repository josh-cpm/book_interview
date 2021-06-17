<template>
  <div>
    <div class="header-container">
      <h1>Let's Meet!</h1>
      <p>Get paid ${{ incentive }} for sharing your thoughts with our team.</p>
    </div>
    <MeetingDetails></MeetingDetails>
    <div class="cta-container">
      <p>Answer a few questions to see if you qualify for this interview.</p>
      <PrimaryCta
        @click="clickStartScreener"
        buttonValue="Lets Begin"
      ></PrimaryCta>
    </div>
  </div>
</template>

<script>
import MeetingDetails from '../Schedule/MeetingDetails';
import PrimaryCta from '../Reusible/PrimaryCta';
import store from '@/modules/store.js';

export default {
  name: 'ScreenerWelcome',
  components: {
    MeetingDetails,
    PrimaryCta,
  },
  computed: {
    incentive() {
      return store.meetingDetails.incentive;
    },
  },
  methods: {
    clickStartScreener() {
      console.log('start screener');
      store.startedScreener = true;
    },
  },
};
</script>

<style scoped>
.header-container,
.cta-container {
  margin: var(--margin-sides);
  margin-bottom: 2rem;
}

p,
h1 {
  margin-bottom: 1rem;
}
</style>
