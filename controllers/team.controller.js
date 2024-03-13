import teamService from '../services/team.service.js';

const teamController = {

    get: async (req, res) => {
        const id = req.params.id;

        const team = await teamService.get(email);

        if(!team) {
            res.sendStatus(404);
            return;
        }

        res.status(200)
           .json(team);
    },



};

export default teamController;