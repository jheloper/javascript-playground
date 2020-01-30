// example_nan_infinity();
// example_string();
// example_boolean();
// example_null_undefined();
// example_template_string();
// example_arithmetic();
// example_comparison();
// example_logical();
// example_ternary();
// example_bit();
// example_type_casting();
// example_array();
// example_object();
// example_shorthand_property();
// example_computed_property();
// example_destructuring_assignment();
example_symbol();

function example_nan_infinity() {
  console.log(Infinity);
  console.log(1 / Infinity);
  console.log(0 / 0);
  console.log(Infinity - Infinity);
  console.log(0 / "string");
}

function example_string() {
  console.log("I'm in jeju");
  console.log('Sewha ocean is wonderful!');
  console.log(`Have you ever eaten Makgeolli?`);
  console.log("This is the first line\nAnd this is the second line");
}

function example_boolean() {
  console.log(7 > 3);
  console.log(7 < 3);
}

function example_null_undefined() {
  // null
  var value1 = null;
  console.log(value1);
  console.log(typeof value1);

  // undefined
  var value2;
  console.log(value2);
  console.log(typeof value2);
}

function example_template_string() {
  // 템플릿 문자열
  var cart = [
    { name: "cloth", price: 2000 },
    { name: "bag", price: 1000 }
  ];

  var numOfItems = `number of items in bag: ${cart.length}`;
  var cartTable = `<ul>
    <li>item: ${cart[0].name}, price: ${cart[0].price}</li>
    <li>item: ${cart[1].name}, price: ${cart[1].price}</li>
</ul>`;
  console.log(numOfItems);
  console.log(cartTable);

  var personName = "Richard";
  var helloString = "Hello " + personName;
  var helloTemplateString = `Hello ${personName}`;
  console.log(helloString === helloTemplateString);
  console.log(typeof helloTemplateString);
}

function example_arithmetic() {
  // 산술 연산자
  var x = 10;
  x += 5;
  x *= 2;
  console.log(x);
  var y = 10;
  y -= 5;
  y /= 5;
  console.log(y);
  console.log(15 % 4);
  console.log(3 ** 3);
  console.log(+10);
  console.log(-10);
  var numValue = 10;
  ++numValue;
  --numValue;
  console.log(numValue);
}

function example_comparison() {
  // 비교 연산자
  console.log(5 == 5);
  console.log("5" == 5);
  console.log(5 == "5");
  console.log(5 != 1);
  console.log(5 != "1");
  console.log(5 != "5");
  console.log(5 === 5);
  console.log(5 === "5");
  console.log(5 !== 10);
  console.log(5 !== "5");
  console.log(5 > 3);
  console.log(5 < 3);
  console.log(5 <= 6);
  console.log(5 >= 5);
}

function example_logical() {
  // 논리연산자
  console.log(true && true);
  console.log(true && false);
  console.log("text" == "text" && 5 == 5);
  console.log(5 == 5 && "text1" == "text2");

  console.log(true || false);
  console.log(false || false);
  console.log("text" == "text" || 5 == 10);
}

function example_ternary() {
  var condition = 5 > 10;
  condition ? console.log("Left") : console.log("Right");
  var result = condition ? (
    console.log("ternary's first expression!"),
    "expression 1"
  ) : (
    console.log("ternary's second expression!"),
    "expression 2"
  );
  console.log(result);
}

function example_bit() {
  var num = 14;
  console.log(num.toString(2)); // 10진수를 2진수로 변환하는 법
  console.log(14 & 11);
  console.log(~14);
  console.log(14 | 11);
  console.log(14 ^ 11);
  console.log(2 << 2);
  console.log(14 >> 1);
  console.log(14 >>> 2);
}

function example_type_casting() {
  console.log("5" + 1);
  console.log("5" - 1);
  console.log("5" * 1);
  console.log("There is " + 5);
  console.log("Five" * 2);

  var str = 5 + "1";
  console.log(str);
  console.log(typeof str);

  var num = +str;
  console.log(num);
  console.log(typeof num);

  str = String(num);
  console.log(str);
  console.log(typeof str);

  num = Number(str);
  console.log(num);
  console.log(typeof num);
}

