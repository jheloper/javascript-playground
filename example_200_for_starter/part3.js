example_standard_builtin_object();

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