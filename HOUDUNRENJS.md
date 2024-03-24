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

