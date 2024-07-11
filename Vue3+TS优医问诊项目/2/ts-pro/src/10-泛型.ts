// TS CODE
export { }

// 泛型

// interface User {
//   name: string,
//   age: number
// }

// interface UserData {
//   code: number,
//   msg: string,
//   data: User
// }

// interface Goods {
//   id: number,
//   goodsName: string
// }

// interface GoodsData {
//   code: number,
//   msg: string,
//   data: Goods
// }

// 泛型改造

// 1.定义泛型 把可变的部分抽象成泛型参数T

// interface ResData<T> {
//   code: number,
//   msg: string,
//   data: T
// }

// // 2.定义具体类型 然后使用泛型的时候传入到参数的位置

// interface User {
//   name: string,
//   age: number
// }

// interface Goods {
//   id: number,
//   goodsName: string
// }

// let user: ResData<User> = {
//   code: 200,
//   msg: 'success',
//   data: {
//     name: '张三',
//     age: 18
//   }
// }

// let goods: ResData<Goods> = {
//   code: 200,
//   msg: 'success',
//   data: {
//     id: 1,
//     goodsName: '衬衫'
//   }
// }

// 泛型别名

type ResData<T> = {
  code: number,
  msg: string,
  data: T
}

// 2.定义具体类型 然后使用泛型的时候传入到参数的位置

type User = {
  name: string,
  age: number
}

type Goods = {
  id: number,
  goodsName: string
}

let user: ResData<User> = {
  code: 200,
  msg: 'success',
  data: {
    name: '张三',
    age: 18
  }
}

let goods: ResData<Goods> = {
  code: 200,
  msg: 'success',
  data: {
    id: 1,
    goodsName: '衬衫'
  }
}

// 泛型函数

function createArray<T>(length: number, value: T) {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray<number>(3, 1)
createArray<string>(3, '1')

// 泛型约束

function logLen<T>(obj: T) {
  console.log(obj.length);
}

interface LengthObj {
  length: number
}

function logLen1<T extends LengthObj>(obj: T) {
  console.log(obj.length);
}

logLen1({ length: 10 })
logLen1([1, 2, 3])
logLen1(100)