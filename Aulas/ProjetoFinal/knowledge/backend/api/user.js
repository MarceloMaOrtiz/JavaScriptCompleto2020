module.exports = app => {
    const save = (req, res) => {
        res.send('user save')
    }

    // Dessa forma é possível exportar as funções
    return { save }
}