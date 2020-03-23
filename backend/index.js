const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Rauan Pires'
    });
})
app.listen(3332);

