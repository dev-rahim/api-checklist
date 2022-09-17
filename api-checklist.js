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
// const isRIch = myFriend.isRichThen('Tabibur', 20000);


// 2. template string. minimum 3 property will be dynamic (nested object property, array second element, another property)
const aboutMyFriend = `His name is ${myFriend.name}. He has cash ${myFriend.money}. His BestFriend is ${myFriend.friends[2]}.`;
// console.log(aboutMyFriend);

// 3.1: no parameter arrow function. return 89

const moneyHave = () => 89;
// console.log(moneyHave());

// 3.2: single parameter arrow function. will divide input by 7
const devide = (number) => (number / 7);
// console.log(devide(49));

// 3.3: arrow function with two parameters.
const addThenDevide = (number1, number2) => (number1 + number2) / 2;
// console.log(addThenDevide(50, 50));

// 3.4 multi-line arrow function. two parameter.
const addThenAdd = (number1, number2) => {
    const first = number1 + 7;
    const second = number2 + 7;
    return first + second;
}
console.log(addThenAdd(3, 13));
// 4. map divide each element by 7

// 5. map, forEach, filter, find

// 6. desctructuring on object and array