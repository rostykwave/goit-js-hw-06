import users from "./users.js";

const getUsersWithEyeColor = (users, color) => {
  // твій код
  return users.filter(user=>user.eyeColor===color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]