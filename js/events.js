var eventsList = [
  function() {
    if ( app.balance <= 0 ) {
      clearInterval(iterationInterval)
      message('danger', `You went bankrupt after ${app.lifeTime()}`)
    }
  },
  function() {
    if ( app.days == 1 ) {
      message('info', "Congrates on founding your company! ")
    }
  }
]

var events = function() {
  eventsList.forEach( function(evt) { evt() } )
}
