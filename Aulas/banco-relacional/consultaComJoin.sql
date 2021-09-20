-- JOIN já é o select utilizando mais de uma tabela
-- Quando utilizar multiplas tabelas, é importante o uso de Elias
-- Ao fazer esse SELECT dessa forma, é feita o produto cartesiano dos dados,
--  ou seja, cada linha de uma tabela é associada com uma linha da outra
--  tabela
SELECT * FROM estados e, cidades c

-- Com o uso do WHERE começamos a fazer consultas inteligentes
SELECT * FROM estados e, cidades c
WHERE e.id = c.estado_id

-- Se utilizar o nome puro, teremos um erro, pois há o uso do nome em ambas
-- Sem utilizar o as Estado e Cidade, estava resultando somente em uma coluna
--  nome, isso não ocorre com SQL puro, mas ocorreu aqui no Plugin. Com a adição
--  do AS isso foi "corrigido"
SELECT
    e.nome AS Estado,
    c.nome AS Cidade,
    regiao AS Regiao
FROM estados e, cidades c
WHERE e.id = c.estado_id

-- Temos nesse exemplo o uso do INNER JOIN. Ainda não sei responder se há alguma
--  diferença implícita
SELECT
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
FROM estados e
-- Nesse caso utiliza somente uma tabela no FROM e a outra dentro do INNER JOIN
--  e como cláusula utiliza o ON para definir os pontos de comparação
INNER JOIN cidades c ON e.id = c.estado_id