<?php 
//Фреймворк - набор библиотек, классов и методов для работы и создания приложения, каркас будущего приложения.
//Laravel - это фреймворк написанный на языке php использующий шаблон MVC, открытый исходный код.
/////////////////////////////
//Файловая структура Laravel//
/////////////////////////////
//Путь к классу \<NamespaceName>\<SubNamespaceNames>\<ClassName> .php
//NamespaceName - пространство имен (совподает с именами каталогов)
//SubNamespaceNames - дочернее пространство имен, но не обязательно
//app
//Модели распологается в директории app
//app/http/ - распологаются контроллеры
//Console - доступ к функционаллу через консоль
//Middleware - посредники
//Request - классы запросов, валидаторского ввода
//файл Kernel.php - обработка запросов через протокол http, http ядро
//Route - маршурты функционалла наше будущего приложения
//Events - классы событий
//Exceptions - обработчики исключений, классы исключений
//Jobs - задача, классы очередей, поставить в очередь задачи или синхронно
//LIstenrs - слушатели, обработчики событий 
//Policies - политика безопасности приложения, права пользователя 
//Providers - сервис провадеры приложения.
//bootstrap - автозагрузка классов, в каталоге расположены файлы, которые должны отработать при начальном работе приложения.
//config - конфигураторы, настройки 
//database - файлы миграции и пасева данных(добавление информации в таблицы)
//public - глабальная точка входа в приложения (публичный доступ)
//resources - шаблоны, виды, файлы локализации (ru), рабочии файлы less, sass...
//storage - скопилированные шаблоны (blade), ФАЙЛЫ сессии, кеши.
//test - юнит тесты
//vendor - скаченные библиотека с composers, исходный фреймворка
//.env - файл описанные переменные окружения, настройки.
//.env.example - пример оформления файла окружения
//.gitattributes - .gitignore - для работы системы гит
//artisan - доступ к консоле фреймворка
//composer.json - composer.lock - файл сгенерированный композером, описания зависимости фреймворка - стату установки библиотек 
//gulpfile.js - package.json - для работы сепциального инструмента laravel элексир
//phpunit.xml - настройки системы тестирования юнит
//readme.md - 
//server.php - файл эмулирует работу модуля перенаправлений веб сервера апач mod_rewrite, и испльзуется для тестирования работы фреймворка
////////////////////////////////
//Настройка фреймворка//
////////////////////////////////
//APP_ENV=local - среда разработки
//APP_DEBUG=true - режим отладка
//APP_KEY - случайная строка 32 символа, для шифрования данных в фреймворке
//QUEUE_DRIVER - настройка в работе с очередями
//app.php - глобальные настройки фреймворка в целом
//$_ENV['APP_ENV'] - МАССИВ переменных окружений
//'cipher' => 'AES-256-CBC', - шифрование данных
//providers - массив провайдеров сервис
//aliases - псевдонимы для фасадов, системных классов
//auth.php - настройка системы авторизацией пользователей
//cache.php - настройка системы кешировния
//database.php - доступ бд
//mail.php - настройки для работы почты
//session.php - сессия
//view.php - виды проекта
////////////////////////
//Консоль//
////////////////////////
//php artisan list - список команд в консоле
//php artisan help app:name - помощь для алиасов
//php artisan app:name name - изменяем пространство имен
//php artisan key:generate - генерирование ключа APP_KEY
//php artisan make:controller name - создание контроллера
///////////////////////
//Принцип работы фреймворка//
///////////////////////
//Пользователь->Контроллер-><-Модель->Вид->Пользователь
//Пользователь->Контроллер->Вид->Пользователь
//Контроллер - блок который получает данные от пользователя, обрабатывает, нормализует, проверка и отправляет модели
//Модель - отвечает за расчеты, выборку информации с БД и т.д.
////////////////////////////
//Точка входа - файл public\index.php (загружает автозагрузчик классов, создается объект глобального класса app, создается объект ядра обработки запросов http - kernel, там же middleware)
//после этого данные поступаю в маршрут Router router.php 
//Пример: 
Route::get('/', function () {
    return view('welcome');
}); 
// '/' - главная странцица, адрес
//второй параметр функция обработчик
//view('welcome') - метод вида и передается аргументом имя вида, который должен отобразится на экране
//Машрутизация - это разбор uri и обработка контроллера 
// //uri - любой элемент обращения пользователя, страница сайта, изображение и т.д.

//Route есть специальный сервис провайдер RouteServiceProvider
Route::get('/page', function(){
    echo 'Hello';
    return;
});
print_r($_ENV); //Вывод константы настроек ENV
config('app.locale'); //- доступ к конфигурации
echo Config::get('app.locale'); //доступ к конфигурациям через фасад.
echo Config::set('app.locale', 'ru'); //устанавливаем новые параметры для настройки, только данный метод не перезаписывает файл конфигурации, а настройки хранятся в пямяти
echo env('APP_ENV'); //получаем данные настройки
Route::post('/comments',function(){
    print_r($_POST);
}); //пост запрос
Route::match(['get','post'],'/comments',function(){
    print_r($_POST);
}); //использует различные типы запросов
Route::any('/comments',function(){
    print_r($_POST);
});//для всех видов запросов
<input type="hidden" name="_method" value="PUT"> //для отправки формы типа PUT
Route::any('/page/{id}/{id_cat}',function(){
    echo 'hello';
}); // в {} передается параметр domen.loc/page/10
Route::get('/page/{id}',function($id){
    echo 'hello';
    echo $id;
}); //$id - передается параметром
Route::get('/page/{id}/{cat}',function($id, $cat){
    echo 'hello';
    echo $id.'|'.$cat;
}); //параметры поподаеют не по наименованию, а по очереди т.е если id =10,то в аргументы функции если будет первым стоять сат то этот параметр сохраниться туда, по порядку следования
Route::get('/page/{id?}',function($id = null){
    echo $id;
}); //параметр id не обязательный
Route::get('/page/{id}',function($id){
    echo $id;
})->where('id','[0-9]+'); //можно также указывать регулярное выражение для параметра, имя параметра должен совпадать в where 
Route::get('/page/{cat}/{id}',function($id){
    echo $id;
})->where(['id'=> '[0-9]+','cat'=>'[a-zA-Z]+']); //указываем регулярное выражение для нескольких параметров
//Если нам необходимо определить некие условия в качестве глобального для всех роутеров, для этого нужно использовать сервипровайдер RouteServiceProvider в методе boot
public function boot()
{
	//
	Route::pattern('id', '[0-9]+');
	parent::boot();
} //указываем глобальные условия для параметра id во всех условиях
Route::patterns(['id' => '[0-9]+', 'cat' => '[a-zA-Z]+']); // несколько параметров для глобального условия
//группировка Router (admin/edit/ - admin/edit/page)
Route::group([], function(){
    Route::get('page/create', function(){
        echo 'page/create';
    });
    Route::get('page/eidt', function(){
        echo 'page/edit';
    });
}); //группировка маршрутов
Route::group(['prefix'=>'admin'], function(){
    Route::get('page/create', function(){
        echo 'page/create';
    });
    Route::get('page/edit', function(){
        echo 'page/edit';
    });
}); //установили префикс для группы (admin/page/create - admin/page/edit)
Route::group(['prefix'=>'admin/{id}'], function(){
    Route::get('page/create', function(){
        echo 'page/create';
    });
    Route::get('page/edit', function(){
        echo 'page/edit';
    });
});//Можно также передавать параметры
Route::get('/', ['as' => 'home', function () {
    return view('welcome');
}]);//указываем имя маршрута
Route::get('/', function () {
    return view('welcome');
})->name('home'); //или указать имя можно таким способом
echo route('home'); //обращение к машруту выводит ссылку машрута 
return redirect()->route('home'); //редирект на страницу, возврат
//////////////////////
Route::get('/article/{id}', function ($id) {
    echo $id;
})->name('article');
Route::get('page/create', function(){
	return redirect()->route('article', array('id'=>25));
}); //если у машрута есть параметр, то его можно переадть вторым аргументом как массив
/////////////////////
Route::current(); //получаем объект текущего машрута
$route = Route::current();
echo $route->getName();//получаем имя текущего маршрута
Route::get('page/create/{var}', function($id){
	$route = Route::current();
	echo $route->parameter('var',25); //второй аргумент это значение по умолчанию
})->name('createpage'); //получаем параметр маршурат
print_r($route->parameters());//возвращает массив данных параметров
//
Route::get('/about', 'FirstController@show'); //обработка машрута контроллером и методом его show
// полный путь до контроллера не указывается потому, что в файле пространства имен RouteServiceProvider, который загружает файл машрута уже указн полный путь    protected $namespace = 'App\Http\Controllers';
//
Route::get('/about/{id}', 'FirstController@show'); // передаем параметр методу
//
//php artisan make:controller CoreController //можно также создавать контроллеры через консоль
//также в параметры метода можно передавать глобальные объекты классов таких как Request, например, чтобы получить параметры, передаваемые в маршруте
//
Route::get('/articles', ['uses' => 'Admin\CoreController@getArticles', 'as' => 'articles']);
Route::get('/article/{id}', ['uses' => 'Admin\CoreController@getArticle', 'as' => 'article']);
//так можно именовать машруты с контроллерами для создания ссылки
//REST - это стиль для постраения архитектуры программного обеспечения, для web служб или сервисов. Эта система зависит от протокола передачи данных таких как HTTP. А значит запрос get используется для получения данных, put для добавления, post для редактирования и delet для удаления.
//php artisan make:controller Admin/CoreRsourceController --resource // создаем контроллер системы RESTful
Route::resource('/pages','Admin\CoreResourceController'); //для постраения машрута к системе REST
//create - используется только для отображения страницы элементов форм
//store - если мы передадим информацию через http://laravel.loc/pages, то мы попадем в этот метод, который должен сохранить новый элемент в базе данных
//show - отображения конкретного элемента на экран, например передаем такой запрос http://laravel.loc/pages/10 и поподаем в этот метод, используется для обращение к БД и получения элемента по id, который передается через параметр
//edit - http://laravel.loc/pages/11/edit метод служит для редактироваиня, должен отобразить на экране поля формы в которые добавленные данные для редактирования
//update - если мы выполним PUT запрос с ID, то сработает данный метод, который используется для сохранения данных в БД, редактирования
//@method('PUT') - указываем в форме.
//@csrf - токен для формы
//destroy - данный метод отработает если мы используем delete
Route::resource('/pages','Admin\CoreRsourceController', ['only' => ['index', 'show']]);//only - говорит системе, какими методами мы будем пользоватся, а другие будут исключены из маршутизатора
Route::resource('/pages','Admin\CoreRsourceController')->only(['index', 'show']); //так же работает и такой способ
Route::resource('/pages','Admin\CoreRsourceController', ['except' => ['index', 'show']]);//except - создает список тех методов, которые будут исключены из маршрута
Route::resource('/pages','Admin\CoreRsourceController')->except(['create','store']);//можно написать и так
Route::get('pages/add', 'Admin\CoreRsourceController@add'); //если мы хотитм создать собственный метод в REST, то достаточно прописать такой маршрут и в контроллере прописать метод
//
//Middleware - классы посредники или фильтры для обработки http запросов  
//Создать посредник можно через консоль: php artisan make:middleware MyMiddleware
//handle() - обработчик запроса в посреднике
//Closure $next - функция замыкания, она передает к следующему посреднику по цепочке
public function handle($request, Closure $next)
{
	if($request->route('page') != 'pages') //page это параметр, который передается в маршруте
	{
		return redirect()->route('home');
	}
	return $next($request);
}
//В файле Http\Kernel.php 
protected $middleware = [
	\App\Http\Middleware\CheckForMaintenanceMode::class,
	\Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
	\App\Http\Middleware\TrimStrings::class,
	\Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
	\App\Http\Middleware\TrustProxies::class,
]; //указывается посредники для всех маршрутов

