<template lang="html">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by2">
          <img src="./primes_2.jpg" alt="Placeholder image">
        </figure>
      </div>

      <div id="content" class="content">
          <h3 v-cloak>The Roman represantasion of {{output.parentData}} is: {{output.romRep}} </h3>
      </div>
    </div>
</template>

<script>
export default {
    props: ["output"]

}
</script>

<style lang="css">
</style>
