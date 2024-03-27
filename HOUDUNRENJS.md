# console.log()

`console.log()` 方法向 Web 控制台输出一条信息。这条信息可能是单个字符串（包括可选的替代字符串），也可能是一个或多个对象。

# 变量提升

解析器会先解析代码，然后把声明的变量的声明提升到最前，这就叫做变量提升。

# TDZ

TDZ 又称暂时性死区，指变量在作用域内已经存在，但必须在`let/const`声明后才可以使用。

# var

使用 `var` 声明的变量存在于最近的函数或全局作用域中，没有块级作用域的机制。

# let

与 `var` 声明的区别是 `let/const` 拥有块作用域

- 建议将`let`在代码块前声明
- 用逗号分隔定义多个

`let`存在块作用域特性，变量只在块域中有效

块内部是可以访问到上层作用域的变量

# const

使用 `const` 用来声明常量，这与其他语言差别不大，比如可以用来声明后台接口的 URI 地址。

- 常量名建议全部大写
- 只能声明一次变量
- 声明时必须同时赋值
- 不允许再次全新赋值
- 可以修改引用类型变量的值
- 拥有块、函数、全局作用域

常量不允许全新赋值

常量的引用类型值可以改变

不同作用域中可以重名定义常量

# Object.freeze

如果冻结变量后，变量也不可以修改了，使用严格模式会报出错误。

# 传值与传址

基本数据类型指数值、字符串等简单数据类型，引用类型指对象数据类型。

基本类型复制是值的复制，互相不受影响。

对于引用类型来讲，变量保存的是引用对象的指针。变量间赋值时其实赋值是变量的指针，这样多个变量就引用的是同一个对象。

# undefined

对声明但未赋值的变量返回类型为 `undefined` 表示值未定义。

对未声明的变量使用会报错，但判断类型将显示 `undefined`。

我们发现未赋值与未定义的变量值都为 `undefined` ，建议声明变量设置初始值，这样就可以区分出变量状态了。

函数参数或无返回值是为`undefined`

# null

`null` 用于定义一个空对象，即如果变量要用来保存引用类型，可以在初始化时将其设置为 null

# 严格模式

严格模式可以让我们及早发现错误，使代码更安全规范，推荐在代码中一直保持严格模式运行。

## 基本差异

1. 变量必须使用关键词声明，未声明的变量不允许赋值
2. 强制声明防止污染全局
3. 关键词不允许做变量使用
4. 变量参数不允许重复定义
5. 能单独为函数设置严格模式
6. 为了在多文件合并时，防止全局设置严格模式对其他没使用严格模式文件的影响，将脚本放在一个执行函数中。

## 解构差异

- 非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明。

# 逻辑与

使用 `&&` 符号表示逻辑与，指符号两端都为 true 时表达式结果为 true。

# 逻辑或

使用 `||` 符号表示逻辑或，指符号左右两端有一方为 true，表达式即成立。

# if

当条件为真时执行表达式代码块。

# switch

可以将 `switch` 理解为 `if` 的另一种结构清晰的写法。

- 如果表达式等于 `case` 中的值，将执行此 `case` 代码段
- `break` 关键字会终止 `switch` 的执行
- 没有任何 `case`匹配时将执行`default` 代码块
- 如果`case`执行后缺少 `break` 则接着执行后面的语句

# while

循环执行语句，需要设置跳出循环的条件否则会陷入死循环状态。

# do/while

后条件判断语句，无论条件是否为真都会先进行循环体。

# for

可以在循环前初始化初始计算变量。

# break/continue

break 用于退出当前循环，continue 用于退出当前循环返回循环起始继续执行。

# label

标签(label) 为程序定义位置，可以使用`continue/break`跳到该位置。

# for/in

用于遍历对象的所有属性，`for/in`主要用于遍历对象，不建议用来遍历数组。

# for/of

用来遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构。

与 `for/in` 不同的是 `for/of` 每次循环取其中的值而不是索引。

# typeof

`typeof` 用于返回以下原始类型

- 基本类型：number/string/boolean
- function
- object
- undefined

# instanceof

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

也可以理解为是否为某个对象的实例，`typeof`不能区分数组，但`instanceof`则可以。

# String

字符串类型是使用非常多的数据类型，也是相对简单的数据类型。

# 模板字面量

