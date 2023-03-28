const users = require("../service/userService");
/**
 * @param {Object} req as Object
 * @param {Object} res as Object
 */
module.exports.getUserById = async function (req, res) {

    let id = req.body.userId;
    let result = users.getUserById(id)
    res.send(result);

}
module.exports.addUser = async function (req, res) {

    let name = req.body.name;
    let password =req.body.password;

    let result = users.addUser(name,password)
    res.send(result);

}
module.exports.getUserById = async function (req, res) {
    
    const id = parseInt(parseInt(req.params.userId));
    let result = users.getUserById(id)
    res.send(result);

}
module.exports.logIn = async function (req, res) {
    
    let name = req.body.name;
    let password =req.body.password;
    let result = users.logIn(name , password)
    res.send(result);

}