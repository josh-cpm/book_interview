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
import { format, parseJSON, isToday, isTomorrow, isBefore } from 'date-fns';
import store from '@/modules/store.js';

export default {
  name: 'Scheduler',
  components: {
    ScheduleDay,
  },
  computed: {
    days() {
      let openings = store.flatMeetingOpenings;
      if (!openings) {
        return [];
      }

      openings.forEach((el) => (el.time = parseJSON(el.time)));
      openings.forEach((el) => (el.displayDate = this.formatDay(el.time)));
      openings.forEach((el) => (el.displayTime = this.formatTime(el.time)));
      openings.sort(this.sortByDateAsc);

      let days = [];

      openings.forEach((opening) => {
        const index = days.findIndex(
          (day) => day.displayDate === opening.displayDate
        );

        if (index >= 0) {
          days[index].times.push(opening);
        } else {
          days.push({
            date: opening.time,
            displayDate: opening.displayDate,
            times: [opening],
          });
        }
      });
      console.log(days);
      return days;
    },
  },
  methods: {
    sortByDateAsc(firstEl, secondEl) {
      firstEl = firstEl.time;
      secondEl = secondEl.time;
      if (isBefore(firstEl, secondEl)) {
        return -1;
      } else if (isBefore(secondEl, firstEl)) {
        return 1;
      } else {
        return 0;
      }
    },
    formatTime(date) {
      return format(date, 'p');
    },
    formatDay(date) {
      return format(date, 'MMMM d') + this.appendTodayorTomorrow(date);
    },
    appendTodayorTomorrow(date) {
      if (isToday(date)) {
        return ' (today)';
      } else if (isTomorrow(date)) {
        return ' (tomorrow)';
      } else {
        return '';
      }
    },
  },
};
</script>

<style scoped>
.scheduler-container {
  margin: 0 var(--margin-sides);
}
</style>
