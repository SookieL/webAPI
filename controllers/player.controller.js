import playerService from '../services/player.service.js';

const playerController = {

    get: async (req, res) => {
        const email = req.params.email;

        const player = await playerService.get(email);

        if(!player) {
            res.sendStatus(404);
            return;
        }

        res.status(200)
           .json(player);
    },

    add: async (req, res) => {
        // TODO Validation ?
        const data = req.body;

        try {
            const player = await playerService.add(data);

            res.status(201)
               .location('/api/player/'+ data.email)
               .json(player);
        }
        catch(error) {
            res.status(400)
               .json({
                    errorMessage: error.message
               });
        }
    },
    
    update: async (req, res) => {
        // TODO Validation ?
        const email = req.params.email;
        const data = req.body;

        try {
            await playerService.update(email, data);
            res.sendStatus(204);
        }
        catch(error) {
            res.status(400)
               .json({
                    errorMessage: error.message
               });
        }
    }

};

export default playerController;