// example_scope();
// example_hoisting();
example_let();
example_const();

function example_scope() {
    var a = 10;
    console.log(a);

    function print() {
        var b = 20;
        if (true) {
            var c = 30;
        }
        console.log(c);
    }

    print();
    // ReferenceError
    // console.log(b);

    var d = "global";

    function print1() {
        console.log(d);
    }

    function print2() {
        var d = "local";
        print1();
    }

    print1();
    print2();
}

function example_hoisting() {
    hello();
    function hello() {
        console.log("Hello!");
    }

    // 아래 함수 호출은 TypeError
    hello2();
    var hello2 = function() {
        console.log("Hello!");
    }
}

function example_let() {
    if (true) {
        var functionScopeValue = "global";
        let blockScopeValue = "local";
    }
    console.log(functionScopeValue);
    // ReferenceError
    // console.log(blockScopeValue);

    let value = "outside value";
    if (true) {
        // ReferenceError
        // console.log(value);
        let value = "inside value";
    }
}

function example_const() {
    const URL = "http://js.com";
    // 아래 할당문은 오류 발생
    // URL = "http://js.com";

    if (true) {
        const URL2 = "http://js.com";
    }

    // ReferenceError
    // console.log(URL2);

    const CONST_USER = { name: "jay", age: 30 };
    console.log(CONST_USER.name, CONST_USER.age);

    CONST_USER.name = "jay2";
    CONST_USER.age = 31;
    console.log(CONST_USER.name, CONST_USER.age);

    // 아래 할당문은 오류 발생
    // CONST_USER = { name: "boo" };
}