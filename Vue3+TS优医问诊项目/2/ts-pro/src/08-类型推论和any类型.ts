// TS CODE
export { }

// 类型推论
let count = 0
count = 1

function add(a: number, b: number) {
  return a + b
}
const result = add(1, 2)

// any类型

let foo: any
foo = 1
foo = 'foo'
foo = true

let bar: number
bar = foo