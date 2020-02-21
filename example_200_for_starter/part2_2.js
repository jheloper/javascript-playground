// example_scope();
// example_hoisting();
// example_let();
// example_const();
// example_scope_chain();
// example_closure();
// example_property_descriptor();
// example_getter_setter();
// example_arrow_function();
// example_oop();
// example_constructor();
// example_inheritance_prototype();
// example_class();
// example_inheritance_class();
// example_class_static();
// example_this();
// example_module();
// example_module_import();
// example_module_default();
// example_module_export_mutiple();
example_modult_etc();

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
  };
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

function example_getter_setter() {
  let user = {};
  Object.defineProperty(user, "age", {
    get: function() {
      return this._age;
    },
    set: function(age) {
      if (age < 0) {
        console.error("age invalid value: less than 0");
      } else {
        this._age = age;
      }
    },
    enumerable: true
  });
  user.age = 10;
  console.log(user.age);
  user.age = -1;

  let user2 = {
    get name() {
      return this._name;
    },
    set name(val) {
      if (val.length < 3) {
        throw new Error("name invalid value: less than 3");
      }
      this._name = val;
    }
  };
  user2.name = "James";
  console.log(user2.name);
  user2.name = "Jo";
}

function example_arrow_function() {
  const double = x => x + x;
  console.log(double(3));

  const add = (a, b) => a + b;
  console.log(add(3, 5));

  const printArguments = () => {
    // 책에서는 Uncaught Reference Error가 발생한다고 했으나 실제로는 비어있는 Arguments가 출력된다...?
    console.log(arguments);
  };
  printArguments(1, 2, 3, 4);

  const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  };
  console.log(sum(1, 2, 3));

  setTimeout(() => {
    console.log("arrow function");
  }, 10);
}

function example_oop() {
  const teacherJay = {
    name: "Jay",
    age: 30,
    teachJavascript: function(student) {
      student.gainExp();
    }
  };

  const studentBob = {
    name: "Bob",
    age: 20,
    exp: 0,
    gainExp: function() {
      this.exp++;
    }
  };

  console.log(studentBob.exp);
  teacherJay.teachJavascript(studentBob);
  console.log(studentBob.exp);

  // 프로토타입 기반 상속
  const studentPrototype = {
    gainExp: function() {
      this.exp++;
    }
  };

  const harry = {
      name: "Harry",
      age: 10,
      exp: 0,
      __proto__: studentPrototype
  };

  const jane = {
      name: "Jane",
      age: 20,
      exp: 10,
      __proto__: studentPrototype
  }

  jane.gainExp();
  harry.gainExp();
  harry.gainExp();
  console.log(harry);
  console.log(jane);
}

function example_constructor() {
  function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function(student) {
      console.log("student: " + student + ", subject: " + subject);
    };
  }

  const jay = new Teacher("Jay", 30, "Javascript");
  console.log(jay);
  jay.teach("Bob");

  console.log(jay.constructor);
  console.log(jay instanceof Teacher);

  const jay2 = Teacher("Jay", 30, "Javascript");
  console.log(jay2);
  console.log(age);
}

function example_inheritance_prototype() {
  function Storage() {
    this.dataStore = {};
  }

  Storage.prototype.put = function(key, data) {
    this.dataStore[key] = data;
  }

  Storage.prototype.getData = function(key) {
    return this.dataStore[key];
  }

  const productStorage = new Storage();
  productStorage.put("id001", { name: "Keyboard", price: 2000 });
  console.log(productStorage.getData("id001"));

  function RemovableStorage() {
    Storage.call(this);
  }

  RemovableStorage.prototype = Object.create(Storage.prototype);

  RemovableStorage.prototype.removeAll = function() {
    this.dataStore = {};
  }
  
  const productStorage2 = new RemovableStorage();
  productStorage2.put("id001", { name: "Keyboard", price: 2000 });
  productStorage2.removeAll();
  console.log(productStorage2.getData("id001"));
}

function example_class() {
  class Cart {
    constructor() {
      this.store = {};
    }

    addProduct(product) {
      this.store[product.id] = product;
    }

    getProduct(id) {
      return this.store[id];
    }
  }

  const cart1 = new Cart();
  cart1.addProduct({ id: 1, name: "Laptop" });
  console.log(cart1.store);

  const product = cart1.getProduct(1);
  console.log(product);
}

