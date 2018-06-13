Vue.component('company-branch', {
  props: ['rent', 'internet', 'internet-packages'],
  data: function() {
    return {
      selectedInternetLine: ''
    }
  },
  template: '#branch-template',
  methods: {
    newInternet: function() {
      this.internet.push(this.selectedInternetLine)
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
      new Internet('TEData 1Mb', 1024, 100),
      new Internet('TEData 2Mb', 1024 * 2, 200),
      new Internet('TEData 4Mb', 1024 * 4, 400),
      new Internet('TEData 8Mb', 1024 * 8, 800),
      new Internet('TEData 16Mb', 1024 * 16, 1200)
    ]
  }

  expenses() {
    return rent + internetRent() + electricityBill() + waterBill()
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
