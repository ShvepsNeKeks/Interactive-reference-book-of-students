'use strict'

let studentData = new Map();
let uniqueSubjects = new Set();

// let student1 = new Student(1, 'Дима', ['Химия', 'Физика', 'Русский язык']);
// studentData.set(student1.id, student1);

// // findStudent(3);

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
}
