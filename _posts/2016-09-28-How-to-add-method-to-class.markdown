---
layout: post
title:  오브젝트에 메소드를 추가하는 방법에 대해
date:   2016-09-28 14:36:00 +0900
categories: javascript
description: Object.prototype.method와 Object.method
---

자바스크립트에서 오브젝트에 메소드를 추가하는 방법에는 두 가지가 있다. 하나는 프로토타입(prototype)에 메소드를 추가하는 방법이고, 다른 하나는 오브젝트에 스태틱 메소드(static method)를 추가하는 방법이다.<br>

- Prototype
{% highlight javascript %}
function testPrototype(){
        this.a = 1;
        this.b = 2;
    }

    logsomething = function(){
        console.log(this.a+this.b);
    };
    
    var testA = new testPrototype();

    testPrototype.prototype.logsomething = logsomething;
    
    var testB = new testPrototype();

    testA.logsomething();
    testB.logsomething();
{% endhighlight %}

`testA.logsomething();`와 `testB.logsomething();`둘 다 오브젝트의 멤버인 a와 b의 값의 합인 3을 출력하게 된다. 프로토타입에 logsomething()이 추가되었기 때문에, 프로토타입에 메소드가 추가되기 전에 생성된 오브젝트라도, 프로토타입에 추가된 메소드를 사용할 수 있다.<br>


- Static
{% highlight javascript %}
    function testStatic(){
        this.a = 1;
        this.b = 2;
    }
    
    logsomething = function(){
        console.log(this.a+this.b);
    };

    testStatic.logsomething = logsomething;
    
    var testA = new testStatic();

    testStatic.logsomething();
    testA.logsomething();
    
{% endhighlight %}

흥미로운 결과가 나오는데, `testStatic.logsomething();`은 Nan을 출력하고, `testA.logsomething();`은 존재하지 않는 메소드라며 오류를 출력한다. 일단 prototype의 경우와는 다르게, 이 코드에서의 logsomething은 testStatic의 static메소드이고, testA와는 전혀 관계가 없다. 그런데 여기서 testStatic은 함수이기 때문에, this키워드가 참조할 수 있는 오브젝트가 없으므로 NaN을 출력하게 된다.(이 부분은 다음 포스팅을 통해 다시 자세히 다룰 생각이다.)<br><br>
만약 제대로 출력을 하려면 `testA.logsomething = logsomething`을 퉁해 메소드를 추가할 수 있으며, 이 경우에는 this가 참조할 수 있는 오브젝트가 있으므로 `testA.logsomething()`의 결과는 3이 된다. 하지만 testA를 제외한 testStatic을 통해 생성된 다른 오브젝트들에는 logsomething메소드가 존재하지 않는다. 프로토타입에 메소드를 추가했을 때, 모든 하위 오브젝트들이 영향을 받는것과 대조적이다.<br>

