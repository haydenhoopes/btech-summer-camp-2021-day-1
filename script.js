// Part 2
const firstName = "Mike";
const lastName = "Wizowsky";
console.log(firstName);
console.log(lastName);

// Part 3
function myFullName(fName, lName)  {
    let fullName = firstName + " " + lastName;
    console.log(fullName);
}
myFullName(firstName, lastName);

// Part 4
let arrayOfAnimals = ['Chicken', 'Horse', 'Sheep', 'Bear'];
for (let i=0; i<arrayOfAnimals.length; i++) {
    console.log(arrayOfAnimals[i]);
}

// Part 5
let bestFriend = {
    firstName: "James",
    lastName: "Sullivan",
    age: 30
}
console.log(bestFriend);

// Part 6
let friends = [
    {firstName:"Don", lastName: "Carlton", age: 50},
    {firstName:"Henry", lastName: "Waternoose III", age: 60},
    {firstName:"Randall", lastName: "Boggs", age: 18}
];

// Part 7
for (friend of friends) {
    console.log(friend.firstName);
}

// Part 8
const myAge = 24;
for (friend of friends) {
    if (friend.age < myAge) {
        console.log(friend.firstName + " " + String(friend.age));
    }
};

// Extra Credit
console.log("******* This part is extra credit ********");
let totalAge = 0;
let numberOfFriends = friends.length;
for (friend of friends) {
    totalAge += friend.age;
}
console.log(totalAge/numberOfFriends + " is the average age");