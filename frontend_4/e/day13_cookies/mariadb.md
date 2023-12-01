```
CRUD에 해당하는
select : get
insert : post
update,
delete,
```

Enter password: **\***
Welcome to the MariaDB monitor. Commands end with ; or \g.
Your MariaDB connection id is 3
Server version: 10.11.6-MariaDB mariadb.org binary distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> show databases;
+--------------------+
| Database |
+--------------------+
| information_schema |
| mysql |
| performance_schema |
| study |
| sys |
+--------------------+
5 rows in set (0.003 sec)

MariaDB [(none)]> drop study;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'study' at line 1
MariaDB [(none)]> drop database study;
Query OK, 1 row affected (0.018 sec)

MariaDB [(none)]> show databases;
+--------------------+
| Database |
+--------------------+
| information_schema |
| mysql |
| performance_schema |
| sys |
+--------------------+
4 rows in set (0.001 sec)

MariaDB [(none)]> create database study;
Query OK, 1 row affected (0.001 sec)

MariaDB [(none)]> use study;
Database changed
MariaDB [study]> create table employess(
-> emp_no INT AUTO_INCREMENT PRIMARY KEY,
-> first_name varchar(50) NOT NULL,
-> last_name varchar(50) not null,
-> birth_date date not null,
-> gender ENUM("M", "F") not null,
-> hire_date date not null);
Query OK, 0 rows affected (0.010 sec)

MariaDB [study]> desc employess;
+------------+---------------+------+-----+---------+----------------+
| Field | Type | Null | Key | Default | Extra |
+------------+---------------+------+-----+---------+----------------+
| emp_no | int(11) | NO | PRI | NULL | auto_increment |
| first_name | varchar(50) | NO | | NULL | |
| last_name | varchar(50) | NO | | NULL | |
| birth_date | date | NO | | NULL | |
| gender | enum('M','F') | NO | | NULL | |
| hire_date | date | NO | | NULL | |
+------------+---------------+------+-----+---------+----------------+
6 rows in set (0.002 sec)

MariaDB [study]> drop table employess;
Query OK, 0 rows affected (0.007 sec)

MariaDB [study]> show tables;
Empty set (0.000 sec)

MariaDB [study]> CREATE TABLE employees (
-> emp_no INT NOT NULL AUTO_INCREMENT,
-> birth_date DATE NOT NULL,
-> first_name VARCHAR(14) NOT NULL,
-> last_name VARCHAR(16) NOT NULL,
-> gender ENUM ('M','F') NOT NULL,
-> hire_date DATE NOT NULL,
-> PRIMARY KEY (emp_no)
-> );
Query OK, 0 rows affected (0.006 sec)

MariaDB [study]> insert into employees values (
-> 10020, "1953-12-24", "Mayuko", "Warwick", "M", "1991-01-26");
Query OK, 1 row affected (0.003 sec)

MariaDB [study]> select \* from employees;
+--------+------------+------------+-----------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date |
+--------+------------+------------+-----------+--------+------------+
| 10020 | 1953-12-24 | Mayuko | Warwick | M | 1991-01-26 |
+--------+------------+------------+-----------+--------+------------+
1 row in set (0.000 sec)

MariaDB [study]> insert into employees values
-> (10021,'1960-02-20','Ramzi','Erde','M','1988-02-10'),
-> (10022,'1952-07-08','Shahaf','Famili','M','1995-08-22'),
-> (10023,'1953-09-29','Bojan','Montemayor','F','1989-12-17'),
-> (10024,'1958-09-05','Suzette','Pettey','F','1997-05-19'),
-> (10025,'1958-10-31','Prasadram','Heyers','M','1987-08-17'),
-> (10026,'1953-04-03','Yongqiao','Berztiss','M','1995-03-20'),
-> (10027,'1962-07-10','Divier','Reistad','F','1989-07-07'),
-> (10028,'1963-11-26','Domenick','Tempesti','M','1991-10-22'),
-> (10029,'1956-12-13','Otmar','Herbst','M','1985-11-20'),
-> (10030,'1958-07-14','Elvis','Demeyer','M','1994-02-17'),
-> (10031,'1959-01-27','Karsten','Joslin','M','1991-09-01'),
-> (10032,'1960-08-09','Jeong','Reistad','F','1990-06-20'),
-> (10033,'1956-11-14','Arif','Merlo','M','1987-03-18'),
-> (10034,'1962-12-29','Bader','Swan','M','1988-09-21'),
-> (10035,'1953-02-08','Alain','Chappelet','M','1988-09-05'),
-> (10036,'1959-08-10','Adamantios','Portugali','M','1992-01-03'),
-> (10037,'1963-07-22','Pradeep','Makrucki','M','1990-12-05'),
-> (10038,'1960-07-20','Huan','Lortz','M','1989-09-20'),
-> (10039,'1959-10-01','Alejandro','Brender','M','1988-01-19'),
-> (10040,'1959-09-13','Weiyi','Meriste','F','1993-02-14'),
-> (10041,'1959-08-27','Uri','Lenart','F','1989-11-12'),
-> (10042,'1956-02-26','Magy','Stamatiou','F','1993-03-21'),
-> (10043,'1960-09-19','Yishay','Tzvieli','M','1990-10-20'),
-> (10044,'1961-09-21','Mingsen','Casley','F','1994-05-21'),
-> (10045,'1957-08-14','Moss','Shanbhogue','M','1989-09-02'),
-> (10046,'1960-07-23','Lucien','Rosenbaum','M','1992-06-20'),
-> (10047,'1952-06-29','Zvonko','Nyanchama','M','1989-03-31');
Query OK, 27 rows affected (0.002 sec)
Records: 27 Duplicates: 0 Warnings: 0

