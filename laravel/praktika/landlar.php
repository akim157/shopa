<?php
/////////////////////////////////////
//Практика п онаписании landingpage используя фреймворк Laravel
/////////////////////////////////////
//Landingpage - это одностарничный сайт, который разделен на отдельные секции
//Для установки в проект Form&Html потребуется в файл composer.json прописать следующие настройки:
"require":
{
    "laravelcollective/html": "^5.8.*"
}
//После этого используем команду: composer update
//Как пройдет установка пишем в файле app.php следующие строки:
'providers' => [
    // ...
    Collective\Html\HtmlServiceProvider::class,
    // ...
],
//потом прописываем aliases
'aliases' => [
    // ...
    'Form' => Collective\Html\FormFacade::class,
    'Html' => Collective\Html\HtmlFacade::class,
    // ...
],
//Создаем миграции, прописываем нужные поля и проводим ее
//Создаем маршруты
//...
Route::group(['middleware' => 'web'], function()
{
    //
    Route::match(['get', 'post'],'/', 'InexController@execute')->name('home');
    //page/{alias}
    Route::get('/page/{alias}', 'PageController@execute')->name('page');

    Auth::routes();
});

//admin/...
Route::group(['prefix' => 'admin', 'middleware' => ['web', 'auth']], function()
{
    //admin/
    Route::get('/', function(){});
    //admin/pages
    Route::group(['prefix' => 'pages'], function(){
        //admin/pages
        Route::get('/', 'PagesController@execute')->name('pages');
        //admin/pages/add
        Route::match(['get', 'post'], '/add', 'PagesAddController@execute')->name('pages_add');
        //admin/pages/edit/{page}
        Route::match(['get', 'post', 'delete'], '/edit/{page}', 'PagesEditController@execute')->name('pages_edit');
    });

    //admin/portfolios
    Route::group(['prefix' => 'portfolios'], function(){
        //admin/portfolios
        Route::get('/', 'PortfolioController@execute')->name('portfolio');
        //admin/portfolios/add
        Route::match(['get', 'post'], '/add', 'PortfolioAddController@execute')->name('portfolio_add');
        //admin/portfolios/edit/{portfolio}
        Route::match(['get', 'post', 'delete'], '/edit/{portfolio}', 'PortfolioEditController@execute')->name('portfolio_edit');
    });

    //admin/services
    Route::group(['prefix' => 'services'], function(){
        //admin/services
        Route::get('/', 'ServiceController@execute')->name('service');
        //admin/services/add
        Route::match(['get', 'post'], '/add', 'ServiceAddController@execute')->name('service_add');
        //admin/services/edit/{service}
        Route::match(['get', 'post', 'delete'], '/edit/{service}', 'ServiceEditController@execute')->name('service_edit');
    });
});
//Создание контроллера и вида//
//создаем контроллеры и присываем указанные в машрутах методы:
php artisan make:controller NameController
//в предсатвлении изменям пути используя хелпер asset(), которая формирует полный путь к папке public/asset и подставляет нужный протокол HTTPS&HTTP
{{ asset('css/style.css') }}
//в файле .env происываем следующую настройку:
ASSET_URL=http://landlar.loc:81/asset
//это позволит построить полный путь к файлу, пример:
$url = asset('img/photo.jpg'); // http://example.com/assets/img/photo.jpg
//Создание моделей. Выборка данных из БД//
php artisan make:model NameModel //командой создаем модель
//Обращаемся в методе к моделям, чтобы получить данные из БД:
$pages = Page::all();
$portfolios = Portfolio::get(['name','filter','images']);
$services = Service::where('id','<', 20)->get();
$peoples = People::take(3)->get();
//В моделе People указываем таблилу с которой данная модель должна работать:
protected $table = 'peoples';
//создаем главный файл шаблона index.blade.php
@extends('layouts.site') //подключаем родительский шаблон, каркас сайта
@section('header') //определяем секцию для родительского шаблона, где уже подключены секции: yield('header')
    @include('site.header') //подключаем часть представления в секцию
@endsection
@section('content')
    @include('site.content')
@endsection
//Отображение выбранноей информации на экран
//Формируем даннеы для отображения в представлении
$pages = Page::all();
$portfolios = Portfolio::get(['name','filter','images']);
$services = Service::where('id','<', 20)->get();
$peoples = People::take(3)->get();

$menu = [];
foreach($pages as $page)
{
    $item = ['title' => $page->name, 'alias' => $page->alias];
    $menu[] = $item;
//          array_push($menu, $item);
}
$item = ['title' => 'Services', 'alias' => 'service'];
$menu[] = $item;

