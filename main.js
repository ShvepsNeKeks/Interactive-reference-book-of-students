'use strict'

let studentData = new Map();
let uniqueSubjects = new Set();

let student1 = new Student(1, 'Дима', ['Химия', 'Физика', 'Русский язык']);
let student2 = new Student(2, 'Лианна', ['Химия', 'Физика', 'Обществоезнание']);
let student3 = new Student(3, 'Степан', ['Химия', 'Физика', 'Обществоезнание', 'Биология']);

student1.addUniqueSubjects();
student2.addUniqueSubjects();
student3.addUniqueSubjects();

student1.addMap();
student2.addMap();
student3.addMap();

// findStudent(3);
console.log(studentData);
console.log(uniqueSubjects);

function createAuth() {
  const passwords = new Map('admin', '1213');

  return {
    checkPassword: (login, password) => passwords.get(login) === password
  }
}

function findStudent(id) {
  if (id == null) {
    return;
  } else if (id == '') {
    let newId = +prompt(`Пустой ID, введите корректный ID`);

    return findStudent(newId);
  } else if (!studentData.has(id)) {
    let newId = +prompt(`Студент с ID ${id} не найден. Введите корректный ID:`);

    return findStudent(newId);
  } else {
    return studentData.get(id);
  }
}

function Student(id, name, subjects) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
  this.addMap = () => studentData.set(this.id, this);
  this.addUniqueSubjects = () => this.subjects.forEach(elem => {
    uniqueSubjects.add(elem)
  });
}