function example_array() {
  var arr = [1, 2, 3, 4, 5];
  console.log(arr.length);
  console.log(arr[0]);
  console.log(arr[2]);
  console.log(arr[8]);
}

function example_object() {

  var family = {
    "address": "Seoul",
    members: {},
    addFamily: function(age, name, role) {
      this.members[role] = {
        age: age,
        name: name
      }
    },
    getHeadCount: function() {
      return Object.keys(this.members).length;
    }
  }

  family.addFamily(30, "chloe", "aunt");
  family.addFamily(3, "lyn", "niece");
  family.addFamily(10, "dangdangi", "dog");
  console.log(family.getHeadCount());

  // 객체 속성 접근, 추가, 수정, 삭제
  var printMembers = function() {
    var members = family.members;
    for (role in members) {
      console.log("role => " + role + ", name => " + members[role].name + ", age => " + members[role].age);
    }
  }

  printMembers();

  var members = family.members;
  members["nephew"] = {age: 3, name: "hyun"};
  members.niece = {age: 5, name: "lyn"};
  delete members.aunt;
  delete members["dog"];

  printMembers();
}

function example_shorthand_property() {
  // ES6 단축 속성명
  var address = "Seoul";
  var members = {};
  var addFamily = function(age, name, role) {
    this.members[role] = {age, name};
  }
  var getHeadCount = function() {
    return Object.keys(this.members).length;
  }

  var family = {address, members, addFamily, getHeadCount};

  family.addFamily(30, "chloe", "aunt");
  family.addFamily(3, "lyn", "niece");
  family.addFamily(10, "dangdangi", "dog");
  console.log(family.getHeadCount());
}

function example_computed_property() {
  // ES6 계산된 속성명
  var obj = {};
  for (var i = 0; i < 4; i++) {
    obj["key" + i] = i;
  }
  console.log(obj);

  var profile = "chloe:30";
  var person = {
    [profile]: true,
    [profile.split(":")[0]]: profile.split(":")[1]
  };
  console.log(person);
}

function example_destructuring_assignment() {
  // 객체 비구조화 할당
  var obj = {a: 1, b: 2, c: 30, d: 44, e: 5};

  var {a, c} = obj;
  console.log(`a >>> ${a}`);
  console.log(`c >>> ${c}`);

  var {a:newA=10, f:newF=5} = obj;
  console.log(`newA >>> ${newA}`);
  console.log(`newF >>> ${newF}`);

  // 배열 비구조화 할당
  var arr = [1, 2, 30, 44, 5];

  var [b, c, ...rest] = arr;
  console.log(`0) b >>> ${b}`);
  console.log(`0) c >>> ${c}`);
  console.log(`0) rest >>> ${rest}`);

  var [a=10, f=9] = [1];
  console.log(`1) a >>> ${a}`);
  console.log(`1) f >>> ${f}`);

  [a, f] = [f, a];
  console.log(`2) a >>> ${a}`);
  console.log(`2) f >>> ${f}`);

  function getArr() {
    return [1, 2, 3, 4, 5, 6];
  }

  [a, , , , , f] = getArr();
  console.log(`3) a >>> ${a}`);
  console.log(`3) f >>> ${f}`);
}

function example_symbol() {
  const symbol = Symbol();
  const hello = Symbol("hello");

  console.log(Number(3) === Number(3));
  console.log(Symbol("symbol") === Symbol("symbol"));
  console.log(Symbol() === Symbol());
  console.log(typeof Symbol());

  const nationality = Symbol("nationality");
  const user = {
    name: "jay"
  };
  user[nationality] = "korean";
  console.log(user[nationality]);

  for (let key in user) {
    console.log(key);
  }
  console.log(Object.keys(user));
  console.log(Object.getOwnPropertyNames(user));
  console.log(JSON.stringify(user));

  const symbolProperties = Object.getOwnPropertySymbols(user);
  console.log(symbolProperties);
  console.log(user[symbolProperties[0]]);
}