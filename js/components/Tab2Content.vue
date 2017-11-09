<template lang="html">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by2">
          <img src="./primes_2.jpg" alt="Placeholder image">
        </figure>
      </div>

      <div id="content" class="content">
          <h3 v-cloak>All the prime numbers that are less than {{output.parentData}} are: </h3>
          <h4>
              <span v-for="(prime, index) in output.allPrimes">
                  <span>{{prime}}</span>
                  <span v-if="index < output.allPrimesLen-1">, </span>
              </span>
          </h4>
      </div>
    </div>

</template>

<script>
export default {
    props: ["output"]

}
</script>

<style lang="css">
    #content {
        margin: 15px;
    }
</style>
