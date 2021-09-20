INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 1),
    ('Raquel Lyra', 4),
    ('Zenaldo Coutinho', NULL);

-- Mesmo setando o cidade_id para Unique é possível termos
--  mais de um Null
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Graca', null);

-- Teremos problema ao tentar inserir mais de um prefeito em uma
--  mesma cidade
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Pinheiro', 4)