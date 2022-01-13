// create a function that makes a student object
const createStudent = () => {
    const studentObject = {};
    studentObject.name = "Jim"
    studentObject.grade = "Sophmore"
    
    return studentObject;
}
// we need a function to add math grades
const addMathGrade = (studentObject) => {
    studentObject.math = "B";
    
    return studentObject
}
// we need a function to add history grades
const addHistoryGrade = (studentObject) => {
    studentObject.history = "C";
    
    return studentObject
}
// we need a function to add science grades
const addScienceGrade = (studentObject) => {
    studentObject.science = "A";
    
    return studentObject
}

let student = createStudent()
let mathGrade = addMathGrade(student)
let historyGrade = addHistoryGrade(student)
let scienceGrade = addScienceGrade(student)

console.log(student)