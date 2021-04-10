<template>
  <div class="participant-details">
    <h2>Add your details</h2>
    <FormInput
      class="input-section"
      placeholder="Name"
      inputLabel="First Name"
    ></FormInput>
    <FormInput
      class="input-section"
      placeholder="Email"
      inputLabel="Email"
    ></FormInput>
    <FormInput
      class="input-section"
      placeholder="000-000-0000"
      inputLabel="Phone number"
      trailingComment="We'll confirm your meeting via text."
    ></FormInput>
  </div>
</template>

<script>
import FormInput from '../Reusible/FormInput';

export default {
  name: 'Participant Details',
  components: { FormInput },
};
</script>

<style scoped>
.participant-details {
  margin: 0 var(--margin-sides);
}

h2 {
  margin-bottom: 1rem;
}

.input-section {
  margin-bottom: 0.5rem;
}
</style>
