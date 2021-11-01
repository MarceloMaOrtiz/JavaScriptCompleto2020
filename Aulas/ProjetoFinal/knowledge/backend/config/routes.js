// Sem Consign
// const user = require('../api/user')
// Com Consign é inserido o método diretamente dentro da função

module.exports = app => {
    app.route('/users')
        // Aqui está funcionando por conta do Consign
        .post(app.api.user.save)
}