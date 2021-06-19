<template>
  <div>
    <div v-if="status === 'accepted'" class="screener-complete-container">
      <h1>Congratulations!</h1>
      <p>You qualify for this interview.</p>
      <p>Now it’s time to book your meeting slot.</p>
      <PrimaryCta buttonValue="View Openings"></PrimaryCta>
    </div>
    <div v-else class="screener-complete-container">
      <h1>All Timeslots Filled!</h1>
      <p>
        There are no remaining timeslots available. Thank you for your interest.
      </p>
    </div>
  </div>
</template>

<script>
import PrimaryCta from '../Reusible/PrimaryCta';
import store from '@/modules/store.js';

export default {
  name: 'ScreenerComplete',
  components: {
    PrimaryCta,
  },
  computed: {
    status() {
      return store.participantStatus;
    },
  },
  methods: {},
};
</script>

<style scoped>
.screener-complete-container,
.cta-container {
  margin: var(--margin-sides);
  margin-bottom: 2rem;
}

p,
h1 {
  margin-bottom: 1rem;
}
</style>
