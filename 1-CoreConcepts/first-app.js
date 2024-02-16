// INSTALLING DEPENDENCIES
// npm init -y
// npm install typescript
// COMPILING TYPESCRIPT TO JAVASCRIPT
// npx tsc [typescript file]
//  -----------------
// | TYPED VARIABLES |
//  -----------------
var stringVariable;
stringVariable = "megaVE";
// stringVariable = 123
var numberVariable;
numberVariable = 123;
// numberVariable = "123"
var booleanVariable;
booleanVariable = false;
var undefinedVariable;
undefinedVariable = undefined;
// undefinedVariable = "something"
//  --------
// | ARRAYS |
//  --------
var arrayVariable;
arrayVariable = [1, 2, 3];
// arrayVariable = {a: 1, b: 2, c: 3}
//  ---------
// | OBJECTS |
//  ---------
var objectVariable;
objectVariable = { userName: "megaVE" };
var specificObject;
specificObject = { name: "Vinicius", userName: "megaVE" };
var completeObject;
specificObject = { name: "Vinicius", userName: "megaVE" };
var flexibleObject;
flexibleObject = { content: "" };
var BasicClass = /** @class */ (function () {
    function BasicClass() {
    }
    return BasicClass;
}());
var ComplexClass = /** @class */ (function () {
    function ComplexClass() {
    }
    return ComplexClass;
}());
var PartialClass = /** @class */ (function () {
    function PartialClass() {
    }
    return PartialClass;
}());
// class WrongPartialClass implements partialInterface {
//   userName: string;
// }
//  ------
// | ENUM |
//  ------
var restrictedEnumVariable;
restrictedEnumVariable = "ONE";
// restrictedEnumVariable = "FOUR"
//  -----------
// | FUNCTIONS |
//  -----------
function sum(a, b) {
    return a + b;
}
sum(2, 3);
// sum("2", "3")
function specificPrint(a, b) {
    console.log(a, b);
}
specificPrint({ header: "" }, { content: "" });