protected $routeMiddleware = [
	'auth' => \App\Http\Middleware\Authenticate::class,
	'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
	'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
	'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
	'can' => \Illuminate\Auth\Middleware\Authorize::class,
	'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
	'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
	'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
	'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
]; //тутже указываются посредники, которые могут быть использованны в маршрутах
'mymiddle' => \App\Http\Middleware\MyMiddleware::class, // class - используется для указания полного имени класса
Route::get('/article/{page}', ['uses' => 'Admin\CoreController@getArticle', 'as' => 'article', 'middleware' => 'mymiddle']); //так указываем посредника для обработки маршрута
///////////////////////
protected $middlewareGroups = [
	'web' => [
		\App\Http\Middleware\EncryptCookies::class,
		\Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
		\Illuminate\Session\Middleware\StartSession::class,
		// \Illuminate\Session\Middleware\AuthenticateSession::class,
		\Illuminate\View\Middleware\ShareErrorsFromSession::class,
		\App\Http\Middleware\VerifyCsrfToken::class,
		\Illuminate\Routing\Middleware\SubstituteBindings::class,
	],

	'api' => [
		'throttle:60,1',
		'bindings',
	],
]; //можно также группировать посредники, чтобы в последствии вызывать данные группы
Route::group(['prefix'=>'admin/{id}', 'middleware' => ['web']], function(){}); // вот так вызывается группа посредников
////////////////
Route::get('/article/{page}', ['uses' => 'Admin\CoreController@getArticle', 'as' => 'article', 'middleware' => ['mymiddle','auth']]); //несколько посредников
protected $middleware //указывается глобальные посредники, но так как это глобальные, до маршрутов мы еще не дошли, а значит структура $request->route('page') не будет работать
//Middleware - сначала мы заходим в посредник из постредника $next($request) отрабатывает контроллер, алгоритм, а потом возвращаемся в посрденик, который возвращает данные.
public function __construct()
{
	$this->middleware('mymiddle');
}  //также в конструкторе класса можно указать посредника.
Route::get('/article/{page}', ['middleware' => 'mymiddle:admin', 'uses' => 'Admin\CoreController@getArticle', 'as' => 'article']); //так же для пасредникова можно передовать параметры
public function handle($request, Closure $next, $admin) //метод их будет принимать как уже третий и последующие параметры
///////////View - Виды//////////////
//Виды - это шаблоны 
view('welcome') //обращение к шаблону, в параметрах передается название шаблона
//vendor/laravel/framework/src/illuminate/Foundation/helpers.php по этому пути располоагается метод view()
//если мы не передаем аргумент, то метод вернут нам объект класса ViewFactory, а если передадим, то объект вида
return view('def.template', ['title' => 'Header']); //передавать значение в шаблон можно вторым параметром, который принимает массив
/////////////
$data = ['title' => 'Header Title'];
return view('def.template', $data); //можно использовать так же переменные массива для передачи данных
return view('def.template')->with('title', 'Hello World'); //еще можно использовать метод with
////////////
$view =  view('def.template'); //получаем объект view
$view->with('title', 'Hello World'); //обращаемся к объекту и его методу with
$view->with('title2', 'Hello World2');
$view->with('title3', 'Hello World3');
///////////
return view('def.template')->withTitle('Hello'); //with префикс, Title - имя переменной, которую мы хотим передать
//vendor/symfony/http-foundation/Response.php //тут расположен метод send, который отвечает за отображение шаблона на экране
//$this->sendHeaders(); отправка заголовков
//$this->sendContent(); отображает данные на экран
public function sendContent()
{
	echo $this->content;

	return $this;
}
<a href="<?=route('home')?>">Home</a> //формирование ссылки
<?=route('article',['id' => 10])?> //параметры для формирования ссылки передаеются ввиде второго параметра
<?php
bool exists(string $view) //проверка существует ли данное представление (шаблон)
if(view()->exists('def.template')) 
{
	return view('def.template')->withTitle('Hello');    
} //проверка на существование шаблона
abort(404); //метод вызывает исключение 404 ошибка страницв не найдена
$path = config('view.paths'); //получаем полный путь к директории views
return view()->file($path[0].'/def/template.php')->withTitle('Hello');//выводим страницу с параметрами
///в файле конфигурации view есть такая настройка, она отвечает за путь к скомпилированным страницам, в них нет кода php
'compiled' => env(
	'VIEW_COMPILED_PATH',
	realpath(storage_path('framework/views'))
),
//путь к этим файлам storage/framework/views - при работе с шаблоном blade вместо меток будут данные 
////////////////
view()->name('def.template' ,'myview'); //методом name можно назначить имя представления
view()->of('myview')->withTitle('Hello');//методом of мы уже обращаемся к представлению, вторым параметром можно передовать данные в шаблон в виде массива
////////////
$view = view('def.template',['title' => 'hello'])->render(); //метод render возвращает строку вида, данный метод принадлежит классу view
$view = view('def.template',['title' => 'hello'])->getPath(); //путь к файлу
//////////////////
////Шаблонизатор Blade/////
//////// Шаблонизатор - это специальный механизм, который подставляет данные при компиляции
//@директива шаблонизатора blade
//@section('navbar') ... @endsection - указываем секцию шаблона
//@yield('navbar') - подключаем секцию к шаблону
//@section('navbar') ... @show - объявляем секцию и сразу ее отображаем
//@extends('def.layouts.layout') - подключение файла (родителя)
//В дочерних представлениях можно переопределить секции, которые мы указали у родителя @section('navbar') ... @endsection
@section('navbar')
    @parent
@endsection //таким спобом можно в дочерним шаблоне вернуть секцию родительской секции
@section('content')
    @include('def.content')
@endsection //если большой блок можно его просно вынести в отдельный файл и подключить
{{ $title }} //такая конструкция в шаблонизаторе blade заменяет код php <?=$title?>
<?
{{ date('Y.M.d' , time()) }} //в инструкциях шабилонизатора можно использовать как php функции так и laravel
<a href="{{ route('article',array('id'=>10)) }}">Article</a> //прописываем ссылку в шаблонизаторе используя route() и передаем вторым параметром аргумент 10
{{ $script }} //инстуркции преобразует данные в html сущности
{!! $script !!} //выводит скрипт и он будет отрабатывать
@{{ var }} //если нам нужно вывести строку или элемент js, который не является функцией или переменной, то используем такую стуктуру. Символ @ не будет отображатся
{{ isset($bvar) ? $bvar : $title }} //тернарного оператора isset()
{{ $bvar ?? $title }} / {{ $bvar or $title }} //констуркцию выше можно упростить таким видом
 @if() ... @endif //директива шаблонизатора blade условие if
@if(count($data) < 3)
	@{{ Error }}
@else
	@{{ Больше элементов }}
@endif //пример
@if() ... @elseif ... @endif	
$i++ //инкремент увелечение на 1
@for($i = 0; $i < count($dataI); $i++)
	<li>{{ $dataI[$i] }}</li>
@endfor //директива цикла for в шаблонизаторе blade
@foreach($dataI as $k => $v)
	<li>{{ $k . ' => ' . $v }}</li>
@endforeach //

@forelse($dataI as $item)
	<li>{{ $item }}</li>
@empty
	<p>No item</p>
@endforelse //этот цикл похож на foreach в различие в том, что если элемент массива оказался пустым тогда отрабатывает @empty
@while(false)
	<p>while</p>
