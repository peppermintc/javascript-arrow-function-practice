class Person {
    constructor(name) {
        this.name = name;
    }

    // this -> 상위 scope의 this -> Person
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    // this -> window
    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)