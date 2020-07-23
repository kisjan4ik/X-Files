drop database ufo_db;
CREATE DATABASE ufo_db;
use ufo_db;

CREATE TABLE events
(
	id int NOT NULL AUTO_INCREMENT,
	datetime VARCHAR(225),
	city VARCHAR(225),
	state VARCHAR(2),
	country VARCHAR(2),
	shape VARCHAR(225),
	duration_seconds VARCHAR(225),
	duration_hours_min VARCHAR(225),
	comments VARCHAR(225),
	date_posted VARCHAR(225),
	latitude DECIMAL (8,5),
	longitude DECIMAL (8,5),
	
	PRIMARY KEY (id)
);