const app = require("express")();
const bodyParser = require('body-parser');
const cors = require("cors");
const User = require('./models/User');

app.use(cors())
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('GET request')
  })

app.get('/user', (req, res) => {
  User.findAll().then(users => {
    console.log(users)
  })
  .catch(err => console.log(err))
})


app.listen('8000',() => console.log("Server listening on port 8000"))