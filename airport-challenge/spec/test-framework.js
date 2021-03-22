const chalk = require ('chalk');

class Test {
    constructor(actualValue){
        this.actualValue = actualValue;
    }

    toBe(expectedValue){
        if(expectedValue === this.actualValue){
            console.log(chalk.greenBright(`     ✅ Test successful`));
        } else {
            throw new Error(`❌ Test failed - Actual value: ${this.actualValue}, Expected value: ${expectedValue}`);
        }
    }

    toBeTruthy(){
        if(this.actualValue){
            console.log(chalk.greenBright(`     ✅ Test successful`));
        } else {
            console.log(`❌ Test failed - Expected value to be truthy but got ${this.actualValue}`);
            throw new Error(`❌ Test failed - Expected value to be truthy but got ${this.actualValue}`);
        }
    }
}

function expect(actualValue){
    return new Test(actualValue);
}

function it(testName, func){
    console.log(`Test: ${chalk.yellowBright(testName)}`);
    try {
        func();
    } catch (err) {
        console.log(chalk.redBright(err.stack));
    }
}


module.exports = {
    expect, 
    it
};

// it('A test that will fail', () => {
//     expect(1).toBe(2);
// });

// it('A test that will pass', () => {
//     expect(1).toBe(1);
// });