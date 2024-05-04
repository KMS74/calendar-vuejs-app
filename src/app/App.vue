<template>
  <div id="app">
    <AppHeading />
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import AppHeading from './components/AppHeading.vue';
import CalendarEntry from './components/CalendarEntry.vue';
import CalendarWeek from './components/CalendarWeek.vue';

export default {
  name: 'App',
  components: {
    CalendarWeek,
    CalendarEntry,
    AppHeading,
  },
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>

<style lang="scss" scoped>
#app {
  background: #555;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
