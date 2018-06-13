var app = new Vue({
  el: '#app',
  data: {
    title: 'Software House',
    subtitle: 'Software House Simulator',
    balance: 100000,
    days: 0,
    inflation: 0.1,
    rentInsuranceMonths: 3,
    branches: [new Branch()],
    messages: []
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
      this.branches.forEach( function(b) { sum += b.rent } )
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

var iteration = function() {
  app.days += 1
  perDay()
  if ( app.days % 30 == 0 ) { perMonth() }
  if ( app.days % 90 == 0 ) { perQuarter() }
  if ( app.days % 365 == 0 ) { perYear() }
  events()
}
var iterationInterval = setInterval(iteration, 1000)

var perDay = function() {

}

var perMonth = function() {
  payRent()
  payInternet()
  payElectricity()
  payWater()
}

var perQuarter = function() {

}

var perYear = function() {
  app.branches.forEach(function(branch){
    branch.rent = Math.floor(branch.rent * (1 + app.inflation))
  })
  message('info', `Branches rent increased ${app.inflation * 100}% to adjust for inflation`)
}

var payRent = function() {
  app.branches.forEach(function(branch){
    app.balance -= branch.rent
  })
}

var payInternet = function() {
  app.branches.forEach(function(branch){
    app.balance -= branch.internetRent()
  })
}

var payElectricity = function() {

}

var payWater = function() {

}
