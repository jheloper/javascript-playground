// example_scope();
// example_hoisting();
// example_let();
// example_const();
// example_scope_chain();
// example_closure();
example_property_descriptor();

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

function example_scope_chain() {
    var person = "harry";

    function print() {
        var person2 = "jay";

        function innerPrint() {
            console.log(person);
            console.log(person2);
        }

        innerPrint();

        console.log("print finished");
    }

    print();
    console.log("finished");
}

function example_closure() {
    
    function createCountClosure() {
        let count = 0;
        return {
            increase: function() {
                count++;
            },
            getCount: function() {
                return count;
            }
        };
    }

    const counter1 = createCountClosure();
    const counter2 = createCountClosure();

    counter1.increase();
    counter1.increase();
    console.log("counter 1 value is : " + counter1.getCount());

    counter2.increase();
    console.log("counter 2 value is : " + counter2.getCount());
}

function example_property_descriptor() {
    let user = {
        name: "Jim"
    };
    let descriptor = Object.getOwnPropertyDescriptor(user, "name");
    console.log(descriptor);

    let user2 = {};
    Object.defineProperty(user2, "name", {
        value: "Tom",
        enumerable: true,
        configurable: true,
        writable: false
    });
    console.log(user2.name);
    user2.name = "Bob";
    console.log(user2.name);

    let user3 = {
        name: "Jane",
        toString() {
            return this.name;
        }
    };
    Object.defineProperty(user3, "toString", {
        enumerable: false
    });
    for (let key in user3) {
        console.log(key);
    }

    let user4 = {};
    Object.defineProperty(user4, "name", {
        value: "Susan",
        enumerable: true,
        configurable: false
    });
    delete user4.name;
    console.log(user4);
    // 위에서 name 속성을 configurable = false로 설정했기 때문에
    // 아래 코드는 속성 기술자로 재설정 불가, TypeError 발생.
    // Object.defineProperty(user4, "name", {
    //     writable: true
    // });
}