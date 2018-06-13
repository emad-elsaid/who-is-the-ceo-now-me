Vue.component('company-branch', {
  props: ['rent', 'internet', 'internet-packages'],
  data: function() {
    return {
      selectedInternetLine: ''
    }
  },
  template: `
<div class="box">
    Rent: {{ rent }} EGP <br>

Internet Lines:
<div class="select">
<select v-model="selectedInternetLine">
  <option disabled value="">Select Internet Package</option>
  <option v-for="internetPackage in internetPackages" v-bind:value="internetPackage"> {{ internetPackage.name }} ({{ internetPackage.speed}} Kb) for {{internetPackage.rent}} EGP/Month</option>
</select>
</div>
<button class="button" v-on:click="newInternet()"> Add Line</button>
<table class="table is-fullwidth">
  <tr>
    <th>Line Name</th>
    <th>Speed</th>
    <th>Cost</th>
  </tr>
  <tr v-for="internetLine in internet">
   <td> {{ internetLine.name }} </td>
   <td> {{ internetLine.speed }} </td>
   <td> {{ internetLine.cost }} </td>
  </tr>
</table>
</div>
`,
  methods: {
    newInternet: function() {
      this.internet.push(this.selectedInternetLine)
    }
  }
})

var Branch = class {
  constructor() {
    this.rent = 5000
    this.internet = []
    this.internetPackages = [
      new Internet('TEData 1Mb', 1024, 100),
      new Internet('TEData 2Mb', 1024 * 2, 200),
      new Internet('TEData 4Mb', 1024 * 4, 400),
      new Internet('TEData 8Mb', 1024 * 8, 800),
      new Internet('TEData 16Mb', 1024 * 16, 1200)
    ]
  }

  internetRent() {
    var sum = 0
    this.internet.forEach(function(internet){
      sum += internet.cost
    })

    return sum
  }
}
