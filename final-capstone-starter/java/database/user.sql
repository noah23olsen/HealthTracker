-- ********************************************************************************
-- This script creates the database users and grants them the necessary permissions
-- ********************************************************************************

CREATE USER final_capstone_owner2
WITH PASSWORD 'finalcapstone';

GRANT ALL
ON ALL TABLES IN SCHEMA public
TO final_capstone_owner2;

GRANT ALL
ON ALL SEQUENCES IN SCHEMA public
TO final_capstone_owner2;

CREATE USER final_capstone_appuser2
WITH PASSWORD 'finalcapstone';

GRANT SELECT, INSERT, UPDATE, DELETE
ON ALL TABLES IN SCHEMA public
TO final_capstone_appuser2;

GRANT USAGE, SELECT
ON ALL SEQUENCES IN SCHEMA public
TO final_capstone_appuser2;

INSERT INTO sleep_schedule (sleep_time, wake_time) VALUES ('2023-10-19 23:00:00', '2023-10-20 07:00:00');
INSERT INTO sleep_schedule (sleep_time, wake_time) VALUES ('2023-10-20 23:30:00', '2023-10-21 06:45:00');