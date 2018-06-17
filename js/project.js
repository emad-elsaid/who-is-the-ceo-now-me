Vue.component('company-project', {
  template: '#project-template',
  props: {
    project: Project
  },

  created: function() {
    company.$on('day', this.checkDone)
  },

  beforeDestroy: function() {
    company.$off('day', this.checkDone)
  },

  methods: {
    checkDone: function() {
      if ( this.project.effort < this.project.goalEffort ) { return }

      company.ledger.add(new Transaction('Project revenue', this.project.revenue))
      var index = company.projects.indexOf(this.project)
      company.projects.splice(index, 1)
    }
  }
})

var Project = class {
  constructor(revenue, goalEffort) {
    this.revenue = revenue
    this.goalEffort = goalEffort
    this.effort = 0
  }
}
