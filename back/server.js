// app.js

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
            if (url.pathname == "/addUser/"){

            }
            if (url.pathname == "/addMessage/"){

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