使用 \` ...\` 符号包裹的字符串中可以写入引入变量与表达式

支持换行操作不会产生错误

使用表达式

模板字面量支持嵌套使用

# 标签模板

标签模板是提取出普通字符串与变量，交由标签函数处理

# 获取长度

使用 `length`属性可以获取字符串长度

# 大小写转换

字符串方法`toLowerCase()`和`toUpperCase()`字符串并将所有字符分别转换为小写或大写。

# 移除空白

使用`trim()`删除字符串左右的空白字符

# 获取单字符

根据从 0 开始的位置获取字符
```
console.log('houdunren'.charAt(3))
```

使用数字索引获取字符串
```
console.log('houdunren'[3])
```

# 截取字符串

使用 `slice`、`substr`、`substring` 函数都可以截取字符串。

- slice、substring 第二个参数为截取的结束位置
- substr 第二个参数指定获取字符数量

# 查找字符串

从开始获取字符串位置，检测不到时返回 `-1`
```
console.log('houdunren.com'.indexOf('o')); //1
console.log('houdunren.com'.indexOf('o', 3)); //11 从第3个字符向后搜索
```

从结尾来搜索字符串位置
```
console.log('houdunren.com'.lastIndexOf('o')); //11
console.log('houdunren.com'.lastIndexOf('o', 7)); //1 从第7个字符向前搜索
```

search() 方法用于检索字符串中指定的子字符串，也可以使用正则表达式搜索
```
let str = "houdunren.com";
console.log(str.search("com")); //10
console.log(str.search(/\.com/i)); //9
```

`includes` 字符串中是否包含指定的值，第二个参数指查找开始位置
```
console.log('houdunren.com'.includes('o')); //true
console.log('houdunren.com'.includes('h', 11)); //true
```

`startsWith` 是否是指定位置开始，第二个参数为查找的开始位置。
```
console.log('houdunren.com'.startsWith('h')); //true
console.log('houdunren.com'.startsWith('o', 1)); //true
```

`endsWith` 是否是指定位置结束，第二个参数为查找的结束位置。
```
console.log('houdunren.com'.endsWith('com')); //true
console.log('houdunren.com'.endsWith('o', 2)); //true
```

下面是查找关键词的示例
```
const words = ["php", "css"];
const title = "我爱在后盾人学习php与css知识";
const status = words.some(word => {
  return title.includes(word);
});
console.log(status); //true
```

# 替换字符串

`replace` 方法用于字符串的替换操作
```
let name = "houdunren.com";
web = name.replace("houdunren", "hdcms");
console.log(web); //hdcms.com
```

使用字符串替换来生成关键词链接
```
const word = ["php", "css"];
const string = "我喜欢在后盾人学习php与css知识";
const title = word.reduce((pre, word) => {
  return pre.replace(word, `<a href="?w=${word}">${word}</a>`);
}, string);
document.body.innerHTML += title;
```

# 重复生成

下例是根据参数重复生成星号
```
function star(num = 3) {
	return '*'.repeat(num);
}
console.log(star());
```

下面是模糊后三位电话号码
```
let phone = "98765432101";
console.log(phone.slice(0, -3) + "*".repeat(3));
```

# 类型转换

分隔字母
```
let name = "hdcms";
console.log(name.split(""));
```

将字符串转换为数组
```
console.log("1,2,3".split(",")); //[1,2,3]
```

隐式类型转换会根据类型自动转换类型
```
let hd = 99 + '';
console.log(typeof hd); //string
```

使用 `String` 构造函数可以显示转换字符串类型
```
let hd = 99;
console.log(typeof String(hd));
```

js 中大部分类型都是对象，可以使用类方法 `toString`转化为字符串
```
let hd = 99;
console.log(typeof hd.toString()); //string

let arr = ['hdcms', '后盾人'];
console.log(typeof arr.toString()); //string
```

# Boolean

布尔类型包括 `true` 与 `false` 两个值，开发中使用较多的数据类型。

## 声明定义

使用对象形式创建布尔类型
```
console.log(new Boolean(true)); //true
console.log(new Boolean(false)); //false
```

但建议使用字面量创建布尔类型
```
let hd =true;
```

## 隐式转换

基本上所有类型都可以隐式转换为 Boolean 类型。

|  数据类型 |       true       |       false      |
|:---------:|:----------------:|:----------------:|
|   String  |    非空字符串    |     空字符串     |
|   Number  |    非 0 的数值   |      0 、NaN     |
|   Array   | 数组不参与比较时 | 参与比较的空数组 |
|   Object  |     所有对象     |                  |
| undefined |        无        |     undefined    |
|    null   |        无        |       null       |
|    NaN    |        无        |        NaN       |

当与 boolean 类型比较时，会将两边类型统一为数字 1 或 0。

- 如果使用 Boolean 与数值比较时，会进行隐式类型转换 true 转为 1，false 转为 0。
- 字符串在与 Boolean 比较时，两边都为转换为数值类型后再进行比较。
- 数组的表现与字符串原理一样，会先转换为数值
- 引用类型的 Boolean 值为真，如对象和数组

# 显式转换

使用 `!!` 转换布尔类型

使用 `Boolean` 函数可以显式转换为布尔类型

# Number

Number 用于表示整数和浮点数，数字是 `Number`实例化的对象，可以使用对象提供的丰富方法。

# NaN

表示无效的数值

NaN 不能使用 `==` 比较，使用以下代码来判断结果是否正确
```
var res = 2 / 'houdunren';
if (Number.isNaN(res)) {
	console.log('Error');
}
```

也可以使用 `Object.is` 方法判断两个值是否完全相同
```
var res = 2 / 'houdunren';
console.log(Object.is(res, NaN));
```

# 类型转换

## Number

使用 Number 函数基本上可以转换所有类型

## parseInt

提取字符串开始去除空白后的数字转为整数。

## parseFloat

转换字符串为浮点数，忽略字符串前面空白字符。

> 比如从表单获取的数字是字符串类型需要类型转换才可以计算，下面使用乘法进行隐式类型转换。
```
<input type="text" name="num" value="66">
<script>
  let num = document.querySelector("[name='num']").value;
  console.log(num + 5); //665

  console.log(num * 1 + 5); //71
