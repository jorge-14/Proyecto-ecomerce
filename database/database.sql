CREATE DATABASE ng_games_db;
USE ng_games_db;

create table game(
    id int (11) not null AUTO_INCREMENT PRIMARY KEY,
    title varchar(180),
    description varchar(255),
    image varchar(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);