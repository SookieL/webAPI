//? FakeData -> Replace by database
const fakeData = {
    teams: [
        {
            name: 'anderlecht',
            id: 1,
            sport: 'Foot', 
            périodicité:'mars'
        }
    ]
};


const teamService = {
    get: async (id) => {
        console.log(fakeData.teams);
        const team = fakeData.teams.find(e => e.id === id);

        return !!team ? new PlayerDTO(player) : null;
    },

    add: async (data) => {


    }

}