function invertString(str) {
  return str.split("").reverse().join("");
}

const originalString = "Oruj";
const invertedString = invertString(originalString);
console.log(invertedString);

//

function determineYear(age) {
  const currentYear = new Date().getFullYear();
  const yearOfBirth = currentYear - age;
  return yearOfBirth;
}

const age = 27;
const yearOfBirth = determineYear(age);
console.log(yearOfBirth);

//

const people = [
  { id: 1, name: "Oruj", fullName: "Oruj Mehrabov", age: 26, salary: 5000 },
  { id: 2, name: "Kenan", fullName: "Kenan Amiraslanov", age: 27, salary: 6000 },
  { id: 3, name: "Sahin", fullName: "Sahin Movsumzade", age: 22, salary: 2000 },
  { id: 4, name: "Orxan", fullName: "Mehrabov", age: 23, salary: 800 },
];

function getNumberOfPeople(people) {
  return people.length;
}

function calculateAverageSalary(people) {
  let totalSalary = 0;
  for (let i = 0; i < people.length; i++) {
    totalSalary += people[i].salary;
  }
  return totalSalary / people.length;
}

function searchByFullName(people, searchText) {
  const searchResults = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].fullName.includes(searchText)) {
      searchResults.push(people[i]);
    }
  }
  return searchResults;
}
const numberOfPeople = getNumberOfPeople(people);
const averageSalary = calculateAverageSalary(people);
const orujMehrabov = searchByFullName(people, "Oruj Mehrabov");
console.log("number of people: ", numberOfPeople);
console.log("average salary: ", averageSalary);
console.log("oruj mehrabov: ", orujMehrabov);