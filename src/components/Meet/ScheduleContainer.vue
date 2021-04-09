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

const base_url = 'http://localhost:3000';

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
  methods: {
    async fetchOpenings() {
      const uuid = this.$route.params.userUuid;
      const response = await fetch(`${base_url}/interview/schedule/${uuid}`);
      const openings = await response.json();
      if (response.status === 200) {
        // this.timeSlots = openings;
        // console.log(this.timeSlots);
        const o = this.parseOpenings(openings);
        console.log(o);
      }
    },
    parseOpenings(openings) {
      let daysOfWeek = [];
      openings.forEach((opening) => {
        if (daysOfWeek.find((e) => e.day_of_week === opening.day_of_week)) {
          daysOfWeek[opening.day_of_week].push(opening);
        }
      });
      return daysOfWeek;
    },
  },
  mounted() {
    this.fetchOpenings();
  },
};
</script>

<style scoped>
.scheduler-container {
  margin: 0 var(--margin-sides);
}
</style>
