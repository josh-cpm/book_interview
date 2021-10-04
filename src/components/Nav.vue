<template>
  <div class="nav-container">
    <div class="company-logo">
      <div v-if="logoUrl"><img class="logo-image" :src="logoUrl" /></div>
      <div v-else class="logo-placeholder">
        Your Logo
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      logoUrl: '/Lasting_from_TS_logo_white.png',
    };
  },
};
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 var(--margin-sides);
}

.company-logo {
  margin: 1rem 0;
}

.logo-placeholder {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.3em 0.6em;
  font-weight: bold;
}

.logo-image {
  filter: invert(1);
  max-height: 40px;
}
</style>