@endwhile //тут все просто
@each('def.list', $dataI, 'value') //первым аргумент это вид который присоединяем и отправлем данные, второй параметр это массив с данными, третий это имя переменной, которой будет присваивается элемент массива при каждой итерации
//@each - Вид оказываемых через каждый не наследуют переменные родительского вида. Если дочернему представлению требуются эти переменные, следует использовать foreach и include.
//чтобы создать собственную директиву нужно в AppServiceProvider в методе boot написать код:
Blade::directive('myDir', function($var){
	return "<h1>New Directive - $var </h1>";
}); //Используем фасад шаблонизатора Blade и его метод directive - где первым параметром идет имя нашей новой директивы, а вторым ананимная функция, параметры в функцию передаю при обращении к директиве
@myDir('Dir') //обращаемся к новой директиве
////////////////////////////////////////////
////Request///
///////////////////////////////////////////
//Абстракция отправляемого запроса пользователя
$kernel->handle //В index.php файле есть строчка где вызывается метод handle, который является обработчик входящего http запроса, параметром метода передается объект запроса пользователя
Illuminate\Contracts\Http\Kernel //интерфейс ядра http запросов
$app //глобальный объект приложения, который распологается boostrap/app.php
$app->singleton(
Illuminate\Contracts\Http\Kernel::class,
App\Http\Kernel::class
); //этот метод связует интерфейс с классом kernel
//Чтобы получить объект запроса нужно его передать параметром
public function store(Request $request)
{
    $name = $request->input('name');
}
$request->all() //all вернет все данные в виде массива, которые передаются в теле запроса
//Объект Request можно также получить в контроллере используя __construct
protected $request;

public function __construct(Request $request) {
$this->request = $request;
}
//После этого можно обращатся в методе к запросу используя свойсто
print_r($this->request->all());
Route::match(['get','post'],'/contact/{name?}',['uses'=>'Admin\ContactController@show','as'=>'contact']); //если мы должны при запросе получать параметр, то в маршруте указываем так
<form method="post" action="{{ route('contact',array('name'=>'hello')) }}"> //в параметрле action передаем это значение
public function show(Request $request,$id=FALSE) //это значение мы получаем вторым параметром
//параметр машрута передается вторым запросом
print_r($this->request->input('name')); //метод input позволяет обращаться к конкретному значению массива в запросе с помощью имени в параметра
$request->has('name') //метод has возвращает true если в массиве запроса есть парметр name
$request->has(['name', 'email']) //если нужно проверить несколько значений то передаем массив
$request->filled('name') //метод filled возвращает true если в массиве запроса у элемента name есть значение
$request->only(['name','site']) //возвращает массив только с теми ячейками, которые были указаны
$request->except(['name','site']) //противоположен методу only исключает эти ячейки из массива данных
$request->name //также обращатся к элементу запроса можно указав имя элемента как свойства, но если мы передаем параметр name в запросе машрута, то оно сохранится в этом свойстве
$request->path(); //вернет путь запроса http://domain.com/foo/bar метод вернет foo/bar
if ($request->is('admin/*')) {
//
} //метод позволяет проверить соотвествие пути входящего запроса
$request->url() //возвращает путь страницы без get параметров, без запроса http://lar.loc:81/contact/admin
$request->fullUrl()//возвращает путь страницы с запросом http://lar.loc:81/contact/admin?admin=1&user=2
$request->method() //получаем тип запроса POST GET, возвращает в виде строки
if ($request->isMethod('post')) {
//
} //проверка на метод, если метод post вернет true
$request->flash() //сохраняет в сессии все данные, которые были переданны в теле запроса, чтобы пользователь не вводил повторно данные в форму
//чтобы открыть сессию для маршрута нужно в глобальном классе Kernel добавить посредник:
$middleware = [\Illuminate\Session\Middleware\StartSession::class,]; //StrartSession начало сессии, теперь при любом обращении к любому маршруту будет открыватся сессия
print_r(Session::all()) //фасад Session и метод all возвращает всю сессию в виде массива
value="{{ old('name') }}" //метод old вытаскивает данные из сессии, а имеенно old_input данные, которые были отправлены прошлый раз в запросе
$request->flashOnly(['username', 'email']); //сохраняет данные в сессию выборочно
$request->flashExcept('password') //противоположен методу flashOnly, указывается поля, которые не сохраняются в сессии
return redirect()->route('contact')->withInput(); //с помощью метода withInput мы сохраняем содержимое объекта request в сессию
$request->root(); //возвращается строка с корневым url путем
$request->exist() //похож на метод has
$request->header() //возвращает заголовки, которые были отправлены вместе с запросом
$request->server() //возвращает массив глобального SERVER
$request->flush() //очищает старые данные из сессии
$request->old() //возвращает ранее сохраненые данные в сессии
//////////////////////////////////
//Response//
//////////////////////////////////
//Ответ пользователю
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
); //в точке входа public/index.php в этой точке мы получаем ответ класса responce - это абстракция ответа, который формируется приложением Laravel
//для возврата полного объекта класса Response ответа, то нужно сначала указать простарнство имен
use Illuminate\Http\Response; 
//использовать конструктор
return new Response('Content', 200, array()); //в качестве первого аргумента можно передавать текст контента, второй параметр это код запроса, третий массив заголовков
//в конструктор класса есть у его родителя, который распологается Symfony\Component\HttpFoundation\Response
    public function __construct($content = '', int $status = 200, array $headers = [])
    {
        $this->headers = new ResponseHeaderBag($headers);
        $this->setContent($content);
        $this->setStatusCode($status);
        $this->setProtocolVersion('1.0');
    }
return (new Response('hi')); //возвращает объект ответа и выводит первый аргумент на экран	
///////////////////////////////
$view = view('def.abdout')->withTitle('Hello Wordl')->render();//используем метод вида передаем параметр title и рендарим (возвращаем представление в виде строки)
return (new Response($view)); //возвращаем объект класса Response (ответ), где первый аргумент - это представление в виде строки
return (new Response($view))->header('Content-Type', 'newType'); //указываем заголовок ответа, который вернет браузер
///////////////////////////////
return (new Response($view))
                    ->header('Content-Type', 'newType')
                    ->header('Header-One', 'HeaderOne'); //можно указывать несколько заголовков
///////////////////////////////
return response($view); //второй способ это ипользовать функцию хелпера response, он аналогичен конструктору 	
//Illuminate/Foundation/helpers.php				
///////////////////////////////
return response()->json(['name' => 'Hello','name2' => 'Hello2']); //можно также возвращать ответ в виде json, сначало используем хелпер без параметров, чтобы вернуть объект ResponseFactory, а потом вызываем метод json, где первым параметров передаем массив 
//////////////////////////////
return response()->view('def.about',['title' => 'Hello']); //также мы можем использовать метод view
//////////////////////////////
return response()->download('robots.txt','mytext.txt',['headerOne' => 'hello']); //файл для скачивание первым аргументом передается путь к файлу, второй имя сохраняемого (не обязательный), третим параметром можно передать загаловки (не обязательный)
/////////////////////////////
return response($view)->withHeaders([
                'headerOne' => 'hello'
            ]); //можно таким способом передавать заголовки
			
//Редирект - это перенаправление пользователя по определенному адресу			
return redirect('/articles'); //возвращаем объект класса RedirectResponse если мы указываем параметр, Illuminate/Http/RedirectResponse
// эту операцию можно повторить просто используя объект этого класса
return new RedirectResponse('/articles');
return RedirectResponse::create('/'); //также можно использовать статистический метод create
back() // функция хелпера response, которая возвращает на предыдущую страницу
return redirect()->route('home'); //перенаправление на конеретный маршрут приложения 
return redirect()->action('ContactController@show'); //редирект на конкретный метод контроллера
return redirect('/articles')->with('param1', 'hello'); //редирект на страницу и записываем в сессию необходимые параметры
//Создаем свой собственный ответ, к которому можно обращатся для формирования определенных данных
//AppServiceProvider
use Response;
public function boot()
{
	Response::macro(); //macro - позволяет зарегистрировать свой собственный ответ которому мы сможем обращатся 
}
Response::macro('myRes', function($value){
	return Response::make($value);
});
///
return response()->myRes('Hello'); //используем наш ответ
//////////////////////////////////////
///Миграции//
//////////////////////////////////////
//Это упрощенные версия управления системой БД, которая позволяет отслеживать изменения, а также создавать таблицы БД используя консоль фреймворка и методы структур таблиц класса Схема
//настройки
'default' => env('DB_CONNECTION', 'mysql'), //указывается тип БД
connections //список поддерживаемых типов БД
'migrations' => 'migrations', //имя таблицы о приминяемых миграциях в БД, таблица создается автоматически
redis //массив настроек для работы с БД radis
php artisan make:migration create_articles_table //команда для консоли, создает новую миграцию
public function up() //в миграции метод up выполняется когда мы выполняем данную миграцию
public function down() //метод down выполняется, когда мы выполняем откат данной миграции
php artisan make:migration create_articles_table --create=articles //команда для создании в методе up схему для создании таблицы articles
Schema::create('articles', function (Blueprint $table) {
	$table->increments('id');
	$table->timestamps();
}); //Используется фасад Schema и его метод create, первым параметром указываем имя таблицы, вторым параметром идет функция callback (обработчик), которая выполняет свой код, когда мы создаем определенную таблицу
//Это действия при создании конкретной таблицы, в качестве параметра функция принимает объект только что созданной таблицы
$table->increments('id'); //метод increments формирует в таблице поле id int AUTO_INCREMENT PRIMARY_KEY
$table->timestamps(); //создает два столбца типом timestamp, created_at, update_at, в одном поле хранятся данные даты создания строки, во втором даты изменеия строки
$table->string('name', 100); //поле с именем name типа VARCHAR и ограничиваем символы в 100
$table->text('text'); //столбец типа text
Schema::drop('articles'); //для удаления таблицы используется метод drop
Schema::dropIfExists('articles'); //если есть такая таблица то она удаляется
php artisan migrate //в консоле прописываем команду для запуска миграций
php artisan migrate:rollback //команда отменяет миграцию, которая была выполнена на предыдущем шаге
php artisan make:migration change_articles_table --table=articles //команда создают миграцию, которая позволяет изменять уже созданную таблицу
php artisan make:migration add_mar_to_articles_table //если пропишем такое имя то создатся схема в новой миграции
Schema::table('articles', function (Blueprint $table) {
	//
}); //Используется фасад Schema и его метод table, который возвращает объект таблицы и передает его в callback
$table->dropColumn('votes'); //удаляет колонку из таблицы
php artisan migrate:reset //команда откатывает все миграции
if(Schema::hasTable('articles')) //проверка на существование таблицы
if (Schema::hasColumn('users', 'email')) {
    //
}//проверка на существование колонки
$table->engine = 'InnoDB'; //указываем движок таблицы
$table->string('alias',100)->default('NULL'); //можно указать значение по умолчанию с помощью модификатора default()
->after('column') //после которого будет распологатся поле
//Библиотека doctrine используется для определение текущего состояния стобца и создание sql-запросов
//composer.json указываем расширение "doctrine/dbal": "*" в "require": {}
composer require doctrine/dbal //команда для установки
 $table-string('alias')->default('alias')->change(); //изменяем состояние уже существующего поля
 ///////////////////////////
 //Посев данных//
 ///////////////////////////
 //Наполнения БД database/seeds
 php artisan make:seeder UsersTableSeeder //команда создания класса посева таблицы
 public function run() //метод запускается когда мы запускаем механизм посева данных
 
