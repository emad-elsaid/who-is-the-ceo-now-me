Vue.component('company-branch', {
  props: ['rent'],
  template: `
<div class="box">
    Rent: {{ rent }} EGP
</div>
`,
})

var Branch = class {
  constructor() {
    this.rent = 5000
  }
}
