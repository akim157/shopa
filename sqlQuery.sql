-- УКАЗЫВАЕМ КОДИРОВКУ
SET NAMES cp899;
--SELECT
--1
SELECT * FROM orders;
--2
SELECT onum, amt, odate, cnum, snum FROM orders;
--3
SELECT amt, odate FROM orders;
--4
SELECT DISTINCT odate FROM orders;
--5
SELECT odate, amt FROM orders WHERE odate = '1990-04-10';
--6 Реляционные операторы или операторы сравнения
-- "=" равенство
-- ">" больше чем
-- "<" меньше чем
-- ">=" больше или равно
-- "<=" меньше или равно
-- "<>", "!=" неравенство
SELECT amt FROM orders WHERE amt > 1000;
SELECT sname, city FROM salers WHERE city <> 'London';
SELECT sname, city FROM salers WHERE sname <> 'Motika';
--0-9A-Za-zА-Яа-я
--A < D, A > 3, R < Rifkin, 3 > 2
SELECT * FROM ordres WHERE odate > '1990-04-10';
--AND (И), OR (ИЛИ), NOT (НЕ)
SELECT * FROM orders WHERE amt > 1000
SELECT amt FROM orders WHERE amt > 1000 AND amt < 4000;
SELECT * FROM salers WHERE city = 'London' AND comm > 0.11;
SELECT * FROM salers WHERE city = 'London' OR comm > 0.11;
SELECT * FROM salers WHERE NOT city = 'London';
SELECT * FROM orders WHERE NOT ((odate = '10-03-1990' AND snum > 1002) OR amt > 2000.00);
--7
SELECT sname, city FROM salers WHERE city = 'London' OR city = 'New York';
--8
SELECT sname, city FROM salers WHERE city IN ('London', 'New York', 'Barcelona');
--9
SELECT * FROM salers WHERE comm BETWEEN 0.11 AND 0.15;
SELECT * FROM salers WHERE (comm BETWEEN 0.11 AND 0.15) AND comm NOT IN (0.11, 0.15);
SELECT * FROM salers WHERE sname BETWEEN 'A' AND 'N';
--10
SELECT * FROM salers WHERE sname IS NULL;
SELECT * FROM salers WHERE sname IS NOT NULL;
--11 LIKE "%" - любое кол-во любых символов, "_" - любой один символ, "\" - экранирование
SELECT * FROM salers WHERE sname LIKE 'Mot%';
SELECT * FROM salers WHERE sname LIKE 'P__l';
SELECT * FROM salers WHERE sname LIKE '\_';
SELECT * FROM salers WHERE sname LIKE '\%';
--COUNT(), SUM(), AVG(), MIN(), MAX()
SELECT COUNT(sname) FROM salers;
SELECT COUNT(*) FROM salers;
SELECT COUNT(*) AS res FROM salers;
SELECT COUNT(DISTINCT city) FROM salers;
SELECT SUM(amt) AS res FROM orders;
SELECT AVG(amt) AS res FROM orders;
SELECT MIN(amt) AS res FROM orders;
SELECT MAX(amt) AS res FROM orders;
SELECT snum, MAX(amt) FROM orders WHERE snum = 1007;
SELECT snum, MAX(amt) FROM orders GROUP BY snum;
SELECT snum, MAX(amt) FROM orders GROUP BY snum HAVING MAX(amt) > 2000;
SELECT snum, MAX(amt) AS res FROM orders GROUP BY snum HAVING res > 2000;
SELECT snum, MAX(amt) FROM orders GROUP BY snum HAVING COUNT(snum) > 2;
-- Получаем средний результат 
SELECT ((SELECT SUM(amt) AS resSum FROM orders) / (SELECT COUNT(amt) AS resCount FROM orders)) AS res;
-- сумма продаж у конкретного продовца
SELECT SUM(amt) FROM orders WHERE snum = 1007;
SELECT SUM(amt) FROM orders GROUP BY snum HAVING snum = 1007
-- список городо без повторов и максимальный рейтинг каждой группы
SELECT city, MAX(rating) FROM customers GROUP BY city
--12
SELECT sname, comm*100 FROM salers;
--13
SELECT sname, comm*100, '%' FROM salers;
--ORDER BY (сортировка)
SELECT * FROM orders ORDER BY onum;
SELECT * FROM orders ORDER BY onum ASC;
SELECT * FROM orders ORDER BY onum DESC;
SELECT snum, amt, odate FROM orders ORDER BY snum, amt;
SELECT snum, amt, odate FROM orders ORDER BY snum DESC, amt;
SELECT snum, MAX(amt), odate FROM orders GROUP BY snum ORDER BY MAX(amt);
SELECT snum, MAX(amt) AS res, odate FROM orders GROUP BY snum ORDER BY res;
SELECT snum, MAX(amt), odate FROM orders GROUP BY snum ORDER BY 2;
--LIMIT (ограничение вывода)
SELECT * FROM salers LIMIT 1;
SELECT * FROM salers LIMIT 0,5;
SELECT * FROM salers ORDER BY snum DESC LIMIT 1;
--объединение таблиц
SELECT sname, cname FROM salers, customers;
SELECT salers.sname, customers.cname, salers.city FROM salers, customers;
SELECT salers.sname, customers.cname, salers.city FROM salers, customers WHERE salers.snum = customers.snum;
SELECT salers.sname, customers.cname, salers.city FROM salers, customers WHERE salers.snum = customers.snum ORDER BY salers.sname;
SELECT s.sname, c.cname, s.city FROM salers s, customers c WHERE s.snum = c.snum ORDER BY s.sname;
--14
SELECT 'Продавец:', sname, 'Сумма продажи:', amt, 'Размер комиссионных:' (amt*comm) AS res FROM salers, orders WHERE salers.snum = orders.snum;
--Функции строковые
--CONCAT (склеивание строк - оператор конкатенации) 
SELECT CONCAT(sname, city) FROM salers
SELECT CONCAT(sname, ' ',city) FROM salers
--CONCAT_WS (с сепаратором - раздилитель)
SELECT CONCAT_WS(' ', sname, city) FROM salers
--LENGTH(возвращает длину строки в байтах) мультибайтовые строки, кодировки (utf8)
SELECT sname, LENGTH(sname) FROM salers;
--CHAR_LENGTH, CHARACTER_LENGTH - количество символов в строке
SELECT sname, CHAR_LENGTH(sname) FROM salers;
SELECT sname, CHARACTER_LENGTH(sname) FROM salers;
SELECT * FROM salers WHERE CHAR_LENGTH(sname) <= 6;
--LOCATE(substr, str) (возвращает позицию первого вхождение подстроки substr в строку str. Если substr не обнаружен возвращает 0)
SELECT sname, LOCATE('a', sname) FROM salers;
--LEFT(str, len) (возвращает крайние слева len символов из строки str. Данная функция поддерживает многобайтные величины)
SELECT sname, LEFT(sname, 3) FROM salers;
--RIGHT(str, len)
SELECT sname, RIGHT(sname, 3) FROM salers;
--SUBSTRING(str, pos,[len]) (возвращает подстроку длиной len символов из строки str, начиная от позиции pos)(возвращает подстроку из строки str, начиная с позиции pos) Функция поддерживает многобайтные величины
SELECT sname, SUBSTRING(sname, 0, 3) FROM salers;
--SUBSTRING_INDEX(str, dev, -+count) + слева - справа
SELECT SUBSTRING_INDEX('http://mysql.com/index.php', '/', 3) --http://mysql.com/
SELECT odate, SUBSTRING_INDEX(odate, '-', 2) FROM orders;
--LTRIM(str) (возвращает строку с удаленными начальными пробелами. Поддержка многобайтных величин)
SELECT LTRIM('  bar   ') -- 'bar   '
--RTRIM(str) (возвращает строку с удаленными начальными пробелами. Поддержка многобайтных величин)
SELECT RTRIM('  bar   ') -- '   bar'
--TRIM([[BOTH|LEADING|TRAILING] [remstr] FROM] str) (Возвращает строку str с удаленными всеми префиксами и/или суффиксами, указанными в remstr. Если не указан ни одни из спецификаторв BOTH, LEADING или TRAILING, то подразумевается BOTH. Если аргумент remstr не задан, то удаляются пробелы)
SELECT TRIM(' BAR '); -- 'BAR'
SELECT TRIM(LEADING 'x' FROM 'xxxbarxxx') -- 'barxxx'
SELECT TRIM(TRAILING 'xyz' FROM 'barxxyz') -- 'barx'
--REPLACE(str, from_str, to_str) (Возвращает строку str, в которой все вхождения строки from_str заменены на to_str. Данная функция поддерживает многобайтные величины)
SELECT REPLACE('xxxbarxxx', 'x','z') --'zzzbarzzz'
SELECT REPLACE(comm, '0.', '') FROM salers;
--LCASE(str), LOWER(str) (возвращает строку str, в нижним регистре)
SELECT LCASE('NAME') --name
--UCASE(str), UPPER(str) (возвращает строку str, в верхнем регистре)
SELECT UCASE('name') --NAME
--15
SELECT * FROM salers WHERE CHAR_LENGTH(sname) <> LENGTH(sname); --выевляем кирилицу если только стоит мультибатовая кодировка
--функция сравнения строк
--REGEXP'' по умолчанию регистр независимы
SELECT 'a' REGEXP 'a'; --регулярные выражения
SELECT * FROM salers WHERE sname REGEXP '[a-z]'
SELECT * FROM salers WHERE sname REGEXP '[а-я]'
SELECT * FROM salers WHERE sname REGEXP '^s'
SELECT * FROM salers WHERE sname REGEXP 'n$'
SELECT * FROM salers WHERE sname REGEXP '^[^r].*'
SELECT amt FROM orders WHERE amt REGEXP '^.{1,6}$';
SELECT amt FROM orders WHERE amt REGEXP '^[0-9]{1,3}\.[0-9]{2}$';
SELECT * FROM salers WHERE sname REGEXP '^.{1,6}$' AND city REGEXP '^.{1,6}$';
SELECT * FROM salers WHERE sname REGEXP '^([a-z]{1,6}|[а-яА-Я]{1,12})$' AND city REGEXP '^([a-z]{1,6}|[а-яА-Я]{1,12})$';
SELECT * FROM salers WHERE (sname REGEXP '^[a-z]{1,6}$' AND city REGEXP '^[a-z]{1,6}$') OR (sname REGEXP '^[а-яА-Я]{1,12}$' AND city REGEXP '^[а-яА-Я]{1,12}$');
SELECT DISTINCT city FROM salers WHERE city REGEXP ' ';
--функции для чисел
--ABS(x) возвращает абсолютное значение величины х
SELECT ABS(-10) --10
SELECT comm, ABS(comm) AS res FROM salers;
--SIGN(x) возвращает знак аргумента в виде -1, 0 или 1, в зависимости от того, является ли Х отрицательным, нулем или положительным
SELECT comm, SIGN(comm) AS res FROM salers;
SELECT * FROM salers WHERE SIGN(comm) = -1;
SELECT * FROM salers WHERE NOT SIGN(comm);
--MOD(x) Возвращает остаток от деления N на M 5%2
SELECT MOD(5,2)
--FLOOR(x) Округляет дробь в меньшую сторону
SELECT comm, FLOOR(comm) FROM salers;
--CEILING(x) Округляет дробь в большую сторону
SELECT comm, CEILING(comm) FROM salers;
--ROUND(x) Округляет по математическим правилам. 1.4 =1, 1.5=2 !Зависит от настройки.
SELECT comm, ROUND(comm) FROM salers;
--ROUND(x,d) Возвращает аргумент X, округленный до числа d десятичными занками. Если d равно 0, результат будет представлен без десятичного знака или дробной части.
SELECT comm, ROUND(comm, 1) FROM salers;
--POW(x,y), POWER(x,y) Возвращает значение аргумента Х, возведенное в степень Y
SELECT POW(3,2); --9
SELECT POW(3,3); --27
--SQRT(X) Возвращает неотрицательный квадратные корень числа
SELECT SQRT(9) --3
--RAND() Возвращает случайное число от 0 до 1
SELECT RAND();
SELECT * FROM salers ORDER BY RAND() LIMIT 1; --! СИЛЬНО нагружает сервер.
--TRANCATE(X,D) Возвращает x, усеченный до D количества занков после десятичной точки. Если D представлен 0, результат будет без десятичной точки или дробной части. Если D отрицательн, то часть числа обнуляется.
SELECT comm, TRUNCATE(comm, 1) FROM salers
--функции даты и времени
--NOW(), SYSDATE(), CURRENT_TIMESTAMP (Возвращает текудую дату и время как величину в формате YYYY-MM-DD HH:MM:SS или YYYYMMDDHHMMSS, в зависимости от того, в каком контексте используется функция - в строковом или числовом.)
--Заметьте, что NOW(),CURRENT_TIMESTAMP вычисляется только единожды для каждого запроса, а именно - в начале его выполнения. Это позволяет быть уверенным в том, что множественные ссылки на NOW() В рамках одного запроса дадут одно и то же значение
SELECT NOW();
SELECT NOW(), NOW()+0; --числовой вид
SELECT NOW()+0, SLEEP(2), NOW()+0;
SELECT SYSDATE();
SELECT SYSDATE(), SYSDATE()+0; --числовой вид
SELECT CURRENT_TIMESTAMP;
SELECT CURRENT_TIMESTAMP, CURRENT_TIMESTAMP+0; --числовой вид
--CURDATE(), CURRENT_DATE
--Возвращает сегодняшнюю дату как величину в формате YYYY-MM-DD или YYYYMMDD
SELECT CURDATE();
SELECT CURDATE()+0;--числовой вид
SELECT CURRENT_DATE;
SELECT CURRENT_DATE+0;--числовой вид
--CURTIME(), CURRENT_TIME
--Возвращает текущее время как величину в формате HH:MM:SS или HHMMS, в зависимости от того, в каком конексте используется функция
SELECT CURTIME();
SELECT CURRENT_TIME;
--DAYOFWEEK(date)
--Возвращает индекс дня недели для аргумента date (1 = воскресение, 2 = понедельник, ... 7 = суббота). Эти индексные величины соотвествуют стандарту ODBC
SELECT DAYOFWEEK();
SELECT odate, DAYOFWEEK(odate) FROM orders;
SELECT DAYOFWEEK(NOW());
--WEEKDAY(date)
--Возвращает индекс дня недели для агрумента date (0 = понедельник, 1 = вторник, ... 6 = воскресение)
SELECT odate, WEEKDAY(odate) FROM orders;
SELECT WEEKDAY(NOW());
--DAY(date), DAYOFMONTH(date)
--Возвращает порядковый номер дня месяца для аргумента date в диапазоне от 1 до 31
SELECT odate, DAY(odate) FROM orders;
SELECT DAY(NOW());
--DAYOFYEAR(date)
--Возвращает порядковый номер дня года для аргумента date в диапазоне от 1 до 366
SELECT odate, DAYOFYEAR(odate) FROM orders;
SELECT DAYOFYEAR(NOW());
--MONTH(date)
--Возвращает порядковый номер месяца в году для аргумента date в диапазоне от 1 до 12
SELECT odate, MONTH(odate) FROM orders;
SELECT MONTH(NOW());
--DAYNAME(date)
--Возвращает название дня недели для аргумента date
SELECT DAYNAME(NOW()); --Saturday
SELECT @@lc_time_names; --временная зона локали en_US
SET lc_time_names = 'ru_RU'; --меняем временную зону
SELECT DAYNAME(NOW()); --Суббота
--MONTHNAME(date) || SET lc_time_names = 'ru_RU'
--Возвращает название месяца для аргумента date
SELECT MONTHNAME(NOW());
SELECT DAY(NOW()),MONTHNAME(NOW());
SELECT CONCAT_WS(' ', DAY(NOW()), MONTHNAME(NOW())) AS date; --одной строкой
--QUARTER(date)
--Возвращает номер квартала года для аргумента date в диапазоне от 1 до 4
SELECT QUARTER(NOW());
--YEAR(date)
--Возвращает год для аргумента date в диапазоне от 1000 до 9999 или 0 для "zero" даты
SELECT YEAR(NOW());
SELECT odate, YEAR(odate) FROM orders
--HOUR(time)
--Возвращает час для аргумента time в диапазоне от 0 до 23
SELECT HOUR(NOW());
--MINUTE(time)
--Возвращает количество минут для аргумента time в диапазоне от 0 до 59
SELECT MINUTE(NOW());
--SECOND(time)
--Возвращает количество секунд для аргумента time в диапазоне от 0 до 59
SELECT SECOND(NOW());
--PERIOD_ADD(P,N)
--Добавляет N месяцев к периоду P (в формате YYMM или YYYYMM). Возвращает величину в формате YYYYMM. Следует учитывать, что аргумент периода P не является значением даты
SELECT PERIOD_ADD(CONCAT(YEAR(odate), MONTH(odate)),1) FROM orders;
SELECT odate, PERIOD_ADD(DATE_FORMAT(odate, '%Y%m'),1) FROM orders;
--PERIOD_DIFF(P1, P2)
--Возвращает количество месяцев между периодами P1 и Р2. Р1 и Р2 должны быть в формате YYMM или YYYYMM. P1 и Р2 не являеются значением даты.
SELECT PERIOD_DIFF(DATE_FORMAT(odate, '%Y%m'), DATE_FORMAT(NOW(), '%y%m')) FROM orders
--DATE_ADD(date, INTERVAL expr type) син. SUBDATE(date, INTERVAL expr type); SUBDATE(expr, days)
--Данные функции производят арифметические действия над датами. Аргумент date является величиной типа DATETIME или DATE, задающей начальную дату. Выражение expr задает виличину интервала, который следует добавить к начальной дате или вычесть из начальной даты. Выражение expr представляет собой строку, 
--которая может начиться с - для отрицателных значений интервалов. Ключевое слово type показывает, каким образом необходимо интерпретировать данное выражение. Вспомонательная функция EXTRACT(type FROM date) возвращает интервал указанного типа (type) из значения даты.
SELECT DATE_ADD(NOW(), INTERVAL 1 second)
SELECT ADDDATE(NOW(), INTERVAL 1 minute)
SELECT ADDDATE(NOW(), INTERVAL '1:1' minute_second)
SELECT ADDDATE(NOW(), INTERVAL '2:5' DAY_HOUR)
SELECT ADDDATE(), SUBDATE(); -- синонимы для DATE_ADD() И DATE_SUB() c MySQL 3.22.
SELECT NOW(), NOW() + INTERVAL 1 HOUR; --MYSQL 3.23 версии
SELECT NOW(), NOW() - INTERVAL 1 HOUR; --MYSQL 3.23 версии
SELECT NOW(), SUBDATE(NOW(), INTERVAL 2 HOUR);
SELECT ADDDATE(NOW(),10); --прибавляет к дате 10 дней
SELECT SUBDATE(NOW(), 10); --отнимаются 10 дней от даты
--EXTRACT(type FROM date)
--производит скорее извлечение части из значения даты, чем вполнения арифметических действий
SELECT NOW(), EXTRACT(MINUTE FROM NOW()); --извлекает минуты
SELECT NOW(), EXTRACT(DAY FROM NOW()); --извлекает дни
--DATE_FORMAT(date, format)
--Форматирует виличину date в соотвествии со строкой format
SELECT NOW(), DATE_FORMAT(NOW(), '%e/%m/%Y');--3/03/2012
SELECT NOW(), DATE_FORMAT(NOW(), '%d/%m/%Y');--03/03/2012
SELECT NOW(), DATE_FORMAT(NOW(), '%e %M %Y');--3 March 2012
SET lc_time_names = 'ru_RU';
SELECT NOW(), DATE_FORMAT(NOW(), '%e %M %Y');--3 Марта 2012
--TIME_FORMAT(time, format)
--Данная функция формирует только время, при указании других параметров будет выдана величина NULL или 0
SELECT NOW(), TIME_FORMAT(NOW(), '%H:%i');
--SEC_TO_TIME(seconds)
--Возвращает аргумент seconds, преобразованный в часы, минуты и секунды, ка величину в формате HH:MM:SS или HHMMSS, в зависимости от того, в каком контексте используется функция - в строковом или числовом
SELECT SEC_TO_TIME(60); --1 МИНУТА
--TIME_TO_SEC(time)
--Возвращает аргумент time, преобразованный в секунды
SELECT TIME_TO_SEC('1:00:00'); --3600 секунды в часе
SELECT TIME_TO_SEC('1:00'); --3600 секунды в часе
--DATE(expr)
--возвращает часть, отвечающую за дату
SELECT NOW(),DATE(NOW());
--TIME(expr)
--возвращает часть, отвечающую за время
SELECT NOW(), TIME(NOW());
--TO_DAYS(date)
--возвращает количество дней от "нудевого" года
SELECT TO_DAYS()
--DATEDIFF(exp1,exp2)
--возвращает разницу двух дат, разница в днях, время в расчет не принимается
SELECT DATEDIFF('2012-03-18 12:10:12', '2012-03-16 13:14:11') -- 2 дня
--16
SELECT DATEDIFF(MAX(odate), MIN(odate)) FROM orders -- количества дней между максимальной и минимальной датой
SELECT TO_DAYS(MAX(odate)) - TO_DAYS(MIN(odate)) FROM orders
--17
SET lt_time_names = 'ru_RU';
SELECT odate, CONCAT(DATE_FORMAT(odate, '%e %M $Y'), ' года') AS res FROM orders;
--18
SELECT DATEDIFF(NOW(), '2012-01-01');
SELECT TO_DAYS(NOW()) - TO_DAYS('2012-01-01');
--Подзапросы и объединение таблиц
--Объединение таблицы с собой... получаем пары заказчиков с одинаковыми рейтингами
SELECT f.cname, s.cname, f.reating FROM customers f, customers s WHERE f.rating = s.rating ORDER BY rating;
--Объединение таблицы с собой... получаем пары заказчиков с одинаковыми рейтингами - устраняем избыточность
SELECT f.cname, s.cname, f.reating FROM customers f, customers s WHERE f.rating = s.rating AND f.cname > s.cname ORDER BY rating;
--Объединение таблицы с собой... выбор нескольких продавцов в 1 городе
SELECT f.sname, s.sname, s.city FROM salers f, salers s WHERE f.city = s.city AND f.sname > s.sname;
--Вложенный запрос
--Выборка всех клиентов продавца
SELECT cname FROM customers WHERE snum = (SELECT snum FROM salers WHERE sname = 'Peel');
--Запрос, возвращающий ошибку, поскольку результатом подзапроса есть множество
SELECT * FROM orders WHERE snum = (SELECT snum FROM salers WHERE city = 'London'); -- будет ошибка
--Тот же запрос, но без ошибки
SELECT * FROM orders WHERE snum IN (SELECT snum FROM salers WHERE city = 'London'); 
--Выборка продавцов с более чем 1 клиентом
SELECT snum, sname FROM salers WHERE snum IN (SELECT snum FROM customers GROUP BY snum HAVING COUNT(snum) > 1);
--Выбор продавцов без клиентов
SELECT snum, sname FROM salers WHERE snum NOT IN (SELECT snum FROM customers );
--Соотнесенный подзапрос
--Выборка всех клиентов за апрель
SELECT * FROM customers c WHERE '1990-04-10' IN (SELECT odate FROM orders o WHERE o.cnum = c.cnum);
--Тот же результат, но с объединением таблиц на основе справочной целостонсти
SELECT o.cnum, c.cname, c.city, c.rating, c.snum FROM orders o, customers c WHERE c.cnum = o.cnum AND odate = '1990-04-10';
--19
SELECT snum, sname FROM salers WHERE snum IN (SELECT snum FROM customers GROUP BY snum HAVING COUNT(snum) =1)
--20
SELECT snum, sname FROM salers WHERE snum = (
	SELECT snum FROM orders WHERE amt = (
		SELECT MAX(amt) FROM orders
	)
)
--21
SELECT snum, sname FROM salers WHERE snum IN (
	SELECT snum FROM orders WHERE amt IN (
		(SELECT MAX(amt) FROM orders), (SELECT MIN(amt) FROM orders)
	)
)
--EXISTS (Выборка из таблицы продацев только в случае, если есть клиенты с рейтингом больше 100) Возвращает либо истину либо ложь
SELECT * FROM salers WHERE EXISTS (
	SELECT * FROM customers WHERE rating > 100
);
-- Выборка продавцом из Сан-Хосе только в том случае, если есть клиенты с рейтингом больше 100
SELECT * FROM salers WHERE city = 'San Joce' AND EXISTS (
	SELECT cnum FROM customers WHERE rating > 100
)
-- EXISTS с соотнесенным подзапросом... получаем продавцов, у которых есть клиенты
SELECT * FROM salers s WHERE EXISTS (
	SELECT * FROM customers c WHERE s.snum = c.snum
);
-- EXISTS с соотнесенным подзапросом... получаем продавцов без клиентов
SELECT snum, sname FROM salers s WHERE NOT EXISTS (
	SELECT cnum FROM customers c WHERE s.snum = c.snum
);
-- UNION выборка продавцов и клиентов
--количество полей должно совподать
SELECT snum, sname FROM salers UNION SELECT cnum, cname FROM customers;
--дубликаты значений опускаются
SELECT snum, city FROM salers UNION SELECT snum, city FROM customers;
--включение дубликатов
SELECT snum, city FROM salers UNION ALL SELECT snum, city FROM customers;
-- JOIN 
-- INNER JOIN (ВНУТРНЕЕ ОБЪЕДИНЕНИЕ) 
SELECT * FROM salers INNER JOIN customers ON customers.snum = salers.snum
SELECT s.sname, c.sname, s.city FROM salers s INNER JOIN customers c ON c.snum = s.snum
SELECT s.sname, c.sname, s.city FROM salers s INNER JOIN customers c ON c.snum = s.snum WHERE s.city = 'London';
-- LEFT OUTER JOIN (ЛЕВАЯ ВНЕШНЯЯ ОБЪЕДИНЕНИЕ)
SELECT s.sname, c.cname, s.city FROM salers s LEFT OUTER JOIN customers c ON c.snum = s.snum
-- RIGHT OUTER JOIN (ПРАВАЯ ВНЕШНЯЯ ОБЪЕДИНЕНИЕ)
SELECT s.sname, c.cname, s.city FROM salers s RIGHT OUTER JOIN customers c ON c.snum = s.snum
-- CROSS JOIN (перекресное объединение)
SELECT s.sname, c.cname, s.city FROM salers s CROSS JOIN customers c 
-- FULL OUTER JOIN !mysql 5.1 не поддерживает
-- ЭМУЛИРОВАНИЕ ДАННОГО ОПЕРАТОРА
SELECT s.sname, c.cname, s.city FROM salers s LEFT OUTER JOIN customers c ON c.snum = s.snum
UNION
SELECT s.sname, c.cname, s.city FROM salers s RIGHT OUTER JOIN customers c ON c.snum = s.snum
--
SELECT s.sname, c.cname, o.amt, s.city FROM salers s 
	INNER JOIN customers c ON c.snum = s.snum
	INNER JOIN orders o ON o.cnum = c.cnum;
