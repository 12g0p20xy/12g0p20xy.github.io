---
layout: post
title: PHP 学习小结
subtitle: 了解基础语法
date: 2017-07-26
author: monad
header-img: img/post-bg-04.jpg
tags: [PHP]
---

## 基本语法

使用 `<?php ?>` 标签可以将 PHP 代码嵌入到 HTML 文档的任意位置，保存为 .php 文件，服务器就可以执行 PHP 的内容。

PHP 支持 3 种注释风格：

```php
/*  
  多行注释
*/
// 单行注释
# 单行注释
```

## 字符串

使用 `echo` 打印字符串，需要注意在 PHP 中，双引号串中的内容会被解析，而单引号内容会被认为是普通字符。

```php
<?php
$name = "Jack";
echo "My name is $name";   // "My name is Jack"
echo 'My name is $name';   // "My name is $name"
?>
```

使用 . 来进行字符串连接

```php
<?php
echo "My name is " . "Jack"; // "My name is Jack"
?>
```

## 变量、常量

PHP 没有声明变量的命令，使用 `$变量名 = 值` 即可创建一个变量：

```php
<?php
$txt = "Hello world!";
$x = 5;
$y = 6;
$z = $x + $y;
?>
```

使用 `define()` 定义一个常量，常量不需要加 $ 修饰符，值在脚本的任何地方不能改变

```php
<?php
// 区分大小写的常量名
define("GREETING", "欢迎访问 Runoob.com");
// 不区分大小写的常量名
define("GREETING", "欢迎访问 Runoob.com", true);
?>
```

#### 作用域

变量有 4 种作用域：local、global、static、parameter，在函数外部定义的变量拥有全局作用域，需要注意如果在函数内部引用要加上 **global** 关键字；

常量默认为全局变量，而且可以直接在函数内部使用。

```php
<?php
$x = 5;           // 全局变量 

function myTest() { 
  $y = 10;        // 局部变量
  echo "$x";      // 这里获取不到 $x
  echo "$y";      // 这里可以获取 $y
  global $x;      // global 关键字用于函数内访问全局变量
  echo "$x";      // 这里可以获取 $x
}
myTest(); 

echo "$x";        // 这里可以获取 $x
echo "$y";        // 这里获取不到 $y
?>
```

## 数组

```php
<?php
// 使用 array() 创建一个数组
$array = array(1, 2, 3);
echo "$array[0]";

// 获取数组的长度
echo count($array);

// 遍历数组
$arrlength = count($array);
for($i=0; $i<$arrlength; $i++) {
  echo $array[$i];
}

// 2种方式可以关联数组（自定义键）
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
// 或者
$age['Peter'] = "35"; $age['Ben'] = "37"; $age['Joe'] = "43";
// 通过自定义键获取值
echo "Peter is " . $age['Peter'] . " years old.";
?>
```

## 运算符

#### 数组运算符

| x + y   | 集合   | x 和 y 的集合 |
| x == y  | 相等   | x 和 y 具有相同的键/值对 |
| x === y | 恒等   | x 和 y 具有相同的键/值对，且顺序相同类型相同 |
| x != y  | 不相等 |  |
| x !== y | 不恒等 |  |

#### 组合比较符

```php
<?php
echo 1 <=> 1;     // 0
echo 1 <=> 2;     // -1
echo 2 <=> 1;     // 1
echo "a" <=> "a"; // 0
echo "a" <=> "b"; // -1
echo "b" <=> "a"; // 1
?>
```

## 函数

PHP 里的函数要像这样来写：

```php
<?php
function sum($x, $y) {
  return $x + $y;
}
echo "2 + 3 =" . sum(2, 3);
?>
```

## 对象

PHP 支持类对象，类是可以包含属性和方法的结构。

> 类使用 class 关键字后加上类名定义
>
> 类的变量使用 var 来声明
>
> 类的函数只能通过该类及其实例化的对象访问

```php
<?php
class Person {
  var $name;
  function setName($name="Jack") {
    $this->name = $name;
  }
  function getName() {
    return $this->name;
  }
}

$marry = new Person();
$marry->setName("Marry");
echo $marry->getName();  // Marry
?>
```

## PHP 超级全局变量（数组）

PHP 中预定义的几个全局变量，可以在任意作用域使用。

#### $_SERVER

可以得到关于服务器的一些信息。

```php
<?php
echo $_SERVER['PHP_SELF'];
echo $_SERVER['SERVER_NAME'];
?>
```

[完整命令列表](http://www.runoob.com/php/php-superglobals.html)

#### $_REQUEST、$_POST、$_GET

常用的用于处理表单的变量。

```php
<form method="post" action="user.php">
  姓名: <input type="text" name="name">
  年龄: <input type="text" name="age">
  <button>提交</button>
</form>

<!-- user.php -->
<?php 
echo "用户名是：" . $_POST['name'];
echo "年龄是：" . $_POST['age'];
?>
```

## 处理表单

>应该优先使用客户端来验证表单，这样可以减轻服务器负载；
>
>使用服务器验证表单一种比较好的方式是把表单传递给自己，这样可以不用跳转到新页面，方便用户修改

使用 `$_SERVER["PHP_SELF"]` 将表单发送给当前页面，并且记得使用 `htmlspecialchars()` 转换 HTML 字符，防止安全性问题；

对于提交的表单数据，可以使用 `trim()` 去除用户输入数据中不必要的字符 (如：空格，tab，换行)，
使用 `stripslashes()` 去除用户输入数据中的反斜杠

下面是一个简单的示例：

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  姓名：<input type="text" name="name">
  邮箱：<input type="text" name="email">
  <button>提交</button>
</form>

<?php
  // 定义变量
  $name = $email = "";
  // 给变量赋值
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
  }
  // 去掉表单数据中不必要的字符
  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  // 输出结果
  echo "<p>姓名：$name</p>";
  echo "<p>邮箱：$email</p>";
?>
```

[一个更加完整的带验证表单](http://www.runoob.com/try/showphp.php?filename=demo_form_validation_complete)

## Ajax

通常点击按钮提交表单后会跳到新页面，使用 Ajax 可以让页面实时更新动态内容而无需跳转；

使用 GET 或 POST 来发送数据，PHP 用相应的 $_POST、$_GET 来接收。

示例：

```php
<input type="text" placeholder="实时搜索">
<p id="result"></p>

<script>
  $('input').on('keyup', function() {
    var str = $(this).val();
    // 使用 GET 传递 name
    $.get('search.php', {name: str}, function(data) {
      $('#result').html(data);
    });
  });
</script>

<!-- search.php -->
<?php
$a[]="Anna";
$a[]="Brittany";
$a[]="Cinderella";

// 获取到 ajax 传递的 name
$name = $_GET["name"];
$result = "";

for($i=0; $i<count($a); $i++) {
  if ($a[$i] === $name) {
    $result = "找到用户！$name";
  }
}
if ($result === "") {
  $result = "未找到用户！";
}

echo $result;
?> 
```

## JSON

#### json_encode()

对 PHP 变量进行 JSON 编码，执行成功返回 JSON 数据，否则返回 false

#### json_decode()

对 JSON 格式的字符串进行解码，并转换为 PHP 变量

[PHP JSON](http://www.runoob.com/php/php-json.html)

---

参考链接：[PHP 教程](http://www.runoob.com/php/php-tutorial.html)