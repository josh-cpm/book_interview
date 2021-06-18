<template>
  <button
    @click="emitSelection"
    class="button-container"
    :class="{ selected: isSelected }"
  >
    <img v-if="isSelected" class="check-mark" src="/purple_check_mark.png" />
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
  position: relative;
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

.check-mark {
  position: absolute;
  right: 0;
  margin: 0.7rem;
}
</style>
