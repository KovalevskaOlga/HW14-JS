const users = [
    { name: 'tima', age: 7, iq: 2, eyeColor: 'blue', gender: 'male', isActive: true, email: 'mail@gmail.com' },
    { name: 'barys', age: 15, iq: 5000, eyeColor: 'blue', gender: 'male', isActive: true, email: 'barys@gmail.com' },
    { name: 'ola', age: 52, iq: 0, eyeColor: 'green', gender: 'female', isActive: false, email: 'olgaa@gmail.com' },
];

// task 1 Отримати масив імен всіх користувачів (поле name).
const saveName = users.map((user) => user.name);
console.log(saveName);

// task 2 Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
const colorEye = users.map((user) => ({
    name: user.name,
    colorEye: user.eyeColor
})
);
console.log(colorEye);

// task 3 Отримати масив імен користувачів за статтю (поле gender).
const usersGender = users.map((user) => {
    return user.name + " " + user.gender
});
console.log(usersGender);

// task 4 Отримати масив тільки неактивних користувачів (поле isActive).
const statusUser = users.filter((user) => user.isActive === false).map((user) => user.name);
console.log(statusUser);

// task 5 Отримати користувача (не масив) по email (поле email, він унікальний).
const findEmail = users.find((user) => user.email === 'olgaa@gmail.com');
console.log(findEmail);

// task 6 Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).
const usersAgelimitation = (users, min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);

const minAge = 5;
const maxAge = 20;

console.log(usersAgelimitation(users, minAge, maxAge));