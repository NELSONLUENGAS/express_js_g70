-- Active: 1731027127296@@127.0.0.1@5432@gestion_clientes

CREATE TABLE clientes (
    id SERIAL,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50)
);

DROP TABLE todos;

CREATE TABLE todos (
    id UUID,
    title VARCHAR(50) NOT NULL,
    done BOOLEAN DEFAULT FALSE
);

INSERT INTO
    todos
VALUES (
        DEFAULT,
        'Crear Base de datos',
        DEFAULT
    ),
    (
        DEFAULT,
        'Crear controlladores',
        DEFAULT
    ),
    (
        DEFAULT,
        'Crear Modelos',
        DEFAULT
    );

SELECT * FROM todos;