//i've defined a simple Person prototype class and created some getters
var Person = function(name, age, hobby, budget){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.budget = budget;
}
Person.prototype.returnsName = function(){
    return this.name;
}

Person.prototype.returnsAge = function(){
    return this.age;
}

Person.prototype.returnsHobby = function(){
    return this.hobby;
}

Person.prototype.returnsBudget = function(){
    return this.budget;
}

Person.prototype.addBudget = function(value){
  if(value > 0){
    this.budget += value;
    return true;
  }else{
    return "positive value please <3";
  }
}

Person.prototype.debitBudget = function(value){
  if(value > 0){
    this.budget -= value;
    return true;
  }else{
    return false;
  }
}

Person.prototype.changeHobby = function(newHobby){
    this.hobby = newHobby;
    return this.hobby;
}



module.exports = Person;
