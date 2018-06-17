Vue.component('company-person', {
  template: '#person-template',
  props: {
    person: Person
  },

  created: function() {
    company.$on('day', this.doJob)
    company.$on('month', this.getSalary)
  },

  beforeDestroy: function() {
    company.$off('day', this.doJob)
    company.$off('month', this.getSalary)
  },

  methods: {
    getSalary: function() {
      company.ledger.add(new Transaction(`${this.person.position} salary`, -1 * this.person.salary))
    },
    doJob: function() {
      this.person.doJob()
    }
  }
})

var Person = class {
  constructor(position, salary) {
    this.position = position
    this.salary = salary
  }

  doJob() {}
}

var Programmer = class extends Person {
  constructor(position, salary, effortPerDay) {
    super(position, salary)
    this.effortPerDay = effortPerDay
  }

  doJob() {
    for( var i=0; i < this.effortPerDay; i++ ) {
      var effortNeeded = company.projects.filter(function(p){ return p.effort < p.goalEffort })
      if ( effortNeeded.length == 0 ) { return }
      effortNeeded[0].effort++
    }
  }
}

var Designer = class extends Programmer {}
var ProjectManager = class extends Programmer {}

var Marketeer = class extends Person {
  constructor(position, salary, probabilityOfProject, minEffort, maxEffort) {
    super(position, salary)
    this.probabilityOfProject = probabilityOfProject
    this.minEffort = minEffort
    this.maxEffort = maxEffort
  }

  doJob() {
    var p = Math.random()
    if ( p > this.probabilityOfProject ) { return }

    var effort = Math.floor((this.maxEffort - this.minEffort) * Math.random() + this.minEffort)
    var revenue = effort * 2000
    company.projects.push(new Project(revenue, effort))
  }
}

var people = [
  new Programmer('Junior Programmer', 5000, 1),
  new Designer('Junior Designer', 5000, 1),
  new Programmer('Senior Programmer', 15000, 3),
  new Designer('Senior Designer', 15000, 3),
  new ProjectManager('Project Manager', 15000, 2),
  new Programmer('Lead Developer', 20000, 5),
  new Programmer('Director of Engineering', 30000, 10),
  new Marketeer('Junior Marketeer', 6000, 0.03, 5, 30),
  new Marketeer('Senior Marketeer', 12000, 0.06, 20, 90)
]
