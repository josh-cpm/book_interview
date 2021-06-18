<template>
  <button
    @click="emitSelection"
    class="button-container"
    :class="{ selected: isSelected }"
  >
    <div class="button-content">
      <span v-if="buttonValue">{{ buttonValue }}</span>
      <span v-else>-----</span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'QuizSelectDefault',
  props: ['buttonValue', 'answerData', 'isSelected'],
  methods: {
    // showConfirm() {
    //   //add checkmark
    //   console.log('clicked!');
    //   this.emitSelection();
    // },
    emitSelection() {
      this.$emit('selectAnswer', this.answerData);
    },
  },
};
</script>

<style scoped>
.button-container {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: white;
  border: 2px solid #000000;
  border-radius: 2px;
  font-size: 1rem;
}

.selected {
  border: 2px solid var(--color-primary);
}
</style>
