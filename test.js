//using zuul ive got 100% of coverage on tests.
const Person = require('./index.js');
const expect = require('chai').expect;
//describe function is used to initialize a test
describe('In person methods/attr', function(){
    //it verb is used to generate a case of test
    it('name should be a String', function(){
        let obj = new Person(20,20,'photos', 0);
        let result = typeof (obj.returnsName()) == 'string';
        //here, on expect we can define the expected value
        expect(result).to.equal(false);
    })
    it('age should be a Number', function(){
        let obj = new Person('Diego',false,'photos', 0);
        let result = typeof obj.returnsAge() == 'number';
        expect(result).to.equal(false);
    })
    it('hobby should be a String', function(){
        let obj = new Person('Diego',20,false, 0);
        let result = typeof obj.returnsHobby() == 'string';
        expect(result).to.equal(false);
    })
    it('addBudget cannot return other string another "positive value please <3"', function(){
      let obj = new Person('Diego',20,'photo', 0);
      let result = obj.addBudget(-1);
      expect(result).to.equal("positive value please <3");
    })
    it('debitBudget cannot return other string another "positive value please <3"', function(){
      let obj = new Person('Diego',20,'photo', 0);
      let result = obj.debitBudget(-1);
      expect(result).to.equal(false);
    })
    it('changeHobby must return a string', function(){
      let obj = new Person('Diego',20,'photo', 0);
      let result = typeof obj.changeHobby() == 'string';
      expect(result).to.equal(false);
    })
    it('returnsBudget must return a number', function(){
      let obj = new Person('Diego',20,'photo', 0);
      let result = typeof obj.returnsBudget() == 'number';
      expect(result).to.equal(true);
    })
    it('debitBudget cannot receive a negative number', function(){
      let obj = new Person('Diego',20,'photo', 10);
      let result = obj.debitBudget(-10);
      expect(result).to.equal(false);

      let obj2 = new Person('Diego',20,'photo', 100);
      let result2 = obj2.debitBudget(2);
      expect(result2).to.equal(true);
    })
    it('addBudget should receive a posive number', function(){
      let p = new Person('Diego',20,'photo', 10);
      let result = p.addBudget(-10);
      expect(result).to.equal('positive value please <3');

      let p2 = new Person('Diego',20,'photo', 100);
      let result2 = p2.addBudget(2);
      expect(result2).to.equal(true);
    })

})
//karma --single run false
