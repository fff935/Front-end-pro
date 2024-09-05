const student = new Student("Alex", "Beckinhems", 2004);
const numberOfClasses = 25;

function Student(name, surname, yearOfBirth) {
  this.name = name;
  this.surname = surname;
  this.yearOfBirth = yearOfBirth;
  this.marks = [];
  this.arriving = [];
}

Student.prototype.arrivingCheck = function (arrived) {
  if (this.arriving.length < 25) {
    this.arriving.push(arrived);
  } else {
    console.log("There are already 25 writes");
  }
};

Student.prototype.listMarks = function (mark) {
  this.marks.push(mark);
};

Student.prototype.present = function () {
  this.arrivingCheck(true);
};

Student.prototype.absent = function () {
  this.arrivingCheck(false);
};

for (i = 0; i < 25; i++) {
  let y = Math.random() * 10;
  if (y > 2) {
    student.present();
  } else {
    student.absent();
  }
}

const max = Math.floor(Math.random() * 50) + 1;
for (j = 0; j < max; j++) {
  let markRand = Math.floor(Math.random() * 21) + 80;
  student.listMarks(markRand);
}

function calculateAge(student) {
  let birthYear = student.yearOfBirth;
  const today = new Date();
  const todayYear = today.getFullYear();
  let age = today.getFullYear() - birthYear;
  console.log(`Student's age is ${age}`);
}

function calculateAvgMark(student) {
  const numberOfMarks = student.marks.length;
  const sumOfMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
  const averageMark = sumOfMarks / numberOfMarks;
  console.log(`Average mark is ${averageMark}`);
}

function averageArriving(student) {
  const sumOfArriving = student.arriving.reduce((sum, arrived) => sum + arrived, 0);
  const avgArr = sumOfArriving / numberOfClasses;
  console.log(`Average arriving to classes is ${avgArr}`);
}

function summary(student) {
  const numberOfMarks = student.marks.length;
  const sumOfMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
  const averageMark = sumOfMarks / numberOfMarks;

  const sumOfArriving = student.arriving.reduce((sum, arrived) => sum + arrived, 0);
  const avgArriving = sumOfArriving / numberOfClasses;

  if (averageMark > 90 && avgArriving > 0.9) {
    return "Молодець!";
  } else if (averageMark > 90 || avgArriving > 0.9) {
    return "Добре, але можна краще";
  } else {
    return "Редиска!";
  }
}

calculateAge(student);
console.log(`Student's marks: ${student.marks}`);
calculateAvgMark(student);
console.log(`Student's arriving to classes: ${student.arriving}`);
averageArriving(student);

const result = summary(student);
console.log(result);