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