-- * -> Significa todos
SELECT * FROM estados

-- Seleciona na ordem desejada as colunas
-- As -> possibilita trazer com um nome na coluna diferente
SELECT nome AS estado, sigla FROM estados
-- Faz um filtro a partir de uma coluna. Como é Case Sensitive, tanto faz se é "Sul" ou "sul"
WHERE regiao = 'Sul'

SELECT
    nome, regiao 
FROM
    estados
WHERE
    populacao >= 10
-- ORDER BY -> Ordena por padrão na forma crescente. Com desc inverte a ordem
ORDER BY
    populacao DESC


-- O Uso de Elian é importante quando trabalhamos com mais de uma tabela, pois
--  existe a possibilidade de termos nome de colunas iguais para tabelas diferentes
SELECT estados.`nome` FROM estados WHERE sigla = "MA"
SELECT estados.nome FROM estados WHERE sigla = "MA"