-- FULL TEXT Полнотекстовый поиск - это и есть индекс (релевантность, морфологию)
--Работает только на движке MyISAM
SELECT * FROM customers WHERE MATCH (text) AGAINST ('test');
--в режиме естевенного языка (NATURAL LANGUAGE MODE) морфология не поддерживается, но за то поддерижвается релевантность (ценность).
SELECT * FROM customers WHERE MATCH (text) AGAINST ('программирование');
-- в режиме NATURAL LANGUAGE MODE имеется порог шумовых слов = 50 %;
SELECT * FROM customers WHERE MATCH (text) AGAINST ('mysql');
SELECT * FROM customers WHERE MATCH (text) AGAINST ('mysql' IN NATURAL LANGUAGE MODE); 
--Полнотекстовый поиск в булевом режиме (BOOLEAD MODE) ПОДДЕРЖИВАЕТСЯ МОРФОЛОГИЯ
SELECT * FROM customers WHERE MATCH (text) AGAINST ('программ*' IN BOOLEAN MODE);
SELECT * FROM customers WHERE MATCH (text) AGAINST ('+php -mysql' IN BOOLEAN MODE);
--# FULLTEXT
--ft_min_word_len=3
--настройка минимально букв в слове 
------------------------------------
--CREATE
--1
CREATE TABLE country
(
	country_id TYNYINT UNSIGNED AUTO_INCREMENT NOT NULL,
	country_name VARCHAR(50) NOT NULL,
	PRIMARY KEY (country_id)
) ENGINE=InnoDB; --создание таблиц
--2
CREATE TABLE city
(
	city_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
	city_name VARCHAR(50) NOT NULL,
	country_id TINYINT UNSIGNED NOT NULL,
	PRIMARY KEY (city_id),
	INDEX ixCity (county_id),
	CONSTRAINT country_city FOREIGN KEY (country_id) REFERENCES country (country_id)
) ENGINE=InnoDB;
--3
CREATE TABLE IF NOT EXISTS `customers` (
	`cnum` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
	`cname` varchar(50) NOT NULL,
	`text` text NOT NULL,
	PRIMARY KEY (`cnum`),
	FULLTEXT KEY `text` (`text`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=2011;
--4
CREATE DATABASE 'sql' DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci
--5
CREATE DATABASE IF NOT EXISTS 'sql' DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci --СОЗДАТЬ БД ЕСЛИ НЕ СУЩЕСТВЕТ
--6
CREATE TABLE customers2 SELECT * FROM customers--копию таблицы
------------------------------------
--ALTER
--Изменение таблицы customers и добавляем полнотекстовой индекс к полю text
ALTER TABLE 'customers' ADD FULLTEXT ('text')
------------------------------------
--REPAIR (РЕМОНТ ТАБЛИЦЫ) переидаксирует таблицу
REPAIR TABLE 'customers'
------------------------------------
--INSERT
--1
INSERT INTO customers2 (cname, city, rating, snum, text) VALUES ('IVAN','MOSCOW', 150, 1002, 'TEXT');
--2
INSERT INTO customers2 SET cname='IVAN', city='MOSCOW', rating=150, snum=1002, text='TEXT'
------------------------------------
--UPDATE
--1
UPDATE customers2 SET cname = 'IVAN', city = 'LA' WHERE cnum = 2013;
------------------------------------
--DELETE
DELETE FROM customers2 WHERE cname='ivan';
------------------------------------
--DROP
DROP TABLE [IF EXISTS] customers2 -- удаляем таблицу
DROP DATABASE [IF EXISTS] namt_bd -- удаляем бд
------------------------------------
-- Норманая форма
--1NF - Значение в ячейке таблицы должны быть атамарны, т.е. в ячейке должно содержаться только 1 значение. 
--2NF - Таблица должна содержать ключ, от которого зависят (который идентифицирует) все элементы ряда. Для устранения избыточности данные выносятся в таблицу-справочник.
--3NF - Любой неключевой атрибут таблицы должен зависеть только от первичного ключа. Не должно быть, т.н. транзитивной зависимости, когда неключевой атрибут зависит от другого неключевого атрибута, т.е. когда одно поле (помимо зависимости от ключа) зависит от другого поля. 
--Транзитивная зависимость
--Дернормализация
------------------------------------
--
SHOW WARNINGS -- просмотреть предупреждения
DESCRIBE customers --просмотреть структуру таблицы
DESC customers -- синоним DESCRIBE
