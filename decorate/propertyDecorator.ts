// 属性装饰器

const propertyDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
  console.log(target, target === Xx.prototype); // {}   true  普通属性 为构造函数原型
  console.log(propertyKey); // name   属性名称
};
const propertyDecorator1: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
  console.log(target, target === Xx); //  [class Xx] { age: undefined }  true  静态属性 返回构造函数
  console.log(propertyKey); // name   属性名称
};

class Xx {
  @propertyDecorator
  public name!: string;

  @propertyDecorator1
  public static age: number;
}
