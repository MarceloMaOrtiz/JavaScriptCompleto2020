CREATE TABLE IF NOT EXISTS empresas (
    id INT unsigned NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    -- Campo criado só para fazer alteração na coluna posteriormente
    -- Normalmente se usa INT somente para campos que serão feitas
    --  operações. CNPJ seria melhor com um VARCHAR. O CNPJ não cabe em um
    --  INT
    cnpj INT unsigned,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

-- Troca de INT para VARCHAR
ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

-- CIDADES_EMPRESAS -> Para a relação N -> N
CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT unsigned NOT NULL,
    cidade_id INT unsigned NOT NULL,
    -- TINYINT Utilizado para armazenar somente 1 valor. 1-True, 0-False
    sede TINYINT NOT NULL,
    PRIMARY KEY(empresa_id, cidade_id)
)