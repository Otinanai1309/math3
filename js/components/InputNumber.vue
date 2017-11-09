<template lang="html">
  <div id="container" class="container">
    <div id="field" class="field">
      <label>Please enter a number between 2 and 5000.</label>
        <div id="control" class="control has-icons-left">
          <input class="input is-focused"
                type="number"
                v-model.number="childVal.data"
                v-on:change="onValChanged"
                placeholder="Input your number here...">
                <span class="icon is-small is-right">
                  <i class="fa fa-pencil"></i>
                </span>

          <a id="button" class="button is-success"
              @click="onValChanged">
            <span>Enter</span>
          </a>
      </div>
    </div>
  </div>

</template>

<script>
  export default {

    data() {
      return {
        rows: {},
        childVal: {
          type: Number,
          default: 0
        }
      }
    },

    methods: {
      getDate : function()
        {
            var temp=parseInt(this.rows.data);
            alert(temp);
        },

      onValChanged() {
        // sanatize the input that user passes
        var temp=parseInt(this.childVal.data);
        if (temp < 2 || temp > 5000)
        {
          alert('Please give a number between 2 and 5000');
          throw new InvalidArgumentException;
          return
        }

        this.childVal.data = temp;
        this.$emit('val-changed', this.childVal.data);
      }
    }
  }
</script>

<style lang="css">
  #container {
    margin: 15px;
    background-color: #42f4e5;
    padding-bottom: 15px;
  }

  /*#field {
    background-color: #42f4e5;
    padding-bottom: 5px;
  }*/

  #control {
    margin-top: 10px;
    display: flex;
  }
  #button {
    margin-left: 10px;
    color: black;
  }

</style>
