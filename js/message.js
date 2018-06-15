Vue.component('company-message', {
  template: '#message-template',
  props: {
    message: Message
  },
  computed: {
    classAttr() {
      return "notification is-" + this.message.type
    }
  }
})

var Message = class {
  constructor(type, message) {
    this.type = type
    this.message = message
    this.day = company.days
  }

}

var message = function(type, msg) {
  company.messages.unshift( new Message(type, msg) )
}
