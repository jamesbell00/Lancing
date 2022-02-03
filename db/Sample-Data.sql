#############################

## LANCING APP SAMPLE DATA ##

#############################


USE lancing;

INSERT INTO Freelancer (fname, lname, email, address, city, country, dob, phone, country_code, picture, cvFile, website)
VALUES 
	("James",	"Bell",	"james.bell@slu.edu",	"Avenida del Valle 34",	"Madrid", "Spain", "2000-07-29", "7072252462",	1,	"IMG_2471.jpeg",	"jamescv.pdf",	"www.james.com");
INSERT INTO Freelancer (fname, lname, email, address, city, country, dob, phone, country_code)
VALUES
	("Alex",	"Hart",	"ahart@gmail.com",	"2462 Flagstone Drive",	"Napa", "USA", "2000-05-29", "4156783456",	1),
    ("John", 	"Doe",	"john@gmail.com",	"56 Maher Street",	"New York", "USA", "2000-07-23", 	"6734561523",	1),
	("Enrique",	"Iglesias",	"eiglesias@yahoo.es",	"Calle Alcala 45",	"Rome", "Italy", "2000-07-29", 	"673456212",	34),
	("Barry",	"Bond",	"bbond@gmail.com",	"34 Main Street",	"Madrid", "Spain", "2001-12-29", 	"3461735789",	1),
	("Witu",	"Loe",	"wloe@wechat.com",	"78 Main Street",	"Madrid", "Spain", "2000-11-29", 	"673452675",	34),
	("Xiao",	"Lee",	"xlee@gmail.com",	"Calle Martinez 2",	"Madrid", "Spain", "1997-07-29", 	"632154675",	34),
	("Heinrich",	"Eichler",	"heichler@gmail.com",	"Calle Atocha 67",	"Madrid", "Spain", "2000-07-29", 	"643546786",	34),
	("Jeffrey",	"Avina",	"javina@gmail.com",	"Calle Langre 56",	"Madrid", "Spain", "1996-07-29", 	"690890341",	34),
	("Larry",	"Locke",	"llocke@gmail.com",	"15 First Street",	"Zaragoza", "Spain", "2000-01-30", 	"6354875613",	1),
	("Cristina",	"Collins",	"ccollins@gmail.com",	"67 Hollywood Blvd",	"Santander", "Spain", "2000-07-29", 	"9876543210",	1),
	("Daryl",	"Denver",	"ddenver@gmail.com",	"4282 Kingsford Drive",	"Madrid", "Spain", "2000-07-29", 	"1212323435",	1),
	("Erica",	"Elonira",	"eelonira@gmail.com",	"86 Marsala Way",	"Madrid", "Spain", "2000-10-29", 	"1526374823",	1),
	("Fred",	"Fuller",	"ffuller@gmail.com",	"2612 Sunset Way",	"Madrid", "Spain", "2000-07-29", 	"5472384572", 1),
	("Gary",	"Payton",	"gpayton@gmail.com",	"937 Orchard Way",	"Madrid", "Spain", "2003-10-31", 	"7368378578",	1),
	("Stephen",	"Curry",	"scurry@gmail.com", "2479 Solano Avenue",	"Madrid", "Spain", "2000-07-29", 	"5463746574",	1),
	("LeBron",	"James",	"ljames@gmail.com",	"863 Trancas Street",	"Madrid", "Spain", "2000-07-29", 	"5648970989",	1),
	("Chandler",	"Parsons",	"cparsons@gmail.com",	"142 Monticello Road",	"Madrid", "Spain", "2000-07-29", 	"7867867863",	1),
	("Manu",	"Ginobbli",	"mginobbli@gmail.com",	"673 Silverado Trail",	"Madrid", "Spain", "2000-07-29", 	"2745678345",	1),
	("Tony",	"Parker",	"tparker@gmail.com",	"31 Forrester Street",	"Madrid", "Spain", "2000-07-29", 	"5467912323",	1);


INSERT INTO Sectors (sector)
VALUES
	("Technology"),
	("Advertising"),
	("Agriculture"),
	("Airlines"),
	("Automotive"),
	("Civil Servants"),
	("Construction"),
	("communication"),
	("manufacturing"),
	("engineering"),
	("entertainment"),
	("government"),
	("health"),
	("law"),
	("transport"),
	("media");
    
INSERT INTO Company (name, address, logo, description, year_founded, no_emp, sector_id)
VALUES
	("Lancing Co",	"Avenida del Valle 34",	"logo.png",	"A freelance company",	"2021",	4,	1);
INSERT INTO Company (name, address)
VALUES
	("Apple",	"1 Apple Street"),				
	("Microsoft",	"2 Microsoft Lane"),					
	("Tesla",	"14 Tesla Avenue");		



INSERT INTO Job_Status (status)
VALUES ("Hidden"), ("Active"), ("Assigned");

INSERT INTO Jobs (company_id, name, description, budget, duration, file)
VALUES (1,	"iOS Developer",	"develop an iphone app",	500,	3,	"jobdescription.doc");
INSERT INTO Jobs (company_id, name, description, budget, duration)
VALUES (4,	"Frontend Developer",	"create and manage our mobile website",	"100",	"11");
INSERT INTO Jobs (company_id, name, description)
VALUES
	(4,	"Backend Developer",	"work hand in hand with front end dev to build the back end"),
	(2,	"Android Developer",	"create an app for android devices and destroy the competition"),
	(1,	"Cybersecurity Engineer",	"install and maintain isp system");


