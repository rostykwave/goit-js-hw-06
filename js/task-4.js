import users from "./users.js";

const getInactiveUsers = users => {
  // твій код
    
    return users.filter(user => user.isActive === false);
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]