'use strict'
// Steven is still building his tip calculator, using the same rules as before: Tip 15 % of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20 %.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above(you can check out the code from first tip calculator challenge if you need to).Use the function type you like the most.Test the function using a bill value of 100
// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
// 3. Createanarray'tips'containingthetipvalueforeachbill, calculatedfrom the function you created before
// 4. Bonus: Createanarray'total'containingthetotalvalues, sothebill + tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function!So you can just call a function as array values(so don't store the tip values in separate variables first, but right in the new array) 😉
// GOOD LUCK 😀
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
};


const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[0])];
console.log(bill, tips);