MariaDB [study]> select \* from employees;
+--------+------------+------------+------------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date |
+--------+------------+------------+------------+--------+------------+
| 10020 | 1953-12-24 | Mayuko | Warwick | M | 1991-01-26 |
| 10021 | 1960-02-20 | Ramzi | Erde | M | 1988-02-10 |
| 10022 | 1952-07-08 | Shahaf | Famili | M | 1995-08-22 |
| 10023 | 1953-09-29 | Bojan | Montemayor | F | 1989-12-17 |
| 10024 | 1958-09-05 | Suzette | Pettey | F | 1997-05-19 |
| 10025 | 1958-10-31 | Prasadram | Heyers | M | 1987-08-17 |
| 10026 | 1953-04-03 | Yongqiao | Berztiss | M | 1995-03-20 |
| 10027 | 1962-07-10 | Divier | Reistad | F | 1989-07-07 |
| 10028 | 1963-11-26 | Domenick | Tempesti | M | 1991-10-22 |
| 10029 | 1956-12-13 | Otmar | Herbst | M | 1985-11-20 |
| 10030 | 1958-07-14 | Elvis | Demeyer | M | 1994-02-17 |
| 10031 | 1959-01-27 | Karsten | Joslin | M | 1991-09-01 |
| 10032 | 1960-08-09 | Jeong | Reistad | F | 1990-06-20 |
| 10033 | 1956-11-14 | Arif | Merlo | M | 1987-03-18 |
| 10034 | 1962-12-29 | Bader | Swan | M | 1988-09-21 |
| 10035 | 1953-02-08 | Alain | Chappelet | M | 1988-09-05 |
| 10036 | 1959-08-10 | Adamantios | Portugali | M | 1992-01-03 |
| 10037 | 1963-07-22 | Pradeep | Makrucki | M | 1990-12-05 |
| 10038 | 1960-07-20 | Huan | Lortz | M | 1989-09-20 |
| 10039 | 1959-10-01 | Alejandro | Brender | M | 1988-01-19 |
| 10040 | 1959-09-13 | Weiyi | Meriste | F | 1993-02-14 |
| 10041 | 1959-08-27 | Uri | Lenart | F | 1989-11-12 |
| 10042 | 1956-02-26 | Magy | Stamatiou | F | 1993-03-21 |
| 10043 | 1960-09-19 | Yishay | Tzvieli | M | 1990-10-20 |
| 10044 | 1961-09-21 | Mingsen | Casley | F | 1994-05-21 |
| 10045 | 1957-08-14 | Moss | Shanbhogue | M | 1989-09-02 |
| 10046 | 1960-07-23 | Lucien | Rosenbaum | M | 1992-06-20 |
| 10047 | 1952-06-29 | Zvonko | Nyanchama | M | 1989-03-31 |
+--------+------------+------------+------------+--------+------------+
28 rows in set (0.000 sec)

