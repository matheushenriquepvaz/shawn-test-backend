const express = require('express');
const cors = require('cors');
const routes = require('../routes/routes')
const bodyParser = require('body-parser');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 

app.use('/api', routes);

var server = app.listen(process.env.PORT || 8081, function() {
        console.log(' \nListening on port ' + server.address().port);
        console.log('Servidor iniciado.');
        if(server.address().port === 8081) {
            console.log('\nURL da aplicação local: http://localhost:' + server.address().port);
        }
    }
)

module.exports = app;