var personString = '{ "name": "Mihai", "age": 25, "gender": "M" }'
// var doubleQuotesExample = " \"name\": \"Mihai\", \"age\": 25, \"gender\": \"M\" "

var person = {
  name: "Ionut",
  age: 25,
  gender: "M"
}
var age = 25

console.log('Nume', person.name);
person.age = person.age + 1
console.log('Person Age', person.age)

console.log('Type of personString', typeof personString)
console.log('Type of person', typeof person)
console.log('Type of age', typeof age)

// deserializare
var convertedPersonStringToObject = JSON.parse(personString)

// serializare
var convertedPersonToString = JSON.stringify(person)

console.log('convertedPersonString', convertedPersonString)
console.log('convertedPersonToString', convertedPersonToString)

// console.log('Nume', personString.name);


