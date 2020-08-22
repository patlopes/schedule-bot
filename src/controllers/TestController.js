module.exports = {
    async index(request, response) {
        return response.json(["isso veio da api :)"]);
    },

    async create(request, response) {
        console.log(request.body);
        return response.json(request.body);
    }
}