INSERT INTO Skill_Categories (category_name)
VALUES ("Tech"), ("Soft");

INSERT INTO Skill_Subcategories (category_id, subcategory_id, subcategory_name)
VALUES
	(1,	1,	"Programming Languages"),
	(1,	2,	"Databases"),
	(1,	3,	"Networks"),
	(1,	4,	"Cybersecurity"),
	(1,	5,	"Data Science"),
	(1,	6,	"Artificial Intelligence"),
	(1,	7,	"Frameworks"),
	(1,	8,	"Operating Systems"),
	(2,	1,	"Languages"),
	(2,	2,	"Communication"),
	(2,	3,	"Critical Thinking"),
	(2,	4,	"Leadership"),
	(2,	5,	"Work Ethic");


INSERT INTO Skills
VALUES
	(1,	1,	1,	"Java"),
	(1,	1,	2,	"Python"),
	(1,	1,	3,	"C++"),
	(1,	1,	4,	"SQL"),
	(1,	1,	5,	"C"),
	(1,	1,	6,	"PHP"),
	(1,	1,	7,	"Assembly"),
	(1,	2,	1,	"MySQL"),
	(1,	2,	2,	"NoSQL"),
	(1,	2,	3,	"Redshift"),
	(1,	3,	1,	"DNS"),
	(1,	3,	2,	"Servers"),
	(1,	4,	1,	"Firewall/IPS"),
	(1,	4,	2,	"SIEM"),
	(1,	4,	3,	"Wireshark"),
	(1,	4,	4,	"Metasploit"),
	(1,	5,	1,	"Tensorflow"),
	(1,	5,	2,	"Tableu"),
	(1,	5,	3,	"Rapidminer"),
	(1,	6,	1,	"Theano"),
	(1,	6,	2,	"Caffe"),
	(1,	6,	3,	"Keras"),
	(1,	6,	4,	"Tensorflow"),
	(1,	7,	1,	"Angular"),
	(1,	7,	2,	"React"),
	(1,	7,	3,	"jQuery"),
	(1,	7,	4,	"Django"),
	(1,	7,	5,	"Spring"),
	(1,	8,	1,	"MacOS"),
	(1,	8,	2,	"Windows"),
	(1,	8,	3,	"Linux"),
	(1,	8,	4,	"Unix"),
	(2,	1,	1,	"English"),
	(2,	1,	2,	"Spanish"),
	(2,	1,	3,	"Mandarin"),
	(2,	1,	4,	"French"),
	(2,	2,	1,	"Public Speaking"),
	(2,	2,	2,	"Writing"),
	(2,	3,	1,	"Creativity"),
	(2,	3,	2,	"Logical Thinking"),
	(2,	3,	3,	"Problem Solving"),
	(2,	3,	4,	"Troubleshooting"),
	(2,	4,	1,	"Decision Making"),
	(2,	4,	2,	"Conflict Resolution"),
	(2,	4,	3,	"Mentoring"),
	(2,	5,	1,	"Multitasking"),
	(2,	5,	2,	"Organization"),
	(2,	5,	3,	"Punctuality"),
	(2,	5,	4,	"Planning");


INSERT INTO Freelancer_Skills
VALUES	
	(1,	1,	1,	1),
	(1,	1,	1,	2),
	(1,	1,	1,	4),
	(1,	1,	2,	1),
	(1,	1,	2,	3),
	(1,	1,	4,	3),
    (1, 1, 	7, 	1),
	(1,	1,	8,	1),
	(1,	2,	1,	1),
	(1,	2,	1,	2),
	(1,	2,	2,	1),
	(1,	2,	2,	2),
	(1,	2,	4,	1),
	(1,	2,	5,	3),
	(4,	1,	1,	1),
	(4,	1,	1,	3),
	(4,	1,	5,	2),
	(4,	1,	6,	4),
	(4,	1,	7,	4),
	(4,	2,	1,	1),
	(4,	2,	3,	1),
	(16, 1,	1,	5),
	(16, 1,	1,	6),
	(16, 1,	7,	5),
	(2,	1,	2,	3),
	(2,	1,	3,	1),
	(2,	1,	4,	4),
	(2,	2,	1,	2),
	(2,	2,	3,	3);


INSERT INTO Job_Skills
VALUES
	(1, 1, 7, 1),
    (1,2,1,2),
    (1,2,1,3),
	(2,	1,	1,	2),
	(2,	1,	7,	1),
	(2,	1,	7,	2),
	(2,	1,	8,	1),
	(2,	2,	1,	1),
	(2,	2,	2,	1),
	(2,	2,	3,	1),
	(2,	2,	4,	1),
	(2,	2,	5,	2),
	(5,	1,	1,	3),
	(5,	1,	1,	6),
	(5,	1,	3,	2),
	(5,	1,	4,	1),
	(5,	1,	4,	2),
	(5,	1,	4,	3),
	(5,	1,	8,	1),
	(5,	2,	1,	1),
	(5,	2,	1,	3),
	(5,	2,	3,	2),
	(5,	2,	5,	4);

