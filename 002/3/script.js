'use strict'
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// GOOD LUCK 😀

const mark = {
    firstName: 'Mark',
    secondName: 'Miller',
    height: 1.69,
    weight: 78,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }

}

const john = {
    firstName: 'John',
    secondName: 'Smith',
    height: 1.95,
    weight: 92,
    calcBMI: function (height, weight) {
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi)
console.log(john.bmi)

