const express = require('express');
const bodyParser = require('body-parser');
var history = require('connect-history-api-fallback');
const cors = require('cors');
const {ObjectId} = require('mongodb');
const DB = require('./data');
const app = express();
const router = express.Router();

app.use(history())
app.use('/images', express.static('public'));
app.use('/', express.static('build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let db = null;
let dbase = null;
let applications  = null;

app.use(async (req, res, next) => {
  db        = await new DB();
  dbase     =  await db.db('cambridge');
  applications     = dbase.collection('applications');
  next();
})

router.get('/Get', async (req, res) => {
  let result = await applications.find({}).toArray()
  res.send(result); 
});
  
router.post('/Put', (req, res) => {
try {
  let  result = applications.insertOne({ level: req.body.level, name: req.body.name, phone: req.body.phone, time: Date() });
  res.send(result);
  console.log(result)
  } catch(err){
  throw err;
  }
});   

router.post('https://cambridgegroup.uz/api/leads_from_website', (req, res) => {
  try {
    let  result = { level: req.body.level, name: req.body.name, phone: req.body.phone, time: Date() };
    res.send(result);
    console.log(result)
    } catch(err){
    throw err;
    }
  });   

router.post('/Delete', async (req, res) => {
  let result = await applications.deleteOne( { _id: ObjectId(req.body._id)} );
  res.send(result);
});

router.post('/login', async(req, res) => {
  try { 
    if(req.body.login == 'cambridge' && req.body.password == 'learningcentre'){
      let user = {admin: 1, root:true}
      let token = 'fui89qwdj021iwoejcsijw9vub89UBF93R2U9FWN'
      res.send({user: token, user:user})
    } else{
      res.status(403).send('Invalid credentials');
    }
  } catch(err) {
    throw err;
  }
});

app.use('/api', router);
app.listen(process.env.PORT || 3001)