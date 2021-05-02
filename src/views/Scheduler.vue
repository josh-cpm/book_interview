<template>
  <MeetingDetails
    @click="selectedTimeslot = !selectedTimeslot"
    :meetingDetails="meetingDetails"
  ></MeetingDetails>
  <ScheduleContainer
    v-if="!selectedTimeslot"
    :meetingOpenings="meetingOpenings"
  ></ScheduleContainer>
  <ParticipantDetailsContainer
    v-if="selectedTimeslot"
    @meetingScheduled="meetingScheduled"
  ></ParticipantDetailsContainer>
  <router-view />
</template>

<script>
import MeetingDetails from '../components/Meet/MeetingDetails';
import ScheduleContainer from '../components/Meet/ScheduleContainer';
import ParticipantDetailsContainer from '../components/Meet/ParticipantDetailsContainer';
import store from '../modules/store';

const base_url = 'https://ipbf5lnnbl.execute-api.us-east-1.amazonaws.com/dev/';

export default {
  name: 'SchedulerView',
  components: {
    MeetingDetails,
    ScheduleContainer,
    ParticipantDetailsContainer,
  },
  computed: {
    meetingDetails() {
      return store.meetingDetails;
    },
    meetingOpenings() {
      return store.meetingOpenings;
    },
    screener() {
      return store.screener;
    },
    selectedTimeslot() {
      return store.selectedTimeslot;
    },
  },

  methods: {
    meetingScheduled() {
      this.$router.push('/interview/meet/b8fa6564-0a04-5eee-bd0b-fc6509add3c3');
    },
    async fetchOpenings() {
      const screenerUuid = this.$route.params.screenerUuid;
      const response = await fetch(
        `${base_url}/meet/screeners/${screenerUuid}`
      );
      const parsedResponse = await response.json();
      if (response.status === 200) {
        // console.log(parsedResponse);
        store.meetingDetails = parsedResponse.meetingDetails;
        store.meetingOpenings = parsedResponse.openings;
        store.screener = parsedResponse.screener;
        console.log(store);
      }
    },
  },
  created() {
    this.fetchOpenings();
    //
  },
};
</script>
