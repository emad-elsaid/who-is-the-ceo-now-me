Vue.component('company-branch', {
  template: '#branch-template',
  props: {
    branch: Branch
  },

  data: function() {
    return {
      selectedInternetLine: '',
      internetPackages: internetPackages
    }
  },

  methods: {
    newInternet: function() {
      this.branch.internet.push(this.selectedInternetLine)
    }
  }
})

var Branch = class {
  constructor() {
    this.rent = 5000
    this.people = []
    this.kilowattPrice = 0.60
    this.waterLiterPrice = 0.60
    this.internet = []
  }

  expenses() {
    return this.rent + this.internetRent() + this.electricityBill() + this.waterBill()
  }

  internetRent() {
    var sum = 0
    this.internet.forEach(function(internet){
      sum += internet.cost
    })

    return sum
  }

  electricityBill() {
    return this.people.length * 100 * this.kilowattPrice
  }

  waterBill() {
    return this.people.length * 100 * this.waterLiterPrice
  }
}
