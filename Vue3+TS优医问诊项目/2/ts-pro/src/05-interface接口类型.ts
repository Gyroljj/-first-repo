// TS CODE
export { }

// interface接口类型

// 基础语法
interface Person {
  name: string,
  age: number
}

let p: Person = {
  name: '张三',
  age: 18
}

// 表单数据收集场景说明
interface LoginForm {
  id: number,
  username: string,
  password: string
}

let form: LoginForm = {
  id: 1,
  username: 'admin',
  password: '123456'
}

// 渲染后端列表场景说明
interface Goods {
  id: number,
  price: number
}

let list: Goods[] = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
  { id: 4, price: 400 },
  { id: 5, price: 500 },
]

list.forEach(item => {
  console.log(item.id, item.price)
})

// 可选设置

interface Props {
  type: string,
  size?: string
}

let props: Props = {
  type: 'success'
}

props = {
  type: 'success',
  size: 'large'
}

// 接口继承

// 父接口
interface GoodsType {
  id: string,
  price: number
}

// 子接口继承
interface DisGoodsType extends GoodsType {
  disPrice: number
}

let goods: DisGoodsType = {
  id: '1',
  price: 100,
  disPrice: 90
}

// 思考题

interface Data {
  title: string,
  content: string
}

interface ResData {
  code: number,
  msg: string,
  data: Data
}

let res: ResData = {
  code: 200,
  msg: 'success',
  data: {
    title: '文章标题',
    content: '文章内容'
  }
}
console.log(res.data.title);