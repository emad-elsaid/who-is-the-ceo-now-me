Vue.component('money-f', {
  template: '#money-template',
  props: ['money'],
  computed: {
    formattedMoney: function() {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR'
      });
      return formatter.format(this.money)
    }
  }
})
