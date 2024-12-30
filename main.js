//1

function tellFortune(
  numberOfChildren,
  partenrsName,
  geographicLocation,
  jobTitle
) {
  console.log(
    `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partenrsName} with ${numberOfChildren} kids.`
  );
}

tellFortune(2, "Emma", "As, Salt", "Programmer");

console.log("**************2*************");

function calculateDogAge(age) {
  console.log(`Your doggie is ${age * 7} years old in dog years!`);
}
calculateDogAge(2);

console.log("**************3*************");

function calculateSupply(age, amount) {
  var totalAge = 100 - age;
  const totalAmount = totalAge * 365 * amount;

  console.log(
    `You will need ${totalAmount} to last you until the ripe old age of 100`
  );
}

calculateSupply(30, 3);
console.log("**************4*************");
function greet(name) {
  console.log("hello " + name);
}
greet("eman");

console.log("**************5*************");

//1
function double(cat) {
  return 2 * cat;
}

console.log(double(7));
//2
function double(cat) {
  return 2 * cat;
}
console.log(double(2));

//3

function double(cat) {
  return 2 * cat;
}

console.log("**************6*************");

function double1(x) {
  return 2 * x;
}
function double2(w) {
  return 2 * x;
}

function double3(y) {}
function double4(x) {
  return 2 * x;
}

console.log("**************7*************");

function cube(num) {
  console.log(Math.pow(num, 3));
}

cube(5);

console.log("**************8*************");

function multiply(num, num2) {
  console.log(num * num2);
}

multiply(3, 4);

console.log("**************9*************");

function canIGetADrivingLicense(age) {
  if (age >= 20) {
    console.log("You can");
  } else {
    console.log(`You need ${20 - age} years to get one`);
  }
}

canIGetADrivingLicense(15);

console.log("**************10*************");

function sameLength(s1, s2) {
  if (s1.length === s2.length) {
    console.log("True");
  } else console.log("False");
}

sameLength("Tree", "Caps");

console.log("**************11*************");

function largerNubmer(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else console.log(num2);
}

largerNubmer(79, 9);

console.log("**************12*************");

function smallerNubmer(num, num2, num3) {
  if (num < num2 && num < num3) {
    console.log(num);
  } else if (num2 < num3) {
    console.log(num2);
  } else console.log(num3);
}

smallerNubmer(1, -2, -7);

console.log("**************13*************");

function shorterString(s1, s2, s3, s4, s5) {
  strings = [s1, s2, s3, s4, s5];

  var shortest = strings[0];

  for (i = 0; i < strings.length; i++) {
    if (strings[i].length < shortest.length) {
      shortest = strings[i];
    }
  }

  console.log(shortest);
}

shorterString("Mohammad", "le", "Ayman", "Hamza", "Ali");

console.log("**************14*************");

function longerString(s1, s2, s3, s4) {
  strings = [s1, s2, s3, s4];

  var longest = strings[0];

  for (i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }

  console.log(longest);
}

longerString("Mohammad", "le", "Ayman", "Hamza");

console.log("**************15*************");

function isEven(num) {
  if (num % 2 === 0) {
    console.log(true);
  } else console.log(false);
}

isEven(7);

console.log("**************16*************");

function isOdd(num) {
  if (num % 2 !== 0) {
    console.log(true);
  } else console.log(false);
}

isOdd(7);

console.log("**************17*************");

function positive(num) {
  if (num < 0) {
    return num * -1;
  } else return num;
}

console.log(positive(-5));
console.log("**************18*************");

function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

fullName("Mohammad", "Shoqair");

console.log("**************19*************");

function average(num1, num2, num3, num4, num5) {
  console.log(`${(num1 + num2 + num3 + num4 + num5) / 5}`);
}

average(5, 7, 9, 3, 5);

console.log("**************20*************");

function randomNumber() {
  console.log(Math.random());
}

randomNumber();

console.log("**************21*************");

function randomBetweenNumbers(num1, num2) {
  var random = Math.floor(Math.random() * (num2 - num1 + 1) + num1);

  console.log(random);
}

randomBetweenNumbers(49, 60);

console.log("**************22*************");

function scoreInUniversty(result) {
  if (result >= 95) {
    console.log("A");
  } else if (result >= 85 && result < 95) {
    console.log("B");
  } else if (result >= 70 && result < 84) {
    console.log("C");
  } else if (result >= 50 && result < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}

scoreInUniversty(9);

console.log("**************23*************");

var current = -1;
function counter() {
  return function () {
    current++;
    return current;
  };
}

var count = counter();

console.log(count());
console.log(count());
console.log(count());

function resetCount() {
  console.log(`${current} and  the counter reset now `);

  current = -1;
  counter();
}

resetCount();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

resetCount();

console.log(count());
console.log(count());