DB::insert('INSERT INTO `articles` (`name`,`text`,`img`) VALUES (?,?,?)', [
   'Blog post',
   '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eaque iste magni necessitatibus! Ab autem, corporis cupiditate, dolorem eveniet itaque minima, nesciunt officia quasi recusandae rem saepe velit voluptates! Nostrum.</p>',
   'pic1.jpg'
]); //с помощью такой инструкции можно добавлять данные в таблицу

//Конструктор запросов метод table создает пустой запрос
DB::table('articles')->insert([
   'name' => 'Sample blog post',
   'text' => '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eaque iste magni necessitatibus! Ab autem, corporis cupiditate, dolorem eveniet itaque minima, nesciunt officia quasi recusandae rem saepe velit voluptates! Nostrum.</p>',
   'img' => 'pic2.jpg'
]);

//еще один способ добавления данных через модели
php artisan make:model Article //создаем модель через консоль, имя модели должно имя таблицы с которой мы хотим ее связать в единственном числе, а таблица во множественном
Article::create([
   'name' => 'Sample blog post3',
   'text' => 'Hello',
   'img' => 'pic4.jpg'
]); //стуктура запросаы
$this->call(ArticlesSeeder::class); //подключаем созданный класс 
php artisan db:seed //после того как подключили класс в DataBase то на запуск можно использовать эту команду
php artisan db:seed --class=UsersTableSeeder //если не подключаем класс то можно использовать такую команду
php artisan migrate:refresh --seed //команда отменяет все миграции, потом заного их накатывает, а после производит посев данных
//////////////////////////
//SQL - запросы//
//////////////////////////
$articles = DB::select("SELECT * FROM `articles`"); //с помощью фасада DB мы обращаемся к методу select, где первым параметром передаем sql - запрос
dump($articles);//хелпер dump - который выводит данные на экран
dd(); //хелпер после вывода отрабатывает метод die();
$articles = DB::select("SELECT * FROM `articles` WHERE id = ?", [2]); //вторым параметром идет массив с данными, которые подставляются в условия запроса
$articles = DB::select("SELECT * FROM `articles` WHERE id = :id", ['id' => 2]); //можно также именовать данные c помощью меток, которые будут подставлятся
DB::insert("INSERT INTO `articles` (`name`, `text`, `img`) VALUES (?, ?, ?)", ['TEST 1',  'Text', 'pic4.jpg']); //запись данных в таблицу
$result = DB::update("UPDATE `articles` SET `name` = ? WHERE `id` = ?", ['TEXT2', 4]); //обнавление записей в таблице, также этот метод возвращает количество затронутых записей
DB::delete("DELETE FROM `articles` WHERE `id` = ?", [4]); //удаление записей, метод возвращает количество затронутых записей
$pdo = DB::connection()->getPdo(); //получаем доступ к необработанному экземпляру PDO
$result = DB::connection()->getPdo()->lastInsertId(); //возвращает индификатор последней добавленной записи
DB::statement('DROP table `articles`'); //метод statement служит для общих sql запросов для работы с БД в целом
//В провайдоре AppServiceProvider можно использовать метод listen
DB::listen(function($query){
    dump($query->sql); //получаем запрос        
    dump($query->bindings); //получаем параметры для условия запроса        
}); //как только в ларавел будет использоватьяся sql запрос сработает этот метод, аргументом приходит объект данного запроса
/////////////////////////////////////////
//Конструктор запросов//
/////////////////////////////////////////
//Это специальный класс с набором определенных методов и свойств, которые формирует sql запрос
//Builder - класс где хранятся методы констурктора запросов
DB::table('articles'); //возвращает пустой объект запроса для конкретной таблицы
DB::table('articles')->get(); //метод возвращает все содиржимое данной таблицы "SELECT * FROM `articles`
DB::table('articles')->first(); //возвращается только первая запись "select * from `articles` limit 1"
DB::table('articles')->value('name'); //возвращает только поле name у первой записи "select `name` from `articles` limit 1"
DB::table('articles')->orderBy('id')->chunk(2,function($articles){
	foreach($articles as $article)
	{
		//
	}
}); //метод chunk возвращает булевое значение, сам метод работает порциями, т.е первым аргрументом идет количесвто строк запрашиваемых у таблицы, как данные были полученны они передаются
//callback где и обрабатываются, очень полезное если работать более 1000 выборкой.
//"select * from `articles` order by `id` asc limit 2 offset 0"
//"select * from `articles` order by `id` asc limit 2 offset 2"
//"select * from `articles` order by `id` asc limit 2 offset 4"
//Пример:
protected static $articles;
public static function addArticles($arr)
{
	return self::$articles[] = $arr;
}
public function getArticles()
{
	DB::table('articles')->orderBy('id')->chunk(2,function($articles){
		foreach($articles as $article)
		{
			CoreController::addArticles($article);
		}
	});
	dump(self::$articles);
}
DB::table('articles')->pluck('name'); //возращается все данные по колонке указанной в параметрах "select `name` from `articles`"
DB::table('articles')->count(); //количество элементов в таблице "select count(*) as aggregate from `articles`"
DB::table('articles')->max('id'); //максимально значение указанного поля
DB::table('articles')->select('name', 'id', 'text')->get(); //с помощью метода select выбираем поля для выборки, метод вернет объект класса Building, чтобы запрос отправился используем get() "select `name`, `id`, `text` from `articles`"
DB::table('articles')->distinct()->select('name')->get(); //с помощью метода distinct() возвращаем только уникальные значения
$query = DB::table('articles')->select('name');
//kod
$articles = $query->addSelect('text')->get(); //иногда нам нужно в процессе добавить в объект запроса дополнительное поле для этого есть метод addSelect()
$articles = $query->addSelect('text as fulltext')->get(); //можно указвать псевдонимы "select `name`, `text` as `fulltext` from `articles`"
DB::table('articles')->select('text')->where('id', '=', 4)->get(); //для фильтрации запросов используется where() первый аргумент это имя поля, второй оператор (если оператор =, то его можно опустить), третий значение "select `text` from `articles` where `id` = ?"
DB::table('articles')->select('text')
	->where('id', 3)
	->where('name', 'like', '%test%', 'or')
	->get(); //если нам нужно указать несколько условий просто добавялем еще метод, а если нам нужно чтобы было OR то, указываем четвертым параметром
DB::table('articles')->select('text')
	->where([
		['id', 3],
		['name', 'like', '%test%', 'or']
	])
	->get(); //еще один способ это указать массив в методе where "select `text` from `articles` where (`id` = ? or `name` like ?)"
DB::table('articles')->select('text')
	->where([
		['id', 3],
		['name', 'like', '%test%', 'or']
	])
	->orWhere('id', '<', 2)
	->get();	//также можно использовать метод orWhere, который сразу подставляет or "select `text` from `articles` where (`id` = ? or `name` like ?) or `id` < ?"