$item = ['title' => 'Portfolio', 'alias' => 'Portfolio'];
$menu[] = $item;

$item = ['title' => 'Team', 'alias' => 'team'];
$menu[] = $item;

$item = ['title' => 'Contact', 'alias' => 'contact'];
$menu[] = $item;
//После того как массив с данными готов передаем его представлению
return view('site.index', [
    'menus'         => $menu,
    'pages'         => $pages,
    'services'      => $services,
    'portfolios'    => $portfolios,
    'peoples'       => $peoples
]);
//В представлении content прописываем директивы для отображения данных
@if(isset($pages) && is_object($pages)) //проверка на ицилизированна переменная page и явлется ли она объектом
    @foreach($pages as $k => $page) //разбераем массив с помощью цикла
        @if($k%2 == 0) //если остаток от деления ключа равен 0 то это четное число и условие возвращает true
            //kod
        @else
            //kod
        @endif
    @endforeach
@endif
//происываем изображения используя библиотеку Form&Html laravelcollection
{!! Html::image('img/'.$page->images,'',['class' => 'zoomIn wow animated']) !!} //первый аргумент путь к файлу, второй это атрибут alt, а третим аргументом является массив атрибутов
//Доработка вида главной страницы
$tags = DB::table('portfolios')->distinct()->select('filter')->get(); //в главной методе главной страницы добавляем строку для получения списка фильтров
//добавялем полученную модель фильтров в массив для представления
return view('site.index', [
    'menus'         => $menu,
    'pages'         => $pages,
    'services'      => $services,
    'portfolios'    => $portfolios,
    'peoples'       => $peoples,
    'tags'          => $tags
]);
//полученные данные в представлении обрабатываем
//для плагина появления изображения прописываем дополнительное условие, где $k - это ключ элемента объекта
<h3 class="wow fadeInDown delay-0{{ ($k*3 + 3) }}s">{{ $people->name }}</h3>
//Механизм отправки почтовых сообщений
//В первую очень мы должны получить данные от пользователя, а после проверить их на валидацию
if($request->isMethod('post')) //метод isMethod возвращает true если метод указанный в параметрах совподает с запросом
{
    $rules = [
        'name'  => 'required|max:255',
        'email' => 'required|email',
        'text'  => 'required',
    ]; //создаем массив правил для формы
    $messages = [
        'required'  => 'Поле :attribute обязательно к заполнению',
        'max'       => 'Поле :attribute максимально количество символов для ввода :max',
        'email'     => 'Поле :attribute должно соотвествовать email адресу',
    ]; //создаем массив сообщений в случае ошибки
    $this->validate($request, $rules, $messages); //отправляем данные на валидацию, если валидация прошла успешна, то работа кода продолжается, если нет происходит редерект и ошибки поподают в сессию
    Mail::to(env('MAIL_FROM_ADDRESS'))->send(new OrderShipped($request)); //используем фасад Mail для отправки почты
    return redirect()->route('home')->with('status', 'Email is send'); //после отправки почты возвращаем редирект на домашнюю страницу и сохраняем в сессию статус
}
//создаем класс используя консоль для обрадотки пользовательских данных
php artisan make:mail OrderShipped
//так же можно прописать путь для создания шаблона формирования письма
php artisan make:mail OrderShipped --markdown=emails.orders.shipped
//класс создатся в директории app/Mail/...
protected $mail;
public function __construct($request)
{
    $this->mail = $request->except('_token');
} //создаем закрытое свойство и в конструкторе присваем ему массив данных от пользователя
public function build()
{
    return $this->view('emails.mail')
        ->with([
            'name' => $this->mail['name'],
            'email' => $this->mail['email'],
            'text' => $this->mail['text'],
        ]);
} //метод build отвечает за обработку данных и отправку их в шаблон и на почту
//формируем шаблон если его еще нет
<h1>Hello!</h1>
<div>
    Name: {{ $name }}
</div>
<div>
    Mail: {{ $email }}
</div>
<div>
    Text: {{ $text }}
