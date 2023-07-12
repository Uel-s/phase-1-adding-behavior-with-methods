// Your code here

class Cat {

constructor (name, sex){

    this.name = name
    this.sex = sex
}

speak (){

    return `${this.name} says meow!`
}

}

let Sasha = new Cat ("Sasha", "female")

console.log (Cat.name)

class Dog {

    constructor (name, sex){

        this.name = name
        this.sex = sex
    }

    speak (){

        return `${this.name} says woof!`
    }
}
const Rufio = new Dog ("Rufio", "male")

console.log (Dog.name)


class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }

  const bird = new Bird("Pablo", "male");
const bird2 = new Bird("Mable", "female");


console.log(bird.speak());   
console.log(bird2.speak());  // Output: Mable says squawk!