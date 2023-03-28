const reminder = require("../service/reminderService");
/**
 * @param {Object} req as Object
 * @param {Object} res as Object
 * 
 */
module.exports.getReminders = async function (req, res) {

    const userId = parseInt(parseInt(req.params.userId));
    let result = reminder.getReminders(userId)
    res.send(result);

}
module.exports.markReminderAsCompleted = async function (req, res) {

    const userId = parseInt(parseInt(req.params.userId));
    const remId = parseInt(parseInt(req.params.userId));
    let result = reminder.markReminderAsCompleted(userId, remId)
    res.send(result);

}
module.exports.generateReminders = async function (req, res) {

    let userId = parseInt(req.params.userId)
    const { medicationId, time, days } = req.body;
    let result = reminder.generateReminders(userId, medicationId, time, days)
    res.send(result);

}
module.exports.updateReminders = async function (req, res) {

    let userId = parseInt(req.params.userId)
    let remId = parseInt(req.params.userId)
    const { medicationId, time, days } = req.body;
    let result = reminder.updateReminders(userId, remId, medicationId, time, days)
    res.send(result);

}
module.exports.deleteReminders = async function (req, res) {

    let userId = parseInt(req.params.userId)
    let remId = parseInt(req.params.remId)
    let result = reminder.deleteReminders(userId, remId)
    res.send(result);

}
