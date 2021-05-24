<template>
  <div>
    <h1>Let's Meet!</h1>
    <p>Get paid ${{ incentive }} for sharing your thoughts with our team.</p>
    <MeetingDetails></MeetingDetails>
    <p>Answer a few questions to see if you qualify for this interview.</p>
    <PrimaryCta buttonText="Lets Begin"></PrimaryCta>
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
};
</script>
