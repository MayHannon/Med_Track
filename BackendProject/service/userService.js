let object = require("../objects");

// Mocked in-memory database for reminders
var users = object.users;

// Function to create a new user object
function createUser(name,password) {

  return {
    id: users.length + 1,
    name,
    password,
  };
}

// Function to add a user to the users array
module.exports.addUser = function (name,password) {

  const user = createUser(name,password);
  users.push(user);
  return user;
};
module.exports.logIn = function (name , password) {
  const user = users.find(user => user.name === name && user.password === password);
  if (user) {
    console.log(`Welcome`);

    return user
  } 
  else{
    console.log(`Not Found`);

  }
};

// Function to retrieve a user by their ID
module.exports.getUserById = function (userId) {

  let user = users.find((user) => user.id === userId);
  return user;
};
