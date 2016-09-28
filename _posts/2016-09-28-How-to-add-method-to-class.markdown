---
layout: post
title:  How to add method to class
date:   2016-09-28 14:36:00 +0900
categories: javascript
description: How to add method to class
---

There are two ways to add method to class

1. Class method - Using prototype
{% highlight javascript %}
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
{% end highlihgt %}



2. Static method
{% highlight javascript %}
    function bClass(){
        this.a = 3;
        this.b = 4;
    }

    bClass.logsomething = logsomething; //Result is Nan

    bClass.logsomething();

    var new_bClass = new bClass();

    new_bClass.logsomething = logsomething;

    new_bClass.logsomething();  //result is 7
{% end highlihgt %}

In {% highlight javascript %} bClass.logsomething = logsomething; {% end highlihgt %}, logsomething() is static method.<br>
It has no relationship with bClass.
