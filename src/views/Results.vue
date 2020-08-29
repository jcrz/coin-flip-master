<template>
  <div class="results">
    <h1></h1>
    <p>Wins: {{ wins }}, Losses: {{ losses }}</p>
    <router-link to="/">Play Again</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Results",
  computed: mapState(["wins", "losses"])
};
</script>