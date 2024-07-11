// TS CODE
export { }

// 字面量类型

type Gender = '男' | '女'

let gender: Gender = '男'

// const

let str1 = '123'
const str2 = '456'

// 思考题

type Res = {
  code: 1001 | 1002 | 1003,
  msg: string
}

let res: Res = {
  code: 1001,
  msg: '接口成功'
}

console.log(res.code);