DB::table('articles')->whereBetween('id', [1,5])->get(); //метод whereBerween аналог sql between первым аргументом идет название поля, а вторым массив с данными "select * from `articles` where `id` between ? and ?"		
DB::table('articles')->whereNotBetween('id', [1,5])->get(); //подставляется not "select * from `articles` where `id` not between ? and ?"
DB::table('articles')->whereIn('id', [1,3,5])->get(); //аналогично sql оператору IN "select * from `articles` where `id` in (?, ?, ?)"
DB::table('articles')->whereNotIn('id', [1,3,5])->get(); //будет добавлено отрицание
DB::table('articles')->groupBy('id')->get(); //группировка данных "select * from `articles` group by `id`"
DB::table('articles')->take(4)->get(); //сколько элементов мы хотим выбрать из БД "select * from `articles` limit 4"
DB::table('articles')->take(4)->skip(2)->get(); //количество пропускаемых данных "select * from `articles` limit 4 offset 2"
DB::table('articles')->insert(
	['name' => 'test2', 'text' => 'hello', 'img' => '']
); //запись данных в БД "insert into `articles` (`name`, `text`, `img`) values (?, ?, ?)"
DB::table('articles')->insertGetId(['name' => 'test2', 'text' => 'hello', 'img' => 'pic1.jpg']); //вставляет запись в таблицу и возвращает последний id
DB::table('articles')->where('id', 8)->update(['name' => 'test5']); //обнавляет данные в таблицы, возращает количество затронутых записей
DB::table('articles')->where('id',8)->delete(); //удаляет запись из БД, также метод delete возвращает количество затронутых записей "delete from `articles` where `id` = ?"
DB::table('users')->increment('votes', 5); //увеличить поле на определенное значение
DB::table('users')->decrement('votes', 5); //уменьшает поле на определенное значение
/////////////////////////////
//Модель//
/////////////////////////////
//Это обьект в свойствах которого расплогаются данные полей таблицы
php artisan make:model Page //создаем модель таблицы Pages с помощью консолиs
php artisan make:model Test --migration //создаем модель и миграцию если таблицы еще не создана
protected $table = 'articles'; //имя таблицы указывается в модели если имена не совподают, свойства не обязательно
protected $primaryKey = 'id'; //свойство указывается первичный ключ если в таблице первичный ключ имеет имя, которое отличается от id
public $incrementing = false; //если у id в таблице не указан auto_increment, то мы должны указать данное свойство
public $timestamps = false; //если в таблице не нужны поля cteated_at и updated_at, они не используются, то нужно указать такой свойство
use App\Article;
Article::all(); //возвращает все записи из таблицы articles в виде коллекции объектов, т.е. для кадждой записи (строки таблицы) создается объект, модель
foreach($articles as $article)
{
	echo $article->name.'<br>';
} //доступ к данным
Article::where('id', '>', 3)->get(); //возвращаем данные по условию, будет возвращатся колекция модели
Article::where('id', '>', 3)->orderBy('name')->take(2)->get(); //для модели можно использовать теже методы, что и для конструктора запросов "select * from `articles` where `id` > ? order by `name` asc limit 2"
$article = Article::find(1); //ищет одну запись с id 1
$article = Article::where('id',1); //можно и так
$articles = Article::find([1,2,3]); //можно использовать массив данных для выгрузки несколько колекций  "select * from `articles` where `articles`.`id` in (?, ?, ?)"
$articles = Article::findOrFail(9); //если запись не будет найдена, то сгенерируется 404 ошибка.
$articles = Article::where('id',100)->firstOrFail(); //у конструктора запросов есть похожий метод, он тоже возвращает 404 если запись не найдена
//Чтобы сохранить данные достаточно создать пустой объект модели, записать свойства (имена свойств должны быть именованы как поля таблицы)
$article = new Article;
$article->name = 'New Article';
$article->text = 'New Text';
$article->img = 'New img';

$article->save(); //методом save сохраняем объект уже в таблицу "insert into `articles` (`name`, `text`, `img`) values (?, ?, ?)"
//Обнавление уже существующей записи
 $article = Article::find(9);
            $article->name = 'New Name 2';
            $article->text = 'New Text 2';
            $article->save();
//При работе с моделей и метода create может возникнуть проблема, т.к. по умолчанию у нас нет прав на добавление данных
//Чтобы дать разрешение на добавление полей достаточно в модели добавить следующую строку:
protected $fillable = ['name','text']; //это свойство хранит массив полей доступных для изменений
protected $quarded = ['*']; //это свойство противоположно, оно запрещает доступ к полям и по умолчанию стоит *
Article::firstOrCreate(
    [
    'name' => 'Hello world',
    'text' => 'Some Text'
    ]
); //Метод добавляет запись в таблицу, только в том случае если первая запись (name) его значение не существует в таблице
    //если запись есть, то возвращается модель записи, если нет то запись добавляется и вернут объект модели данной записи
    //Можно использовать для добавления уникальных полей, таких как ЛОГИН
$article = Article::firstOrNew(
[
'name' => 'Hello world2',
'text' => 'Some Text'
]
); //Метод проверяет есть ли запись в БД если есть, то возвращает объект модели данной записи, если нет, то возвращается объект модели новой записи, но она не сохраняется в БД
    //если хотим потом ее сохранить то можно использовать $article->save();
$article = Article::find(3);
$article->delete(); //находим модель под id 3 и удаляем ее, так можно реализовать удаление записей
Article::destroy(3);//Удаление записи, если нужно удалить несколько зничение то можно передать массив
Article::where('id','>',3)->delete(); //можно также испльзовать для удаление методы конструкторов запросов
//Мягкое удаление - похоже на корзину в Windows, чтобы это реализовать потребуется создать миграцию:
    $table->softDeletes();
    $table->dropColumn('deleted_at');
//Создаем дополнительную колонку в таблице для мягкого удаления
//В моделе присодиням трейд:  use SoftDeletes;
//Файл трейда расположен Illuminate\Database\Eloquent этот же пространство имен указываем в моделе.
protected $dates = ['deleted_at']; //добавляем в модели свойства дата, чтобы в этой поле при удалении добавлялась дата
$article = Article::find(5);
$article->delete(); //теперь при удалении в поле deleted_at будет записыватся дата, и это строка не будет поподать в коллекцию выборки
Article::withTrashed()->get(); //вытаскивает все записи, даже мягко удаленные
foreach($articles as $article)
{
if($article->trashed())
{
echo $article->id. ' Delete<br>';
}
else {
echo $article->id. ' Not Delete<br>';
}
} //метод trashed возвращает истину если строка удалена
//Чтобы восстановить удаленую запись можно использовать: $article->restore();
Article::withTrashed()->resoter(); //для восстановления всех записей
Article::onlyTrashed()->get();//вытаскиваем только удаленные данные
Article::onlyTrashed()->resoter(); //вытаскиваем из БД только удаленные записи и сразу их восстанавливаем
$articles = Article::find(5);
$articles->forceDelete(); //полностью удалем запись с таблицы не используя мягкое удаление
///////////////////////////////
//Реализация связей между таблицами//
///////////////////////////////
//One To One - Один к Одному
//Создаем таблицу и в ней прописываем поле user_id
$table->integer('user_id')->unsigned()->default(1); //тип поля integer|не может быть отрицательным|по умолчанию 1
$table->foreign('user_id')->references('id')->on('users'); //индекс внешний ключ|полей user_id ссылается на поле id таблицы users 
//прописываем в моделе User следующий метод
public function country() 
{
	return $this->hasOne('App\Country'); //метод ожидает user_id (имя модели_имя поля), если наименование поля произвольное то его можно указать в виде второго параметра, третий параметр имя поля id для текущей родительской модели
} // метод hasOne связывает модель user с моделью country 
$user = User::find(1); //Вызываем модель и находим первую запись в таблице
dump($user->country); //обращаемся к методу country, который мы прописали ранее "select * from `countries` where `countries`.`user_id` = ? and `countries`.`user_id` is not null limit 1"
//чтобы создать обраную связь достаточно уже в модели country прописать метод user
public function user(){
	return $this->belongsTo('App\User');
} //метод belongsTo так же может получать три параметра
//One To Many - Один ко Многим
//В модели user прописываем метод articles - так как мы будем работать со множественными строками
public function articles()
{
	return $this->hasMany('App\Article');
} //hasMany формирует связь
//если мы обращаемся конкретно к методу articles()
$articles = $user->articles(); //то нам вернется объект hasMany и теперь мы можем использовать констуктор запросов
$articles = $user->articles()->where('id',24)->first(); //получаем конкретую статью у конкретного пользователя
//Так же создаем обратную связь как и прошлом примере только уже в моделе Article
public function user()
{
	return $this->belongsTo('App\User');
}
//Many to Many - Многие ко многим
//Создаем две таблицы roles и role_user, где первая идет как справочник, который хранил список ролей, а вторая связующая между ролями и пользователями
$table->integer('user_id')->unsigned()->default(1);
$table->foreign('user_id')->references('id')->on('users');

