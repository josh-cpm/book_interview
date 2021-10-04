<template>
  <div class="meeting-page-container">
    <div v-if="meetingCanceled">
      <MeetingCanceled></MeetingCanceled>
    </div>
    <div v-if="!meetingCanceled && !meetingDate">
      <MeetingLoading></MeetingLoading>
    </div>
    <div
      class="meeting-page__meeting-details"
      v-if="meetingDate && !meetingCanceled"
    >
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
        <a :href="joinCtaIsInactive ? '' : meetingDetails.linkToJoin">
          <PrimaryCta
            buttonValue="Join Meeting"
            :inactiveState="joinCtaIsInactive"
          ></PrimaryCta>
        </a>
      </div>
      <div class="section">
        <div class="section-title">
          Can't attend?
        </div>
        <PrimaryCta
          buttonValue="Cancel Meeting"
          :loadingState="false"
          @click="cancelMeetingCall"
        ></PrimaryCta>
      </div>
      <div class="section">
        <div class="section-title">
          Your Info
        </div>
        <ul>
          <li>{{ participantInfo.name }}</li>
          <li>{{ participantInfo.email }}</li>
          <li>{{ participantInfo.phone }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MeetingCanceled from '../components/JoinMeeting/MeetingCanceled';
import MeetingLoading from '../components/JoinMeeting/MeetingLoading';
import PrimaryCta from '../components/Reusible/PrimaryCta';
import { getMeeting, cancelMeeting } from '@/modules/api.js';
import {
  format,
  parseJSON,
  formatDistanceToNow,
  differenceInMinutes,
} from 'date-fns';
import store from '@/modules/store';

export default {
  name: 'MeetingConfirmation',
  components: {
    PrimaryCta,
    MeetingCanceled,
    MeetingLoading,
  },
  data() {
    return {
      refresher: 0,
      meetingCanceled: false,
    };
  },
  computed: {
    meetingDetails() {
      return store.meetingDetails;
    },
    participantInfo() {
      return store.participantDetails;
    },
    meetingTime() {
      try {
        const date = parseJSON(store.meetingDetails.timeStamp);
        return format(date, 'p');
      } catch (error) {
        return '';
      }
    },
    meetingDate() {
      try {
        const date = parseJSON(store.meetingDetails.timeStamp);
        console.log(date);
        return format(date, 'MMMM d');
      } catch (error) {
        return '';
      }
    },
    meetingCountdown() {
      try {
        this.refresher;
        const date = parseJSON(store.meetingDetails.timeStamp);
        return formatDistanceToNow(date, {
          addSuffix: true,
        });
      } catch (error) {
        return '';
      }
    },
    joinCtaIsInactive() {
      this.refresher;
      const date = parseJSON(store.meetingDetails.timeStamp);
      const minLeft = differenceInMinutes(date, new Date());
      if (minLeft <= 100) {
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
        // console.log(response.data);
        if (response.status === 200) {
          // this.meetingDetails = response.data.meetingDetails;
          // this.participantInfo = response.data.participantInfo;
        }
      } catch (e) {
        console.log(e);
      }
    },
    async cancelMeetingCall() {
      try {
        const { interviewUuid } = this.$route.params;
        const response = await cancelMeeting(interviewUuid);
        if (response.status === 200) {
          this.meetingCanceled = true;
        }
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getDetails();
    this.refresh();
    console.log(store);
    console.log('Selected timeslot is...');
    console.log(store.selectedTimeslot);
  },
};
</script>

<style scoped>
.meeting-page-container {
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

li {
  margin-bottom: 0.3rem;
}

ul {
  margin: 0;
}
</style>
