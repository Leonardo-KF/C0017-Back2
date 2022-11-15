let number1: number;
let text: string;
let bol: boolean;
let data: Date;

text = "teste";

text.length;

number1 = 2;

let person1: Person;

person1 = {
  age: 2,
  name: "Lucas",
  code: function () {
    return "conding";
  },
};

person1.age.toFixed(2);

console.log(number1);

interface person {
  name: string;
  age: number;
  code: () => string;
}

type Person = {
  name: string;
  age: number;
  code: () => string;
};

function test(person: Person): string {
  return person.name;
}
test(person1);

//flavio alvarenga + 0.5
