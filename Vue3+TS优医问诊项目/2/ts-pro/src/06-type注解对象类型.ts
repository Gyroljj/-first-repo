// TS CODE
export { }

// type实现对象类型注解

type Person = {
  name: string,
  age?: number
}

let p: Person = {
  name: '张三',
  age: 18
}

p = {
  name: '张三'
}

// type模拟继承 (交叉类型&)

// 父接口

type GoodsType = {
  id: string,
  price: number
}

// 子接口

type DisGoodsType = GoodsType & {
  disPrice: number
}

let goods: DisGoodsType = {
  id: '1',
  price: 100,
  disPrice: 90
}

console.log(goods.disPrice);

// 同名interface

interface Item {
  name: string
}

interface Item {
  age: number
}

let item: Item = {
  name: '张三',
  age: 18
}

console.log(item.age);

// 同名type

type Item1 = {
  name: string
}

// 思考题

type Data = {
  title: string,
  content: string
}

type ResData = {
  code: number,
  msg: string,
  data: Data
}

let res: ResData = {
  code: 200,
  msg: 'success',
  data: {
    title: '标题',
    content: '内容'
  }
}

console.log(res.data.content);