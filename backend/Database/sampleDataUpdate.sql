#############################

## LANCING APP SAMPLE DATA UPDATE##

#############################

USE lancing;
INSERT INTO Company_Contact(email, name, phone, country_code, company_id)
VALUES  
('lancing.application@gmail.com', 'Jorge', '616255764', '34',1),
('steve.jobs@hotmail.com','Steve', '7886348491', '1',2),
('bill.gates@outlook.com','Bill', '72213468201', '1', 3),
('elon.musk@gmail.com','Elon','7186982411','1', 4),
('jeff.bezos@hotmail.com','Jeff','7557785991','1', 5),
('elon.musk2@gmail.com','Elon','7186982411', '1', 6),
('mark.zukerberg@hotmail.com', 'Mark','7333344422', '1', 7),
('arun.g@outloo.es', 'Arun', '603987221', '34', 8),
('william.p@gmail.com', 'William', '692384765', '34', 9),
('larry.page@gamiliar.com', 'Larry', '71700346691', '1', 10),
('akio.morita@gmail.com', 'Akio', '7834895091', '1', 11);

INSERT INTO Application_Status (status)
VALUES
("Applied"),
("Under Review"), 
("Aplication Withdrawn by Freelancer"),
("Aplication Withdrawn by Company"),
("Interview Offered"),
("Wait-listed"),
("Job Offered"),