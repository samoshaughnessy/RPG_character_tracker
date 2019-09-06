const express = require('express');

class CharacterBaseRouter {
    constructor(characterBaseService) {
        this.characterBaseService = characterBaseService;
    }


    router() {
        let router = express.Router();


        router.get('/', (req, res) => {
            console.log(req.user);
            this.characterBaseService.listCharacters(req.user.id)
                .then((characterData) => res.json(characterData))
                .catch((err) => res.status(500).json(err))
        })

        router.get('/game/:id', (req, res) => {
            console.log(req.user);
            this.characterBaseService.listGame(req.user.id, req.params.id)
                .then((gameData) => res.json(gameData))
                .catch((err) => res.status(500).json(err))
        })

        return router;
    }
}

module.exports = CharacterBaseRouter