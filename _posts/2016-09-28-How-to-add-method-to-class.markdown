---
layout: post
title:  How to add method to class
date:   2016-09-28 14:36:00 +0900
categories: javascript
description: Difference between Class.prototype.method and Class.method
---

There are two ways to add method to class<br>

1. Class method - Using prototype
```
function aClass(){
        this.a = 1;
        this.b = 2;
    }

    logsomething = function(){
        console.log(this.a+this.b);
    };

    aClass.prototype.logsomething = logsomething;
    
    var new_aClass = new aClass();

    new_aClass.logsomething();
```



2. Static method
```
    function bClass(){
        this.a = 3;
        this.b = 4;
    }

    bClass.logsomething = logsomething; //Result is Nan

    bClass.logsomething();

    var new_bClass = new bClass();

    new_bClass.logsomething = logsomething;

    new_bClass.logsomething();  //result is 7
```

In `bClass.logsomething = logsomething;` logsomething() is static method.<br>
It has no relationship with bClass.
