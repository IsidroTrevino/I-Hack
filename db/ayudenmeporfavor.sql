create database qualtia;

create table User(
	id_user int NOT NULL AUTO_INCREMENT,
	F_name VARCHAR(50) NOT NULL,
	L_name VARCHAR(50) NOT NULL,
	adress VARCHAR(50) NOT NULL,
	user_mail VARCHAR(50) NOT NULL,
	user_password VARCHAR(50) NOT NULL,
	username VARCHAR(50) NOT NULL,
	credit_card VARCHAR(50) NOT NULL,
	puntos_user int NOT NULL,
	PRIMARY KEY (id_user)
);

create table Items(
	item_id int AUTO_INCREMENT NOT NULL,
	description VARCHAR(100) NOT NULL,
	prod_name VARCHAR(50) NOT NULL,
	price int NOT NULL,
	category CHAR(1) NOT NULL,
	puntos_es int NOT NULL,
	PRIMARY KEY (item_id)
);

create table Basket(
	id_user int NOT NULL,
	item_id int NOT NULL,
	FOREIGN KEY (id_user) REFERENCES User(id_user),
	FOREIGN KEY (item_id) REFERENCES Items(item_id)
);

create table Pedidos(
	adress VARCHAR(50) NOT NULL,
	id_pedido int AUTO_INCREMENT NOT NULL,
	id_user int NOT NULL,
	date DATE NOT NULL,
	state VARCHAR(20) NOT NULL,
	PRIMARY KEY(id_pedido),
	FOREIGN KEY (id_user) REFERENCES User(id_user)
);
