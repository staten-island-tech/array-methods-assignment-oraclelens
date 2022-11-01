const avengers = [
  { heroname: "Thor", first: "Thor", last: "Odinson", age: 1500 },
  { heroname: "Iron Man", first: "Anthony", last: "Stark", age: 53 },
  { heroname: "Captain America", first: "Steve", last: "Rogers", age: 99 },
  { heroname: "Black Widow", first: "Natasha", last: "Romanov", age: 32 },
  { heroname: "The Hulk", first: "Bruce", last: "Banner", age: 49 },
  { heroname: "Hawkeye", first: "Clint", last: "Barton", age: 36 },
  { heroname: "Black Panther", first: "T'Challa", age: 38 },
  { heroname: "Dr. Strange", first: "Stephen", last: "Strange", age: 42 },
  { heroname: "Scarlet Witch", first: "Wanda", last: "Maximoff", age: 28 },
  { heroname: "Vision", first: "Vision", age: 3 },
  { heroname: "Spiderman", first: "Peter", last: "Parker", age: 17 },
];

avengers
  .filter((avengers) => avengers.age >= 28)

  .forEach((el) => {
    console.log(el.first, el.last);
  });
