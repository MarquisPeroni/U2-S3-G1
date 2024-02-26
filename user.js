class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age === otherUser.age) {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}.`;
        } else if (this.age > otherUser.age) {
        return `${otherUser.firstName} è più giovane di ${this.firstName}.`;
        } else {
        return `${this.firstName} è più giovane di ${otherUser.firstName}.`;
        }
    }
}

const user1 = new User("Luffy","Monkey D" , 20, "Romance Dawn");
const user2 = new User("Zoro", "Roronoa", 22, "Wano");

const ageComparison = user1.compareAge(user2);

console.log(ageComparison);
