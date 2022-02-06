#############################################
## 		LANCING DATABASE
##		Team Members:
##		James Bell, Negin, Nada, Fidel
##
## 		Date created: Jan 18, 2022
##
##		Last modified: Feb 3, 2022 
##		by James
#############################################

DROP database if exists `Lancing`;
CREATE database if not exists `Lancing`;
use `Lancing`;

CREATE TABLE `Freelancer` (
  `id` int not null auto_increment,
  `fname` varchar(30) not null,
  `lname` varchar(30) not null,
  `email` varchar(30) unique not null,
  `address` varchar(100) not null,
  `city` varchar(30) not null,
  `country` varchar(30) not null,
  `dob` date not null,
  `phone` varchar(15) not null,
  `country_code` int not null,
  `picture` varchar(30) default null,
  `cvFile` varchar(30) unique default null,
  `website` varchar(256) default null,
  `bio` varchar(2000) default null,
  `created_date` timestamp default current_timestamp,
  `updated_date` timestamp default null on update current_timestamp,
  PRIMARY KEY (`id`)
);

-- CREATE TABLE `CV` (
-- 	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     `freelancer_id` int not null,
-- 	`filename` VARCHAR(128) NOT NULL,
-- 	`mimetype` VARCHAR(64) NOT NULL,
-- 	`data` MEDIUMBLOB NOT NULL,
-- 	FOREIGN KEY (`freelancer_id`) REFERENCES `Freelancer`(`id`)
-- 	on delete set null
-- 	on update cascade    
-- );

CREATE TABLE `Sectors` (
  `sector_id` int auto_increment,
  `sector` varchar(50) not null unique,
  PRIMARY KEY (`sector_id`)
);

CREATE TABLE `Company` (
  `company_id` int auto_increment,
  `name` varchar(50) not null,
  `address` varchar(50) default null,
  `logo` varchar(30) default null,
  `description` varchar(200) default null,
  `year_founded` varchar(4) default null,
  `no_emp` int default 0 check (no_emp>=0),
  `website` varchar(30) default null,
  `sector_id` int default null,
  `created_date` timestamp default current_timestamp,
  `updated_date` timestamp default null on update current_timestamp,
  PRIMARY KEY (`company_id`),
  FOREIGN KEY (`sector_id`) REFERENCES `Sectors`(`sector_id`)
	on delete set null
	on update cascade
);

CREATE TABLE `Job_Status` (
  `id` int auto_increment,
  `status` varchar(20),
  PRIMARY KEY (`id`)
);

CREATE TABLE `Jobs` (
  `job_id` int auto_increment,
  `company_id` int not null,
  `name` varchar(50) not null,
  `description` varchar(200) default null,
  `budget` int default 0,
  `duration` int default null,
  `file` varchar(30) default null,
  `status_id` int default 1,
  `tech_weight` int default 50,
  `created_date` timestamp default current_timestamp,
  `updated_date` timestamp default null on update current_timestamp,
  PRIMARY KEY (`job_id`),
  FOREIGN KEY (`company_id`) REFERENCES `Company`(`company_id`)
	on delete cascade
	on update cascade,
  FOREIGN KEY (`status_id`) REFERENCES `Job_Status`(`id`)
	on delete set null
	on update set null
);

CREATE TABLE `Saved_Jobs` (
  `freelancer_id` int,
  `job_id` int,
  `save_date` timestamp default current_timestamp on update current_timestamp,
  PRIMARY KEY (`freelancer_id`, `job_id`),
  FOREIGN KEY (`freelancer_id`) REFERENCES `Freelancer`(`id`)
	on delete cascade
    on update cascade,
  FOREIGN KEY (`job_id`) REFERENCES `Jobs`(`job_id`)
	on delete cascade
    on update cascade
);

CREATE TABLE `Sectors_Worked` (
  `freelancer_id` int,
  `sector_id` int,
  PRIMARY KEY (`freelancer_id`, `sector_id`),
  FOREIGN KEY (`freelancer_id`) REFERENCES `Freelancer`(`id`)
	on delete cascade
    on update cascade,
  FOREIGN KEY (`sector_id`) REFERENCES `Sectors`(`sector_id`)
	on delete cascade
    on update cascade
);

CREATE TABLE `Skill_Categories` (
  `category_id` int auto_increment,
  `category_name` varchar(50) not null,
  PRIMARY KEY (`category_id`)
);

CREATE TABLE `Skill_Subcategories` (
  `category_id` int,
  `subcategory_id` int,
  `subcategory_name` varchar(50) not null,
  PRIMARY KEY (`category_id`, `subcategory_id`),
  KEY idx_subcat (subcategory_id),
  FOREIGN KEY (`category_id`) REFERENCES `Skill_Categories`(`category_id`)
	on delete cascade
    on update cascade
);

