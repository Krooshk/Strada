class Storage {

    constructor(name) {
        this.name = name;
    }

    get() {
        localStorage.getItem(this.name);
    }
    set(value) {
        localStorage.setItem(this.name,value);
    }

}

// Использование:
let user = new User("Иван");
user.sayHi();