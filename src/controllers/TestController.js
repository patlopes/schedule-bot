module.exports = {
    async index(req, res) {
        return response.json(["isso veio da api :)"]);
    },

    async create(req, res) {
        const {user_id, bot_id, module_id} = req.body;
        const response = {
            user_id,
            bot_id,
            module_id,
            message: "essa mensagem veio de uma resisição WEB"
        }
        console.log(response);
        return res.json(response);
    }
}

