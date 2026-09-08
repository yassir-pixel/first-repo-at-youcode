function defineGrade(grade) {
    if (grade < 10) {
        console.log(`grade = ${grade} -> Failed`);
    } else {
        console.log(`grade = ${grade} -> Passed`);
    }
}

let grade = 14;

defineGrade(grade);

grade = 7;

defineGrade(grade);