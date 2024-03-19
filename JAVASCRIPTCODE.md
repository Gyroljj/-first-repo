# [Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

`Number`值表示像 `37` 或 `-9.25` 这样的浮点数。

`Number` 构造函数包含常量和处理数值的方法。其他类型的值可以使用 `Number()` 函数转换为数字。

# [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)

`typeof` 运算符返回一个字符串，表示操作数的类型。

# [Window：prompt() 方法](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt)

`window.prompt()` 指示浏览器显示一个对话框，其中有一个可选的信息，提示用户输入一些文本，并等待用户提交文本或取消对话框。

1. 语法
```
prompt()
prompt(message)
prompt(message, defaultValue)
```
2. 参数
   1. `message` 可选 : 向用户显示的一串文本。如果在提示窗口中没有什么可显示的，可以省略。
   2. `defaultValue` 可选 : 一个字符串，包含文本输入字段中显示的默认值。
3. 返回值  
   一个包含用户输入文本的字符串，或 `null`。

> 当用户点击“确定”按钮时，在输入框中输入的文本被返回。如果用户在没有输入任何文本的情况下点击确定，则返回一个空字符串。如果用户点击“取消”按钮，该函数返回 `null`。 

# [String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

`String` 对象用于表示和操作字符序列。

# [String：length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)

`String` 类型的 `length` 数据属性表示字符串的 UTF-16 码元长度。

1. 值  
一个非负整数。
2. 描述  
该属性返回字符串中的码元数量。JavaScript 使用 UTF-16 编码，其中每个 Unicode 字符可以编码为一个或两个码元，因此 `length` 返回的值可能与字符串中 Unicode 字符的实际数量不匹配。对于拉丁文、西里尔文、众所周知的 CJK 字符等常见脚本，这应该不是问题，但如果你正在处理某些脚本，例如表情符号、数学符号或生僻字，你可能需要考虑码元和字符之间的差异。

对于空字符串，`length` 为 0。

静态属性 `String.length` 与字符串的长度无关。它是 `String` 函数的参数数量（简单地说，就是它有多少个形参），也就是 1。

由于 `length` 统计的是码元而不是字符，如果你想得到字符的数量，你可以首先用它的迭代器分割字符串，它按字符进行迭代

# [String.prototype.indexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

`String` 的 `indexOf()` 方法在字符串中搜索指定子字符串，并返回其第一次出现的位置索引。它可以接受一个可选的参数指定搜索的起始位置，如果找到了指定的子字符串，则返回的位置索引大于或等于指定的数字。

# [String.prototype.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

`slice()` 方法提取字符串的一部分，并将其作为新字符串返回，而不修改原始字符串。

# [String.prototype.toLowerCase()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

`String` 的 `toLowerCase()` 方法将该字符串转换为小写形式。

# [String.prototype.toUpperCase()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

`String` 的 `toUpperCase()` 方法将该字符串转换为大写形式。

# [String.prototype.replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

`replace()` 方法返回一个新字符串，其中一个、多个或所有匹配的 `pattern` 被替换为 `replacement`。`pattern` 可以是字符串或 `RegExp`，`replacement` 可以是字符串或一个在每次匹配时调用的函数。如果 `pattern` 是字符串，则只会替换第一个匹配项。原始的字符串不会改变。

