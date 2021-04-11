<template>
  <MeetingDetails
    @click="selectedTimeslot = !selectedTimeslot"
  ></MeetingDetails>
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

export default {
  name: 'SchedulerView',
  components: {
    MeetingDetails,
    ScheduleContainer,
    ParticipantDetailsContainer,
  },
  data() {
    return {
      selectedTimeslot: true,
    };
  },
  methods: {
    meetingScheduled() {
      this.$router.push('/interview/meet/b8fa6564-0a04-5eee-bd0b-fc6509add3c3');
    },
  },
};
</script>
