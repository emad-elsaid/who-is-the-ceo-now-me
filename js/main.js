var iteration = function() {
  company.days += 1
  perDay()
  if ( company.days % 30 == 0 ) { perMonth() }
  if ( company.days % 90 == 0 ) { perQuarter() }
  if ( company.days % 365 == 0 ) { perYear() }
  events()
}
var iterationInterval = setInterval(iteration, 100)

var perDay = function() {

}

var perMonth = function() {
  var expenses = 0
  company.branches.forEach(function(branch){
    expenses += branch.expenses()
  })

  if ( expenses > 0 ) {
    company.ledger.add(new Transaction('Branches expenses', -1 * expenses))
  }
}

var perQuarter = function() {

}

var perYear = function() {
  if ( company.branches.length == 0 ) { return }

  company.branches.forEach(function(branch){
    branch.rent = Math.floor(branch.rent * (1 + company.inflation))
  })
  message('info', `Branches rent increased ${company.inflation * 100}% to adjust for inflation`)
}
