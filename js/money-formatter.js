Vue.component('money-f', {
  template: '#money-template',
  props: ['money'],
  computed: {
    formattedMoney: function() {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EGP'
      });
      return formatter.format(this.money)
    }
  }
})
