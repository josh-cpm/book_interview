<template>
  <button :class="{ inactive: inactiveState }">
    <span v-if="loadingState"
      ><img class="loading-state-icon" src="/loading_cta_icon.svg"
    /></span>
    <span v-else>{{ buttonText }} </span>
  </button>
</template>

<script>
export default {
  name: 'Primary Cta',
  props: {
    buttonText: String,
    loadingState: Boolean,
    inactiveState: Boolean,
  },
};
</script>

<style scoped>
button {
  background-color: var(--color-primary);
  border-radius: 2px;
  border: none;
  color: white;
  font-size: var(--font-size-p);
  width: 100%;
  height: 2.5em;
}

button:hover {
  background-color: #927cff;
  border: none;
}

button:active {
  background-color: #b0a2f3;
  border: none;
}

.loading-state-icon {
  height: 1em;
  animation: spin 1.5s linear infinite;
}

.inactive {
  background-color: var(--color-gray-bg);
  color: var(--color-text-gray);
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
