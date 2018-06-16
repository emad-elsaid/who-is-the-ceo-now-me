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

  created: function() {
    company.$on('month', this.payExpenses)
    company.$on('year', this.adjustToInflation)
  },

  beforeDestroy: function() {
    company.$off('month', this.payExpenses)
    company.$off('year', this.adjustToInflation)
  },

  methods: {
    newInternet: function() {
      this.branch.internet.push(this.selectedInternetLine)
    },
    payExpenses: function() {
      company.ledger.add(new Transaction('Branch expenses', -1 * this.branch.expenses()))
    },
    adjustToInflation: function() {
      this.branch.rent = Math.floor(this.branch.rent * (1 + company.inflation))
      message('info', `Branch rent increased to ${this.branch.rent} (${company.inflation * 100}%) to adjust for inflation`)
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
    return this.rent + this.electricityBill() + this.waterBill()
  }

  electricityBill() {
    return this.people.length * 100 * this.kilowattPrice
  }

  waterBill() {
    return this.people.length * 100 * this.waterLiterPrice
  }
}