MariaDB [study]> select \* from employees
-> where gender = "M";
+--------+------------+------------+------------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date |
+--------+------------+------------+------------+--------+------------+
| 10020 | 1953-12-24 | Mayuko | Warwick | M | 1991-01-26 |
| 10021 | 1960-02-20 | Ramzi | Erde | M | 1988-02-10 |
| 10022 | 1952-07-08 | Shahaf | Famili | M | 1995-08-22 |
| 10025 | 1958-10-31 | Prasadram | Heyers | M | 1987-08-17 |
| 10026 | 1953-04-03 | Yongqiao | Berztiss | M | 1995-03-20 |
| 10028 | 1963-11-26 | Domenick | Tempesti | M | 1991-10-22 |
| 10029 | 1956-12-13 | Otmar | Herbst | M | 1985-11-20 |
| 10030 | 1958-07-14 | Elvis | Demeyer | M | 1994-02-17 |
| 10031 | 1959-01-27 | Karsten | Joslin | M | 1991-09-01 |
| 10033 | 1956-11-14 | Arif | Merlo | M | 1987-03-18 |
| 10034 | 1962-12-29 | Bader | Swan | M | 1988-09-21 |
| 10035 | 1953-02-08 | Alain | Chappelet | M | 1988-09-05 |
| 10036 | 1959-08-10 | Adamantios | Portugali | M | 1992-01-03 |
| 10037 | 1963-07-22 | Pradeep | Makrucki | M | 1990-12-05 |
| 10038 | 1960-07-20 | Huan | Lortz | M | 1989-09-20 |
| 10039 | 1959-10-01 | Alejandro | Brender | M | 1988-01-19 |
| 10043 | 1960-09-19 | Yishay | Tzvieli | M | 1990-10-20 |
| 10045 | 1957-08-14 | Moss | Shanbhogue | M | 1989-09-02 |
| 10046 | 1960-07-23 | Lucien | Rosenbaum | M | 1992-06-20 |
| 10047 | 1952-06-29 | Zvonko | Nyanchama | M | 1989-03-31 |
+--------+------------+------------+------------+--------+------------+
20 rows in set (0.003 sec)

MariaDB [study]> select \* from employees
-> where emp_no = "10020";
+--------+------------+------------+-----------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date |
+--------+------------+------------+-----------+--------+------------+
| 10020 | 1953-12-24 | Mayuko | Warwick | M | 1991-01-26 |
+--------+------------+------------+-----------+--------+------------+
1 row in set (0.001 sec)

MariaDB [study]> select \* from employees
-> where emp_no >= "10043";
+--------+------------+------------+------------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date |
+--------+------------+------------+------------+--------+------------+
| 10043 | 1960-09-19 | Yishay | Tzvieli | M | 1990-10-20 |
| 10044 | 1961-09-21 | Mingsen | Casley | F | 1994-05-21 |
| 10045 | 1957-08-14 | Moss | Shanbhogue | M | 1989-09-02 |
| 10046 | 1960-07-23 | Lucien | Rosenbaum | M | 1992-06-20 |
| 10047 | 1952-06-29 | Zvonko | Nyanchama | M | 1989-03-31 |
+--------+------------+------------+------------+--------+------------+
5 rows in set (0.001 sec)

MariaDB [study]> select \* from employees
-> where birth_date <= "19700101";
+--------+------------+------------+------------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date |
+--------+------------+------------+------------+--------+------------+
| 10020 | 1953-12-24 | Mayuko | Warwick | M | 1991-01-26 |
| 10021 | 1960-02-20 | Ramzi | Erde | M | 1988-02-10 |
| 10022 | 1952-07-08 | Shahaf | Famili | M | 1995-08-22 |
| 10023 | 1953-09-29 | Bojan | Montemayor | F | 1989-12-17 |
| 10024 | 1958-09-05 | Suzette | Pettey | F | 1997-05-19 |
| 10025 | 1958-10-31 | Prasadram | Heyers | M | 1987-08-17 |
| 10026 | 1953-04-03 | Yongqiao | Berztiss | M | 1995-03-20 |
| 10027 | 1962-07-10 | Divier | Reistad | F | 1989-07-07 |
| 10028 | 1963-11-26 | Domenick | Tempesti | M | 1991-10-22 |
| 10029 | 1956-12-13 | Otmar | Herbst | M | 1985-11-20 |
| 10030 | 1958-07-14 | Elvis | Demeyer | M | 1994-02-17 |
| 10031 | 1959-01-27 | Karsten | Joslin | M | 1991-09-01 |
| 10032 | 1960-08-09 | Jeong | Reistad | F | 1990-06-20 |
| 10033 | 1956-11-14 | Arif | Merlo | M | 1987-03-18 |
| 10034 | 1962-12-29 | Bader | Swan | M | 1988-09-21 |
| 10035 | 1953-02-08 | Alain | Chappelet | M | 1988-09-05 |
| 10036 | 1959-08-10 | Adamantios | Portugali | M | 1992-01-03 |
| 10037 | 1963-07-22 | Pradeep | Makrucki | M | 1990-12-05 |
| 10038 | 1960-07-20 | Huan | Lortz | M | 1989-09-20 |
| 10039 | 1959-10-01 | Alejandro | Brender | M | 1988-01-19 |
| 10040 | 1959-09-13 | Weiyi | Meriste | F | 1993-02-14 |
| 10041 | 1959-08-27 | Uri | Lenart | F | 1989-11-12 |
| 10042 | 1956-02-26 | Magy | Stamatiou | F | 1993-03-21 |
| 10043 | 1960-09-19 | Yishay | Tzvieli | M | 1990-10-20 |
| 10044 | 1961-09-21 | Mingsen | Casley | F | 1994-05-21 |
| 10045 | 1957-08-14 | Moss | Shanbhogue | M | 1989-09-02 |
| 10046 | 1960-07-23 | Lucien | Rosenbaum | M | 1992-06-20 |
| 10047 | 1952-06-29 | Zvonko | Nyanchama | M | 1989-03-31 |
+--------+------------+------------+------------+--------+------------+
28 rows in set (0.001 sec)

