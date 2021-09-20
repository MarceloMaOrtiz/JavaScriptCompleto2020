SELECT * FROM estados

INSERT INTO cidades (nome, area, estado_id)
VALUES ("Campinas", 795, 26)

INSERT INTO cidades (nome, area, estado_id)
VALUES
    ('Niterói', 133.9, 20)

-- Fazendo inserção com a utilização de SELECT ao invés de inserir manualmente
INSERT INTO cidades (nome, area, estado_id)
VALUES
    ('Caruaru', 920.6, (
        SELECT id
        FROM estados
        WHERE sigla = 'PE'
    ))

INSERT INTO cidades (nome, area, estado_id)
VALUES
    ('Juazeiro do Norte',
    248.2,
    (
        SELECT id
        FROM estados
        WHERE sigla = 'CE'
    ))