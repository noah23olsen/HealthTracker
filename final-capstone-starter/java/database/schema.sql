BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS sleep_schedule;

CREATE TABLE users (
	user_id SERIAL,
	username varchar(50) NOT NULL UNIQUE,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE sleep_schedule (
    id SERIAL PRIMARY KEY,
    sleep_time TIMESTAMP NOT NULL,
    wake_time TIMESTAMP NOT NULL
);

COMMIT TRANSACTION;
