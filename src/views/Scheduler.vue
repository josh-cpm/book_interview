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
import MeetingDetails from '@/components/Schedule/MeetingDetails';
import ScheduleContainer from '@/components/Schedule/ScheduleContainer';
import ParticipantDetailsContainer from '@/components/Schedule/ParticipantDetailsContainer';
import store from '@/modules/store';
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
  },
};
</script>
