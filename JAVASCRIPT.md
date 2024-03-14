# 学习JavaScript

## 什么是 JavaScript？
> JavaScript 是一种脚本编程语言，它可以在网页上实现复杂的功能，网页展现给你的不再是简单的静态信息，而是实时的内容更新——交互式的地图、2D/3D 动画、滚动播放的视频等等——JavaScript 就在其中。它是标准 Web 技术蛋糕的第三层，其中 HTML 和 CSS 是第一和第二层。

- HTML 是一种标记语言，用来结构化我们的网页内容并赋予内容含义，例如定义段落、标题和数据表，或在页面中嵌入图片和视频。
- CSS 是一种样式规则语言，可将样式应用于 HTML 内容，例如设置背景颜色和字体，在多个列中布局内容。
- JavaScript 是一种脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画，还有很多。（好吧，虽然它不是万能的，但可以通过简短的代码来实现神奇的功能。）

## JavaScript 在页面上做了什么？
- 浏览器在读取一个网页时，代码（HTML、CSS 和 JavaScript）将在一个运行环境（浏览器标签页）中得到执行。就像一间工厂，将原材料（代码）加工为一件产品（网页）。
![演示图](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript/execution.png)
- JavaScript 的一个非常常见的用途是通过文档对象模型 API（如上所述）动态修改 HTML 和 CSS，以更新用户界面。请注意，网页文档中的代码通常按照其在页面上出现的顺序加载和执行。如果 JavaScript 先于要修改的 HTML 和 CSS 加载和运行，则可能发生错误。

### JavaScript 运行次序
- 当浏览器执行到一段 JavaScript 代码时，通常会按从上往下的顺序执行这段代码。这意味着需要注意代码书写的顺序。比如：

```
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("输入一个新的名字：");
  para.textContent = `玩家 1：${name}`;
}
```
这里选定一个文本段落（第 1 行)，然后给它附上一个事件监听器（第 3 行），使得在它被点击时，`updateName()` 代码块（5 – 8 行）便会运行。`updateName()` 代码块（这类可以重复使用的代码块称为“函数”）向用户请求一个新名字，然后把这个名字插入到段落中以更新显示。

如果互换了代码里最初两行的顺序，会导致问题。浏览器开发者控制台将返回一个错误：`TypeError: para is undefined`。这意味着 `para` 对象还不存在，所以我们不能为它增添一个事件监听器。

## 怎样向页面添加 JavaScript？
- 可以像添加 CSS 那样将 JavaScript 添加到 HTML 页面中。CSS 使用 `<link>` 元素链接外部样式表，使用 `<style>` 元素向 HTML 嵌入内部样式表，而 JavaScript 这里只需一个元素——`<script>`。

### 内部 JavaScript
- 在 </head> 标签结束前插入以下代码：
```
<script>
  // 在此编写 JavaScript 代码
</script>
```

### 外部 JavaScript
- 在 HTML 文件所在的目录下创建一个名为 `script.js` 的新文件。请确保扩展名为 `.js`，只有这样才能被识别为 JavaScript 代码。
- 将 `<script>` 元素替换为：
```
<script src="script.js" defer></script>
```
- 在 `script.js` 文件中，添加脚本

### 内联 JavaScript 处理器
- 有时候会遇到在 HTML 中存在着一丝真实的 JavaScript 代码。它或许看上去像这样：

`js`
```
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "你点击了按钮！";
  document.body.appendChild(para);
}
```
`HTML`
```
<button onclick="createParagraph()">点我！</button>
```

- 在 `<button>` 元素中包含了一个内联的 `onclick` 处理器，使得函数在按钮被按下时运行。
- **然而请不要这样做**。这将使 JavaScript 污染了 HTML，而且效率低下。对于每个需要应用 JavaScript 的按钮，你都得手动添加 `onclick="createParagraph()"` 属性。

### 请使用 addEventListener
- 与其在 HTML 中包含 JavaScript，不如使用纯 JavaScript 构造。通过 `querySelectorAll()` 函数，可以选择页面上的所有按钮。然后可以循环遍历这些按钮，使用 `addEventListener()` 为每个按钮分配一个处理器。代码如下所示：
```
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
```
- 这样写乍看去比 onclick 属性要长一些，但是这样写会对页面上所有按钮生效，无论多少个，或添加或删除，完全无需修改 JavaScript 代码。

