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
example_type_casting();
example_array();
example_object();

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
}