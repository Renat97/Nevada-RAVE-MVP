CREATE DATABASE if not exists rave;

DROP TABLE if exists registration;

CREATE TABLE if not exists registration(
  id  INT AUTO_INCREMENT Primary key ,
  firstName varchar(1000),
  lastName varchar(1000),
  email varchar(3000),
  username varchar(1000),
  pass varchar(1000),
  emergencyContactName varchar(1000),
  emergencyContactNumber varchar(1000),
  position ENUM('volunteer','staff','masterStaff'),
  accessToken varchar(1000)
);
