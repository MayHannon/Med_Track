const api = require('express')();
const medications = require("../controller/medicationController");


api.post("/:userId/", function (req, res) {
    medications.addMedication(req, res)

})
api.delete("/:userId/:medId/", function (req, res) {
    medications.deleteMedicationById(req, res)

})
api.put("/:userId/:medId/", function (req, res) {
    medications.updateMedicationById(req, res)

})
api.get("/:userId/", function (req, res) {
    medications.getmedicationsForUser(req, res)

})
api.get("/:medId/", function (req, res) {
    medications.getmedicationById(req, res)

})
module.exports = api;