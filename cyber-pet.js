class Animal {
    constructor(type, name, food, hunger, thirst, boredom) {
        this._type = type;
        this._name = name;
        this._food = food;
        this._hunger = 100;
        this._thirst = 100;
        this._boredom = 100;
    }
    get type() {
        return this._type;
    }
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    eat() {
        this._hunger--;
    }
    drink() {
        this._thirst--;
    }
    play() {
        this._boredom--;
    }
}

//give food choices - carrot, pear, apple, catnip, dreamies, phaal, chocolate, meatballs, 

class Rabbit extends Animal {
    constructor(type, name, food, hunger, thirst, boredom) {

    }
}
    if(food == "carrot") {
        eat();
    }
    else {
        console.log("Nah, I'm good.")
    }

class Dog extends Animal {
    constructor(type, name, food, hunger, thirst, boredom) {

    }
}