MariaDB [study]> select \* from employees
-> where birth_date <= "1950-01-01";
Empty set (0.000 sec)

MariaDB [study]> select \* from employees
-> where birth_date >= "1950-01-01";
+--------+------------+------------+------------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date |
+--------+------------+------------+------------+--------+------------+
| 10020 | 1953-12-24 | Mayuko | Warwick | M | 1991-01-26 |
| 10021 | 1960-02-20 | Ramzi | Erde | M | 1988-02-10 |
| 10022 | 1952-07-08 | Shahaf | Famili | M | 1995-08-22 |
| 10023 | 1953-09-29 | Bojan | Montemayor | F | 1989-12-17 |
| 10024 | 1958-09-05 | Suzette | Pettey | F | 1997-05-19 |
| 10025 | 1958-10-31 | Prasadram | Heyers | M | 1987-08-17 |
| 10026 | 1953-04-03 | Yongqiao | Berztiss | M | 1995-03-20 |
| 10027 | 1962-07-10 | Divier | Reistad | F | 1989-07-07 |
| 10028 | 1963-11-26 | Domenick | Tempesti | M | 1991-10-22 |
| 10029 | 1956-12-13 | Otmar | Herbst | M | 1985-11-20 |
| 10030 | 1958-07-14 | Elvis | Demeyer | M | 1994-02-17 |
| 10031 | 1959-01-27 | Karsten | Joslin | M | 1991-09-01 |
| 10032 | 1960-08-09 | Jeong | Reistad | F | 1990-06-20 |
| 10033 | 1956-11-14 | Arif | Merlo | M | 1987-03-18 |
| 10034 | 1962-12-29 | Bader | Swan | M | 1988-09-21 |
| 10035 | 1953-02-08 | Alain | Chappelet | M | 1988-09-05 |
| 10036 | 1959-08-10 | Adamantios | Portugali | M | 1992-01-03 |
| 10037 | 1963-07-22 | Pradeep | Makrucki | M | 1990-12-05 |
| 10038 | 1960-07-20 | Huan | Lortz | M | 1989-09-20 |
| 10039 | 1959-10-01 | Alejandro | Brender | M | 1988-01-19 |
| 10040 | 1959-09-13 | Weiyi | Meriste | F | 1993-02-14 |
| 10041 | 1959-08-27 | Uri | Lenart | F | 1989-11-12 |
| 10042 | 1956-02-26 | Magy | Stamatiou | F | 1993-03-21 |
| 10043 | 1960-09-19 | Yishay | Tzvieli | M | 1990-10-20 |
| 10044 | 1961-09-21 | Mingsen | Casley | F | 1994-05-21 |
| 10045 | 1957-08-14 | Moss | Shanbhogue | M | 1989-09-02 |
| 10046 | 1960-07-23 | Lucien | Rosenbaum | M | 1992-06-20 |
| 10047 | 1952-06-29 | Zvonko | Nyanchama | M | 1989-03-31 |
+--------+------------+------------+------------+--------+------------+
28 rows in set (0.000 sec)