$table->integer('role_id')->unsigned()->default(1);
$table->foreign('role_id')->references('id')->on('roles');
//прописываем в моделе user связь 
public function roles()
{
	return $this->belongsToMany('App\Role');
}
//возвращается коллекция модели роли
$user = User::find(1);
dump($user->roles);
//так же как и в предыдещих премерах мы можем использовать конструторы запросов
$role = $user->roles()->where('roles.id',2)->first();
//relations - > pivot распологается модель родителя
//Для обратной сявзи прописываем так же в моделе role
public function users()
{
	return $this->belongsToMany('App\User'); //Модель|имя таблицы role_user|role_id внешнии ключи|user_id внешнии ключи
}
///////////////////////////////////////
//Манипуляции со связанными записями
///////////////////////////////////////
//ленивая загрузка
$articles = Article::all();
foreach($articles as $article)
{
    echo $article->user->name . '<br>';
}// так можно обращатся к связанным записям "select * from `users` where `users`.`id` = ? limit 1"
//при такой загрузке при каждой иторации цикла мы будем обращатся к БД, что очень нагружает БД - это называется ленивая загрузка
//жадная загрузка
$articles = Article::with('user')->get();
foreach($articles as $article)
{
    echo $article->user->name . '<br>';
}
//так можно получить данные обращаясь лишь один раз к БД "select * from `users` where `users`.`id` in (1)"
//с помощью with('user') мы уже обращаеся к связи
//Если нам все таки нужно использовать all() то можно воспользоваться методом load(), который дозагруживает данные динамического свойства
$articles = Article::all();
//kod
$articles->load('user');
foreach($articles as $article)
{
    echo $article->user->name . '<br>';
}
//подгузка несколько связей
$users = User::with('articles', 'roles')->get();
//kod
foreach($users as $user)
{
    dump($user->articles);
}
//если у пользователя есть связанные данные, допустим добавленные статьи то метод has дает к ним доступ
$users = User::has('articles')->get();
//kod
foreach($users as $user)
{
    dump($user);
}
//можно писать условия (пользователь добавил 3 или больше записей)
$users = User::has('articles','>=', '3')->get();
//манипуляция с БД
$user = User::find(1); //получаем польздователя
$article = new Article([
    'name' => 'New Article',
    'text' => 'Some text'
]); //создаем пустой объект модели Article с новыми данными
$user->articles()->save($article); //сохраняем для конкретного пользователя статью - если работаем с моделями лучше этот способ
$user->articles()->create([
    'name' => 'New Article 1',
    'text' => 'Some text 1'
]); //если используем массивы то лучше использовать метод create()
//
$user->articles()->saveMany([
    new Article([
        'name' => 'New Article 3',
        'text' => 'Some text 3'
    ]),
    new Article([
        'name' => 'New Article 4',
        'text' => 'Some text 4'
    ]),
    new Article([
        'name' => 'New Article 5',
        'text' => 'Some text 5'
    ]),
]);//добавляем несколько моделей для записи с помощью saveMany()
$user->articles()->where('id', 3)->update(['name' => 'new text']); //обнавление данных
///////////////////////////////
//Работа со связями//
///////////////////////////////
$country = Country::find(1);
$user = User::find(2);
$country->user()->associate($user);
$country->save(); //изменяем связь в таблице с помощью метода associate меням связь и привязываем к новому пользователю
//
$articles = Article::all();
$user = User::find(2);
foreach($articles as $article)
{
    $article->user()->associate($user);
    $article->save();
}//меням значение связей у всех записей один ко многим
//
$user = User::find(2);
$role_id = Role::find(2)->id;
$user->roles()->attach($role_id);
//добавляем новую связь многие ко многим в связующую таблицу role_user
$user->roles()->detach($role_id); //метод detach - удаляет связь
//метод читателя - отрабатывает когда идет обращение к свойствам
//в модели Article прописывам метод - где Name это имя свойства, а аргумент это значение свойства
public function getNameAttribute($value)
{
return 'Hello world - '.$value . ' - hello';
}
//что обратиться к методу читателя достаточно просто обратиться к свйоству name
$article = Article::find(1);
echo $article->name;
//метод преобразователей - отрабатывает когда идет изменения(запись, обнавления) свойства
//метод прописывается также в моделе Name - это имя свойста, которое будет обращение, метод не возвращает он изменяет
public function setNameAttribute($value){
//kod
$this->attributes['name'] = '|'.$value;
}
$article = Article::find(1);
$article->name = 'Some text';
echo $article->name;
//В моделе можно изменить тип данных свойства с помощью свойства casts
protected $casts = [
'name' => 'boolean'
]; //фреймворк преобразует тип данных
//
    'text' => 'array'

$article = Article::find(1);
$array = ['key' => 'hello!'];
$article->text = $array;
$article->save();
    //В бд сохраниться строка формата json, серелизованный массив
dump($article->text); //при обращении фреймворк конвертирует json в массив
dump($article->toArray()); //модель мы можем конвертировать в массив с попомщью метода toArray()
dump($article->toJson()); //модель мы также можем конвертировать в json
dump((string) $article); //если использовать конвертирование в строку модели, то фреймворк вернет строку в формате json
/////////////////////////////////////////////////////////////////////////////////////////////
//Валидация данных
/////////////////////////////////////////////////////////////////////////////////////////////
//В родительском классе Controller есть train ValidatesRequests в этом train есть метод validator
$this->validator($request, $rules, $messages); //первый аргумент это объект request полученный с формы, второй это правила, трейтий сообщение
$rules = [
'name' => 'required|max:10',
'email' => 'required|email'
]; //описываем правила валидации
//required - обязательно для заполнения
//max:10 - максимальное количество символов
//email - правило для почты
//если валидатор отработал со ошибкой, то данные request поподаеют в сессию как и данные об ошибке, и после метода validator код не отрабатывает
//\Illuminate\View\Middleware\ShareErrorsFromSession::class в Kernel посредник, который дает возможность работать с ошибками сессии
@if(count($errors) > 0)
<div class="alert alert-danger">
    <ul>
        @foreach($errors->all() as $error)
        <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif //в шаблоне прописываем условия для вывода ошибок all() - получает доступ ко всем ошибкам
//валидатор с помощью фасада Validator
$messages = [];
$validator = Validator::make($request->all(), [
'name' => 'required'
], $messages); //$request->all() - возвращает массив данных
//Фасад возвращает объект данных валидатора, при отработки фасада код не останавливается если даже есть ошибка валидации
if($validator->fails())
{
return redirect()->route('contact')->withErrors($validator)->withInput();
}//чтобы выявить ошибку, можно воспользоватся методом fails() - этот метод вернет true если есть ошибки валидации
//потом прописываем редирект на страницу и с помощью withErrors сохраняем ошибки в сессии
//withInput - сохраняет данные в сессию
php artisan make:request ContactRequest //создаем новый класс для валидации
//для более сложных сценариев проверки может потребоваться создать запрос формы - это пользовательские классы запросов, содержащие логику проверки
//В классе будет два метода один из них это rules - он отвечает за массив правил валидации
//Второй authorize - он отвечает за работу доступа пользователей к странице, return false; (запрещает доступ пользователя), как доступ будет true так класс сразу начет работать
public function store(Requests\ContactRequest $request,$id=FALSE) {} //для работы класса мы указываем его как объект request
//Так же класс может иметь метод messages для альтернативных сообщений об ошибках
public function messages()
{
    return [
    //
    ];
}
/////////////////////////////////////////////////
//Сообщение ошибок валидации
/////////////////////////////////////////////////
//Все тут крутиться вокруг локализации, которая настраивается в app.php local = 'en'
//Локализация располагается в файле в resources/lang/en
//
'custom' => [
    'attribute-name' => [
        'rule-name' => 'custom-message',
    ],
    'name' => [
        'required' => 'Поле name пустое'
    ]
] //значение по умолчанию, где name свойство, required правило
//в классе request мы можем указать собственное сообщение
public function messages()
{
    return [
        //
        'name.required' => 'Поле :attribute обязательно!'
    ];
} //указываем сообщение об ошибке только для поля name
dump($validator->errors()->all()); //возвращает объект класса MessageBag
dump($validator->errors()->first('name')); //методом first можно выташить первый элемент с ключем name
dump($validator->errors()->get('name'));  //методом get мы вытаскиваем все элементы ошибок с ключем name
dump($validator->errors()->has('name')); //метод has проверят есть ли элемент c ключем name, если да то возвращется true
dump($validator->errors()->all('<p> :message </p>')); //с помощью метода all можно помещать сообщения об ошибках в контейнеры используя метку :message
//
$validator->after(function($validator){
    $validator->errors()->add('name','Дополнительное сообщение!');
});//после формирования объекта валидатора можно воспользоватся методом after, который позволяет дополнительные манипуляции с валидатором
//в параметрах прописывается callback где в параметрах принимается объект валидатора, метод add добавляет сообщение
'email' => 'sometimes|required' //правило sometimes говорит нам а том, что если поле email присутствует в проверке, то тогда отрабатывает правило required
//
$validator->sometimes('email','required', function($input){
    return strlen($input->name) >= 10;
}); //метод sometimes применят к свойству email правило required только в том случае если ананимная функция вернут true
//аргумент функция принимает значение поля
dump($validator->failed()); //метод failed возвращает массив правил, которые были использованы в ошибках валидации
///////////////////////////////////////
//аутентифиуация пользователя//
///////////////////////////////////////
//Аутентификация - это процесс проверки пользователя с данными введенными пользователем и данными хранящиемся в БД
//настройки для аутентификации расположены в каталоге config/auth.php
guards //охраник - определяет как пользователи проходят проверку запроса от аутифицированного запроса, можно данные аутифицированного пользователя хранить в сессии или в токене, который будет передаваться в каждом запросе
providers //провайдеры - определяют как можно получить данные пользователя с БД или других источников
defaults //массив настроек по умолчаню
passwords //логика сброса пароля
php artisan make:auth //команда создает панель аунтификации для пользователя
php artisan route:list //команда выводит список зарегистрированных в системе маршрутов
//Указываем свой маршрут для аунтификации
Route::group(['prefix' => 'admin','middleware' => ['web','auth']],function(){
    //admin/
});
//создаем группу admin и подключаем посредники, web - это группа посредников, которая хранится в файле kernel тут важна последовательность подключения посредников
//если мы хотим добавить новое поле для регистрации, нужно добавить его в шаблоне, плюс в контроллере RegisterController в методе validate добавить правила валидации поля и добавить его в методе create, соотвественно нужно чтобы колонка была в таблице
//чтобы изменить аунтификацию пользователя нужно в train AuthenticatesUsers изменить данные метода username
//train ThrottlesLogins ограничивает попыток аутификации пользователя
///////////////////////////////////////////////////////////
//Методы фасада Auth
///////////////////////////////////////////////////////////
//С помощью фасада Auth и метода user() мы можем получить данные о аутентифицированном пользователе
Auth::user();
$user = $request->user(); //как вариант можно получить аутифицированного пользователя и таким способом
if(!Auth::check())
{
return redirect('/login');
} //с помощью метода check() можно проверить аутентифицирован пользователь или нет
//метод check() не является методом только фасада Auth, он общий для Guard(охраник) и распологается в train GuardHelpers
//guest() - проверят является ли пользователь гостем
Auth::id() //метод id() возвращает id аунтефицированого пользователя
//Чтобы использовать свой контроллер для ацнтификации необходимо создать контроллер, прописить маршруты для нового контроллера:
//Auth::routes(); //коминтрируем, чтобы фреймворк не обращался к системным контроллерам
Route::get('/login', ['uses'=>'Auth\MyAuthController@showLogin']);
Route::post('/login', ['uses'=>'Auth\MyAuthController@authenticate']);
//
$array = $request->all();
if(Auth::attempt([
    'login' => $array['login'],
    'password' => $array['password']
]))
{
    return redirect()->intended('/admin');
}//аунтефикация пользователя осуществляется с помощь метода attempt (метод распологается в train SessionGuard), аргументом передается массив с данными для ацнтификации
//если ацтицикация прошла успешна, то прописываем редирект на страницу, которую запрашивал пользователь ранее с помощью метода intended(), аргументом можно указать путь по умолчанию
//если нам нужно передать параметр "Запомнить меня" при ацнтификации можно передать это вторым параметрам метода attempt
$remember = $request->has('remember'); //если в запросе есть значение remember, то мы присваем true переменной
if(Auth::attempt([
    'login' => $array['login'],
    'password' => $array['password']
], $remember)) //данные сохраняются в куки
//Если данные не верны, и аутентийикация не прошла, то прописываем следующий код
return redirect()->back()
    ->withInput($request->only('login', 'remember'))
    ->withErrors([
        'login' => 'Данные аутентификации не верны'
    ]);
