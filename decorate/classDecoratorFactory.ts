// 类装饰器工厂

const colorDecorateFactory = (type?: string): ClassDecorator => {
  return (target: Function) => {
    switch (type) {
      case "Car":
        target.prototype.color = "Car red";
        break;
      case "Ship":
        target.prototype.color = "Ship red";
        break;
      default:
        target.prototype.color = "red";
        break;
    }
  };
};

@colorDecorateFactory("Car")
class Car {}

@colorDecorateFactory("Ship")
class Ship {}

@colorDecorateFactory("Ship")
class Train {}
const car = new Car();
const ship = new Ship();
const train = new Train();
console.log((car as any).color); // Car red
console.log((ship as any).color); // Ship red
console.log((train as any).color); // red
