---
layout: post
title: 不定高元素的水平垂直居中解决方案总结
subtitle:
date: 2016-07-01
author: monad
header-img: http://olrr17ktb.bkt.clouddn.com/17-4-28/71831480-file_1493346395169_153c.jpg
tags: [垂直居中, Css]
---

### 一、绝对定位布局 用 Margin 或 Transform 负值定位

```html
<div class="wrap">
    <div class="box"> 内容 </div>
</div>
```
```css
.wrap {
    position: relative;
}
.box {
    position: absolute;
    left: 50%;
    top: 50%;
    /*transform的百分比是相对自身计算的*/
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
```

>\+ 使用场景广
>
>\- 内容脱离文档流
>
>\- 使用margin必须要固定的宽度，使用transform不兼容低版本ie

### 二、Table 布局

```html
<div class="wrap">
    <div class="box">
        <span> 内容 </span>
    </div>
</div>
```
```css
.wrap {
    display: table;
}
.box {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.box > span {
    display: inline-block;
    *display: inline;
    zoom: 1;
}
```

>\- 3层元素
>
>\- 不兼容ie7

### 三、Inline-block

```html
<div class="wrap">
    <span></span> <!-- 我只是一个空的占位符，用来定义对齐的基线 -->
    <div class="box3"> 内容 </div>
</div>
```
```css
.wrap {
    font-size: 0;
    text-align: center;
}
.wrap > span {
    display: inline-block;
    *display: inline;
    zoom: 1;
    vertical-align: middle;
    width: 0;
    height: 100%;
}
.box {
    display: inline-block;
    *display: inline;
    zoom: 1;
    vertical-align: middle;
    font-size: 16px;
}
```

>\+ 兼容ie7
>
>\- 需要空的占位符 也可以用伪元素代替

[原理：最佳实践之多个高度不定水平实体垂直居中](http://zxc0328.github.io/2015/07/23/vertical-align-middle/)

### 四、高端先进的 flex 布局

```html
<div class="wrap">
    <div class="box"> 内容 </div>
</div>
```
```css
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    display: inline-block;
}
```

>\+ 美
>
>\- 适合移动端 pc端不用想了