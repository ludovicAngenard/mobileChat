var mysql = require('mysql')

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database : "mobilechat"
})

// Connecting to database

module.exports = {connection};
