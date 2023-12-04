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
