var userObject = require('./userService')
var obj = require('../objects')

// Mocked in-memory database for reminders
var medicationArr = obj.medications

// Add a new medication for a specific user
module.exports.addMedication = function (userId, name, dosage, frequency) {

  const user = userObject.getUserById(userId);
  const medication = {
    id: medicationArr.length + 1,
    userId,
    name,
    dosage,
    frequency
  };
  medicationArr.push(medication)
  return medication;
}

// Get all medications for a specific user
module.exports.gellAllMedications = function (userId) {

  const userMed = []
  for (let i = 0; i < medicationArr.length; i++) {
    if (medicationArr[i].userId == userId) {
      userMed.push(medicationArr[i])
    }
  }
  return userMed;
}

// Update a specific medication for a specific user by ID
module.exports.updateMedication = function (userId, medId, name, dosage, frequency) {
  
  const user = userObject.getUserById(userId);
  const medication = medicationArr.find(med => med.id === medId)

  medication.name = name;
  medication.dosage = dosage;
  medication.frequency = frequency;

  return medication;
}

// Delete a specific medication for a specific user by ID
module.exports.deleteMedication = function (userId, medId) {

  const user = userObject.getUserById(userId);
  const index = medicationArr.findIndex(med => med.id === medId)
  medicationArr.splice(index, 1)

  return ('Medication deleted successfully');
}

// Get a medication by ID
module.exports.getMedications = function (medId) {

  const meds = medicationArr.find(med => med.id == medId)
  return meds;
}
