<?php

//соединение с бд
@mysql_connect("localhost", "root", "password") or die("Нет соединения с сервером");
//вывод ошибок
mysql_error();
//изменяем кодировку
mysql_query("SET NAMES cp1251") or die("Не установлена кодировка соединения");
//соединяемся с бд "sql"
mysql_select_db("sql") or die("Не выбрана БД");

//отправляем запрос на сервер
$query = "SELECT * FROM customers";
$result = mysql_query($query) or die(mysql_error()); //получаем указатель(ссылку) на результат
//получаем данные
$row = mysql_fetch_assoc($res); //получает ассоциативный массив
print_r($row); //выводим данные

$data = array();
while($row = mysql_fetch_assoc($res)) {
	$data[] = $row;
}
print_r($data);
echo $data[1]['cname'] . ' - ' . $date[1]['city'];

//записываем, добавляем данные 
$query = "INSERT INTO customers(cname, city, rating, snum, text) VALUES ('vasy', 'vas', 150, 1002, 'Text');";
mysql_query($query);
//количество рядов затронуто запросом
if(mysql_affected_rows()) {
	echo '<p>Данные добавлены</p>';
} else {
	echo '<p>Ошибка</p>';
}

$query = "UPDATE customers SET cname='Jou', city='LA' WHERE cnum=2013";
mysql_query($query);
//количество рядов затронуто запросом
if(mysql_affected_rows()) {
	echo '<p>Данные обнавлены</p>';
} else {
	echo '<p>Ошибка</p>';
}

$query = "DELETE FROM customers WHERE cnum=2013";
mysql_query($query);
//количество рядов затронуто запросом
if(mysql_affected_rows()) {
	echo '<p>Данные обнавлены</p>';
} else {
	echo '<p>Ошибка</p>';
}

?>

<table border="1">
<?php foreach($date as $item) : ?>
<tr>
	<td><?=$item['cnum']?></td>
	<td><?=$item['cname']?></td>
	<td><?=$item['city']?></td>
	<td><?=$item['rating']?></td>
	<td><?=$item['snum']?></td>
	<td><?=$item['text']?></td>
</tr>
<?php endforeach; ?>
</table>