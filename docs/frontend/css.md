# CSS

## 文本溢出省略

* 单行省略

```css
.text{
    overflow: hidden;  /* 超出限定的宽度就隐藏内容 */
    white-space: nowrap;  /* 设置文字在一行显示不能换行 */
    text-overflow: ellipsis;  /* 规定当文本溢出时显示省略符号来代表被修剪的文本 */
}
```

* 多行省略

```css
.text{
    -webkit-line-clamp: 2;  /* 用来限制在一个块元素显示的文本的行数,2表示最多显示2行。 为了实现该效果，它需要组合其他的WebKit属性 */
    display: -webkit-box;  /* 和-webkit-line-clamp结合使用，将对象作为弹性伸缩盒子模型显示 */
    -webkit-box-orient: vertical;  /* 和-webkit-line-clamp结合使用 ，设置或检索伸缩盒对象的子元素的排列方式  */
    overflow: hidden;  /* 超出限定的宽度就隐藏内容 */
    text-overflow: ellipsis;  /* 规定当文本溢出时显示省略符号来代表被修剪的文本 */
}
```

## CSS 英文、中文强制换行与不换行的代码

1. word-break:break-all; 只对英文起作用，以字母作为换行依据
2. word-wrap:break-word; 只对英文起作用，以单词作为换行依据
3. white-space:pre-wrap; 只对中文起作用，强制换行
4. white-space:nowrap; 强制不换行，都起作用
5. white-space:nowrap; overflow:hidden; text-overflow:ellipsis; 不换行，超出部分隐藏且以省略号形式出现

```css
/* 实例 */
.p1{ word-break:break-all; width:150px;}
.p2{ word-wrap:break-word; width:150px;}
.p3{white-space:pre-wrap; width:150px;}
.p4{white-space:nowrap; width:10px;}
.p5{white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:100px;}
```

::: warning
注意：一定要指定容器的宽度(width)，否则没用。
:::

word-break 语法  
`word-break : normal | break-all | keep-all`  

参数：

* normal : 依照亚洲语言和非亚洲语言的文本规则，允许在字内换行
* break-all : 该行为与亚洲语言的normal相同。也允许非亚洲语言文本行的任意字内断开。该值适合包含一些非亚洲文本的亚洲文本
* keep-all : 与所有非亚洲语言的normal相同。对于中文，韩文，日文，不允许字断开。适合包含少量亚洲文本的非亚洲文本
