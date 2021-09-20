SELECT
    regiao AS 'Região',
    -- Soma todos os dados da coluna população, seguindo o Group By
    SUM(populacao) AS Total
FROM estados
-- Separa por grupos a soma, ou seja, cada região terá sua agregação
GROUP BY regiao
ORDER BY Total DESC

SELECT
    -- Soma todos os dados da coluna população
    SUM(populacao) AS Total
FROM estados

SELECT
    -- Faz a média de toda a população
    AVG(populacao) AS Total
FROM estados