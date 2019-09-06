class CharacterBaseService {
    constructor(knex) {
        this.knex = knex;
    }

    listCharacters(user_id) {
        console.log(user_id)
        let query = this.knex('character')
            .select('*')
            .where('user_id', user_id)

        return query.then(rows => {
            console.log(rows)
            return rows
        })
    }

    listGame(user_id, game) {
        let query = this.knex('game')
            .select('*')
            .where('id', game)

        return query.then(rows => {
           
                    return rows
                })
    }
}

module.exports = CharacterBaseService;