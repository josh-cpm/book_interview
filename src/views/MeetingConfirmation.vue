<template>
  <div class="confirmation-page-container">
    <div class="section">
      <h2>Meeting Scheduled!</h2>
      <p>
        You’ll meet with the Lasting team for
        {{ meetingDetails.duration }} minutes at {{ meetingTime }} on
        {{ meetingDate }}.
        <br />
      </p>
    </div>
    <div class="section">
      <div class="section-title">Starts {{ meetingCountdown }}</div>
      <PrimaryCta
        buttonText="Join Meeting"
        :inactiveState="joinCtaIsInactive"
      ></PrimaryCta>
    </div>
    <div class="section">
      <div class="section-title">
        Can't attend?
      </div>
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
        <li>{{ participantInfo.phoneNumber }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import PrimaryCta from '../components/Reusible/PrimaryCta';
import { getMeeting } from '@/modules/api.js';
import {
  format,
  parseJSON,
  formatDistanceToNow,
  differenceInMinutes,
} from 'date-fns';

export default {
  name: 'MeetingConfirmation',
  components: {
    PrimaryCta,
  },
  data() {
    return {
      participantInfo: {},
      meetingDetails: {},
      refresher: 0,
    };
  },
  computed: {
    meetingTime() {
      const date = parseJSON(this.meetingDetails.time);
      return format(date, 'p');
    },
    meetingDate() {
      const date = parseJSON(this.meetingDetails.time);
      return format(date, 'MMMM d');
    },
    meetingCountdown() {
      this.refresher;
      const date = parseJSON(this.meetingDetails.time);
      return formatDistanceToNow(date, {
        addSuffix: true,
      });
    },
    joinCtaIsInactive() {
      this.refresher;
      const date = parseJSON(this.meetingDetails.time);
      const minLeft = differenceInMinutes(date, new Date());
      if (minLeft <= 1000) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    refresh() {
      setInterval(() => this.refresher++, 1000);
    },
    async getDetails() {
      try {
        const { interviewUuid } = this.$route.params;
        const response = await getMeeting(interviewUuid);
        console.log(response.data);
        this.meetingDetails = response.data.meetingDetails;
        this.participantInfo = response.data.participantInfo;
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getDetails();
    this.refresh();
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
