function randInt(start, end) {
  if (start != 0) return Math.floor(Math.random() * end + start);

  return Math.round(Math.random() * end + start);
}

const person = [
  { name: "Shivam, age:20" },
  { name: "Rahul, age:45" },
  { name: "Ajay, age:30" },
  { name: "kunal, age:15" },
];

console.log(person);
