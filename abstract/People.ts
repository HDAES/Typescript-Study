// 抽象类和抽象对象

abstract class People {
  /**
   * 移动
   */
  abstract move(): void

  /**
   * 跑步
   */
  abstract run(): void

  /**
   * 名字
   */
  abstract name: string
}

class Man extends People {
  run(): void {
    throw new Error('Method not implemented.')
  }

  name!: string

  move(): void {
    throw new Error('Method not implemented.')
  }
}

new Man()
