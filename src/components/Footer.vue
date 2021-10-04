<template>
  <div class="footer-container">
    <div class="footer-content">
      <p class="footer-content__title">
        Interview Hero: Connect with your customers
      </p>
      <ul>
        <li class="footer-content-nav__title">Navigation</li>
        <li><a href="/interview/screener/xxx">Home / Screener</a></li>
        <li><a href="/interview/schedule/xxx">Schedule</a></li>
        <li><a href="/interview/meet/xxx">Confirmation</a></li>
      </ul>
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
  min-height: 8rem;
}

.footer-content {
  margin: var(--margin-sides);
}

.footer-content__title {
  color: var(--color-primary);
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

li {
  margin-bottom: 0.5rem;
}

a,
li {
  text-decoration: none;
  color: var(--color-primary);
  font-size: var(--font-size-small);
}

.footer-content-nav__title {
  text-decoration: underline;
  font-weight: bold;
}
</style>
