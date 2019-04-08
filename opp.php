<?
//Процедурный подход - это работа с функциями и переменными.
//ООП - это работа с сущностями, т.е классы и объекты. 
//Класс - это способ описание какой либо сущности, который определяет ее состаяние, свойства, поведение.

///////////////////
//Создаем класс
class Page {
	//создаем свойство и указываем спецификацию доступа
	public $header = 'Header';
	public $content;
	public $footer;
	
	//выполняется в момент создания объекта
	public function __construct($shapka, $text)
	{
		$this->header = $shapka;
		$this->content = $text;
		echo 'Hello i am constructor klassa'.$param;
	}
	
	//метод класса
	public function view_header($var1, $var2)
	{
		//this - указывает какое своейсто имеется ввиду (свойства данного класса)
		echo $this->$header;
		
		echo $this->$header.$var1.$var2;
	}
	
	public function foo()
	{
		$var1 = 1;
		$var2 = 2;
		
		//вызываем методы с других методов
		$this->view_header($var1, $var2);
	}
	
	//отрабатывает при удалении объекта (аргументы в этом методе не передаются) - не обращатся к другим объектам, т.к. порядок удаления объекта не определен
	public function __destruct() 
	{
		echo 'I am destuctor';
	}
}
$param = 'string';
//Создаем объект класса
$index = new Page('Index','Content');
//получаем доступ к свойству объекта
echo $index->header;
//переназначаем свойства объекта
$index->header = 'Index';
//вызываем метод
$index->view_header();

$admin = new Page('Admin', 'Text');
$admin->header = 'Admin';
echo $admin->header;

$view = new Page('View', 'TextView');
$view->header .= 'View';
echo $view->header;