</script>
```

# 舍入操作

使用 `toFixed` 可对数值舍入操作，参数指定保存的小数位
```
console.log(1.556.toFixed(2)); //1.56
```

# Math

`Math` 对象提供了众多方法用来进行数学计算,介绍常用的方法，更多方法使用请查看 [MDN 官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)了解。

## 取极限值

使用 `min` 与 `max` 可以取得最小与最大值。

使用`apply` 来从数组中取值

## 舍入处理

取最接近的向上整数
```
console.log(Math.ceil(1.111)); //2
```

得到最接近的向下整数
```
console.log(Math.floor(1.555)); //1
```

四舍五入处理
```
console.log(Math.round(1.5)); //2
```

## random

`random` 方法用于返回 >=0 且 <1 的随机数（包括 0 但不包括 1）。

# Date

网站中处理日期时间是很常用的功能，通过 `Date` 类型提供的丰富功能可以非常方便的操作。

## 声明日期

获取当前日期时间
```
let now = new Date();
console.log(now);
console.log(typeof date); //object
console.log(now * 1); //获取时间戳

//直接使用函数获取当前时间
console.log(Date());
console.log(typeof Date()); //string

//获取当前时间戳单位毫秒
console.log(Date.now());
```

计算脚本执行时间
```
const start = Date.now();
for (let i = 0; i < 2000000; i++) {}
const end = Date.now();
console.log(end - start);
```

也可以使用控制台测试
```
console.time("testFor");
for (let i = 0; i < 20000000; i++) {}
console.timeEnd("testFor");
```

根据指定的日期与时间定义日期对象
```
let now = new Date('2028-02-22 03:25:02');
console.log(now);

now = new Date(2028, 4, 5, 1, 22, 16);
console.log(now);
```

使用展示运算符处理更方便
```
let info = [2020, 2, 20, 10, 15, 32];
let date = new Date(...info);
console.dir(date);
```

## 类型转换

将日期转为数值类型就是转为时间戳单位是毫秒
```
let hd = new Date("2020-2-22 10:33:12");
console.log(hd * 1);

console.log(Number(hd));

console.log(hd.valueOf())