### 脚本调用策略
- 要让脚本调用的时机符合预期，需要解决一系列的问题。这里看似简单，实际大有文章。最常见的问题就是：HTML 元素是按其在页面中出现的次序调用的，如果用 JavaScript 来管理页面上的元素（更精确的说法是使用文档对象模型），若 JavaScript 加载于欲操作的 HTML 元素之前，则代码将出错。
- 在上文的“内部”、“外部”示例中，JavaScript 在文档头部，解析 HTML 文档体之前加载并执行。这样做是有隐患的，需要使用一些结构来避免错误发生。
- “内部”示例使用了以下结构：
```
document.addEventListener("DOMContentLoaded", () => {
  // …
});
```
- 这是一个事件监听器，它监听浏览器的 `DOMContentLoaded` 事件，其标志了 HTML 文档体完全加载和解析。该代码块中的 JavaScript 在事件被触发后才会运行，因此避免了错误。
- “外部”示例中使用了 JavaScript 的一项现代技术（`defer` 属性）来解决这一问题，它告知浏览器在遇到 `<script>` 元素时继续下载 HTML 内容。
```
<script src="script.js" defer></script>
```
- 上述情况下，脚本和 HTML 将一并加载，代码将顺利运行。

### async 和 defer
- 上述的脚本阻塞问题实际有两种解决方案——`async` 和 `defer`。我们来依次讲解。
- 浏览器遇到 `async` 脚本时不会阻塞页面渲染，而是直接下载然后运行。但是，一旦下载完成，脚本就会执行，从而阻止页面渲染。脚本的运行次序无法控制。当页面的脚本之间彼此独立，且不依赖于本页面的其他任何脚本时，`async` 是最理想的选择。
- 使用 `defer` 属性加载的脚本将按照它们在页面上出现的顺序加载。在页面内容全部加载完毕之前，脚本不会运行，如果脚本依赖于 DOM 的存在（例如，脚本修改了页面上的一个或多个元素），这一点非常有用。
- 以下是不同脚本加载方法的可视化表示，以及这对页面意味着什么：
![示意图](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript/async-defer.jpg)

#### 脚本调用策略小结：
- `async` 和 `defer` 都指示浏览器在一个单独的线程中下载脚本，而页面的其他部分（DOM 等）正在下载，因此在获取过程中页面加载不会被阻塞。
- `async` 属性的脚本将在下载完成后立即执行。这将阻塞页面，并不保证任何特定的执行顺序。
- 带有 `defer` 属性的脚本将按照它们的顺序加载，并且只有在所有脚本加载完毕后才会执行。
- 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 `async`。
- 如果脚本需要等待页面解析，且依赖于其他脚本，调用这些脚本时应使用 `defer`，将关联的脚本按所需顺序置于 HTML 的相应 `<script>` 元素中。

## 注释
> 就像 HTML 和 CSS，JavaScript 代码中也可以添加注释，浏览器会忽略它们，注释只是为你的同事（还有自己，如果半年后再看自己写的代码，还会记得其中的含义吗）提供关于代码如何工作的指引。注释非常有用，而且应该经常使用，尤其在大型应用中。注释分为两类：

- 在双斜杠（`//`）后添加单行注释
- 在 `/*` 和 `*/` 之间添加多行注释

## 变量与常量
- 变量本质上是值（例如数字或字符串）的名称。你可以使用关键字 `let` 和一个名字来创建变量。
- 常量也用于对值进行命名，但其不像变量，在创建后讲无法修改这个值。本例中用常量来保存对用户界面元素的引用。界面元素的文字可能会改变，但引用是不变的。你可以使用关键字 `const` 和一个名字来创建常量。
- 可以使用等号（`=`）和一个值来为变量或常量赋值。

## 函数
- 函函数是可复用的代码块，可以一次编写，反复运行，从而节省了大量的重复代码。它们真的很有用。定义函数的方法很多，但现在我们先集中考虑当前这个简单的方式。这里我们使用关键字 `function` 、一个函数名、一对小括号定义了一个函数。随后是一对花括号（`{ }`）。花括号内部是调用函数时要运行的所有代码:
```
function checkGuess() {
  alert("I am a placeholder");
}
```
- 要运行一个函数代码时，可以输入函数名加一对小括号。
- 让我们尝试一下。保存代码并刷新浏览器页面。然后进入 开发者工具 JavaScript 控制台，并输入以下代码：
```
checkGuess();
```
- 在按下 ***Return/Enter*** 之后，你应该会看到一个告警窗口，显示 `I am a placeholder`；我们在代码中定义了一个函数，当我们调用它时，其都会创建一个告警窗口。

