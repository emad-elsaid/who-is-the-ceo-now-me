var company = new Vue({
  el: '#app',
  data: {
    title: 'WHO IS THE CEO NOW? - ME',
    subtitle: 'Software House Simulator for future CEOs.',
    balance: 100000,
    days: 0,
    daysPerSecond: 3,
    inflation: 0.1,
    rentInsuranceMonths: 3,
    branches: [],
    messages: [],
    projects: [],
    ledger: new Ledger(),
    iterationInterval: null
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

  watch: {
    days: function() {
      this.$emit('day')
      if ( this.days % 30 == 0 ) { this.$emit('month') }
      if ( this.days % 365 == 0 ) { this.$emit('year') }

      if ( company.days == 1 ) {
        message('info', "Congrates on founding your company!")
      }

      if ( company.isBankrupt() ) {
        company.stop()
        message('danger', `You went bankrupt after ${company.lifeTime}`)
      }
    }
  },

  methods: {
    open: function() {
      if ( this.iterationInterval ) { return }
      this.iterationInterval = setInterval(this.dayIteration, 1000 / this.daysPerSecond)
    },
    stop: function() {
      if( ! this.iterationInterval ) { return }
      clearInterval(this.iterationInterval)
      this.iterationInterval = null
    },
    dayIteration: function() {
      this.days++
    },
    openBranch: function() {
      this.branches.push(new Branch())
      this.open()
    },
    isBankrupt: function() {
      return this.balance <= 0
    }
  }
})