MariaDB [study]> select \* from employees
-> where birth_date <= "1960-01-01";
+--------+------------+------------+------------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date |
+--------+------------+------------+------------+--------+------------+
| 10020 | 1953-12-24 | Mayuko | Warwick | M | 1991-01-26 |
| 10022 | 1952-07-08 | Shahaf | Famili | M | 1995-08-22 |
| 10023 | 1953-09-29 | Bojan | Montemayor | F | 1989-12-17 |
| 10024 | 1958-09-05 | Suzette | Pettey | F | 1997-05-19 |
| 10025 | 1958-10-31 | Prasadram | Heyers | M | 1987-08-17 |
| 10026 | 1953-04-03 | Yongqiao | Berztiss | M | 1995-03-20 |
| 10029 | 1956-12-13 | Otmar | Herbst | M | 1985-11-20 |
| 10030 | 1958-07-14 | Elvis | Demeyer | M | 1994-02-17 |
| 10031 | 1959-01-27 | Karsten | Joslin | M | 1991-09-01 |
| 10033 | 1956-11-14 | Arif | Merlo | M | 1987-03-18 |
| 10035 | 1953-02-08 | Alain | Chappelet | M | 1988-09-05 |
| 10036 | 1959-08-10 | Adamantios | Portugali | M | 1992-01-03 |
| 10039 | 1959-10-01 | Alejandro | Brender | M | 1988-01-19 |
| 10040 | 1959-09-13 | Weiyi | Meriste | F | 1993-02-14 |
| 10041 | 1959-08-27 | Uri | Lenart | F | 1989-11-12 |
| 10042 | 1956-02-26 | Magy | Stamatiou | F | 1993-03-21 |
| 10045 | 1957-08-14 | Moss | Shanbhogue | M | 1989-09-02 |
| 10047 | 1952-06-29 | Zvonko | Nyanchama | M | 1989-03-31 |
+--------+------------+------------+------------+--------+------------+
18 rows in set (0.000 sec)

MariaDB [study]> select birth_date, first_name, gender from employees
-> where birth_date <= "1960-01-01";
+------------+------------+--------+
| birth_date | first_name | gender |
+------------+------------+--------+
| 1953-12-24 | Mayuko | M |
| 1952-07-08 | Shahaf | M |
| 1953-09-29 | Bojan | F |
| 1958-09-05 | Suzette | F |
| 1958-10-31 | Prasadram | M |
| 1953-04-03 | Yongqiao | M |
| 1956-12-13 | Otmar | M |
| 1958-07-14 | Elvis | M |
| 1959-01-27 | Karsten | M |
| 1956-11-14 | Arif | M |
| 1953-02-08 | Alain | M |
| 1959-08-10 | Adamantios | M |
| 1959-10-01 | Alejandro | M |
| 1959-09-13 | Weiyi | F |
| 1959-08-27 | Uri | F |
| 1956-02-26 | Magy | F |
| 1957-08-14 | Moss | M |
| 1952-06-29 | Zvonko | M |
+------------+------------+--------+
18 rows in set (0.001 sec)

MariaDB [study]> select emp_no, birth_date, first_name, gender from employees
-> where emp_no in ( 10027, 10009, 100047);
+--------+------------+------------+--------+
| emp_no | birth_date | first_name | gender |
+--------+------------+------------+--------+
| 10027 | 1962-07-10 | Divier | F |
+--------+------------+------------+--------+
1 row in set (0.001 sec)

MariaDB [study]> select emp_no, birth_date, first_name, gender from employees
-> where emp_no 10027 or 10047;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near '10027 or 10047' at line 2
MariaDB [study]> select emp_no, birth_date, first_name, gender from employees
-> where emp_no = 10027 or emp_no = 10047;
+--------+------------+------------+--------+
| emp_no | birth_date | first_name | gender |
+--------+------------+------------+--------+
| 10027 | 1962-07-10 | Divier | F |
| 10047 | 1952-06-29 | Zvonko | M |
+--------+------------+------------+--------+
2 rows in set (0.000 sec)

MariaDB [study]> select emp_no, birth_date, first_name, gender from employees
-> where emp_no >= 10030 and emp_no < 10040;
+--------+------------+------------+--------+
| emp_no | birth_date | first_name | gender |
+--------+------------+------------+--------+
| 10030 | 1958-07-14 | Elvis | M |
| 10031 | 1959-01-27 | Karsten | M |
| 10032 | 1960-08-09 | Jeong | F |
| 10033 | 1956-11-14 | Arif | M |
| 10034 | 1962-12-29 | Bader | M |
| 10035 | 1953-02-08 | Alain | M |
| 10036 | 1959-08-10 | Adamantios | M |
| 10037 | 1963-07-22 | Pradeep | M |
| 10038 | 1960-07-20 | Huan | M |
| 10039 | 1959-10-01 | Alejandro | M |
+--------+------------+------------+--------+
10 rows in set (0.000 sec)

MariaDB [study]>
