<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i
          class="fa fa-pencil-square edit-icon"
          @click="editEvent(day.id, event.details)"
        ></i>
        <i
          class="fa fa-trash-o delete-icon"
          @click="deleteEvent(day.id, event.details)"
        ></i>
      </div>
    </div>
    <div v-else>
      <input
        type="text"
        placeholder="Enter new event details"
        v-model="newEventDetails"
      />
      <div
        class="has-text-centered icons"
        @click="cancelEditEvent(day.id, event.details)"
      >
        <i
          class="fa fa-check"
          @click="updateEvent(day.id, event.details, newEventDetails)"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from '../store';
export default {
  name: 'CalenderEvent',
  data() {
    return {
      newEventDetails: this.event.details,
    };
  },
  props: ['event', 'day'],
  methods: {
    editEvent(dayId, eventDetails) {
      store.editEvent(dayId, eventDetails);
    },
    updateEvent(dayId, originalEventDetails, updatedEventDetails) {
      console.edit('edit');
      store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
    },
    cancelEditEvent(dayId, eventDetails) {
      console.log('cancel');
      store.resetEventEdit(dayId, eventDetails);
      this.newEventDetails = this.event.details;
    },
    deleteEvent(dayId, eventDetails) {
      const confirmDelete = confirm('Are sure to delete this event?');
      if (confirmDelete) {
        store.deleteEvent(dayId, eventDetails);
      }
    },
  },
  computed: {
    getEventBackgroundColor() {
      const colors = [
        '#FF9999',
        '#85D6FF',
        '#99FF99',
        '#FFD699',
        '#FF99FF',
        '#9999FF',
        '#99FFFF',
        '#FFCC99',
        '#CCFF99',
        '#FF99CC',
        '#99FFCC',
        '#CC99FF',
        '#99CCFF',
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
  padding: 5px;

  .details {
    display: block;
  }

  .icons .fa {
    padding: 0 2px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>
