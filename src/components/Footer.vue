<template>
  <div class="footer-container">
    <div class="footer-content">
      <p class="footer-content__title">
        Interview Hero: Connect with your customers
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer-container {
  margin-top: 4rem;
  background-color: var(--color-gray-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 12rem;
}

.footer-content {
  margin: var(--margin-sides);
}

.footer-content__title {
  color: var(--color-primary);
}
</style>
