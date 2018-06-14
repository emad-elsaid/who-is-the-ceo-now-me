Vue.component('company-message', {
  props: ['type', 'message', 'day'],
  template: '#message-template',
  computed: {
    classAttr() {
      return "notification is-" + this.type
    }
  }
})

var Message = class {
  constructor(type, message) {
    this.type = type
    this.message = message
    this.day = app.days
  }

}

var message = function(type, msg) {
  app.messages.unshift( new Message(type, msg) )
}