console.log(date.getTime());
```

有时后台提供的日期为时间戳格式，下面是将时间戳转换为标准日期的方法
```
const param = [1990, 2, 22, 13, 22, 19];
const date = new Date(...param);
const timestamp = date.getTime();
console.log(timestamp);
console.log(new Date(timestamp));
```

## 对象方法

格式化输出日期
```
let time = new Date();
console.log(
  `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
);
```

封装函数用于复用
```
function dateFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
  const config = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds()
  };
  for (const key in config) {
    format = format.replace(key, config[key]);
  }
  return format;
}
console.log(dateFormat(new Date(), "YYYY年MM月DD日"));
```

更多系统提供的日期时间方法请查看 [MDN 官网](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

## moment.js

Moment.js 是一个轻量级的 JavaScript 时间库，它方便了日常开发中对时间的操作，提高了开发效率。

更多使用方法请访问[中文官网](http://momentjs.cn)或 [英文官网](https://momentjs.com)

# 声明数组

数组是多个变量值的集合，数组是`Array` 对象的实例，所以可以像对象一样调用方法。

# 创建数组

使用对象方式创建数组
```
console.log(new Array(1, '后盾人', 'hdcms')); //[1, "后盾人", "hdcms"]
```

使用字面量创建是推荐的简单作法
```
const array = ["hdcms", "houdunren"];
```

多维数组定义
```
const array = [["hdcms"], ["houdunren"]];
console.log(array[1][0]);
```

数组是引用类型可以使用const声明并修改它的值
```
const array = ["hdcms", "houdunren"];
array.push("houdunwang");
console.log(array);
```

使用原型的 `length`属性可以获取数组元素数量

数组可以设置任何值

下面直接设置 3 号数组，会将 1/2 索引的数组定义为空值
```
let hd = ["后盾人"];
hd[3] = "hdcms";
console.log(hd.length); //4
```

声明多个空元素的数组
```
let hd = new Array(3);
console.log(hd.length); //3
console.log(hd);
```

# Array.of

使用`Array.of` 与 `new Array` 不同是设置一个参数时不会创建空元素数组
```
let hd = Array.of(3);
console.log(hd); //[3]

hd = Array.of(1, 2, 3);
console.log(hd); //[1, 2, 3]
```

# 类型检测

检测变量是否为数组类型
```
console.log(Array.isArray([1, "后盾人", "hdcms"])); //true
console.log(Array.isArray(9)); //false
```

# 类型转换

可以将数组转换为字符串也可以将其他类型转换为数组。

# 字符串

大部分数据类型都可以使用`.toString()` 函数转换为字符串。
```
console.log(([1, 2, 3]).toString()); // 1,2,3
```

也可以使用函数 `String` 转换为字符串。
```
console.log(String([1, 2, 3]));
```

或使用`join`连接为字符串
```
console.log([1, 2, 3].join("-"));//1-2-3
```

# Array.from

使用`Array.from`可将类数组转换为数组，类数组指包含 `length` 属性或可迭代的对象。

第一个参数为要转换的数据，第二个参数为类似于`map` 函数的回调方法
```
let str = '后盾人';
console.log(Array.from(str)); //["后", "盾", "人"]
```

为对象设置length属性后也可以转换为数组，但要下标为数值或数值字符串
```
let user = {
  0: '后盾人',
  '1': 18,
  length: 2
};
console.log(Array.from(user)); //["后盾人", 18]
```

DOM 元素转换为数组后来使用数组函数，第二个参数类似于`map` 函数的方法，可对数组元素执行函数处理。
```
<body>
    <button message="后盾人">button</button>
    <button message="hdcms">button</button>
</body>

<script>
    let btns = document.querySelectorAll('button');
    console.log(btns); //包含length属性
    Array.from(btns, (item) => {
        item.style.background = 'red';
    });
</script>
```

# 展开语法

## 数组合并

使用展开语法来合并数组相比 `concat` 要更简单，使用`...` 可将数组展开为多个值。
```
let a = [1, 2, 3];
let b = ['a', '后盾人', ...a];
console.log(b); //["a", "后盾人", 1, 2, 3]
```

## 函数参数

使用展示语法可以替代 `arguments` 来接收任意数量的参数
```
function hd(...args) {
  console.log(args);
}
hd(1, 2, 3, "后盾人"); //[1, 2, 3, "后盾人"]
```

也可以用于接收部分参数
```
function hd(site, ...args) {
  console.log(site, args); //后盾人 (3) [1, 2, 3]
}
hd("后盾人", 1, 2, 3);
```

## 节点转换

可以将 DOM 节点转为数组，下面例子不可以使用 filter 因为是节点列表
```
<body>
    <button message="后盾人">button</button>
    <button message="hdcms">button</button>
</body>

<script>
    let btns = document.querySelectorAll('button');
    btns.map((item) => {
        console.log(item); //TypeError: btns.filter is not a function
    })
</script>
```

使用展开语法后就可以使用数据方法
```
<body>
  <div>hdcms</div>
  <div>houdunren</div>
</body>

<script>
  let divs = document.querySelectorAll("div");
  [...divs].map(function(div) {
    div.addEventListener("click", function() {
      this.classList.toggle("hide");
    });
  });
</script>
```

学习后面章节后也可以使用原型处理
```
<body>
    <button message="后盾人">button</button>
    <button message="hdcms">button</button>
</body>

<script>
    let btns = document.querySelectorAll('button');
    Array.prototype.map.call(btns, (item) => {
        item.style.background = 'red';
    });
</script>
```

# 解构赋值

解构是一种更简洁的赋值特性，可以理解为分解一个数据的结构

- 建设使用 `var/let/const` 声明

字符串解构
```
const [...a] = "hdcms";
console.log(a); //Array(5);['h', 'd', 'c', 'm', 's']
```

函数参数

- 数组参数的使用
```
function hd([a, b]) {
	console.log(a, b); // 后盾人 hdcms
}
hd(['后盾人', 'hdcms']);
```

# 管理元素

使用从 0 开始的索引来改变数组
```
let arr = [1, "后盾人", "hdcms"];
arr[1] = '后盾人教程';
console.log(arr); //[1, "后盾人教程", "hdcms"]
```

向数组追加元素
```
let arr = [1, "后盾人", "hdcms"];
arr[arr.length] = 'houdunren.com';
console.log(arr); //[1, "后盾人", "hdcms", "houdunren.com"]
```

## 扩展语法

使用展示语法批量添加元素
```
let arr = ["后盾人", "hdcms"];
let hd = ["houdunren"];
hd.push(...arr);
console.log(hd); //["houdunren", "后盾人", "hdcms"]
```

## push

压入元素，直接改变元数组，返回值为数组元素数量
```
let arr = ["后盾人", "hdcms"];
console.log(arr.push('向军大叔', 'houdunren')); //4
console.log(arr); //["后盾人", "hdcms", "向军大叔", "houdunren"]
```

根据区间创建新数组
```
function rangeArray(begin, end) {
  const array = [];
  for (let i = begin; i <= end; i++) {
    array.push(i);
  }
  return array;
}
console.log(rangeArray(1, 6));
```

## pop

从末尾弹出元素，直接改变元数组，返回值为弹出的元素
```
let arr = ["后盾人", "hdcms"];
console.log(arr.pop()); //hdcms
console.log(arr); //["后盾人"]
```

## shift

从数组前面取出一个元素
```
let arr = ["后盾人", "hdcms"];
console.log(arr.shift()); //后盾人
console.log(arr); //["hdcms"]
```

## unshift

从数组前面添加元素
```
let arr = ["后盾人", "hdcms"];
console.log(arr.unshift('向军大叔', 'houdunren')); //4
console.log(arr); //["向军大叔", "houdunren", "后盾人", "hdcms"]
```

## fill

使用`fill` 填充数组元素
```
console.dir(Array(4).fill("后盾人")); //["后盾人", "后盾人", "后盾人", "后盾人"]
```

指定填充位置
```
console.log([1, 2, 3, 4].fill("后盾人", 1, 2)); //[1, "后盾人", 3, 4]
```

## slice

使用 `slice` 方法从数组中截取部分元素组合成新数组（并不会改变原数组），不传第二个参数时截取到数组的最后元素。
```
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.slice(1, 3)); // [1,2]
```

不设置参数是为获取所有元素
```
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.slice()); //[0, 1, 2, 3, 4, 5, 6]
```

## splice

使用 `splice` 方法可以添加、删除、替换数组中的元素，会对原数组进行改变，返回值为删除的元素。

删除数组元素第一个参数为从哪开始删除，第二个参数为删除的数量。
```
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(1, 3)); //返回删除的元素 [1, 2, 3]
console.log(arr); //删除数据后的原数组 [0, 4, 5, 6]
```

通过指定第三个参数来设置在删除位置添加的元素
```
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(1, 3, 'hdcms', '后盾人')); //[1, 2, 3]
console.log(arr); //[0, "hdcms", "后盾人", 4, 5, 6]
```

向末尾添加元素
```
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(arr.length, 0, 'hdcms', '后盾人')); //[]
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, "hdcms", "后盾人"]
```

向数组前添加元素
```
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(0, 0, 'hdcms', '后盾人')); //[]
console.log(arr); //["hdcms", "后盾人", 0, 1, 2, 3, 4, 5, 6]
```

数组元素位置调整函数
```
function move(array, before, to) {
  if (before < 0 || to >= array.length) {
    console.error("指定位置错误");
    return;
  }
  const newArray = [...array];
  const elem = newArray.splice(before, 1);
  newArray.splice(to, 0, ...elem);
  return newArray;
}
const array = [1, 2, 3, 4];
console.table(move(array, 0, 3)); //[2, 3, 4, 1]
```

## 清空数组

将数组值修改为`[]`可以清空数组，**如果有多个引用时数组在内存中存在被其他变量引用**。
```
let user = [{ name: "hdcms" }, { name: "后盾人" }];
let cms = user;
user = [];
console.log(user); // []
console.log(cms); // [{ name: "hdcms" }, { name: "后盾人" }]
```

将数组`length`设置为 0 也可以清空数组
```
let user = [{ name: "hdcms" }, { name: "后盾人" }];
let cms = user;
user.length = 0;
console.log(user); // []
console.log(cms); // []
```

使用`splice`方法删除所有数组元素
```
let user = [{ name: "hdcms" }, { name: "后盾人" }];
let cms = user;
user.splice(0, user.length);
console.log(user);
console.log(user);
```

使用`pop/shift`删除所有元素，来清空数组
```
let user = [{ name: "hdcms" }, { name: "后盾人" }];
let cms = user;
while (user.pop()) {}
console.log(user);
console.log(user);
```

# 合并拆分

## join

使用`join`连接成字符串
```
let arr = [1, "后盾人", "hdcms"];
console.log(arr.join('-')); //1-后盾人-hdcms 使用join可以指定转换的连接方式
```

## split

`split` 方法用于将字符串分割成数组，类似`join`方法的反函数。
```
let price = "99,78,68";
console.log(price.split(",")); //["99", "78", "68"]
```

## concat

`concat`方法用于连接两个或多个数组，元素是值类型的是复制操作，如果是引用类型还是指向同一对象
```
let array = ["hdcms", "houdunren"];
let hd = [1, 2];
let cms = [3, 4];
console.log(array.concat(hd, cms)); //["hdcms", "houdunren", 1, 2, 3, 4]
```

也可以使用扩展语法实现连接
```
console.log([...array, ...hd, ...cms]);
```

## copyWithin

使用 `copyWithin` 从数组中复制一部分到同数组中的另外位置。

语法说明
```
array.copyWithin(target, start, end)
```

参数说明

| 参数   | 描述                                                                   |
|--------|------------------------------------------------------------------------|
| target | 必需。复制到指定目标索引位置。                                         |
| start  | 可选。元素复制的起始位置。                                             |
| end    | 可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。 |

```
const arr = [1, 2, 3, 4];
console.log(arr.copyWithin(2, 0, 2)); //[1, 2, 1, 2]
```

# 查找元素

## indexOf

使用 `indexOf` 从前向后查找元素出现的位置，如果找不到返回 -1。
```
let arr = [7, 3, 2, 8, 2, 6];
console.log(arr.indexOf(2)); // 2 从前面查找2出现的位置
```

如下面代码一下，使用 `indexOf` 查找字符串将找不到，因为`indexOf` 类似于`===`是严格类型约束。
```
let arr = [7, 3, 2, '8', 2, 6];
console.log(arr.indexOf(8)); // -1
```

第二个参数用于指定查找开始位置
```
let arr = [7, 3, 2, 8, 2, 6];
//从第二个元素开始向后查找
console.log(arr.indexOf(2, 3)); //4
```

## lastIndexOf

使用 `lastIndexOf` 从后向前查找元素出现的位置，如果找不到返回 -1。

第二个参数用于指定查找开始位置

## includes

使用 `includes` 查找字符串返回值是布尔类型更方便判断

我们来实现一个自已经的`includes`函数，来加深对`includes`方法的了解
```
function includes(array, item) {
  for (const value of array)
    if (item === value) return true;
  return false;
}

console.log(includes([1, 2, 3, 4], 3)); //true
```

## find

find 方法找到后会把值返回出来

- 如果找不到返回值为`undefined`

返回第一次找到的值，不继续查找
```
let arr = ["hdcms", "houdunren", "hdcms"];

let find = arr.find(function(item) {
  return item == "hdcms";
});

console.log(find); //hdcms
```

使用`includes`等不能查找引用类型，因为它们的内存地址是不相等的
```
const user = [{ name: "李四" }, { name: "张三" }, { name: "后盾人" }];
const find = user.includes({ name: "后盾人" });
console.log(find); // false
```

`find` 可以方便的查找引用类型
```
const user = [{ name: "李四" }, { name: "张三" }, { name: "后盾人" }];
const find = user.find(user => (user.name = "后盾人"));
console.log(find); //{name: "后盾人"}
```

## findIndex

`findIndex` 与 `find` 的区别是返回索引值，参数也是 : 当前值，索引，操作数组。

- 查找不到时返回 `-1`

## find 原理

下面使用自定义函数
```
let arr = [1, 2, 3, 4, 5];
function find(array, callback) {
  for (const value of array) {
    if (callback(value) === true) return value;
  }
  return undefined;
}
let res = find(arr, function(item) {
  return item == 2;
});
console.log(res); // 2
```

下面添加原型方法实现
```
Array.prototype.findValue = function(callback) {
  for (const value of this) {
    if (callback(value) === true) return value;
  }
  return undefined;
};

let re = arr.findValue(function(item) {
  return item == 2;
});
console.log(re); // 2
```

# 数组排序

## reverse

反转数组顺序
```
let arr = [1, 4, 2, 9];
console.log(arr.reverse()); //[9, 2, 4, 1]
```

## sort

`sort`每次使用两个值进行比较 `Array.sort((a,b)=>a-b`

- 返回负数 a 排在 b 前面，从小到大
- 返回正数 b 排在 a 前面，从大到小
- 返回 0 时不动

默认从小于大排序数组元素
```
let arr = [1, 4, 2, 9];
console.log(arr.sort()); //[1, 2, 4, 9]
```

使用排序函数从大到小排序，参数一与参数二比较，返回正数为降序负数为升序
```
let arr = [1, 4, 2, 9];

console.log(arr.sort(function (v1, v2) {
	return v2 - v1;
})); //[9, 4, 2, 1]
```

下面是按课程点击数由高到低排序
```
let lessons = [
  { title: "媒体查询响应式布局", click: 78 },
  { title: "FLEX 弹性盒模型", click: 12 },
  { title: "MYSQL多表查询随意操作", click: 99 }
];

let sortLessons = lessons.sort((v1, v2) => v2.click - v1.click);
console.log(sortLessons);
```

## 排序原理

```
let arr = [1, 5, 3, 9, 7];
function sort(array, callback) {
  for (const n in array) {
    for (const m in array) {
      if (callback(array[n], array[m]) < 0) {
        let temp = array[n];
        array[n] = array[m];
        array[m] = temp;
      }
    }
  }
  return array;
}
arr = sort(arr, function(a, b) {
  return a - b;
});
console.table(arr);
```

# 循环遍历

## for

根据数组长度结合`for` 循环来遍历数组
```
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
    {title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (let i = 0; i < lessons.length; i++) {
  lessons[i] = `后盾人: ${lessons[i].title}`;
}
console.log(lessons);
```

## forEach

`forEach`使函数作用在每个数组元素上，但是没有返回值。

下面例子是截取标签的五个字符。
```
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
    {title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

lessons.forEach((item, index, array) => {
    item.title = item.title.substr(0, 5);
});
console.log(lessons);
```

## for/in

遍历时的 key 值为数组的索引
```
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (const key in lessons) {
    console.log(`标题: ${lessons[key].title}`);
}
```

## for/of

与 `for/in` 不同的是 `for/of` 每次循环取其中的值而不是索引。
```
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (const item of lessons) {
  console.log(`
    标题: ${item.title}
    栏目: ${item.category == "css" ? "前端" : "数据库"}
  `);
}
```

使用数组的迭代对象遍历获取索引与值（有关迭代器知识后面章节会讲到）
```
const hd = ['houdunren', 'hdcms'];
const iterator = hd.entries();
console.log(iterator.next()); //value:{0:0,1:'houdunren'}
console.log(iterator.next()); //value:{0:1,1:'hdcms'}
```

这样就可以使用解构特性与 `for/of` 遍历并获取索引与值了
```
const hd = ["hdcms", "houdunren"];

for (const [key, value] of hd.entries()) {
  console.log(key, value); //这样就可以遍历了
}
```

## 迭代器方法

数组中可以使用多种迭代器方法，迭代器后面章节会详解。

## keys

通过迭代对象获取索引
```
const hd = ["houdunren", "hdcms"];
const keys = hd.keys();
console.log(keys.next()); // {value: 0, done: false}
console.log(keys.next()); // {value: 1, done: false}
console.log(keys.next()); // {value: undefined, done: true}
```

获取数组所有键
```
"use strict";
const arr = ["a", "b", "c", "后盾人"];

for (const key of arr.keys()) {
  console.log(key); //0 1 2 3
}
```

## values

通过迭代对象获取值
```
const hd = ["houdunren", "hdcms"];
const values = hd.values();
console.log(values.next()); // {value: 'houdunren', done: false}
console.log(values.next()); // {value: 'hdcms', done: false}
console.log(values.next()); // {value: undefined, done: true}
```

获取数组的所有值
```
"use strict";
const arr = ["a", "b", "c", "后盾人"];

for (const value of arr.values()) {
  console.log(value); // a b c 后盾人
}
```

## entries

返回数组所有键值对，下面使用解构语法循环
```
const arr = ["a", "b", "c", "后盾人"];
for (const [key, value] of arr.entries()) {
  console.log(key, value); // 0 'a'  1 'b'  2 'c'  3 '后盾人'
}
```

解构获取内容（对象章节会详细讲解）
```
const hd = ["houdunren", "hdcms"];
const iterator = hd.entries();

let {done,value: [k, v]} = iterator.next();

console.log(v); // houdunren
```

# 扩展语法

## every

`every` 用于递归的检测元素，要所有元素操作都要返回真结果才为真。

查看班级中同学的 JS 成绩是否都及格
```
const user = [
  { name: "李四", js: 89 },
  { name: "马六", js: 55 },
  { name: "张三", js: 78 }
];
const resust = user.every(user => user.js >= 60);
console.log(resust); // false
```

标题的关键词检查
```
let words = ['后盾', '北京', '培训'];
let title = '后盾人不断分享技术教程';

let state = words.every(function (item, index, array) {
  return title.indexOf(item) >= 0;
});

if (state == false) console.log('标题必须包含所有关键词'); // 标题必须包含所有关键词
```

## some

使用 `some` 函数可以递归的检测元素，如果有一个返回 true，表达式结果就是真。第一个参数为元素，第二个参数为索引，第三个参数为原数组。

下面是使用 `some` 检测规则关键词的示例，如果匹配到一个词就提示违规。
```
let words = ['后盾', '北京', '武汉'];
let title = '后盾人不断分享技术教程'

let state = words.some(function (item, index, array) {
	return title.indexOf(item) >= 0;
});

if (state) console.log('标题含有违规关键词'); // 标题含有违规关键词
```

## filter

使用 `filter` 可以过滤数据中元素，下面是获取所有在 CSS 栏目的课程。
```
let lessons = [
  {title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
  {title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

let cssLessons = lessons.filter(function (item, index, array) {
  if (item.category.toLowerCase() == 'css') {
    return true;
  }
});

console.log(cssLessons);
```

我们来写一个过滤元素的方法来加深些技术
```
function except(array, excepts) {
  const newArray = [];
  for (const elem of array)
    if (!excepts.includes(elem)) newArray.push(elem);
  return newArray;
}

const array = [1, 2, 3, 4];
console.log(except(array, [2, 3])); //[1,4]
```

## map

使用 `map` 映射可以在数组的所有元素上应用函数，用于映射出新的值。

获取数组所有标题组合的新数组
```
let lessons = [
  {title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
  {title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

console.log(lessons.map(item => item.title)); // ['媒体查询响应式布局', 'FLEX 弹性盒模型', 'MYSQL多表查询随意操作']
```

为所有标题添加上 `后盾人`
```
let lessons = [
  {title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
  {title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

lessons = lessons.map(function (item, index, array) {
    item.title = `[后盾人] ${item['title']}`;
    return item;
});
console.log(lessons);
```

## reduce

使用 `reduce` 与 `reduceRight` 函数可以迭代数组的所有元素，`reduce` 从前开始 `reduceRight` 从后面开始。

第一个参数是执行函数，第二个参数为初始值

- 传入第二个参数时将所有元素循环一遍
- 不传第二个参数时从第二个元素开始循环

函数参数说明如下

| 参数  | 说明                       |
|-------|----------------------------|
| prev  | 上次调用回调函数返回的结果 |
| cur   | 当前的元素值               |
| index | 当前的索引                 |
| array | 原数组                     |

统计元素出现的次数
```
function countArrayELem(array, elem) {
  return array.reduce((total, cur) => (total += cur == elem ? 1 : 0), 0);
}

let numbers = [1, 2, 3, 1, 5];
console.log(countArrayELem(numbers, 1)); //2
```

取数组中的最大值
```
function arrayMax(array) {
  return array.reduce(
  	(max, elem) => (max > elem ? max : elem), array[0]
  );
}

console.log(arrayMax([1, 3, 2, 9])); // 9
```

取价格最高的商品
```
let cart = [
  { name: "iphone", price: 12000 },
  { name: "imac", price: 25000 },
  { name: "ipad", price: 3600 }
];

function maxPrice(array) {
  return array.reduce(
    (goods, elem) => (goods.price > elem.price ? goods : elem),
    array[0]
  );
}
console.log(maxPrice(cart)); // {name: 'imac', price: 25000}
```

计算购物车中的商品总价
```
let cart = [
  { name: "iphone", price: 12000 },
  { name: "imac", price: 25000 },
  { name: "ipad", price: 3600 }
];

const total = cart.reduce(
	(total, goods) => total += goods.price, 0
);
console.log(total); //40600
```

获取价格超过 1 万的商品名称
```
let goods = [
  { name: "iphone", price: 12000 },
  { name: "imac", price: 25000 },
  { name: "ipad", price: 3600 }
];

function getNameByPrice(array, price) {
  return array.reduce((goods, elem) => {
    if (elem.price > price) {
      goods.push(elem);
    }
    return goods;
  }, []).map(elem => elem.name);
}
console.table(getNameByPrice(goods, 10000));
```

使用 `reduce` 实现数组去重
```
let arr = [1, 2, 6, 2, 1];
let filterArr = arr.reduce((pre, cur, index, array) => {
  if (pre.includes(cur) === false) {
      pre = [...pre, cur];
  }
  return pre;
}, [])
console.log(filterArr); // [1,2,6]
```

# Symbol

Symbol用于防止属性名冲突而产生的，比如向第三方对象中添加属性时。

Symbol 的值是唯一的，独一无二的不会重复的

## 基础知识

```
let hd = Symbol();
let edu = Symbol();
console.log(hd); //symbol
console.log(hd == edu); //false
```

Symbol 不可以添加属性
```
let hd = Symbol();
hd.name = "后盾人";
console.log(hd.name); //undefined
```

## 描述参数

可传入字符串用于描述Symbol，方便在控制台分辨Symbol
```
let hd = Symbol("is name");
let edu = Symbol("这是一个测试");

console.log(hd); //Symbol(is name)
console.log(edu.toString()); //Symbol(这是一个测试)
```

传入相同参数Symbol也是独立唯一的，因为参数只是描述而已，但使用 `Symbol.for`则不会
```
let hd = Symbol("后盾人");
let edu = Symbol("后盾人");
console.log(hd == edu); //false
```

使用`description`可以获取传入的描述参数
```
let hd = Symbol("后盾人");
console.log(hd.description); //后盾人
```

## Symbol.for

根据描述获取Symbol，如果不存在则新建一个Symbol

- 使用Symbol.for会在系统中将Symbol登记
- 使用Symbol则不会登记

```
let hd = Symbol.for("后盾人");
let edu = Symbol.for("后盾人");
console.log(hd == edu); //true
```

## Symbol.keyFor

`Symbol.keyFor` 根据使用`Symbol.for`登记的Symbol返回描述，如果找不到返回`undefined` 。
```
let hd = Symbol.for("后盾人");
console.log(Symbol.keyFor(hd)); //后盾人

let edu = Symbol("houdunren");
console.log(Symbol.keyFor(edu)); //undefined
```

## 对象属性

Symbol 是独一无二的所以可以保证对象属性的唯一。

- Symbol 声明和访问使用 `[]`（变量）形式操作
- 也不能使用 `.` 语法因为 `.`语法是操作字符串属性的。

下面写法是错误的，会将`symbol` 当成**字符串**`symbol`处理
```
let symbol = Symbol("后盾人");
let obj = {
  symbol: "hdcms.com"
};
console.log(obj); // {symbol: 'hdcms.com'}
```

正确写法是以`[]` 变量形式声明和访问
```
let symbol = Symbol("后盾人");
let obj = {
  [symbol]: "houdunren.com"
};
console.log(obj[symbol]); //houdunren.com
```

# 实例操作

## 缓存操作

使用`Symbol`可以解决在保存数据时由于名称相同造成的耦合覆盖问题。
```
class Cache {
  static data = {};
  static set(name, value) {
    this.data[name] = value;
  }
  static get(name) {
    return this.data[name];
  }
}

let user = {
  name: "后盾人",
  key: Symbol("缓存")
};

let cart = {
  name: "购物车",
  key: Symbol("购物车")
};

Cache.set(user.key, user);
Cache.set(cart.key, cart);
console.log(Cache.get(user.key)); // {name: '后盾人', key: Symbol(缓存)}
```

## 遍历操作

Symbol 不能使用 `for/in`、`for/of` 遍历操作
```
let symbol = Symbol("后盾人");
let obj = {
  name: "hdcms.com",
  [symbol]: "houdunren.com"
};

for (const key in obj) {
  console.log(key); //name
}

for (const key of Object.keys(obj)) {
  console.log(key); //name
}
```

可以使用 `Object.getOwnPropertySymbols` 获取所有`Symbol`属性
```
let symbol = Symbol("后盾人");
let obj = {
  name: "hdcms.com",
  [symbol]: "houdunren.com"
};
for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(key); // Symbol(后盾人)
}
```

也可以使用 `Reflect.ownKeys(obj)` 获取所有属性包括`Symbol`
```
let symbol = Symbol("后盾人");
let obj = {
  name: "hdcms.com",
  [symbol]: "houdunren.com"
};
for (const key of Reflect.ownKeys(obj)) {
  console.log(key); // name  Symbol(后盾人)
}
```

如果对象属性不想被遍历，可以使用`Symbol`保护
```
const site = Symbol("网站名称");
class User {
  constructor(name) {
    this[site] = "后盾人";
    this.name = name;
  }
  getName() {
    return `${this[site]}-${this.name}`;
  }
}
const hd = new User("向军大叔");
console.log(hd.getName());
for (const key in hd) {
  console.log(key); // 后盾人-向军大叔  name
}
```

# Set

用于存储任何类型的唯一值，无论是基本类型还是对象引用。

- 只能保存值没有键名
- 严格类型检测如字符串数字不等于数值型数字
- 值是唯一的
- 遍历顺序是添加的顺序，方便保存回调函数

## 基本使用

对象可以属性最终都会转为字符串
```
let obj = { 1: "hdcms", "1": "houdunren" };
console.table(obj); //{1:"houdunren"}
```

使用对象做为键名时，会将对象转为字符串后使用
```
let obj = { 1: "hdcms", "1": "houdunren" };
console.table(obj);

let hd = { [obj]: "后盾人" };
console.table(hd);

console.log(hd[obj.toString()]);
console.log(hd["[object Object]"]); // 后盾人
```

使用数组做初始数据
```
let hd = new Set(['后盾人', 'hdcms']);
console.log(hd.values()); //{"后盾人", "hdcms"}
```

Set 中是严格类型约束的，数值`1`与字符串`1`属于两个不同的值

使用 `add` 添加元素，不允许重复添加值
```
let hd = new Set();

hd.add('houdunren');
hd.add('hdcms');
hd.add('hdcms')

console.log(hd.values()); //SetIterator {"houdunren", "hdcms"}
```

## 获取数量