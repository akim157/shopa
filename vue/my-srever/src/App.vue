<template>
  <div id="app">
    <div class="container pt-2">
      <h1>{{title}}</h1>
      <hr />
      <app-counter></app-counter>
      <app-actions></app-actions>
      <hr />
      <app-second-counter></app-second-counter>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter";
import Actions from "./Actions";
import SecondCounter from "./SecondCounter";

export default {
  components: {
    appCounter: Counter,
    appActions: Actions,
    appSecondCounter: SecondCounter
  },
    computed: {
      title () {
        return this.$store.getters.title
      }
    }
};
</script>

<style></style>