function example_inheritance_class() {
  class Chart {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    drawLine() {
      console.log("draw line");
    }
  }

  class BarChart extends Chart {
    constructor(width, height) {
      super(width, height);
    }

    draw() {
      this.drawLine();
      console.log(`draw ${this.width} X ${this.height} barChart`);
    }
  }

  const barChart1 = new BarChart(100, 100);
  barChart1.draw();
}

function example_class_static() {
  class Product {
    static build(name, price) {
      const id = Math.floor(Math.random() * 1000);
      return new Product(id, name, price);
    }

    static getTaxPrice(product) {
      return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  class DeposableProduct extends Product {
    depose() {
      this.deposed = true;
    }
  }

  const gum = Product.build("gum", 1000);
  console.log(gum);

  const clothes = new DeposableProduct(1, "clothes", 2000);
  const taxPrice = DeposableProduct.getTaxPrice(clothes);
  console.log(taxPrice);

  class ProductWithCode {
    static get CODE_PREFIX() {
      return "PRODUCT-";
    }

    constructor(id) {
      this.id = id;
      this.code = ProductWithCode.CODE_PREFIX + id;
    }
  }

  const product1 = new ProductWithCode("001");
  console.log(ProductWithCode.CODE_PREFIX);
  console.log(product1.code);
}

function example_this() {
  this.valueA = "A";
  console.log(valueA);
  valueB = "B";
  console.log(this.valueB);

  function checkThis() {
    console.log(this);
  }

  function checkThis2() {
    "use strict";
    console.log(this);
  }

  checkThis();
  checkThis2();
  
  function Product(name, price) {
    this.name = name;
    this.price = price;
  }

  const product1 = Product("bag", 2000);
  // 브라우저 환경에서 실행하지 않으면 window가 undefined
  // console.log(window.name);
  // console.log(window.price);

  console.log(global.name);
  console.log(global.price);

  const product2 = {
    name: "bag2",
    price: 3000,
    getVAT() {
      return this.price / 10;
    }
  }

  const valueOfProduct2 = product2.getVAT();
  console.log(valueOfProduct2);

  const calVAT = product2.getVAT;
  const VAT2 = calVAT();
  console.log(VAT2);

  const newCalVAT = calVAT.bind(product2);
  const VAT3 = newCalVAT();
  console.log(VAT3);

  const counter1 = {
    count: 0,
    addAfter1Sec() {
      setTimeout(function() {
        this.count += 1;
        console.log(this.count);
      }, 1000);
    }
  }
  counter1.addAfter1Sec();

  const counter2 = {
    count: 0,
    addAfter1Sec() {
      setTimeout(() => {
        this.count += 1;
        console.log(this.count);
      }, 1000);
    }
  }
  counter2.addAfter1Sec();
}

function example_module() {
  var namespaceA = (function() {
    var privateVariable = "private variable";
    return {
      publicApi: function() {
        console.log("can access " + privateVariable);
      }
    }
  })();
  
  console.log(namespaceA.privateVariable);
  namespaceA.publicApi();
}

import {hello} from "./test_module_1.js";

function example_module_import() {  
  hello("es6 module");
}

import Hello from "./test_module_2.js";

function example_module_default() {
  const koreanHi = new Hello("안녕하세요. ");
  koreanHi.hi("Kim");
}

import {add, Person, version, personA} from "./test_module_3.js";

function example_module_export_mutiple() {
  const result = add(1, 2);
  const peter = new Person("Peter");

  console.log(result);
  console.log(peter.name);
  console.log(version);
  console.log(personA.name);
}

import {version as moduleVersion} from "./version.js";
import * as adds from "./add.js";
import "./sideeffect.js";
import {value} from "./value.js";

function example_modult_etc() {
  const version = "v0";
  console.log(moduleVersion);

  console.log(adds.version);
  const added = adds.default(1, 2);
  console.log(added);

  hello("Larry");

  console.log(value);

  setTimeout(() => {
    console.log(value);
  }, 2000);
}