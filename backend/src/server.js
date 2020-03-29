const app = require('./app'); // Separa a implementacao da chamada pra ouvir na porta. Pro teste rodar sem levantar o servidor!
                              // O teste chama o app e nao o server
app.listen(3331); 