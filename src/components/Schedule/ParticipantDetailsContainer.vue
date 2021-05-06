<template>
  <div class="participant-details">
    <h2>Add your details</h2>
    <FormInput
      class="input-section"
      placeholder="Name"
      inputLabel="Full Name"
      :validationRules="['required']"
      @add-form-error="addErrorStatus('name')"
      @remove-form-error="removeErrorStatus('name')"
      @input="updateName"
    ></FormInput>
    <FormInput
      class="input-section"
      placeholder="Email"
      inputLabel="Email"
      inputType="email"
      :validationRules="['required']"
      @add-form-error="addErrorStatus('email')"
      @remove-form-error="removeErrorStatus('email')"
      @input="updateEmail"
    ></FormInput>
    <FormInput
      class="input-section"
      placeholder="000-000-0000"
      inputLabel="Phone number"
      trailingComment="We'll confirm your meeting via text."
      inputType="tel"
      inputPattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      :validationRules="['required']"
      @add-form-error="addErrorStatus('tel')"
      @remove-form-error="removeErrorStatus('tel')"
      @input="updatePhone"
    ></FormInput>
    <div>
      <div v-if="errorState">Please correct errors and try again.</div>
      <PrimaryCta
        class="cta"
        buttonText="Schedule Meeting"
        :loadingState="false"
        :inactiveState="errorState"
        @click="scheduleMeeting"
      ></PrimaryCta>
    </div>
  </div>
</template>

<script>
import FormInput from '../Reusible/FormInput';
import PrimaryCta from '../Reusible/PrimaryCta';
import store from '@/modules/store';

export default {
  name: 'Participant Details',
  components: { FormInput, PrimaryCta },
  emits: ['meetingScheduled'],
  data() {
    return {
      inputErrors: {
        name: false,
        email: false,
        tel: false,
      },
    };
  },
  computed: {
    errorState() {
      return (
        this.inputErrors.name || this.inputErrors.tel || this.inputErrors.email
      );
    },
  },
  methods: {
    updateName(e) {
      console.log(e.target.value);
      store.participantDetails.name = e.target.value;
    },
    updateEmail(e) {
      console.log(e.target.value);
      store.participantDetails.email = e.target.value;
    },
    updatePhone(e) {
      console.log(e.target.value);
      store.participantDetails.phone = e.target.value;
    },
    scheduleMeeting() {
      if (this.errorState) {
        return;
      } else {
        console.log(store.participantDetails);
        this.$emit('meetingScheduled');
      }
    },
    addErrorStatus(fieldName) {
      this.inputErrors[fieldName] = true;
    },
    removeErrorStatus(fieldName) {
      this.inputErrors[fieldName] = false;
    },
  },
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
