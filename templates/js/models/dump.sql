CREATE SCHEMA `demo_db` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `demo_db`.`tbl_users` (
  `id` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `status` TINYINT(1) NOT NULL,
  `role` VARCHAR(25) NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`));

