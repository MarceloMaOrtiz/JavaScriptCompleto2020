INSERT INTO estados (nome, sigla, regiao, populacao)
VALUES('Acre', 'AC', 'Norte', 0.83);

INSERT INTO estados
    (nome, sigla, regiao, populacao)
VALUES
    ('Alagoas', 'AL', 'Nordeste', 3.38),
    ('Amapá', 'AP', 'Norte', 0.8),
    ('Amazonas', 'AM', 'Norte', 4.06);

INSERT INTO estados
    (id, nome, sigla, regiao, populacao)
VALUES
    (1000, 'Novo', 'NV', 'Sul', 2.54)

-- Ao inserir um estado sem informarmos o id após informar, como no exemplo acima,
--  o id autoincrementado utiliza o último id utilizado
INSERT INTO estados
    (nome, sigla, regiao, populacao)
VALUES
    ('Mais Novo', 'MN', 'Norte', 2.51)

INSERT INTO estados
    (id, nome, sigla, regiao, populacao)
VALUES
    (999, 'Novo Novo', 'NN', 'Sul', 2.11)

-- Ao inserir o id do estado informando o 999, exemplo acima, ele funcionou, e ao utilizar
--  o autoincremento, automaticamente foi utilizado baseado no maior ID, 1002
INSERT INTO estados
    (nome, sigla, regiao, populacao)
VALUES
    ('Teste Bug', 'TB', 'Sudeste', 1.46)

INSERT INTO estados
    (id, nome, sigla, regiao, populacao)
VALUES
    (400, 'Será', 'SR', 'Nordeste', 0.11)

-- Esse exemplo provou que o autoincremento utilizará como base o maior ID da tabela, antes
--  de incrementar em 1
INSERT INTO estados
    (nome, sigla, regiao, populacao)
VALUES
    ('Teste 401', 'T4', 'Centro-Oeste', 1.46)