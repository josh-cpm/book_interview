<template>
  <button @click="emitSelection" class="button-container button">
    <div class="button-content">
      <span v-if="buttonValue">{{ buttonValue }}</span>
      <span v-else>-----</span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'QuizSelectDefault',
  props: ['buttonValue', 'answerData'],
  methods: {
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
</style>
