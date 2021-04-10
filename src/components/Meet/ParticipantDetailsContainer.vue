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
      inputType="email"
    ></FormInput>
    <FormInput
      class="input-section"
      placeholder="000-000-0000"
      inputLabel="Phone number"
      trailingComment="We'll confirm your meeting via text."
      inputType="tel"
      inputPattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    ></FormInput>
    <div>
      <PrimaryCta
        class="cta"
        buttonText="Schedule Meeting"
        :loadingState="false"
      ></PrimaryCta>
    </div>
  </div>
</template>

<script>
import FormInput from '../Reusible/FormInput';
import PrimaryCta from '../Reusible/PrimaryCta';

export default {
  name: 'Participant Details',
  components: { FormInput, PrimaryCta },
};
</script>

<style scoped>
.participant-details {
  margin: 0 var(--margin-sides);
  margin-bottom: 5rem;
}

h2 {
  margin-bottom: 1rem;
}

.input-section {
  margin-bottom: 0.5rem;
}

.cta {
  margin-top: 2rem;
}
</style>
