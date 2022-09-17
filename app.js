console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus (number) {
    return function (plusNumber) {
        return number + plusNumber;
    }
}

const plus15 = plus(15);
const plus40 = plus(40);

console.log(plus15(10));
console.log(plus40(3));

//Exercise 2

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach((user) => {
    console.log(user.name);
  });

//Exercise 3

  users.map((user) => {
    return {
        name: user.name,
        score: user.score
    }
  })

//Exercise 4

users.filter((user) => {
    return user.isActive;
})

//Exercise 5

users.sort((a, b) => b.score - a.score);

//Exercise 6

let sum = users.reduce((acc, user) => {
    return user.score + acc;
}, 0)

let avg = users.reduce((acc, user) => {
    return user.score + acc;
}, 0) / users.length;

