Vue.component('company-message', {
  props: ['type', 'message'],
  template: '#message-template',
  methods: {
    classAttr() {
      return "notification is-" + this.type
    }
  }
})

var Message = class {
  constructor(type, message) {
    this.type = type
    this.message = message
  }

}

var message = function(type, msg) {
  app.messages.unshift( new Message(type, msg) )
}
