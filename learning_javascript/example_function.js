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

// 함수의 매개변수는 변수의 참조가 아니라 값이 전달된다.
function changeValue(x) {
    console.log(`함수 내부 : x = ${x}`);
    x = 5;
    console.log(`함수 내부(값 변경 후) : x = ${x}`);
}

let x = 3;
console.log(`함수 호출 전 : x = ${x}`);
changeValue(x);
console.log(`함수 호출 후 : x = ${x}`);

// 하지만 아래와 같이 원시 값이 아닌 객체의 값은 바뀐다.
function changeValueInObject(obj){
    obj.message = `함수 안에서 수정함 (이전 값 : '${obj.message}')`;
}

let obj = {
    message: "초기 값"
};
console.log(`함수를 호출하기 전 : obj.message="${obj.message}"`);
changeValueInObject(obj);
console.log(`함수를 호출한 다음 : obj.message="${obj.message}"`);