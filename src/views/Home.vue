<template>
  <div class="home">
    <h1>Coin Flip</h1>
    <p>Choose heads or tails. If you choose correctly, you win!</p>
    <button id="heads-button" @click="makeChoice('heads')">Choose Heads</button>
    <button id="tails-button" @click="makeChoice('tails')">Choose Tails</button>
  </div>
</template>

<script>
import { createRandomInteger } from "@/utils/flip-utils";

export default {
  name: "home",
  methods: {
    makeChoice: function(choice) {
      const num = choice === "heads" ? 0 : 1;
      if (num === createRandomInteger()) {
        this.$store.commit("incrementWins");
      } else {
        this.$store.commit("incrementLosses");
      }
      this.$store.commit("incrementTotalGames");
      this.$router.push("/results");
    }
  }
};
</script>
