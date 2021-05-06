<template>
  <div class="section-title">{{ day.displayDate }}</div>
  <div class="timeslots">
    <div class="timeslot-container" v-for="time in day.times" :key="time">
      <Timeslot
        :buttonValue="time.displayTime"
        :buttonData="time"
        @confirm="selectTime"
      ></Timeslot>
    </div>
  </div>
</template>

<script>
import QuizSelectDoubleConfirm from '../Reusible/quizSelectButons/QuizSelectDoubleConfirm';
import store from '@/modules/store';

export default {
  name: 'DayScheduler',
  props: ['day'],
  components: { Timeslot: QuizSelectDoubleConfirm },
  methods: {
    selectTime(e) {
      store.selectedTimeslot = e.buttonValue.id;
      store.meetingDetails.displayDate = e.buttonValue.displayDate;
      store.meetingDetails.displayTime = e.buttonValue.displayTime;
    },
  },
};
</script>

<style scoped>
.section-title {
  font-weight: bold;
  color: var(--color-text-main);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.timeslots {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.timeslot-container {
  margin-bottom: 0.5rem;
}
</style>
