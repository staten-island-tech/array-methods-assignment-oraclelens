const avengers = [
  {
    heroname: "Thor",
    first: "Thor",
    last: "Odinson",
    age: 1500,
    coolNumbers: [1, 3, 5],
  },
  {
    heroname: "Iron Man",
    first: "Anthony",
    last: "Stark",
    age: 53,
    coolNumbers: [2, 4, 6],
  },

  {
    heroname: "Captain America",
    first: "Steve",
    last: "Rogers",
    age: 99,
    coolNumbers: [1, 3, 5],
  },
  {
    heroname: "Black Widow",
    first: "Natasha",
    last: "Romanov",
    age: 32,
    coolNumbers: [2, 4, 6],
  },
  {
    heroname: "The Hulk",
    first: "Bruce",
    last: "Banner",
    age: 49,
    coolNumbers: [1, 3, 5],
  },
  {
    heroname: "Hawkeye",
    first: "Clint",
    last: "Barton",
    age: 36,
    coolNumbers: [2, 4, 6],
  },
  {
    heroname: "Black Panther",
    first: "T'Challa",
    age: 38,
    coolNumbers: [1, 3, 5],
  },
  {
    heroname: "Dr. Strange",
    first: "Stephen",
    last: "Strange",
    age: 42,
    coolNumbers: [2, 4, 6],
  },
  {
    heroname: "Scarlet Witch",
    first: "Wanda",
    last: "Maximoff",
    age: 28,
    coolNumbers: [1, 3, 5],
  },
  { heroname: "Vision", first: "Vision", age: 3, coolNumbers: [2, 4, 6] },
  {
    heroname: "Spiderman",
    first: "Peter",
    last: "Parker",
    age: 17,
    coolNumbers: [1, 3, 5],
  },
];

avengers
  .filter((avenger) => avenger.age > 30)
  .forEach((avenger) => {
    console.log(avenger.first);
    avenger.coolNumbers.forEach((number) => {
      console.log(number);
    });
  });
