---
layout: post
title: 移动端事件的介绍和一些Tips
subtitle:
date: 2016-04-07
author: monad
header-img: img/post-bg-05.jpg
tags: [移动端, 点击事件]
---

# 移动端事件名称

### 手势事件

touchstart // 当手指接触屏幕时触发

touchmove // 当已经接触屏幕的手指开始移动后触发

touchend // 当手指离开屏幕时触发

touchcancel // 当你的手指还没有离开屏幕时，有系统级的操作发生时就会触发

### 触摸事件

gesturestart // 当两个手指接触屏幕时触发

gesturechange // 当两个手指接触屏幕后开始移动时触发

gestureend

### 屏幕旋转事件

onorientationchange

### 检测触摸屏幕的手指何时改变方向

orientationchange

### Touch 事件支持的相关属性

touches

targetTouches

changedTouches

clientX　　　　// X coordinate of touch relative to the viewport (excludes scroll offset)

clientY　　　　// Y coordinate of touch relative to the viewport (excludes scroll offset)

screenX　　　 // Relative to the screen

screenY 　　 // Relative to the screen

pageX　　 　　// Relative to the full page (includes scrolling)

pageY　　　　 // Relative to the full page (includes scrolling)

target　　　　 // Node the touch event originated from

identifier　　 // An identifying number, unique to each touch event

### 屏幕旋转事件：onorientationchange

判断屏幕是否旋转

```js
function orientationChange() {

  switch(window.orientation) {

    case 0:
      alert("肖像模式 0,screen-width: " + screen.width + "; screen-height:" + screen.height);
      break;

    case -90:
      alert("左旋 -90,screen-width: " + screen.width + "; screen-height:" + screen.height);
      break;

    case 90:
      alert("右旋 90,screen-width: " + screen.width + "; screen-height:" + screen.height);
      break;

    case 180:
      alert("风景模式 180,screen-width: " + screen.width + "; screen-height:" + screen.height);
      break;

  }

}
```

# 移动 Web 开发技巧

### 点击与 Click 事件

对于 a 标记的点击导航，默认是在 onclick 事件中处理的。而移动客户端对 onclick 的响应相比 PC 浏览器有着明显的几百毫秒延迟。

在移动浏览器中对触摸事件的响应顺序应当是：

`ontouchstart -> ontouchmove -> ontouchend -> onclick`

因此，如果确实要加快对点击事件的响应，就应当绑定 ontouchend 事件。

使用 click 会出现绑定点击区域闪一下的情况，解决：给该元素一个样式如下

`webkit-tap-highlight-color: rgba(0,0,0,0); `

*如果不使用 click，也不能简单的用 touchstart 或 touchend 替代，需要用 touchstart 的模拟一个 click 事件，并且不能发生 touchmove 事件，或者用 zepto 中的 tap（轻击）事件。*

[zepto 的 tap 事件的点透问题的几种解决方案](http://monadproxy.lofter.com/post/1cf97aac_a892bee)

### 页面的滑动效果

用 iphone 或 ipad 浏览很长的网页滚动时的滑动效果很不错吧？不过如果是一个 div，然后设置 `height:200px; overflow:auto;` 的话，可以滚动但是完全没有那滑动效果，很郁闷吧？

我看到很多网站为了实现这一效果，用了第三方类库，最常用的是 iscroll（包括新浪手机页，百度等） 我一开始也使用，不过自从用了 `-webkit-overflow-scrolling: touch;` 样式后，就完全可以抛弃第三方类库了，把它加在 body{} 区域，所有的 overflow 需要滚动的都可以生效了。

### 锁定 Viewport

ontouchmove="event.preventDefault()" //锁定 viewport，任何屏幕操作不移动用户界面（弹出键盘除外）。

来源：

[无线Web开发经验谈](http://am-team.github.io/amg/dev-exp-doc.html)

