var eventsList = [
  function() {
    if ( company.isBankrupt() ) {
      clearInterval(iterationInterval)
      message('danger', `You went bankrupt after ${company.lifeTime}`)
    }
  },
  function() {
    if ( company.days == 1 ) {
      message('info', "Congrates on founding your company! ")
    }
  }
]

var events = function() {
  eventsList.forEach( function(evt) { evt() } )
}
