// example_standard_builtin_object();
// example_typeof_instanceof();
// example_number_isNaN();
// example_number_isInteger();
// example_array_isArray();
// example_parseInt_parseFloat();
// example_string_trim();
// example_string_slice();
example_string_substring();
example_string_length();

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

function example_number_isNaN() {
    console.log(Number.isNaN(NaN));
    console.log(Number.isNaN(undefined));
    console.log(Number.isNaN("Is it number?"));
    console.log(Number.isNaN(0));
    console.log(Number.isNaN(null));

    console.log(Number.isNaN(-1));
    console.log(Number.isNaN(0/0));
    console.log(Number.isNaN(new Date()));
    console.log(Number.isNaN(new Date().toString));
    console.log(Number.isNaN(Number.isNaN("Infinity")));

    function verifyNumber(n) {
        if (!n || Number.isNaN(n)) {
            return 0;
        }
        return n;
    }

    const num1 = verifyNumber(15);
    const num2 = verifyNumber(undefined);
    const num3 = verifyNumber(null);
    const num4 = verifyNumber(NaN);
    console.log(num1 + num2 + num3 + num4);
}

function example_number_isInteger() {
    console.log(Number.isInteger(0));
    console.log(Number.isInteger(-1));
    console.log(Number.isInteger(77777777777777777777777777));
    console.log(Number.isInteger(null));
    console.log(Number.isInteger(0/0));
    console.log(Number.isInteger("Infinity"));
    console.log(Number.isInteger(true));
    console.log(Number.isInteger({}));

    function verifyInteger(n) {
        if (!Number.isInteger(n)) {
            return 0;
        }
        return n;
    }

    const num1 = verifyInteger(15);
    const num2 = verifyInteger(Infinity);
    const num3 = verifyInteger(0.05);
    console.log(num1, num2, num3);
}

function example_array_isArray() {

    function callRoll(students) {
        if(!Array.isArray(students)) {
            return;
        }

        students.forEach((student) => {
            console.log(`Are you here, ${student}`);
        });
    }

    const students = ["Jun", "Ali", "Murry", "Toby"];
    callRoll(students);
}

function example_parseInt_parseFloat() {

    console.log(parseInt("15"));
    console.log(parseInt("15", 10));
    console.log(parseInt("15", 2));
    console.log(parseInt(5.15));
    console.log(parseInt("5.15"));

    console.log(parseFloat(5.55));
    console.log(parseFloat("5.55"));
    console.log(parseFloat("5.55 number value"));
}

function example_string_trim() {
    const sentences = [
        "    ABC abc", "ABC abc    ", 
        ` first
        second third
                forth
            sentence`
    ];

    const filterSentences = (sentences) => {
        const filterd = [];
        sentences.forEach(s => {
            filterd.push(s.trim());
        })
        return filterd;
    }

    console.log(filterSentences(sentences));
}

function example_string_slice() {
    const sentence = "The sun will shine on us again";
    
    console.log(sentence.slice(13));
    console.log(sentence.slice(13, 24));
    console.log(sentence.slice(0));
    console.log(sentence.slice(0, -23));
    console.log(sentence.slice(50));
    console.log(sentence.slice(7, 2));
}

function example_string_substring() {
    const sentence = "This will be the end of Wakanda";

    console.log(sentence.substring(13));
    console.log(sentence.substring(13, 20));
    console.log(sentence.substring(0));
    console.log(sentence.substring(0, -20));
    console.log(sentence.substring(50));
    console.log(sentence.substring(20, 13));

    const sentence2 = "Wakanda Forever!!!";
    console.log(sentence2.substr(8));
    console.log(sentence2.substr(8, 7));
    console.log(sentence2.substr(0));
    console.log(sentence2.substr(-10));
    console.log(sentence2.substr(0, -3));
    console.log(sentence2.substr(30));
    console.log(sentence2.substr(0, 30));
}

function example_string_length() {
    const arr = ["short", "long sentence, it is not appropriate"];

    arr.forEach(str => {
        if (str.length < 10) {
            console.log(str);
        }
    });
}