//делаем редирект назад на предыдущую страницу (это логин), с помощью метода withInput сохраняем данные в сессии в параметрах указываем какие данные нам нужны, чтобы не сохранять пароль
//с помощью метода withErrors сохраняем ошибку в сессию и указываем ее в параметре
Auth::viaRemember() //метод viaRemember возвращает true если пользователь аутентифицировался используя данные из cookie
//
$user = User::find(4);
Auth::login($user); //ручная аутентификация для этого использоуется метод login (SessionGuard)
//
Auth::guard('web')->login($user); //можно также для аутентификации использовать guard, параметром передается настройка web из конфигуруционного файла auth.php
Auth::guard('web')->logout(); //выход из учетной записи
Auth::loginUsingId(4); //метод аутентифицирует пользователя по его id
Auth::once($user); //метод создает аутентификациию ровно на один запрос, а потом происходит выход из сесси
//Базовая аунтетификация пользователей
//добавляем посредника auth.basic в машрут (данного посредника можно у видеть в файле Kernel)
//Возникает окно от браузера где нужно указать email и пароль пользователя
////////////////////////////////////////////////////////
//Авторизация пользователей
////////////////////////////////////////////////////////
//авторизация - это процесс проверки пользователя на выполнения какого-либо действия
Illuminate\Auth\Access\Gate.php //данный класс проверяет пользователя на права действий
//проверку опишем в провайдоре AuthServiceProvider в методе boot
//В методе boot есть строчка $this->registerPolicies(); - это строчка отвечает за политику безопасности
Gate::define(); //метод define добавляет новое правило для авторизации для конректного пользователя
Gate::define('update-post', 'App\Policies\PostPolicy@update'); //первым параметром передаем название правила, вторым идет контроллер или как на примере класс политики безопасности и метод, который будет обрабатывать данное правило
Gate::define('add-article', function($user, $post)
{
    return true;
}); //если callback возвращает true то правило разрешено или наоборот, функция принимает несколько параметров, первый $user - это объект текущего аутенфицированного пользователя, второй параметр - произвольный параметр который передается при описании проверки
//
if(Gate::denies('add-article'))
{
    return redirect()->back()->with(['message' => 'У вас нет прав']);
} //denies проверяет можно ли пользователю с правилом указанным в параметрах проводить действия если да то метод возвращает true
//
Gate::define('update-article',function($user, $article)
{
    foreach($user->roles as $role)
    {
        if($role->name == 'Admin')
        {
            if($user->id == $article->user_id)
            {
                return true;
            }
        }
    }
    return false;
}); //созадем правило update-article в ктором будет завяска на статье, если пользователь с ролей Админ, но статья не не данного пользователя то редактирование запрещено, $article объект статьи для редактирования
if(Gate::allows('update-article', $article))
{
    $article->name = $data['name'];
    $article->img = $data['img'];
    $article->text = $data['text'];

    $user->articles()->save($article);

    return redirect()->back()->with('message', 'Материал обнавлен');
} //метод allows возвращает истину если есть доступ, $article - это объект статья который передается для проверки
if(Gate::forUser(6)->allows('update-article', $article)) //обычно аутенфицированный пользователь автоматически передается в метод для обработки данных, но если нам нужно передать конретного пользователя можно использовать метод forUser(), где параметром передается id пользователя
///////////////////////////////
//Классы политик авторизации
///////////////////////////////
//Это класс где описан набор правил привязанный к определенной сущности, например к модели проекта
php artisan make:policy ArtisanPolicy //команда создает класс политики безопасности
//Теперь для работы нужно зарегистировать политику, это можно сделать в классе провайдера в свойстве policies
protected $policies = [
    'App\Model' => 'App\Policies\ModelPolicy',
    'App\Article' => 'App\Policies\ArtisanPolicy'
];
use App\Article;
protected $policies = [
    Article::class => ArticlePolicy::class
];
//описываем правила
public function add(User $user)
{
    foreach($user->roles as $role)
    {
        if($role->name == 'Admin')
        {
            return true;
        }
    }
    return false;
}

public function update(User $user, $article)
{
    foreach($user->roles as $role)
    {
        if($role->name == 'Admin')
        {
            if($article->user_id == $user->id)
            {
                return true;
            }
        }
    }
    return false;
}
//Для вызова проверки правил пишем следующий код
$article = new Article;
if(Gate::denies('add', $article))
{
    return redirect()->back()->with(['message' => 'У вас нет прав']);
}
//метод bafore позволяет провести проверку до обращнеия к правилам политики add и update, не важно где описано правило before в классе политики безопасности или ServiceProvider
public function before(User $user)
{
    foreach($user->roles as $role)
    {
        if($role->name == 'Admin')
        {
            return true;
        }
    }
    return false;
}
//
if($request->user()->cannot('add', $article))
{
    return redirect()->back()->with(['message' => 'У вас нет прав']);
}//также можно воспользоватся методом cannot, который будет обращатся к правилам политики
if($request->user()->can('update', $article)) //еще один вариант
//в представлении можно воспользоватся директивой @can
@can('update', $article)
    <div class="alert alert-success">
        Есть права
    </div>
@endcan //первой арумент - это наимнование правила, второй это модель
@cannot('update', $article)
    <div class="alert alert-danger">
        У вас нет прав
    </div>
@endcannot //противоположная директива @cannot
//
$this->authorize('update',$article); //метод authorize проверяет есть ли у пользователя права на действия если ести код просто продолжается дальше, если нет то выводится исключение 403
$this->authorizeForUser($user,'update',$article);$this->authorizeForUser($user,'update',$article); //проверка правил у конкретного пользователя, если метод в котором идет обработка проверки называется одинаково с правилом update, то второй параметр можно опустить
//////////////////////////////////////
//Сессии//
//////////////////////////////////////
//config
lifetime //время хранения сессии
encrypt //шифрование сессии
//Если выбираем driver тип database значит нам нужно создать таблицу, где будут хранится сессии
php srtisan session:table //команда создает миграцию для сессии
$request->session()->get('key','default'); //с помощью метода session и get можно получить данные сессии, если мы передаем первым параметром ключ, а вторым параметром его значение, то метод вернет второй параметр, если данные в сессии с таким ключем не были найдены
$res = $request->session()->all(); //возвращаются все данные из сессии
$request->session()->put('key', 'value'); //с помощью метода put можно положить данные в сессию, первый аргумент ключе, второй значение
$request->session()->put('key.first', 'value'); //key.frist многоуровневый массив
if($request->session()->has('key.first')) //проверка есть ли в сессии массив key с ключем first
{{ dump(Session::all()) }} //Вызов сессии в предатавлении
$request->session()->push('key.second', 'value2'); //метод push размещает данные в сессии
Session::push('key.second', 'value2'); //можно также воспользоватся фасадом Session
dump(session('key')); //также для работы с сессией можно воспользоватся хелперов, данный пример выводит элемент сессии с ключем key
dump(session('key1', 'default')); //если в сессии нет значение с ключем key1, то вернется как результат второй параметр default
Session::forget('key.first'); //метод forget удалеят элемент из сессии
Session::flush(); //очищает сессию
Session::pull('key'); //метод pull возвращает данные с сессии и сразу же ее удаляет из сессии
Session::flash('message','value'); //добавляет информацию в сессию на один запрос
Session::reflash(); //добавленую информацию в сессию методом flash продлевает еще на один запрос
////////////////////////////////////////////////
//Обработка событий
////////////////////////////////////////////////
EventServiceProvider //регистрация классов событий
protected $listen = [
    Registered::class => [
        SendEmailVerificationNotification::class,
    ],
    'App\Events\onAddArticleEvent' => [ //событие
        'App\Listeners\AddArticleListener' //класс обработчик
    ]
]; //регистрируем класс нового события в свойствах $listen
php artisan event:generate //создаем новое событие
//метод handle класса обработчика обрабатывает данные события к которому он привязан
Log::notice(); //фасад Log работает с логами, метод notice() - этот метод формирует тип сообщения предупреждение
Log::info(); //info() - это информация
Log::info('Article save in database', [$event->user_name => $event->article_name]); //первый параметр это заголовок, а второй текст заголовка
Event::fire(new onAddArticleEvent($res, $user)); //чтобы запустить событие достаточно обратиться к фасадц Event и его методу fire, который выбрасывет события, параметром, который передается объект события
//в файле logging.php указываем настройки daily - будет сформирован новый файл при записи логов
event(new onAddArticleEvent($res, $user)); //кроме фасада можно воспользоваться хелпером event
//
Event::listen('event.name', function ($foo, $bar) {
//
}); //событие можно зарегистировать не только в свойсте listen, но также использовав метод boot в EventServiceProvider
//
public function boot()
{
    parent::boot();
    Event::listen('onAddArticleEvent', function ($article, $user) {
        Log::info('Article save', [$user->name => $article->name]);
    });
}
Event::fire('onAddArticleEvent',[$res, $user]); //вызываем отработку события
//Также мы можем описать события с помощью модели прописываем следующие строки в файле AppServiceProvider в методе boot
Article::created(function(Article $article)
{
    Log::info('Article save', [$article->user->name => $article->name]);
}); //модель user тут не передается
//////////////////////////////////
//Локализация//
//////////////////////////////////
//Для изменения локализации нужно изменить настройки 'locale' => 'ru' в файле app.php
//Если настройка локализация не доступна отрабатывает настройка fallback_locale
$title = Lang::get('messages.welcome'); //для доступа к спискам локализации можно воспользоваться фасадом Lang и его методом get, где в параметре мы прописывам путь к интересующий нас локализации
$title = Lang::get('messages.hello', array('name' => 'Бен')); //если мы хотим передать параметры можно их указать вторым аргументов в виде массива
'hello'   => 'Привет :name'
//Сколнение слов 1 яблоко | 2 яблока, 3 яблока, 4 яблока | 5 яблок
'apple'   => 'яблоко|яблока|яблок'
$title = Lang::choice('messages.apple', 1); //для вывода нужной сколняемой формы локализации используется метод choice, где вторым параметром передается колличество
'apples' => '{0}яблок|[1,19]яблоко|[20, inf]яблоки' //указываем конкретный диапазое склонений
if(Lang::has('messages.apples')) //проверка на существование данной локализации
/////////////////////////////////
//Контракты//
/////////////////////////////////
//Это набор классов и интерфейсов, который определяет некий функционал фреймворка
//Как пример создадим директорию в каталоге app под названием Helpers, где будут хранится наши контракты, там же создаем директорию Contracts. В каталоге Contracts создаем файл интерфейса:
////////////////////////////
namespace App\Helpers\Contracts; //прописываем пространство имен для данного интерфейса

