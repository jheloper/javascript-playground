// example_standard_builtin_object();
example_typeof_instanceof();

function example_standard_builtin_object() {
    const str = new String("Javascript");
    const num = new Number(200);
    const bool = new Boolean(true);
    const date = new Date();
    const map = new Map();
    const set = new Set();

    console.log(Math.PI);
    console.log(Date.parse("2020-01-01"));
    console.log(JSON.parse("{}"));

    const str1 = "Javascript example 200";
    const str2 = new String("Javascript example 200");

    console.log(typeof str1);
    console.log(typeof str2);

    console.log(str1 === "Javascript example 200");
    console.log(str2 === new String("Javascript example 200"));

    console.log(str1.valueOf());
    console.log(str2.valueOf());
}

function example_typeof_instanceof() {
    const str = "Javascript";
    const strObj = new String("Javascript");
    const num = 200;
    const numObj = new Number(200);
    const bool = true;
    const boolObj = new Boolean(true);
    const func = function() {};
    const arr = [10, 200, 4000];
    const obj = { a1: "test" };
    const empty = null;
    const notCalled = undefined;

    console.log(typeof str === "string");
    console.log(typeof strObj === "object");
    console.log(typeof num === "number");
    console.log(typeof numObj === "object");
    console.log(typeof bool === "boolean");
    console.log(typeof boolObj === "object");
    console.log(typeof func === "function");
    console.log(typeof arr === "object");
    console.log(typeof obj === "object");
    console.log(typeof empty === "object");
    console.log(typeof notCalled === "undefined");

    console.log(str instanceof String);
    console.log(strObj instanceof String);
    console.log(num instanceof Number);
    console.log(numObj instanceof Number);
    console.log(bool instanceof Boolean);
    console.log(boolObj instanceof Boolean);
    console.log(arr instanceof Array);
    console.log(obj instanceof Object);
    console.log(func instanceof Function);
    console.log(empty instanceof Object);
    console.log(notCalled instanceof undefined);
}