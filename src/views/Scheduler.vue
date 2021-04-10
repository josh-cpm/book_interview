<template>
  <MeetingDetails
    @click="selectedTimeslot = !selectedTimeslot"
  ></MeetingDetails>
  <ScheduleContainer v-if="!selectedTimeslot"></ScheduleContainer>
  <ParticipantDetailsContainer
    v-if="selectedTimeslot"
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
};
</script>
