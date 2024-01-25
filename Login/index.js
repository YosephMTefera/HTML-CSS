class Person {
  Person() {}
  Add(num1, num2) {
    return num1 + num2;
  }
}

let person = new Person();
const res = person.Add(3, 4);
console.log(res);
