class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User("Nathanel", "Zamora");
console.log(user)
console.log(user.fullName);

user.fullName = 'Hirai Momo';
console.log(user.fullName);