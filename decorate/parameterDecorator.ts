// 参数装饰器

const parameterDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
  console.log(target, target === Tk.prototype); //{} true
  console.log(propertyKey); // show
  console.log(parameterIndex); //1: 参数的索引值
};

class Tk {
  public show(id: number = 1, @parameterDecorator step: number) {}
}
