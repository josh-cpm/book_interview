<template>
  <div class="nav-container">
    <div class="company-logo">
      <div v-if="logoUrl"><img :scr="logoUrl" /></div>
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
      logoUrl: null,
    };
  },
};
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
</style>
