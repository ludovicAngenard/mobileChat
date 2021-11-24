// app.js
const connection = require('./index.js');
const http = require('http');


function addMessage(date, res){
    var sql = `INSERT INTO message (date, contenu, recepteur, emmeteur)VALUES (${data.date}, ${data.contenu}, ${data.recepteur}, ${data.emmeteur})`
    makeRequest(sql)
    res.statusCode = 200;
    res.statusMessage = "IT'S OK";
}

function makeRequest(sql){
    connection.connect(function(err) {
        if(err){
          console.log("Error in the connection")
          console.log(err)
        }
        else{
          connection.query(sql,
          function (err, result) {
            if(err)
              console.log(`Error executing the query - ${err}`)
            else
              console.log("Result: ",result)
          })
        }
    })
}

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    var url = new URL (req.url, `http://${req.headers.host}`); //Récupération URL
    let contenu = ''
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    switch(req.method) {
        case 'GET':
        break;
        case 'POST':
            if (url.pathname == "/addUser/"){

            }
            if (url.pathname == "/addMessage/"){
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
            if (url.pathname == "/updateUser/"){

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