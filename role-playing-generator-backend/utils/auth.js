const passport = require('passport');
const passportJWT = require('passport-jwt');
const configuration = require('./config.js')

const ExtractJwt = passportJWT.ExtractJwt;

module.exports = (knex) => {
    const strategy = new passportJWT.Strategy({
        secretOrKey: configuration.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (payload, done) => {

        

    //     //logic to see if user exists on database
        console.log('is this happening?')
        let query = await knex
            .select('id', 'email', 'password')
            .from('users')
            .where('id', payload.id)
            await query

            console.log(payload.id)

            let user = {
                id: query[0].id
            };
        if(user){
            return done(null, {id: user.id});
        } else {
            return done(new Error('User Not Found', null))
        }
    });

    passport.use(strategy);

    return {
        initialize: function(){
            return passport.initialize();
        },
        authenticate: function(){
    
            return passport.authenticate('jwt', configuration.jwtSession)
        }
    };

    
}