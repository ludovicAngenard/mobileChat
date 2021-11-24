// app.js
const { connection } = require('./index.js');
const http = require('http');
const bcrypt = require('bcrypt');



function addMessage(data, res){
    var sql = `INSERT INTO message (date, contenu, recepteur, emmeteur)VALUES (${data.date}, ${data.contenu}, ${data.recepteur}, ${data.emmeteur})`
    makeRequest(sql)
    res.statusCode = 200;
    res.statusMessage = "IT'S OK";
}

function hashPassword(password){
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  
  return hash

}

function addUser(data, res){
    const passwordhash = hashPassword(data.password)
    var sql = `INSERT INTO utilisateur (name, email, password) VALUES (${data.name}, ${data.email},${passwordhash}`
    makeRequest(sql)
    res.statusCode = 200;
    res.statusMessage = "IT'S OK";
}



function makeRequest(sql){
          connection.query(sql,
          function (err, result) {
            if(err)
              console.log(`Error executing the query - ${err}`)
            else
              console.log("Result: ",result)
          })
}

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    var url = new URL (req.url, `http://${req.headers.host}`); //Récupération URL
    let contenu = 'hello world'
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    switch(req.method) {
        case 'GET':
        break;
        case 'POST':
            if (url.pathname == "/addUser"){
                req.on('data', chunk => {
                    data = JSON.parse(chunk);
                    addUser(data, res)
                  }).on('error', (response)=>{
                    res.statusCode = 501;
                    res.statusMessage = "NOT CORRECT";
                  })
            }
            if (url.pathname == "/addMessage"){
                req.on('data', chunk => {
                    data = JSON.parse(chunk);
                    addMessage(data, res)
                  }).on('error', (response)=>{
                    res.statusCode = 501;
                    res.statusMessage = "NOT CORRECT";
                  })
            }
        break;
        case 'PUT':
            if (url.pathname == "/updateUser"){

            }
        break;
        case 'DELETE':
        break;
    }
    res.end(contenu)
});

// Start the server on port 3000
app.listen(5000, 'localhost');
console.log('Node server running on port 5000');