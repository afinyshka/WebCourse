--  поля: id, name, age, address.
--  Необходимо написать запрос на получение имен всех одногруппников (только имен, без всего остального),
-- которые живут в Москве и их возраст находится в диапазоне [18, 30) лет.

-- create
CREATE TABLE classmate (
  clsmateId INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO classmate VALUES (0001, 'Алена Ермолина', '17', 'Москва');
INSERT INTO classmate VALUES (0002, 'Игорь Пронский', '19', 'Москва');
INSERT INTO classmate VALUES (0003, 'Лаура Явлинская', '31', 'Москва');
INSERT INTO classmate VALUES (0004, 'Владимир Васин', '27', 'Королев');
INSERT INTO classmate VALUES (0005, 'Александр Волхонский', '25', 'Красногорск');
INSERT INTO classmate VALUES (0006, 'Ирина Прохорова', '30', 'Видное');
INSERT INTO classmate VALUES (0007, 'Максим Кузнецов', '33', 'Одинцово');
INSERT INTO classmate VALUES (0008, 'Ольга Федотова', '32', 'Одинцово');
INSERT INTO classmate VALUES (0009, 'Чад Зубер', '25', 'Красногорск');
INSERT INTO classmate VALUES (0010, 'Илья Стреколовский', '25', 'Видное');
INSERT INTO classmate VALUES (0011, 'Максим Кузнецов', '29', 'Москва');
INSERT INTO classmate VALUES (0012, 'Ольга Федотова', '30', 'Москва');

-- fetch 
SELECT name FROM classmate WHERE address = 'Москва' AND age >= 18 AND age < 30;