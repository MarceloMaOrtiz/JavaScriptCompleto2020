CREATE TABLE IF NOT EXISTS prefeitos (
    id INT unsigned NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    -- Utilizada para fazer a relação 1 -> 1. A Diferença para a criarTabelaCidades
    --  é que o fato de ser a relação 1 -> 1 necessita de adicionar a Unique Key
    cidade_id INT unsigned,
    PRIMARY KEY (id),
    -- Garante a relação 1 -> 1
    UNIQUE KEY (cidade_id),
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
)