CREATE TABLE `Skills` (
  `category_id` int,
  `subcategory_id` int,
  `skill_id` int,
  `skill_name` varchar(30) not null,
  PRIMARY KEY (`category_id`, `subcategory_id`, `skill_id`),
  KEY idx_skill (skill_id),
  FOREIGN KEY (`subcategory_id`) REFERENCES `Skill_Subcategories`(`subcategory_id`)
	on delete cascade
    on update cascade,
  FOREIGN KEY (`category_id`) REFERENCES `Skill_Categories`(`category_id`)
	on delete cascade
    on update cascade
);

CREATE TABLE `Freelancer_Skills` (
  `freelancer_id` int not null,
  `category_id` int not null,
  `subcategory_id` int not null,
  `skill_id` int not null,
  PRIMARY KEY (`freelancer_id`, `category_id`, `subcategory_id`, `skill_id`),
  FOREIGN KEY (`subcategory_id`) REFERENCES `Skill_Subcategories`(`subcategory_id`)
	on delete cascade
    on update cascade,
  FOREIGN KEY (`freelancer_id`) REFERENCES `Freelancer`(`id`)
  	on delete cascade
    on update cascade,
  FOREIGN KEY (`category_id`) REFERENCES `Skills`(`skill_id`)
  	on delete cascade
    on update cascade,
  FOREIGN KEY (`category_id`) REFERENCES `Skill_Categories`(`category_id`)
  	on delete cascade
    on update cascade
);


CREATE TABLE `Freelancer_Jobs` (
  `freelancer_id` int,
  `job_id` int,
  `status_id` int,
  PRIMARY KEY (`freelancer_id`, `job_id`, `status_id`),
  FOREIGN KEY (`job_id`) REFERENCES `Jobs`(`job_id`),
  FOREIGN KEY (`status_id`) REFERENCES `Job_Status`(`id`),
  FOREIGN KEY (`freelancer_id`) REFERENCES `Freelancer`(`id`)
);

CREATE TABLE `Application_Status` (
  `id` int auto_increment,
  `status` varchar(20) not null,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Applications` (
  `freelancer_id` int not null,
  `job_id` int not null,
  `status_id` int default 2, #default in progress
  `created_date` timestamp default current_timestamp,
  `updated_date` timestamp default null on update current_timestamp,
  PRIMARY KEY (`freelancer_id`, `job_id`, `status_id`),
  FOREIGN KEY (`status_id`) REFERENCES `Application_Status`(`id`)
  	on delete cascade
    on update cascade,
  FOREIGN KEY (`job_id`) REFERENCES `Jobs`(`job_id`)
  	on delete cascade
    on update cascade,
  FOREIGN KEY (`freelancer_id`) REFERENCES `Freelancer`(`id`)
  	on delete cascade
    on update cascade
);

CREATE TABLE `Saved_Freelancers` (
  `freelancer_id` int not null,
  `job_id` int not null,
  `company_id` int not null,
  `save_date` timestamp default null on update current_timestamp,
  PRIMARY KEY (`freelancer_id`, `job_id`, `company_id`),
  FOREIGN KEY (`company_id`) REFERENCES `Company`(`company_id`)
  	on delete cascade
    on update cascade,
  FOREIGN KEY (`freelancer_id`) REFERENCES `Freelancer`(`id`)
  	on delete cascade
    on update cascade,
  FOREIGN KEY (`job_id`) REFERENCES `Jobs`(`job_id`)
  	on delete cascade
    on update cascade
);

CREATE TABLE `Company_Contact` (
  `email` varchar(30),
  `name` varchar(30) default null,
  `phone` varchar(15) not null,
  `country_code` int not null,
  `company_id` int not null,
  `created_date` timestamp default current_timestamp,
  `updated_date` timestamp default null on update current_timestamp,
  PRIMARY KEY (`email`),
  FOREIGN KEY (`company_id`) REFERENCES `Company`(`company_id`)
  	on delete cascade
    on update cascade
);

CREATE TABLE `Login_Info` (
  `email` varchar(30),
  `password` varchar(30),
  PRIMARY KEY (`email`),
  FOREIGN KEY (`email`) REFERENCES `Company_Contact`(`email`)
  	on delete cascade
    on update cascade,
  FOREIGN KEY (`email`) REFERENCES `Freelancer`(`email`)
  	on delete cascade
    on update cascade
);

CREATE TABLE `Job_Skills` (
  `job_id` int,
  `category_id` int,
  `subcategory_id` int,
  `skill_id` int,
  PRIMARY KEY (`job_id`, `category_id`, `subcategory_id`, `skill_id`),
  FOREIGN KEY (`subcategory_id`) REFERENCES `Skill_Subcategories`(`subcategory_id`)
  	on delete cascade
    on update cascade,
  FOREIGN KEY (`category_id`) REFERENCES `Skill_Categories`(`category_id`)
  	on delete cascade
    on update cascade,
  FOREIGN KEY (`job_id`) REFERENCES `Jobs`(`job_id`)
  	on delete cascade
    on update cascade,
  FOREIGN KEY (`skill_id`) REFERENCES `Skills`(`skill_id`)
  	on delete cascade
    on update cascade
);
