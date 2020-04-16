const express = require('express');
const app = express();
const bb = require('express-busboy');

const router = express.Router(); 

//dependencies for front and backend  port  matching 
const cors = require('cors');
//dependencies for DB 
const { mongoose } = require('./configDB/database');
const properties = require('./configDB/properties');

var bodyParser = require('body-parser');
const path = require('path');
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});
const bodyParserJSON = bodyParser.json();
const morgan = require('morgan');
const SourceMapSupport = require('source-map-support');
const logger = require('morgan')


// express-busboy to parse multipart/form-data
bb.extend(app);

const port = process.env.PORT || 3201;

//---------------------------------------------------------
// allow-cors
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
  

////START SERVER ////



app.use(express.json());//de esta forma podemos entender los archivos JSON que vengan de Frontend y manipularlos 
app.use(cors());
routes();

// app.get("/", (req, res) => {
//    // res.send("Hello from sdfssf " + os.hostname());
//     console.log("Hello from sdfssf " + os.hostname());
// });

// add Source Map Support
SourceMapSupport.install();


function routes() {
    // app.use('/api', require('./routes/controlRockets.routes'));
    app.use('/api', require('./routes/todo.server.route'));

}

app.get('/', (req,res) => {
    return res.end('Api working');
  })

  // catch 404
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
  });
  
  
  app.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
  });
  
  