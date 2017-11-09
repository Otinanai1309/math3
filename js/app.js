
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// Vue.component('input-number', require('./components/InputNumber.vue'));
// Vue.component('tabs', require('./components/Tabs.vue'));
//
// Vue.component('tab', require('./components/Tab.vue'));
// Vue.component('tab1-content', require('./components/Tab1Content.vue'));
// Vue.component('tab2-content', require('./components/Tab2Content.vue'));
// Vue.component('tab3-content', require('./components/Tab3Content.vue'));

// register
Vue.component('tabs', {

    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    data() {
      return { tabs: [] };
    },

    created() {
      this.tabs = this.$children;
    },

    methods: {
      selectTab(selectedTab) {
          this.tabs.forEach(tab => {
              tab.isActive = (tab.href == selectedTab.href);
          });
      }
    }
});
Vue.component('tab', {
    template: `
    <div v-show="isActive"><slot></slot></div>
    `,
    props: {
        name: { required: true },
        selected: { default: false },
    },

    data() {
        return {
            isActive: false,
        };
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    },
});

Vue.component('input-number', {
  // <style scoped>
  //   #container {
  //     margin: 15px;
  //     background-color: #42f4e5;
  //     padding-bottom: 15px;
  //   }
  //   /*#field {
  //     background-color: #42f4e5;
  //     padding-bottom: 5px;
  //   }*/
  //
  //   #control {
  //     margin-top: 10px;
  //     display: flex;
  //   }
  //   #button {
  //     margin-left: 10px;
  //     color: black;
  //   }
  // </style>

  template: `
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
  `,
      data: function() {
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
});

Vue.component('tab1-content', {
  props: ["output"],

  template: `
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img src=".../../images/primes_1.jpg" alt="Placeholder image">
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
  `
});

Vue.component('tab2-content', {
  props: ["output"],

  template: `
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img src=".../../images/primes_2.jpg" alt="Placeholder image">
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
  `
});

Vue.component('tab3-content', {
  props: ["output"],

  template: `
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img src=".../../images/roman.jpg" alt="Placeholder image">
      </figure>
    </div>

    <div id="content" class="content">
        <h3 v-cloak>The Roman represantasion of {{output.parentData}} is: {{output.romRep}} </h3>
    </div>
  </div>
  `

});



const app = new Vue({
    el: '#app',

    // components: {
    //   'input-number': ('./components/InputNumber.vue')
    // },

    data: {
    solution: {
        parentData: 0,
        primes: [],
        primesLen: 0,
        allPrimes: [],
        allPrimesLen: 0,
        romRep: ''
    },
    limit:[
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1
    ],
    glyph: [
        'M',
        'CM',
        'D',
        'CD',
        'C',
        'XC',
        'L',
        'XL',
        'X',
        'IX',
        'V',
        'IV',
        'I'
    ]
},

methods: {
    findAllPrimes(childVal) {
        this.solution.parentData = childVal;
        this.solution.primes = [];
        this.solution.primesLen = 0;
        var candidate = 2;
        var gnumber = this.solution.parentData;
        for (candidate = 2; gnumber > 1; candidate++)
        {
            for (; gnumber % candidate == 0; gnumber /= candidate)
            {
                this.solution.primes.push(candidate);
                this.solution.primesLen++;
            }
        }
        var j = 2;
        this.solution.allPrimes = [];
        this.solution.allPrimesLen = 0;
        var temp = this.solution.parentData;
        for (j=2; j < temp; j++)
        {
            if (this.isPrime(j))
            {
                this.solution.allPrimes.push(j);
                this.solution.allPrimesLen++;
            }
        }
        var temp2 = this.solution.parentData;
        this.solution.romRep = '';
        var i=0;
        for (i=0; i<13; i++)
        {
            while (temp2 >= this.limit[i])
            {
                this.solution.romRep += this.glyph[i];
                temp2 -= this.limit[i];
            }
        }

        return this.solution;
    },

    isPrime: function (number)
    {
        var candidate = 2;
        if (number == 2)
        {
            return true;
        }
        for (candidate = 2; candidate < (number/2)+1; candidate++)
        {
            if (number % candidate == 0)
            {
                return false;
            }
        }
        return true;
    }
}

});
