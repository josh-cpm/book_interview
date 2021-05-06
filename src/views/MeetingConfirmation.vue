<template>
  <div class="confirmation-page-container">
    <div class="section">
      <h2>Meeting Scheduled!</h2>
      <p>
        You’ll meet with the Lasting team for 30 minutes at 9:30am Eastern time
        on March 13.
        <br />
        {{ meetingTime }}
      </p>
    </div>
    <div class="section">
      <div class="section-title">
        Starts in 2:15:30
      </div>
      <PrimaryCta
        buttonText="Join Meeting"
        :loadingState="false"
        :inactiveState="true"
      ></PrimaryCta>
    </div>
    <div class="section">
      <div class="section-title">
        Can't attend?
      </div>
      <PrimaryCta
        class="cta"
        buttonText="Reschedule Meeting"
        :loadingState="false"
      ></PrimaryCta>
      <PrimaryCta
        class="cta"
        buttonText="Cancel Meeting"
        :loadingState="false"
      ></PrimaryCta>
    </div>
    <div class="section">
      <div class="section-title">
        Your Info
      </div>
      <ul>
        <li>{{ participantInfo.name }}</li>
        <li>{{ participantInfo.email }}</li>
        <li>{{ participantInfo.tel }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import PrimaryCta from '../components/Reusible/PrimaryCta';
import { getMeeting } from '@/modules/api.js';

export default {
  name: 'MeetingConfirmation',
  components: {
    PrimaryCta,
  },
  data() {
    return {
      participantInfo: {
        name: 'Joshua Miller',
        email: 'josh24@gmail.com',
        tel: '919-697-8093',
      },
      meetingDateTime: new Date('2021-06-12 09:00:00-4:00'),
      meetingDetails: {},
    };
  },
  computed: {
    meetingTime() {
      let startTime = new Date(this.meetingDetails.date);
      startTime.setHours('2');
      console.log(startTime);
      return startTime;
    },
  },
  methods: {
    async getDetails() {
      try {
        const { interviewUuid } = this.$route.params;
        const response = await getMeeting(interviewUuid);
        console.log(response.data);
        this.meetingDetails = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getDetails();
  },
};
</script>

<style scoped>
.confirmation-page-container {
  margin: 0 var(--margin-sides);
}

.section-title {
  font-weight: bold;
  color: var(--color-text-main);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.section {
  margin-bottom: 2rem;
}

.cta {
  margin: 0.5rem 0;
}

li {
  margin-bottom: 0.3rem;
}
</style>
