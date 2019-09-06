// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./utils/config.js')
const jwt = require('jwt-simple')


const knexFile = require('./knexfile')['development'];
const knex = require('knex')(knexFile)

const authClass = require('./utils/auth.js')(knex);

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(authClass.initialize());

app.post('/api/login', async function (req, res) {
    if (req.body.email && req.body.password) {
        let email = req.body.email;
        let password = req.body.password;

        console.log(email, password);

        let query = await knex
            .select('id', 'email', 'password')
            .from('users')
            .where('email', email)
            .andWhere('password', password)
            .returning('id')
            
        let user = {
            id: query[0].id
        }

        if (user) {
            let payload = {
                id: user.id
            }

            let token = jwt.encode(payload, config.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
})

const CharacterBaseService = require('./Services/CharacterBaseService');
const CharacterBaseRouter = require('./Routers/CharacterBaseRouter');

const characterBaseService = new CharacterBaseService(knex);

app.use('/api/characterBase', authClass.authenticate(), (new CharacterBaseRouter(characterBaseService)).router())



app.listen(8080, () => {
    console.log('Application is listening to port 8080')
})

