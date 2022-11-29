class Storage {
    constructor(name,storage=localStorage) {
        this.name = name;
        this.storage=storage;

    }
    get() {
        return this.storage.getItem(this.name);
    }
    set(value) {
        this.storage.setItem(this.name,value);
    }
    clear(){
        this.storage.removeItem(this.name);
    }
    isEmpty(){
        return (this.storage.getItem(this.name) ?? true);
    }
}
let personMan = new Storage("Иван",sessionStorage);
let personWoman = new Storage("Таня");
let personGranpa = new Storage("Павел");

personMan.set(20);
personWoman.set(35);
personGranpa.set(60);
personGranpa.clear();
console.log(personGranpa.isEmpty());



for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
}

/*
for(let i=0; i<sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    console.log(`${key}: ${sessionStorage.getItem(key)}`);
}*/
