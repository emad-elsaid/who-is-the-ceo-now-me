var company = new Vue({
  el: '#app',
  data: {
    title: 'Software House',
    subtitle: 'Software House Simulator, According to the Egyptian economy',
    balance: 100000,
    days: 0,
    inflation: 0.1,
    rentInsuranceMonths: 3,
    branches: [],
    messages: [],
    ledger: new Ledger()
  },
  computed: {
    newBranchCost: function() {
      var branch = new Branch()
      var rent = branch.rent
      var insurance = rent * this.rentInsuranceMonths
      return rent + insurance
    },
    rent: function() {
      var sum = 0
      this.branches.forEach( function(b) { sum += b.expenses() } )
      return sum
    },
    lifeTime: function() {
      var years = Math.floor(this.days / 365)
      var days = this.days % 365

      if ( years == 0 ){
        return `${days} days`
      } else if ( days == 0 ) {
        return `${years} years`
      } else {
        return `${years} years and ${days} days`
      }
    },
  },
  methods: {
    openBranch: function() {
      this.branches.push(new Branch())
      this.balance -= this.newBranchCost
    },
    isBankrupt: function() {
      return this.balance <= 0
    }
  }
})
