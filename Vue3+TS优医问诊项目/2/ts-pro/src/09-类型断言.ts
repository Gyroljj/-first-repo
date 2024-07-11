// TS CODE
export { }

// 类型断言
// const link1 = document.querySelector('.link')
// link1.href = 'https://www.baidu.com'

// const link2 = document.querySelector('.link') as HTMLAnchorElement
// link2.href = 'https://www.baidu.com'

// 注意事项

function log(foo: string | number) {
  console.log((foo as number).toFixed(2));
}

log(1)
log('1')