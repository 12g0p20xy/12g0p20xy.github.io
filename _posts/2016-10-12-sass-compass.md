---
layout: post
title: Compass的使用 - 自动拼接精灵图
subtitle:
date: 2016-01-25
author: monad
header-img: img/post-bg-07.jpg
tags: [Compass, Sass, Sprites, 精灵图]
---

## 安装 Compass

```bash
$ gem install compass
```

进入你的目录，输入

```bash
$ compass create myproject
```

就会生成一个名称为 myproject 的项目文件夹，里面包含一个 `config.rb` 文件，这是你的项目的配置文件。还有两个子目录 `sass` 和 `stylesheets` ，前者存放 Sass 源文件，后者存放编译后的 css 文件。

## 编译

在项目根目录（myproject）下输入

```bash
$ compass compile
```

## Compass 包含的模块

- reset
- css3
- layout
- typography
- utilities

可以这样引用：

```scss
@import "compass/reset";
```

## 使用 Compass 制作精灵图

在项目文件夹里新建名为 `images` 文件夹，这里是 Compass 将会输出的目录；

`images` 里新建 `icons` 文件夹，把需要拼接的图片丢进去，只支持 png 格式；

`sass` 里新建一个 `_sprites.scss` 文件，专门用来设置精灵图：

```scss
@import "compass/utilities/sprites"; // 导入sprites模块
@import "icons/*.png"; // 图片源地址
@include all-icons-sprites; // 混合器生成精灵图代码，这里的 icons 需要随着你的文件夹名来改变
```

最终的文件夹结构类似这样：

> myproject
>
>  │── images
>
>  │  └── icons
>
>  │    └── *.png
>
>  │── sass
>
>  │── stylesheets
>
>  └── config.rb

最后编译一下就会在 images 生成精灵图，并且在 stylesheets 里的 css 文件里可以找到每个图片的定位

## 生成精灵图的一些配置（*需要放在导入 sprites 模块之前）

```scss
$icons-spacing: 2px; // 设置所有精灵图之间的间距为2px;
$icons-layout: smart; // 设置精灵地图的布局方式
...
```

附：[一个可以在线制作精灵图的网页](http://alloyteam.github.io/gopng)

参考：[阮一峰的网络日志：Compass 用法指南](http://www.ruanyifeng.com/blog/2012/11/compass.html)