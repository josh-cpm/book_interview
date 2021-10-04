<template>
  <router-view />
</template>

<script>
import store from '@/modules/store';
import { getScreener } from '@/modules/api.js';

export default {
  name: 'Main',
  methods: {
    async getInterviewScreener() {
      const screenerUuid = this.$route.params.screenerUuid;
      const response = await getScreener(screenerUuid);
      if (response.status === 200) {
        console.log(response.data);
        store.meetingDetails = response.data.meetingDetails;
        store.flatMeetingOpenings = response.data.flatMeetingOpenings;
        store.screener = response.data.screener;
      }
    },
  },
  created() {
    this.getInterviewScreener();
  },
};
</script>
