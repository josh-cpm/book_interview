<template>
  <MeetingDetails></MeetingDetails>
  <ScheduleContainer v-if="!selectedTimeslot"></ScheduleContainer>
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
import { postMeeting } from '@/modules/api.js';

export default {
  name: 'SchedulerView',
  components: {
    MeetingDetails,
    ScheduleContainer,
    ParticipantDetailsContainer,
  },
  computed: {
    selectedTimeslot() {
      return store.selectedTimeslot;
    },
  },
  methods: {
    async meetingScheduled() {
      // const meetingUuid = store.selectedTimeslot;
      const response = await postMeeting(
        store.selectedTimeslot,
        store.participantDetails
      );
      console.log(response);
      if (response.status === 200) {
        this.$router.push(
          '/interview/meet/b8fa6564-0a04-5eee-bd0b-fc6509add3c3'
        );
      }
    },
    async fetchOpenings() {
      const base_url =
        'https://ipbf5lnnbl.execute-api.us-east-1.amazonaws.com/dev/';

      const screenerUuid = this.$route.params.screenerUuid;
      const response = await fetch(
        `${base_url}/meet/screeners/${screenerUuid}`
      );
      let parsedResponse = await response.json();
      if (response.status === 200) {
        console.log(parsedResponse);
        store.meetingDetails = parsedResponse.meetingDetails;
        store.flatMeetingOpenings = parsedResponse.flatMeetingOpenings;
        store.screener = parsedResponse.screener;
      }
    },
  },
  created() {
    this.fetchOpenings();
    //
  },
};
</script>
