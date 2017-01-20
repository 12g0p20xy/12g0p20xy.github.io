---
layout: post
title: 单体模式（Singleton）
subtitle:
date: 2016-10-24
author: monad
header-img: img/home-bg.jpg
tags: [单体模式, Javascript]
---

## 使用单体模式的好处

- 用于划分命名空间
- 功能模块化，可以包装代码片段给某个单独的页面加载

## 基本结构（对象字面量）

```js
var Singleton = {

    attr1 : 1,
    attr2 : 'hello',
    method1 : function() {
        ...
    },

    method2 : function() {
        alert(this.attr1);
    },

    init: function() {
        ...
    }

}

// 加载
Singleton.init();
```

## 使用闭包（外部无法进行修改、只会实例化一次）

```js
var Singleton = (function() {

    // 这里都是私有属性和方法
    var attr = 1;
    function method1() {
        ...
    }

    function method2() {
        ...
    }

    return {
        // 这里的是公有属性和方法
        init: function() {
            method1();
        },

        getAttr: function() {
            return attr;
        }
    };

})();

// 加载
Singleton.init();
```

## 惰性实例化

## 分支