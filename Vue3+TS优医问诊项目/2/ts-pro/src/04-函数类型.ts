// TS CODE
export { }

// 函数类型注解

// 函数声明

function add(x: number, y: number): number {
  return x + y
}

add(1, 2)

let res: number
res = add(1, 2)

// 函数表达式

// 分开注解

const add2 = (x: number, y: number): number => {
  return x + y
}
add2(1, 2)

// 整体注解(库文件)

type AddFn = (x: number, y: number) => number

const add3: AddFn = (x, y) => {
  return x + y
}
add3(1, 2)

// 可选参数(必须在所有参数的末尾)
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName}${lastName}`
  } else {
    return firstName
  }
}

console.log(buildName('张'));
console.log(buildName('张', '三'));

// 无返回值
function eachArr(arr: number[]): void {
  arr.forEach(item => {
    console.log(item);
  });
}

const result1 = eachArr([1, 2, 3])

// 思考题

const arr2Str = (arr: (string | number)[], split: string): string => {
  // join方法
  return arr.join(split)
}

console.log(arr2Str([1, 2, 3], '-'));
console.log(arr2Str(['4', '2', '3'], '&'));