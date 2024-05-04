<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <!-- TODO when press enter key submitEvent -->
      <input type="text" placeholder="New Event" v-model="dataEntry" required />
      <p class="calendar-entry-day">
        Day of event: <span class="bold">{{ titleOfActiveDay }}</span>
      </p>
      <a
        class="button is-primary is-small is-outlined"
        @click.prevent="submitEvent(dataEntry)"
        >Submit</a
      >
    </div>
    <small style="color: #ff5544; font-size: 13px;" v-if="error">
      You must type something first!
    </small>
  </div>
</template>

<script>
import { store } from '../store';
export default {
  name: 'CalendarEntry',
  data() {
    return {
      dataEntry: '',
      error: false,
    };
  },
  methods: {
    submitEvent(eventDetails) {
      if (eventDetails === '') {
        this.error = true;
        return;
      }
      store.submitEvent(eventDetails);
      this.dataEntry = '';
      this.error = false;
    },
  },
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle;
    },
  },
};
</script>

<style lang="scss" scoped>
#calendar-entry {
  background: #fff;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #ccc;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
