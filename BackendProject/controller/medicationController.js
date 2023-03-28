const medications = require("../service/medicationservice");
/**
 * @param {Object} req as Object
 * @param {Object} res as Object
 */

module.exports.addMedication = async function (req, res) {

    let name = req.body.name;
    let dosage = req.body.dosage;
    let frequency = req.body.frequency;
    let userId = parseInt(req.params.userId);
    let result = medications.addMedication(userId, name, dosage, frequency)
    res.send(result);

}
module.exports.deleteMedicationById = async function (req, res) {

    const userId = parseInt(parseInt(req.params.userId));
    const medId = parseInt(req.params.medId);
    let result = medications.deleteMedication(userId, medId)
    res.send(result);

}
module.exports.updateMedicationById = async function (req, res) {

    const userId = parseInt(parseInt(req.params.userId));
    const medId = parseInt(req.params.medId);
    const { name, dosage, frequency } = req.body;
    let result = medications.updateMedication(userId, medId, name, dosage, frequency)
    res.send(result);

}
module.exports.getmedicationsForUser = async function (req, res) {

    const userId = parseInt(req.params.userId);
    let result = medications.gellAllMedications(userId)
    res.send(result);

}
module.exports.getmedicationById = async function (req, res) {
    
    const medId = parseInt(req.params.medId);
    let result = medications.getMedications(medId)
    res.send(result);

}