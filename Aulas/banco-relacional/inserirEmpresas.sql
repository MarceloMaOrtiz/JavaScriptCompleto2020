INSERT INTO empresas
    (nome, cnpj)
VALUES
    -- Mesmo cnpj sendo um VARCHAR foi aceito o dado INT recebido
    ('Bradesco', 25436743000130),
    ('Vale', 39007984000178),
    ('Cielo', 86441004000120)

SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);