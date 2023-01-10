// Question 1
function makeCounter(startingValue){
  let value = startingValue;
  function incrementValue(){
    value ++;
    console.log(value);
  }
return incrementValue()
}


// Question 2
class Circle {
  constructor(radius, color){
    this.radius = radius;
    this.color = color;
  } 
  drawCircle(){
    return `Drawing a ${this.color} circle.`
  }
  getCircumference(){
    return  2 * Math. PI * this.radius;
  }
  getArea(){
    return (this.radius * this.radius) * Math.PI
  }
  changeColor(color){
    this.color = color
    return this.color
  
  }

}

// Question 3
class Teacher {
  constructor(name,school,grade,subject,students){
    this.name = name;
    this.school = school;
    this.grade = grade;
    this.subject = subject;
    this.students = []
  }
  addStudent(student){
    this.students.push(student)
    return this.students.length
  }
  changeSchools(school){
    this.school = school
    return this.school
  }

}

// Question 4
class BankAccount {
  constructor(firstName, lastName, _balance) {
    this.firstName = firstName
    this.lastName = lastName
    this._balance = 0
  }
  showBalance() {
    return `Your balance is $${this._balance.toFixed(2)}.`
  }
  deposit(number) {
    this._balance = this._balance + number
    return `Your balance is $${this._balance.toFixed(2)}.`
  }
  withdraw(number) {
    if (number > this._balance) {
      return `You do not have enough funds.`
    } else {
      this._balance = this._balance - number
      return `Your balance is $${this._balance.toFixed(2)}.`
    }
  }


}

module.exports = {
  makeCounter,
  Circle,
  Teacher,
  BankAccount
};