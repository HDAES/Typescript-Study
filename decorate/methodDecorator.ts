// 方法装饰器

const showDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  console.log(target, target === User.prototype); //{}  公共方法返回构造函数原型  target === User
  console.log(propertyKey); //show  函数的名字
  console.log(descriptor); //{value: [Function: show],writable: true,enumerable: false,configurable: true};  函数的一些配置属性

  const method = descriptor.value; //获取到该函数
  descriptor.writable = true; //控制该函数是否可以修改
};

const hideDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  console.log(target, target === User); //[class User]  使用方法返回构造函数
};

class User {
  @showDecorator
  show() {}

  @hideDecorator
  private static hide() {}
}
