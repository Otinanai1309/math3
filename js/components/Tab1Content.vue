<template lang="html">
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img src="./primes_1.jpg" alt="Placeholder image">
      </figure>
    </div>

    <div class="content">
        <h3 v-cloak>The analyze of {{output.parentData}} into prime factors is:
                    <span v-cloak v-for="(prime, index) in output.primes">
                    <span v-cloak><strong>{{prime}}</strong></span>
                    <span v-if="index<output.primesLen-1"><strong>•</strong> </span>
              </span>
        </h3>
    </div>
  </div>
      <!-- <div id="box1" style="padding:20px" >
          <h3 v-cloak>The analyze of {{output.parentData}} into prime factors is:</h3>
          <span v-cloak v-for="(prime, index) in output.primes">
              <span v-cloak><strong>{{prime}}</strong></span>
              <span v-if="index<output.primesLen-1"><strong>*</strong> </span>
          </span>
      </div>
  </div> -->

</template>

<script>
// import InputNumber from './InputNumber.vue'

export default {
  props: ["output"]


}
</script>

<style lang="css">
</style>
