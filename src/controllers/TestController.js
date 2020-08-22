module.exports = {
    async index(request, response) {
        return response.json(["isso veio da api :)"]);
    },

    async create(request, response) {
        console.log(request);
        return response.json(request.body);
    }
}