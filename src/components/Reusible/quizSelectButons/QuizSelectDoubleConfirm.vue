<template>
  <button
    class="button-container"
    @mouseleave="hideConfirm"
    @blur="hideConfirm"
    @focusout="hideConfirm"
    @click.self="toggleConfirm"
  >
    <div class="button-container__content--default" @click="toggleConfirm">
      <span v-if="buttonValue">{{ buttonValue }}</span>
      <span v-else>-----</span>
    </div>
    <transition name="fade" appear>
      <button
        v-if="confirmPromptIsActive"
        class="button-container__content--confirm-action"
        @click="emitConfirm"
      >
        {{ confirmButtonValue || 'Confirm' }}
      </button>
    </transition>
  </button>
</template>

<script>
export default {
  name: 'QuizSelectDoubleConfirm',
  props: ['buttonValue', 'confirmButtonValue', 'buttonData'],
  emits: ['confirm'],
  data() {
    return {
      confirmPromptIsActive: false,
    };
  },
  methods: {
    toggleConfirm() {
      this.confirmPromptIsActive = !this.confirmPromptIsActive;
    },
    hideConfirm() {
      this.confirmPromptIsActive = false;
    },
    emitConfirm() {
      this.$emit('confirm', {
        buttonValue: this.buttonData || this.buttonValue,
      });
    },
  },
};
</script>

<style scoped>
.button-container {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: 2px solid var(--color-text-main);
  border-radius: 2px;
  font-size: 1rem;
  height: 3em;
  padding: 0.2rem;
}

.button-container:hover,
.button-container:focus {
  border: 3px solid var(--color-primary);
  box-shadow: none;
}

.button-container__content--default {
  margin: auto;
}

.button-container__content--confirm-action {
  color: white;
  background-color: var(--color-primary);
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  /* height: 2.2em; */
  height: 100%;
  padding: 0 1.5em;
  width: 50%;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0 !important;
} */
</style>
