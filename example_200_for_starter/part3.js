// example_standard_builtin_object();
// example_typeof_instanceof();
// example_number_isNaN();
// example_number_isInteger();
// example_array_isArray();
// example_parseInt_parseFloat();
// example_string_trim();
// example_string_slice();
// example_string_substring();
// example_string_length();
// example_toString();
// example_string_concat();
// example_charAt();
// example_string_indexOf();
// example_string_includes();
// example_string_toLowerCase_and_toUpperCase();
// example_array_from();
// example_string_split();
// example_array_push();
// example_array_unshift();
// example_array_length();
// example_array_concat();
// example_array_join();
// example_array_pop();
// example_array_shift();
example_array_slice();

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
    const func = function () {};
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
    console.log(Number.isNaN(0 / 0));
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
    console.log(Number.isInteger(0 / 0));
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
        if (!Array.isArray(students)) {
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
        "    ABC abc",
        "ABC abc    ",
        ` first
        second third
                forth
            sentence`,
    ];

    const filterSentences = (sentences) => {
        const filterd = [];
        sentences.forEach((s) => {
            filterd.push(s.trim());
        });
        return filterd;
    };

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

    arr.forEach((str) => {
        if (str.length < 10) {
            console.log(str);
        }
    });
}

function example_toString() {
    const num = 5;
    const bool = true;
    const str = "String value";
    const arr = [1, 2, 3];
    const obj = { a: 15 };

    console.log(num.toString());
    console.log(bool.toString());
    console.log(str.toString());
    console.log(arr.toString());
    console.log(obj.toString());

    num.__proto__.toString = () => {
        return "override toString";
    };
    console.log(num.toString());
}

function example_string_concat() {
    const str1 = "Good afternoon";
    const str2 = ", Good evening";
    const str3 = ", and Good night!";
    const str4 = " - The Truman Show, 1998";
    console.log(str1.concat(str2, str3, str4));
}

function example_charAt() {
    const str =
        "Good afternoon, Good evening, and Good night! " +
        "- The Truman Show, 1998";

    console.log(str.charAt(0));
    console.log(str.charAt(5));
    console.log(str.charAt(14));
    console.log(str.length);
    console.log(str.charAt(500));
}

function example_string_indexOf() {
    const str = "Carpe diem, seize the day";

    console.log(`"e" is in ${str.indexOf("e")} index.`);
    console.log(`"C" is in ${str.indexOf("C")} index.`);
    console.log(`"c" is in ${str.indexOf("c")} index.`);
    console.log(`", se" is in ${str.indexOf(", se")} index.`);

    const arr = ["Carpe", "diem", "seize", "the", "day"];
    const howManyHasE = (arr) => {
        let count = 0;
        arr.forEach((str) => {
            if (str.indexOf("e") > -1) {
                count++;
            }
        });
        return count;
    };

    console.log(`The total count of "e" in the ${arr} is ${howManyHasE(arr)}.`);
}

function example_string_includes() {
    const str = "Make your lives extradordinary";

    console.log(str.includes("Make"));
    console.log(str.includes("Make", 1));
}

function example_string_toLowerCase_and_toUpperCase() {
    console.log("Find Your Own Voice".toLowerCase());
    console.log("Find Your Own Voice".toUpperCase());

    const value = "Find Your Own Voice";
    console.log(value.toLowerCase() === value.toUpperCase());
}

function example_array_from() {
    const str = "12345678";

    const distributedArr = Array.from(str);
    console.log(distributedArr);

    const modifiedArr = Array.from(distributedArr, (el) => el * 2);
    console.log(modifiedArr);
}

function example_string_split() {
    const capitals = `Prague,Czech Republic
Copenhagen,Denmark
Paris,France
Madrid,Spain
Rome,Italy`;

    capitals.split("\n").forEach((s) => {
        const capital = s.split(",")[0];
        const country = s.split(",")[1];
        console.log(`${capital} is in ${country}`);
    });
}

function example_array_push() {
    const festa = ["mang"];
    festa.push("chimmy");
    festa.push("tata");
    festa.push("cooky");
    festa.push("shooky");
    festa.push("koya");
    festa.push("rj");

    festa.forEach((name) => {
        console.log(name);
    });
}

function example_array_unshift() {
    const festa = ["mang"];
    festa.unshift("chimmy");
    festa.unshift("tata");
    festa.unshift("cooky");
    festa.unshift("shooky");
    festa.unshift("koya");
    festa.unshift("rj");

    festa.forEach((name) => {
        console.log(name);
    });
}

function example_array_length() {
    const ship = {
        max: 4,
        passengers: [],
        onBoard: function (name) {
            if (this.passengers.length === 4) {
                console.log(
                    `This ship is full. ${name} can not board this ship.`
                );
            } else {
                this.passengers.push(name);
                console.log(`${name} boarded.`);
            }
        },
    };

    ship.onBoard("chloe");
    ship.onBoard("jay");
    ship.onBoard("david");
    ship.onBoard("asher");
    ship.onBoard("daniel");
    console.log(ship.passengers);
}

function example_array_concat() {
    const prevList = [1, 2, 3];
    const currentList = [4, 5, 6];
    const nextList = [7, 8, 9];

    console.log(prevList.concat(currentList));
    console.log(prevList.concat(currentList, nextList));

    console.log(["array"].concat("concat"));
    console.log(["array"].concat("concat", "Javascript 200"));
}

function example_array_join() {
    const dialogue = [
        "Fear is the path to the dark side",
        "Fear leads to anger",
        "Anger leads to hate",
        "Hate leads to suffering",
        "I sense much fear in you.",
    ];

    console.log(dialogue.join(". "));
    console.log(dialogue.join(".\n"));
}

function example_array_pop() {
    const arr = [1, 2, 3];

    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr.pop());
}

function example_array_shift() {
    const arr = [1, 2, 3];

    console.log(arr.shift());
    console.log(arr.shift());
    console.log(arr.shift());
    console.log(arr.shift());
}

function example_array_slice() {
    const arr = ["melon", "lemon", "source", "apple", "juice"];

    console.log(`not fruits element is ${arr.slice(2, 3)} and ${arr.slice(4, 5)}.`);
    console.log(arr.slice(0, 10));
}
