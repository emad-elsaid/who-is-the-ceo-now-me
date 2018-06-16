Vue.component('company-person', {
  template: '#person-template',
  props: {
    person: Person
  },

  created: function() {
    company.$on('month', this.getSalary)
  },

  beforeDestroy: function() {
    company.$off('month', this.getSalary)
  },

  methods: {
    getSalary: function() {
      company.ledger.add(new Transaction(`${this.person.position} salary`, -1 * this.person.salary))
    }
  }
})

var Person = class {
  constructor(position, salary) {
    this.position = position
    this.salary = salary
  }
}

var people = [
  new Person('Junior Programmer', 5000),
  new Person('Junior Designer', 5000),
  new Person('Senior Programmer', 15000),
  new Person('Senior Designer', 15000),
  new Person('Project Manager', 15000),
  new Person('Lead Developer', 20000),
  new Person('Director of Engineering', 30000)
]
