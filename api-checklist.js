// 1. Object with property (string, boolean, number, object, array, method which will return a property value)
const myFriend = {
    name: 'Akash',
    isMan: true,
    money: 22000,
    skills: { webDesign: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'TailwindCss'], },
    friends: ['Naim', 'Najifa', 'sobuj', 'Alip'],
    isRichThen: function isRichThen(name, money) {
        if (this.money > money) {
            console.log(`${this.name} has mor money then ${name}`);
        }
        else if (this.money === money) {
            console.log(`${name} and ${this.name} have same ammount`);
        }
        else {
            console.log(`${name} has mor money then ${this.name}`);
        }
    }
}
const isRIch = myFriend.isRichThen('Tabibur', 20000);
// 2. template string. minimum 3 property will be dynamic (nested object property, array second element, another property)

// 3.1: no parameter arrow function. return 89

// 3.2: single parameter arrow function. will divide input by 7

// 3.3: arrow function with two parameters.

// 3.4 multi-line arrow function. two parameter.

// 4. map divide each element by 7

// 5. map, forEach, filter, find

// 6. desctructuring on object and array