// app.js
const { connection } = require('./index.js');
const http = require('http');


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
            if (url.pathname == "/addUser"){
              connection.connect(function(err) {
                if (err){console.log(err)}
                else{
                  console.log("Connected!");
                  var sql = "INSERT INTO utilisateur (name, email, password) VALUES ('name', 'email','password')";
                  connection.query(sql, function (err, result) {

                    if (err){
                        console.log('err : ',err)
                    }
                    else{
                    console.log("1 record inserted");
                    }
                  });
                }
              });

            }
            if (url.pathname == "/addMessage"){
                connection.connect(function(err) {
                    if(err){
                      console.log("Error in the connection")
                      console.log(err)
                    }
                    else{
                      console.log(`Database Connected`)
                      connection.query(`SHOW DATABASES`,
                      function (err, result) {
                        if(err)
                          console.log(`Error executing the query - ${err}`)
                        else
                          console.log("Result: ",result)
                      })
                    }
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