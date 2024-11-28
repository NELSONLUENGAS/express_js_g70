-- Active: 1731027127296@@127.0.0.1@5432@gestion_clientes

CREATE TABLE clientes (
    id SERIAL,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50)
);