// TS CODE
export {}

// 联合类型

let arr1: (string | number)[] = [1, '2', 3]

let arr2: string | number[]

// 类型别名

type ItemType = (string | number)[]

let arr3: ItemType
let arr4: ItemType

arr3 = [1, '2', 3]
arr4 = ['1', '2', 3]


// 思考题

let arr5: number | string[]

arr5 = 100
arr5 = ['100']
