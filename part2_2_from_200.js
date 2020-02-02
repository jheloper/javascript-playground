example_scope();
example_hoisting();

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