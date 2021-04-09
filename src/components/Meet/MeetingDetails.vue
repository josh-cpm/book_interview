<template>
  <div class="meeting-details-container">
    <div class="section-title">
      Meeting Details
    </div>
    <ul>
      <li v-for="item in details" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Meeting Details',
  data() {
    return {
      details: ['Zoom video call', '30 minutes', '$25 incentive'],
    };
  },
};
</script>

<style scoped>
.meeting-details-container {
  background: var(--color-gray-bg);
  padding: 1rem var(--margin-sides);
  margin-left: 0;
  display: flex;
  flex-direction: column;
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
