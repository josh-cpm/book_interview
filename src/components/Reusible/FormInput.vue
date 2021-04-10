<template>
  <div class="form-input-container">
    <label
      :class="{ 'purple-error-text': errorState }"
      class="form-input-container__child"
      >{{ inputLabel }}</label
    >
    <div class="form-input-container__input-box">
      <input
        class="form-input-container__child"
        :class="{ 'purple-error-border': errorState }"
        :placeholder="placeholder || `Input`"
        :input-type="inputType"
      />
      <img v-if="errorState" class="error-icon" src="/error_icon.svg" />
    </div>
    <div class="error-message form-input-container__child" v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <div
      class="trailing-comment form-input-container__child"
      v-if="trailingComment"
    >
      {{ trailingComment }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: String,
    inputLabel: String,
    inputType: String,
    trailingComment: String,
    errorState: Boolean,
    errorMessage: String,
  },
};
</script>

<style scoped>
.form-input-container {
  display: flex;
  flex-direction: column;
}

.form-input-container__input-box {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

.form-input-container__child {
  margin: 0 0 0.5rem 0;
}

input {
  position: relative;
  font-size: var(--font-size-p);
  background-color: transparent;
  border: 1px solid var(--color-text-main);
  border-radius: 2px;
  font-size: 1rem;
  height: 3em;
  padding: 0 0.7rem;
  margin-right: var(--margin-sides);
  flex-grow: 1;
}

/* input:hover, */
input:focus
/* input:active  */
 {
  border: 1px solid var(--color-primary);
  box-shadow: none;
}

input::placeholder {
  color: var(--color-text-gray);
}

.error-icon {
  position: absolute;
  right: 0.5rem;
  bottom: 1.2rem;
}

label {
  font-size: var(--font-size-small);
}

.error-message {
  color: var(--color-primary);
  font-size: var(--font-size-small);
}

.purple-error-text {
  color: var(--color-primary);
}

.purple-error-border {
  border: 2px solid var(--color-primary);
}

.trailing-comment {
  color: var(--color-text-gray);
  font-size: var(--font-size-small);
}
</style>
