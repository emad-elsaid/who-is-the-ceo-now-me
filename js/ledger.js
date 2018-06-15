var Transaction = class {
  constructor(label, payment) {
    this.label = label
    this.payment = payment
  }
}

var Ledger = class {
  constructor(){
    this.transactions = []
  }

  add(transaction) {
    this.transactions.unshift(transaction)
    company.balance += transaction.payment
  }
}

Vue.component('company-ledger', {
  template: '#ledger-template',
  props: {
    ledger: Ledger
  }
})
