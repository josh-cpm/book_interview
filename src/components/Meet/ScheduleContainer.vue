<template>
  <div class="scheduler-container">
    <h2>Select a time</h2>
    <ScheduleDay
      class="ScheduleDay"
      v-for="day in days"
      :day="day"
      :key="day.date"
    ></ScheduleDay>
  </div>
</template>

<script>
import ScheduleDay from './ScheduleDay';

export default {
  name: 'Scheduler',
  components: {
    ScheduleDay,
  },
  data() {
    return {
      days: [
        {
          date: 'March 13 (today)',
          times: ['9:00am', '9:30am', '10:00am'],
        },
        {
          date: 'March 14 (tomorrow)',
          times: ['9:00am', '9:30am', '10:00am'],
        },
      ],
      timeSlots: [],
    };
  },
};
</script>

<style scoped>
.scheduler-container {
  margin: 0 var(--margin-sides);
}
</style>
