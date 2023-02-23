// 类装饰器

const moveDecoate: ClassDecorator = (target: Function) => {
  console.log(target === Tank); // true  target为原型对象

  target.prototype.name = "tank";
  target.prototype.getPosition = () => {
    return { x: 100, y: 100 };
  };
};

@moveDecoate
class Tank {
  // 作用：有提示调用
  getPosition(): any {
    throw new Error("Method not implemented.");
  }
}

const t = new Tank();
console.log(t.getPosition()); // { x: 100, y: 100 }
console.log((t as any).name); //tank

// 装饰器叠加
const musicDecorate: ClassDecorator = (target: Function) => {
  target.prototype.playMusci = () => {
    console.log("播放音乐");
  };
};

@moveDecoate
@musicDecorate
class Player {}

const p = new Player();
console.log((p as any).getPosition()); // { x: 100, y: 100 }
console.log((p as any).playMusci()); // 播放音乐
