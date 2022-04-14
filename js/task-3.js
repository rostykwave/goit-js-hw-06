import users from "./users.js";

console.log(users);

const getUsersWithGender = (users, gender) => {
  // твій код
    return users.filter(user => user.gender === gender);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]