console.log(Infinity);
console.log(1 / Infinity);
console.log(0 / 0);
console.log(Infinity - Infinity);
console.log(0 / "string");

console.log("I'm in jeju");
console.log('Sewha ocean is wonderful!');
console.log(`Have you ever eaten Makgeolli?`);
console.log("This is the first line\nAnd this is the second line");

console.log(7 > 3);
console.log(7 < 3);

// null
var value1 = null;
console.log(value1);
console.log(typeof value1);

// undefined
var value2;
console.log(value2);
console.log(typeof value2);

// 템플릿 문자열
var cart = [
  { name: "cloth", price: 2000 },
  { name: "bag", price: 1000 }
];

var numOfItems = `number of items in bag: ${cart.length}`;
var cartTable = 
`<ul>
    <li>item: ${cart[0].name}, price: ${cart[0].price}</li>
    <li>item: ${cart[1].name}, price: ${cart[1].price}</li>
</ul>`
console.log(numOfItems);
console.log(cartTable);

var personName = 'Richard';
var helloString = 'Hello ' + personName;
var helloTemplateString = `Hello ${personName}`;
console.log(helloString === helloTemplateString);
console.log(typeof helloTemplateString);

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

// 비교 연산자
console.log(5 == 5);
console.log("5" == 5);
console.log(5 == '5');
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