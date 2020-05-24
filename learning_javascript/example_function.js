function getGreeting() {
    return "Hello, world!";
}

console.log(getGreeting());
console.log(getGreeting);

const f = getGreeting;
console.log(f());

const o = {};
o.f = getGreeting;
console.log(o.f());

const arr = [1, 2, 3];
arr[1] = getGreeting;
console.log(arr[1]());

// 함수의 매개변수는 함수의 참조가 아니라 값이 전달된다.
let x = 3;
console.log(`함수 호출 전 : x = ${x}`);
changeValue(x);
console.log(`함수 호출 후 : x = ${x}`);

function changeValue(x) {
    console.log(`함수 내부 : x = ${x}`);
    x = 5;
    console.log(`함수 내부(값 변경 후) : x = ${x}`);
}