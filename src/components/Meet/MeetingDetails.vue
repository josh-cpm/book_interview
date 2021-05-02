<template>
  <div class="meeting-details-container">
    <div class="section-title">
      Meeting Details
    </div>
    <ul>
      <li>{{ meetingDetails.type }}</li>
      <li>{{ meetingDetails.duration }} minutes</li>
      <li>${{ meetingDetails.incentive }} incentive</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Meeting Details',
  props: ['meetingDetails'],
};
</script>

<style scoped>
.meeting-details-container {
  background: var(--color-gray-bg);
  padding: 1rem var(--margin-sides);
  margin-left: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.section-title {
  font-size: var(--font-size-p);
  font-weight: bold;
}

ul {
  margin: 0 0.5rem;
  padding: 0 1rem;
}

li {
  margin-top: 0.6rem;
}
</style>
