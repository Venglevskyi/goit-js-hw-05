class Car {
  static getSpecs(car) {
    console.log(car);
  }

  constructor({
    speed, price, maxSpeed, isOn, distance,
  }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get _price() {
    return this.price;
  }

  set _price(newPrice) {
    this.price = newPrice;
  }

  turnOn() {
    this.isOn = true;
    this.distance = 0;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed = 0;
    if (value < this.maxSpeed) {
      this.speed = this.speed + value;
    }
  }

  decelerate(value) {
    if (this.speed > 0) {
      this.speed = this.speed - value;
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance += this.speed * hours;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
