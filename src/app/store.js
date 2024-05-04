import { reactive } from 'vue';
import { seedData } from './seed';

export const store = {
  state: {
    data: reactive(seedData),
  },
  getActiveDay() {
    return this.state.data.find(day => day.active);
  },

  setActiveDay(dayId) {
    this.state.data.map(day =>
      day.id === dayId ? (day.active = true) : (day.active = false),
    );
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    const dayEvents = activeDay.events;
    dayEvents.push({
      details: eventDetails,
      edit: false,
    });
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();

    const event = this.getEvent(dayId, eventDetails);
    event.edit = true;
  },

  resetEventEdit(dayId, eventDetails) {
    const event = this.getEvent(dayId, eventDetails);
    event.edit = false;
  },

  deleteEvent(dayId, eventDetails) {
    const day = this.state.data.find(day => day.id === dayId);

    const eventIndexToRemove = day.events.findIndex(
      event => event.details === eventDetails,
    );

    day.events.splice(eventIndexToRemove, 1);
  },

  updateEvent(dayId, originalEventDetails, updatedEventDetails) {
    const event = this.getEvent(dayId, originalEventDetails);
    // Set the event details to the new details
    // and turn off editing
    event.details = updatedEventDetails;
    event.edit = false;
  },

  getEvent(dayId, eventDetails) {
    const day = this.state.data.find(day => day.id === dayId);
    const event = day.events.find(event => event.details === eventDetails);
    return event;
  },

  resetEditOfAllEvents() {
    this.state.data.map(day => {
      day.events.map(event => {
        event.edit = false;
      });
    });
  },
};
