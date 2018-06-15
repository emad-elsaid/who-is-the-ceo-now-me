var Internet = class {
  constructor(name, speed, cost) {
    this.name = name
    this.speed = speed
    this.cost = cost
  }
}

var internetPackages = [
  new Internet('WE upto 5Mb', 1024 * 5, 110),
  new Internet('WE upto 15Mb', 1024 * 15, 150),
  new Internet('WE upto 25Mb', 1024 * 25, 200),
  new Internet('WE upto 50Mb', 1024 * 25, 250),
  new Internet('WE upto 100Mb', 1024 * 100, 300)
]
