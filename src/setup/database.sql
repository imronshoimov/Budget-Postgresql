CREATE DATABASE money;

CREATE TABLE income (
    id serial primary key,
    type varchar(128) not null,
    cost int not null,
    date timestamptz default current_timestamp
);

CREATE TABLE expance (
    id serial primary key,
    type varchar(128) not null,
    cost int not null,
    date timestamptz default current_timestamp
);


INSERT INTO income (
        type,
        cost
    ) VALUES ('biznes', 300);
