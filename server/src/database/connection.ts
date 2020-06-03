import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;

//Migrations = Historico do banco de dados, controle de versão do banco, é um arquivo que mostra o que precisa ser feito para o banco em cada uma das etapas/tabelas/ atualizações e tudo 

// Quando trabalha com mais pessoas e cada um criou uma coisa diferente no banco, tipo 2 tabelas diferentes, com o knex e migration é só um comando pra fazer o merge de tudo 

//pra cada item que precisa ser guardado cria-se uma tabela no SQL e cria-se uma tabela pivo para conectar os itens que se relacionam, no nosso caso são os itens coletados e os pontos de coleta que é uma relação N pra N

// Criando migration - IMPORTANTE a ordem que a gente coloca os arquivos na pasta é a ordem que elas serão executadas no banco, uma tabela pivot tem que ser criada depois das tabelas anteriores por exemplo

