-- Há uma limitação do Plugin do VSCode ao fazer os Inner, pois informações
--  de colunas com mesmo nomes são omitidos, portanto, ids, nomes serão
--  omitidos na maioria das vezes.

-- Dessa forma temos a intersecção entre Cidades e Prefeitos
SELECT * FROM
    cidades c
INNER JOIN prefeitos p
    ON c.id = p.cidade_id;

-- Dessa forma temos a intersecção entre Cidades e Prefeitos,
--  além de todos os dados da esquerda, nesse caso as cidades por
--  ser a primeira tabela utilizada no FROM.
-- Também é possível utilizar LEFT OUTER JOIN, cumpre o mesmo papel
SELECT * FROM
    cidades c
LEFT JOIN prefeitos p
    ON c.id = p.cidade_id;

-- Dessa forma temos a intersecção entre Cidades e Prefeitos,
--  além de todos os dados da direta, nesse caso os prefeitos por
--  ser a tabela utilizada no JOIN.
-- Também é possível utilizar RIGHT JOIN, cumpre o mesmo papel
SELECT * FROM
    cidades c
RIGHT OUTER JOIN prefeitos p
    ON c.id = p.cidade_id;

-- SELECT * FROM
--     cidades c
-- FULL JOIN prefeitos p -> Não é possível utilizar diretamenente
--     ON c.id = p.cidade_id
-- Para resolver é possível utilizar UNION ou UNION ALL, UNION ALL
--  além de trazer a união, trás também dados repetidos, pois a união
--  é feita em ambas direções
SELECT * FROM
    cidades c
LEFT JOIN prefeitos p
    ON c.id = p.cidade_id
UNION
-- UNION ALL
SELECT * FROM
    cidades c
RIGHT OUTER JOIN prefeitos p
    ON c.id = p.cidade_id;