## 运算符
- JavaScript 运算符允许我们执行比较、做数学运算、连接字符串，以及其他类似的事情。
- 可以使用 `+` 运算符将文本字符串连接在一起（术语“串联”（concatenation））:
```
const name = "Bingo";
name;
const hello = " says hello!";
hello;
const greeting = name + hello;
greeting;
```
- 还有一些快捷操作符可用，称为复合赋值运算符。例如，如果只希望在现有字符串末尾添加一个新串，可以这样做：
```
let name1 = "Bingo";
name1 += " says hello!";
```

这等价于：
```
let name2 = "Bingo";
name2 = name2 + " says hello!";
```

- 在执行真/假比较时（例如在条件语句中，见下表），我们使用比较运算符，例如：

| 运算符 |            名称            |                                                             示例                                                             |
|:------:|:--------------------------:|:--------------------------------------------------------------------------------------------------------------------------:|
|   `===`  | 全等（它们是否完全一样？） | ``` 5 === 2 + 4 // false```<br/> ``` 'Chris' === 'Bob' // false ```<br/> ```5 === 2 + 3 // true```<br/>``` 2 === '2' // false；数字与字符串不相等 ``` |
|   `!==`  | 不相等（它们是否不一样？） |           ``` 5 !== 2 + 4 // true ```<br/>```'Chris' !== 'Bob' // true```<br/>``` 5 !== 2 + 3 // false ```<br/>```2 !== '2' // true；数字与字符串不相等 ```           |
|   ` < `  |            小于            |                                          ``` 6 < 10 // true ```<br/>```20 < 10 // false ```                                           |
|   ` > `  |            大于            |                                          ``` 6 > 10 // false ```<br/>```20 > 10 // true  ```                                          |

## 条件语句（Conditional）
- 条件代码块能够根据某个条件的真假来选择性地运行代码。虽然看起来有点像一个函数，但它不是。条件块的最简单形式是从关键字 `if` 开始，然后是一些括号，然后是一些花括号。括号内包含一个比较。如果比较结果为 `true`，就会执行花括号内的代码。反之，花括号中的代码就会被跳过，从而执行下面的代码。

## 事件（Event）
- 侦听事件发生的结构称为事件监听器（Event Listener），响应事件触发而运行的代码块被称为事件处理器（Event Handler）。

## 循环（Loop）
- 循环是一个非常重要的编程概念，它让你能够重复运行一段代码，直到满足某个条件为止。
- 转到 浏览器开发工具 JavaScript 控制台 然后输入以下内容：
```
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```
控制台中打印出了字符串 `'apples'、'bananas'、'cherries'`。

这正是循环所为。`const fruits = ['apples', 'bananas', 'cherries'];` 这一行创建了一个数组。

`for...of` 循环提供了一种获取数组中的每一个元素的方法，并在元素的基础上运行 JavaScript 代码。`for (const fruit of fruits)` 这一行的意思是：
1. 获取 `fruits` 中的第一个元素。
2. 将 `fruit` 变量设置为这个元素，然后运行花括号 `{}` 间的代码。
3. 获取 `fruits` 中的下一个元素，然后重复步骤 2，直至到达 `fruits` 的末尾。

## 浅谈对象（Object）
- JavaScript 中一切都是对象。对象是存储在单个分组中的相关功能的集合。

# 查找并解决JavaScript代码的错误

## 错误类型

一般来说，代码错误主要分为两种:

- **语法错误**: 代码中存在拼写错误，将导致程序完全或部分不能运行，通常你会收到一些出错信息。只要熟悉语言并了解出错信息的含义，你就能够顺利修复它们。
- **逻辑错误**: 有些代码语法虽正确，但执行结果和预期相悖，这里便存在着逻辑错误。这意味着程序虽能运行，但会给出错误的结果。由于一般你不会收到来自这些错误的提示，它们通常比语法错误更难修复。