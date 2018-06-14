Vue.component('company-branch', {
  template: '#branch-template',
  props: ['branch'],

  data: function() {
    return {
      selectedInternetLine: ''
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
    this.internetPackages = [
      new Internet('WE upto 5Mb', 1024 * 5, 110),
      new Internet('WE upto 15Mb', 1024 * 15, 150),
      new Internet('WE upto 25Mb', 1024 * 25, 200),
      new Internet('WE upto 50Mb', 1024 * 25, 250),
      new Internet('WE upto 100Mb', 1024 * 100, 300)
    ]
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
