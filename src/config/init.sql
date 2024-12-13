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
    clientes (nombre, email)
VALUES (
        'Juan Pérez',
        'juan.perez@example.com'
    ),
    (
        'María Gómez',
        'maria.gomez@example.com'
    ),
    (
        'Carlos Rodríguez',
        'carlos.rodriguez@example.com'
    ),
    (
        'Ana Fernández',
        'ana.fernandez@example.com'
    ),
    (
        'Luis Martínez',
        'luis.martinez@example.com'
    ),
    (
        'Laura García',
        'laura.garcia@example.com'
    ),
    (
        'Pedro Sánchez',
        'pedro.sanchez@example.com'
    ),
    (
        'Marta López',
        'marta.lopez@example.com'
    ),
    (
        'Jorge Díaz',
        'jorge.diaz@example.com'
    ),
    (
        'Lucía Ramírez',
        'lucia.ramirez@example.com'
    ),
    (
        'Ricardo Torres',
        'ricardo.torres@example.com'
    ),
    (
        'Sofía Vargas',
        'sofia.vargas@example.com'
    ),
    (
        'Andrés Castillo',
        'andres.castillo@example.com'
    ),
    (
        'Elena Morales',
        'elena.morales@example.com'
    ),
    (
        'Miguel Reyes',
        'miguel.reyes@example.com'
    ),
    (
        'Gabriela Cruz',
        'gabriela.cruz@example.com'
    ),
    (
        'Fernando Herrera',
        'fernando.herrera@example.com'
    ),
    (
        'Patricia Ruiz',
        'patricia.ruiz@example.com'
    ),
    (
        'Diego Mendoza',
        'diego.mendoza@example.com'
    ),
    (
        'Rosa Jiménez',
        'rosa.jimenez@example.com'
    );

SELECT * FROM clientes;

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