module.exports = {
    async index(request, response) {
        return response.json(["hi"]);
    },

    async create(request, response) {
        console.log(request.body);
        return response.json(request.body);
    }
}