use Illuminate\Http\Request; //подключаем зависимости
use App\User;

Interface SaveStr
{
    public static function save(Request $request, User $user); //создаем правило
    public function cehckData($array);
}
////////////////////////////
//Теперь реализуем Классы реализаторы
///////////////////////////
namespace App\Helpers; //указываем пространство имен

use App\Helpers\Contracts\SaveStr; //прописываем зависимости
use Illuminate\Http\Request;
use App\User;

class SaveEloquentOrm implements SaveStr //подключаем интерфес
{
    public static function save(Request $request, User $user) //создает статический метод save
    {
        $obj = new self; //создаем объект класса SaveEloquentOrm
        $data = $obj->cehckData($request->only('name', 'text')); //обращаемся к методу класса и передаем параметром массив запроса пользователя где присутсвуют только два элемента это name и text
        $user->articles()->create($data); //обращаемся к связям и используем метод create для сохранения данных
    }
    public function cehckData($array)
    {
        return $array;
    }
}
///////////////////////////
//Создаем еще один класс реализатор
//////////////////////////
namespace App\Helpers; //объявляем пространство имен

use App\Helpers\Contracts\SaveStr; //объявлем зависимости
use Illuminate\Http\Request;
use App\User;
use Storage;

class SaveFile implements SaveStr //подключаем интерфейс
{
    public static function save(Request $request, User $user)
    {
        $obj = new self;
        $data = $obj->cehckData($request->only('name', 'text'));
        $str = $data['name'].' | '.$data['text']; //создаем строку, которую будем сохранять в файле
        Storage::prepend('str.txt', $str); //используем фасад Storage для работы с файлами, метод prepend создает файл(если его нету), первый параметр это имя файла, второй данные, которые будут в нем сохранены, данный метод не затерает старые данные
    }
    public function cehckData($array)
    {
        return $array;
    }
}
//////////////////////////
//////////////////////////
//Сервис провайдеры//
//////////////////////////
//Поставщики услуг - первоначальной загрузки приложения, сервисов, регистрация необъодимых классов в серсис контейнере, а так же политик безопасности, директив и т.д.
//Чтобы создать собственный serviceProvider нужно в консоле прописать следующую команду:
php artisan make:provider SaveStrServiceProvider
//Метод register используется для регистрации сервисов в сервис контейнере
//Обычно в методе registre идет обращение к глобальному свойству $this->app, это и есть ServiceProvider
//Для привязки сервиса в методе register можно использовать $this->app->bind(); метод bind() привязывает интервейс к классу реализатора
$this->app->bind('App\Helpers\Contracts\SaveStr', function(){
    return new SaveEloquentOrm();
}); //в созданном профвайдоре мы связали класс реализатор с интерфейсом
//потом указывам в конфигурационном файле app.php новый сервис провайдер
App\Providers\SaveStrServiceProvider::class
//теперь чтобы воспользоватся созданным провайдером достаточно добавить параметр объект SaveStr
use App\Helpers\Contracts\SaveStr;
public function store(Request $request,$id=FALSE, SaveStr $saveStr) //хотя мы обращаемся к объекту итерфеса, хотя это невозможно мы в провайдоре прописали привязку интерфеса к классу реализатора, вот его обхект мы и получаем
$saveStr->save($request, Auth::user()); //и тперь мы можем использовать метод save объекта класса SaveEloquentOrm
/////////////////////////////////////////////
//Сервис контейнер//
/////////////////////////////////////////////
//Это класс, который хранит информацию, а зарегистрированных сервисах или доступных сервисах, регистрация сервисов осуществляется в методе registre
public function store(Request $request, SaveStr $saveStr, $id=FALSE) //если интерйес зарегситрован в провайдоре и сервис провайдер есть в контейнере, то мы его можем смело вызывать как зависимости
//Есть другой вариант обращения к контейнеру через фасад App - это и является посути сервис контейнером
use App;
App::make(); //метод make предоставляет доступ к ячейкам сервис контенера и можно получить информацию а классе, котоырй уже был зарегистрирован
App::make('App\Helpers\Contracts\SaveStr'); //параметром указывается интерфейс, метод найдет запись регистрации интрефеса и вернет объект класса реализатора
//Пример:
$var =  App::make('App\Helpers\Contracts\SaveStr');
$var->save($request, Auth::user());
//также доступ к контейнеру можно получить через глобальное свойство $this->app->make()
//Иногда требуется чтобы объект создавался один раз и при следующим обращении возвращался ранее созданный объект (паттерн синголтон), чтобы это реализовать нужно использовать заместо метода bind метод singleton
//Мы также можем сократить запись т.к данный путь уже описан в контейнере
$var =  App::make('SaveStr');
$this->app->bind('SaveStr', function(){...});
//но приэтом мы тогда не сможем использовать внедрение зависимости
$this->app->instance(); //метод instance позволяет зарегистрировать для определенного ключа некоторый объект
//Пример:
public function register()
{
//
    $obj = new SaveFile(); //создаем объект класса реализатора
    $this->app->instance('App\Helpers\Contracts\SaveStr', $obj); //подключаем интерфейс к классу реализатора интерфейса
} //
$this->app['App\Helpers\Contracts\SaveStr']; //обратится к зарегистрированному интерфейсу можно таким способом
$this->app->make('App\Helpers\Contracts\SaveStr'); //также получить доступ можно и таким способом
$this->app->bind('App\Helpers\Contracts\SaveStr','App\Helpers\SaveFile'); //таким тоже способом можно зарегистрировать интерфейс не используя callback
//После того как были зарегистрированны все провайдеры, только после этого отрабатывает метод boot у провайдеров
////////////////////////////////
//Фасады//
////////////////////////////////
//Предоставляют статический интерфейс к классом зарегистированных в сервисе контейнере, класс посредник с помощью которого удобно обращатся к классу контейнеру и его свойствам
//Классы фасады должны обязательно наследовать абстрактный класс Facade, который распологаются Illuminate\Support\Facades\Facade
//Пример:
namespace App\Helpers\Facades; //подключаем пространство имен

use Illuminate\Support\Facades\Facade;

class SaveStr extends Facade //подключаем родителя Facade
{
    protected static function getFacadeAccessor() //прописываем обязательный статичиский метод, который возвращает ключ, с помощью которого можно получить доступ к зарегистрированному провайдеру из контейнера
    {
        return 'savestr';
    }
}
//
$this->app->bind('savestr', function(){
    return new SaveFile();
}); //регистрация фасада
//регистрируем псевдоним фасада в конфигуруционном файле app.php в массиве aliases
'SaveStr' => App\Helpers\Facades\SaveStr::class
//Фасад теперь готов к работе
ues SaveStr;
SaveStr::save($request, Auth::user());//обращаемся к созданному фасаду и его методу save
/*====================================================================================================*/
//********************************** Site ************************************************************//
/*====================================================================================================*/
php artisan app:name Name //через консоль указываем новое пространство имен

$table->integer('user_id')->unsigned()->nullable(); //создаем поле user_id положительное, и по умолчанию значение null
$table->foreign('user_id')->references('id')->on('users'); //вторичный ключ


?>