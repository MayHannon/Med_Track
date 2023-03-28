var userObject = require('./userService')
var medicationObject = require('./medicationService')
var obj = require('../objects')

// Mocked in-memory database for reminders
var reminderArr = obj.reminders

// Function to generate reminders for a medication based on the medication's frequency
module.exports.generateReminders = function (userId, medicationId, time, days) {

  const user = userObject.getUserById(userId);
  const medication = medicationObject.getMedications(medicationId)

  if (medication && user) {
    const id = reminderArr.length + 1;
    const reminder = {
      id,
      userId,
      medicationId,
      time,
      days,
      completed: false
    };
    reminderArr.push(reminder)
    return reminder;

  } else {
    return (' Not Found');;
  }
}


// Function to get reminders for a medication for a specific user
module.exports.getReminders = function (userId) {

  const user = userObject.getUserById(userId);
  if (user) {
    const userRem = []
    for (let i = 0; i < reminderArr.length; i++) {
      if (reminderArr[i].userId == userId) {
        userRem.push(reminderArr[i])
      }
    }
    return userRem;
  } else
    return (' Not Found');


}

// Update a specific reminder for a specific user and medication by ID
module.exports.updateReminders = function (userId, remId, medicationId, time, days) {

  const user = userObject.getUserById(userId);
  var medication = medicationObject.getMedications(medicationId)

  if (medication && user) {
    const reminder = reminderArr.find(rem => rem.id == remId);

    reminder.medicationId = medicationId;
    reminder.time = time;
    reminder.days = days;
    return reminder;
  } else {
    return (' Not Found');;
  }
}

// Delete a specific reminder for a specific user and medication by ID
module.exports.deleteReminders = function (userId, remId) {

  const user = userObject.getUserById(userId);
  if (user) {
    const index = reminderArr.findIndex(reminder => reminder.id === remId);
    reminderArr.splice(index, 1);

    return ('Reminder deleted successfully');
  } else {
    return (' Not Found');;
  }
}

// Mark a specific reminder as complete for a specific user and medication by ID
module.exports.markReminderAsCompleted = function (userId, remId) {

  const user = userObject.getUserById(userId);
  const reminder = reminderArr.find(rem => rem.id == remId);

  if (reminder && user) {
    reminder.completed = true;
    return reminder;
  } else {
    return (' Not Found');;
  }
}
