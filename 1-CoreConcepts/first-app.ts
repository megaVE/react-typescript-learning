// INSTALLING DEPENDENCIES

// npm init -y
// npm install typescript

// COMPILING TYPESCRIPT TO JAVASCRIPT

// npx tsc [typescript file]

//  -----------------
// | TYPED VARIABLES |
//  -----------------

let stringVariable: string

stringVariable = "megaVE"
// stringVariable = 123

let numberVariable: number

numberVariable = 123
// numberVariable = "123"

let booleanVariable: boolean

booleanVariable = false
// booleanVariable = "false"

type UndefinedType = undefined

let undefinedVariable: UndefinedType

undefinedVariable = undefined
// undefinedVariable = "something"

//  --------
// | ARRAYS |
//  --------

let arrayVariable: Array<any>

arrayVariable = [1, 2, 3]
// arrayVariable = {a: 1, b: 2, c: 3}

//  ---------
// | OBJECTS |
//  ---------

let objectVariable: object

objectVariable = { userName: "megaVE" }
// objectVariable = "megaVE"

type SpecificObject = {
  name: string,
  userName: string,
}

let specificObject: SpecificObject

specificObject = { name: "Vinicius", userName: "megaVE" }
// specificObject = ["Vinicius", "megaVE"]

type FirstPartObject = { name: string }

type SecondPartObject = { userName : string }

type CompleteObject = FirstPartObject & SecondPartObject

let completeObject: CompleteObject

specificObject = { name: "Vinicius", userName: "megaVE" }
// specificObject = { name: "Vinicius" }
// specificObject = { userName: "megaVE" }

type FlexibleObject<A> = {
  content: A
}

let flexibleObject: FlexibleObject<string>

flexibleObject = { content: "" }
// flexibleObject = { content: 0 }

//  ------------
// | INTERFACES |
//  ------------

interface basicInterface {
  name: string,
  age: number,
}

class BasicClass implements basicInterface {
  name: string
  age: number
}

// class WrongBasicClass implements basicInterface {
//   paramether: any
// }

interface complexInterface extends basicInterface {
  hasAccount: boolean
}

class ComplexClass implements complexInterface {
  name: string
  age: number
  hasAccount: boolean
}

// class WrongComplexClass implements complexInterface {
//   hasAccount: boolean
// }

interface partialInterface {
  name: string
}

interface partialInterface {
  userName: string
}

class PartialClass implements partialInterface {
  name: string;
  userName: string;
}

// class WrongPartialClass implements partialInterface {
//   userName: string;
// }

//  ------
// | ENUM |
//  ------

let restrictedEnumVariable: "ONE" | "TWO" | "THREE"

restrictedEnumVariable = "ONE"
// restrictedEnumVariable = "FOUR"

//  -----------
// | FUNCTIONS |
//  -----------

function sum(a: number, b: number): number {
  return a + b
}

sum(2, 3)
// sum("2", "3")

function specificPrint<A, B>(a: A, b: B): void {
  console.log(a, b)
}

specificPrint({ header: "" }, { content: "" })