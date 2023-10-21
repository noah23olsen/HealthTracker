BEGIN TRANSACTION;

INSERT INTO users (username,password_hash,role) VALUES ('user1','user1','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('user2','user2','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('user3','user3','ROLE_USER');

INSERT INTO sleep_schedule (sleep_time, wake_time) VALUES ('2023-10-19 23:00:00', '2023-10-20 07:00:00');
INSERT INTO sleep_schedule (sleep_time, wake_time) VALUES ('2023-10-20 23:30:00', '2023-10-21 06:45:00');

COMMIT TRANSACTION;