</div>
//Главные настройки для почты хранятся в конфигурационном файле mail.php, для драйвера 'smtp' в файле .env прописываем слудующие настройки:
MAIL_DRIVER=smtp //имя драйвера, который отвечает за отправку почты
MAIL_HOST=smtp.mail.ru //хостинг почты
MAIL_PORT=465 //порт почты
MAIL_USERNAME=akim157@mail.ru //имя пользователя, который принимает письма
MAIL_PASSWORD=pas //пароль пользователя
MAIL_ENCRYPTION=ssl //указываем метод шифрования
MAIL_FROM_ADDRESS=akim157@mail.ru //почта принимающего
MAIL_FROM_NAME='tra tra' //тема письма
//после всех приготовлений письмо отправится на указанную почту
//теперь на странице выводим оповещение
@if(session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
@endif
@if($errors->any())
    <div class="alert alert-danger">
        <ul>
        @foreach($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
        </ul>
    </div>
@endif
//!В laravel еще есть интересная фишка
Route::group([/*'middleware' => 'web'*/], function() //если мы из группы уберем проверку группы web, то все равно при обращении к машрутам то все равно будет отрабатываеть эта группа, фишка в том, что в RouteServiceProvider есть метод:
    protected function mapWebRoutes()
{
    Route::middleware('web')
        ->namespace($this->namespace)
        ->group(base_path('routes/web.php'));
} //где уже вызывает данная группа для всех маршрутов web.php
//Страница материала
//Создаем контроллер для ссылки через консоль
php artisan make:controller PageController
//создаем метод execute
public function execute($alias) //параметром передается атрибут маршрута
{
    if(!$alias) abort(404); //проверка если нет атрбита то выводим 404 ошибку
    if(view()->exists('site.page')) //провека на сущестование представления 'site.page'
    {
        $page = Page::where('alias', strip_tags($alias))->first(); //с помощью модели получаем данные с БД, функция strip_tags удаляет со строки теги html и php для дополнитльеной защиты
        $data = [
            'title' =>  $page['name'],
            'page'  =>  $page
        ]; //формируем массив с данными
        return view('site.page', $data);
    }
    return '';
}
//формируем представление
@extends('layouts.site') //подключаем родителя, главный шаблон
@section('header') /
    @include('site.header')
@endsection
@section('content')
    @include('site.content_page')
@endsection
// метод link_to формирует ссылку, первый аргумент это путь, а второй наименование сслыки
{!! link_to(route('home'), 'Back') !!}
//Стандартный механизм аутентификации
Route::get('/', function(){
    if(view()->exists('admin.index'))
    {
        $data = ['title' => 'Панель администратора'];
        return view('admin.index', $data);
    }
/}); //в группировке маршрутов admin прописываем маршрут где мы должны подтягивать представление
////////////
/// kod
////////////
//форма добавления нового материала
//В первую очередь, чтобы отразить страницу со страницами нужно создать контроллер и прописать в нем вызов нужного представления
php artisan make:controller PagesController 
public function execute()
{
    if(view()->exists('admin.pages')) //проверка на наличие представление
    {
        $pages = Page::all(); //с помощью модели получаем коллекцию с БД
        $data = [
            'title' =>  'Страницы',
            'pages' => $pages
        ]; //формируем массив для представлений
        return view('admin.pages', $data); //возвращаем обхект представления
    }
    abort(404); //если не был найден pages, то выводится страница 404
}
//в представлении pages стандартно прописываем зависимости
@extends('layouts.admin')
@section('header')
	@include('admin.header')
@endsection
@section('content')
	@include('admin.content_pages')
@endsection
//формируем таблицу с данными из БД
{!! Html::link(route('pages_edit',['page'=>$page->id]),$page->name,['alt'=>$page->name]) !!} //c помощью хелпера Form&Html формируем ссылку для редактирования материала
//прописываем форму для кнопки удаления
{!! Form::open(['url'=>route('pages_edit',['page'=>$page->id]), 'class'=>'form-horizontal','method' => 'POST']) !!} //в атрибутах тега form прописываем метод post так как метод delete не воспринимает браузер	
    {!! Form::hidden('_method','delete') !!} //создаем тег hidden с именем action и value delete для того, чтобы запрос воспринимался как delete
    {!! Form::button('Удалить',['class'=>'btn btn-danger','type'=>'submit']) !!} //формируем кнопку submit	    
{!! Form::close() !!}
//в этойм же файле создаем ссылку на новый материал
{!! Html::link(route('pages_add'),'Новая страница') !!}
//Для машрута "новый материал" создаем контроллер PagesAddController и представления pages_add, где прописываем зависимости и подключаем представление content_pages_add
<div class="wrapper container-fluid">

	{!! Form::open(['url' => route('pages_add'),'class'=>'form-horizontal','method'=>'POST','enctype'=>'multipart/form-data']) !!}
 	
	
	<div class="form-group">
		
		{!! Form::label('name','Название',['class' => 'col-xs-2 control-label'])   !!}
		<div class="col-xs-8">
			{!! Form::text('name',old('name'),['class' => 'form-control','placeholder'=>'Введите название страницы'])!!}
		</div>
	
	</div>

	
	<div class="form-group">
	     {!! Form::label('alias', 'Псевдоним:',['class'=>'col-xs-2 control-label']) !!}
	     <div class="col-xs-8">
		 	{!! Form::text('alias', old('alias'), ['class' => 'form-control','placeholder'=>'Введите псевдоним страницы']) !!}
		 </div>
    </div>
    
    <div class="form-group">
	     {!! Form::label('text', 'Текст:',['class'=>'col-xs-2 control-label']) !!}
	     <div class="col-xs-8">
		 	{!! Form::textarea('text', old('text'), ['id'=>'editor','class' => 'form-control','placeholder'=>'Введите текст страницы']) !!}
		 </div>
    </div>
    
    <div class="form-group">
	     {!! Form::label('images', 'Изображение:',['class'=>'col-xs-2 control-label']) !!}
	     <div class="col-xs-8">
		 	{!! Form::file('images', ['class' => 'filestyle','data-buttonText'=>'Выберите изображение','data-buttonName'=>"btn-primary",'data-placeholder'=>"Файла нет"]) !!}
		 </div>
    </div>
    
    
      <div class="form-group">
	    <div class="col-xs-offset-2 col-xs-10">
	      {!! Form::button('Сохранить', ['class' => 'btn btn-primary','type'=>'submit']) !!}
	    </div>
	  </div>
	
	
	
	{!! Form::close() !!}
	
	<script>
        CKEDITOR.replace('editor'); //подключаем редактор, который мы ранее скачали
	</script>
	
</div>
//логика сохранения записи в таблицу базы данных
//После того как мы наживаем кнопку Сохранить мы поподаем в метод execute класса PageAddController. В методе прописываем следующие строчки
if($request->isMethod('post')) //проверка на post 
{
    $input = $request->except('_token'); //исключаем токен из запроса и получаем массив данных
    $rules = [
        'name'      =>  'required|max:255',
        'alias'     =>  'required|max:255|unique:pages',
        'text'      =>  'required'
    ]; //прописываем правила для валидации
    $messages = [
        'required'      =>  'Поле :attribute обязательно к заполнению',
        'unique'        =>  'Поле :attribute должно быть уникальным',
        'max'           =>  'Поле :attribute превышен количество символов в :max раз'
    ]; //прописывааем сообщнеия об ошибках для правил
    $validator = Validator::make($input, $rules, $messages); //используем фасад Validator для валидации, где первым параметром идет массив данных, вторым массив правил и третим массив ошибок
    if($validator->fails()) //проверка на ошибку если валидация не прошла то вернется false
    {
        return redirect()->route('pages_add')->withErrors($validator)->withInput(); //редирект на главную страницу добавления страниц, так же помещаем в сессию ошибки и данные из запроса пользователя
    }
    if($request->hasFile('images')) //проверка на существования изображения
    {
        $file = $request->file('images'); //UploasdedFile - path\symfony\http-foundation\File\UploadedFile \\получаем объек UploaderFile для работы
        $input['images'] = $file->getClientOriginalName(); //получаем имя файла
//              $path = $file->storeAs(public_path().'/assets/img/', $input['images']);
        $file->move(public_path().'/assets/img', $input['images']); //сохраняем изображение на проекте
        $page = new Page();//создаем пустой объект Page 
        //$page->unguard(); //разрешает на заполнения все поля 
        $page->fill($input); //добавляем поля запроса в объект
        if($page->save()) //сохраняем объект
        {
            return redirect()->route('admin')->with('status', 'Страница добавлена');
        }
        return redirect()->route('pages_add')->with('status', 'Страница не добавлена');
    }
}
//форма редактирования материала
//При выборе материала для редактирования мы поподаем на этот маршрут, как видно у этого роута три вида запросов, передается парматр (id) и обрабатывает все это  контроллер PagesEditController
Route::match(['get', 'post', 'delete'], '/edit/{page}', 'PagesEditController@execute')->name('pages_edit');
//создаем контроллер через консоль
php artisan make:controller Admin\PagesEditController
public function execute(Page $page, Request $request) //первая (Внедрение зависимости) зависимость это объект Page, если мы передам параметром id, используя эту конструкцию можно получить данные по этой записи не используя запись $page = Page::find($id);
{
    $old = $page->toArray(); //полученные данные переводим в массив
    if(view()->exists('admin.pages_edit')) //проверяем есть ли представление
    {
        $data = [
            'title' =>  'Редактирование страницы - '.$old['name'],
            'data'  =>  $old
        ]; //формируем массив данных для представления
        return view('admin.pages_edit', $data); //обращаемся к нему
    }
}
//создаем файл представления и внем указываем следующие настройки
{!! Form::open(['url' => route('pages_edit',array('page'=>$data['id'])),'class'=>'form-horizontal','method'=>'POST','enctype'=>'multipart/form-data']) !!}
//первый параметр это маршрут, в котором мы передаем id, второй атрибут класс, метод пост и указываем тип, что мы будем работать с файлами
{!! Form::hidden('id', $data['id']) !!} //сохраняем в скрытое поле id
//далее идет код как описывался ранее формы
//добавляется отображения старого изображения
<div class="form-group">
    {!! Form::label('old_images', 'Изображение:',['class'=>'col-xs-2 control-label']) !!}
    <div class="col-xs-offset-2 col-xs-10">
        {!! Html::image('img/'.$data['images'],'',['class'=>'img-circle img-responsive','width'=>'150px']) !!}
        {!! Form::hidden('old_images', $data['images']) !!}
    </div>
</div>
//обнавления информации в базе данных
//после того как мы сформировали вывод информации на редактировании теперь можно прописать логику для ее обнавления в БД
if($request->isMethod('post')) //проверяем на пост запрос
{
    $input = $request->except('_token'); //исключаем __token из полученных данных и возвраем массив
    $rules = [
        'name'      =>  'required|max:255',
        'alias'     =>  'required|max:255|unique:pages,alias,'.$input['id'], //если у нас поле alias уникальное, то мы не сможем пройти валидацию т.к поле одно и тоже, для прописываем условие для правила unique, таблица,колонка,id записи, котоаря должна игнорироватся
        'text'      =>  'required'
    ]; //формируем правила для валидации
    $messages = [
        'required'      =>  'Поле :attribute обязательно к заполнению',
        'unique'        =>  'Поле :attribute должно быть уникальным',
        'max'           =>  'Поле :attribute превышен количество символов в :max раз'
    ]; //сообщения для ошибок
    $validator = Validator::make($input, $rules, $messages); //валидация
    if($validator->fails())
    {
        return redirect()->route('pages_edit',['page' => $input['id']])->withErrors($validator); //если валидация не прошла, то делаем редирекут на предыдущую форму
    }
    if($request->hasFile('images')) //проверка есть ли в запросе добавленный файл
    {
        $file = $request->file('images'); //получаем объект UploadFile
        $file->move(public_path().'/assets/img', $file->getClientOriginalName()); //сохраняем файл в каталог проекта, прописываев путь и имя
        $input['images'] = $file->getClientOriginalName(); //записываем имя файла в массиве данных
    }
    else
    {
        $input['images'] = $input['old_images']; //если запись не добавлена берем старое изображение
    }
    unset($input['old_images']); //удаляем изображения
    $page->fill($input); //заносим массив в модель Page
    if($page->update()) //обнавляем данные на таблице
    {
        return redirect('admin')->with('status', 'Страница обновлена'); //если обнавление прошло удачно редирект на главноую страницу
    }

}
//удаление материалов. Заключение
//для кнопики удаления сформированна форма
{!! Form::open(['url'=>route('pages_edit',['page'=>$page->id]), 'class'=>'form-horizontal','method' => 'POST']) !!}
//если мы используеем фасад Form для постраение формы то добавлять _token не нужно т.к он уже формируется автоматически
//изменеия метода для формы можно тримя способами:
    {{ method_field('DELETE') }} //используя хелпер фреймворка, он нас сгенерирует вот такой тег <input type="hidden" name="_method" value="DELETE">
    {!! Form::hidden('_method','delete') !!} //использовать инструмент фасада Form
    <input type="hidden" name="_method" value="DELETE"> //или указать все вручную
    {!! Form::button('Удалить',['class'=>'btn btn-danger','type'=>'submit']) !!}
{!! Form::close() !!}
//в контроллере дописываем следующий код
if($request->isMethod('delete')) //проверка на method
{
    $page->delete(); //удаляем запись
    return redirect('admin')->with('status', 'Страница удалена'); //редирект на главную страницу
}










