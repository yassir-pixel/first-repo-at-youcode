function defineAge(age) {
    if (age < 18) {
        console.log(`age: ${age} -> Minor`);
    } else {
        console.log(`age: ${age} -> Adult`);
    }
}
let age = 20;
defineAge(age);
age = 15;
defineAge(age);