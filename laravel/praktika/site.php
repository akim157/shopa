<?php
/*====================================================================================================*/
//********************************** Site ************************************************************//
/*====================================================================================================*/
php artisan app:name Name //через консоль указываем новое пространство имен

$table->integer('user_id')->unsigned()->nullable(); //создаем поле user_id положительное, и по умолчанию значение null
$table->foreign('user_id')->references('id')->on('users'); //вторичный ключ

$table->dropForeign('portfolios_filter_alias_foreign'); //для удаления вторичного ключа

Route::resource('/', 'IndexController',[
    'only' => ['index'],
    'names' => [
        'index' => 'home'
    ],
]); //в машруте прописываев REST, где используем только index и даем ему имя home

//"{{ asset(env('THEME')) }}/images/favicon.ico" //прописываем путь к файлу

//https://github.com/lavary/laravel-menu //ссылка на расширение для формирования меню
Menu::make(); //метод make вернет объект класса builder для формирования меню

public function getMenu()
{
    $menu = $this->m_rep->get(); //получаем колекцию меню

    $mBuilder = Menu::make('MyNav', function($m) use ($menu) //первым аргументом даем имя, потом передаем коллекцию меню в функцию callback, $m - это объект builder
    {
        foreach($menu as $item)
        {
            if($item->parent_id == 0)
            {
                $m->add($item->title, $item->path)->id($item->id); //добавляем элемент в объект первый аргумент имя, второй путь, также объявлем id и передаем его из модели меню
            }
            else
            {
                if($m->find($item->parent_id)) //ищем родительский элемент с помощью ID
                {
                    $m->find($item->parent_id)->add($item->title, $item->path)->id($item->id); //к родительскому элементу добавляем новый пункт меню
                }
            }
        }
    });

    return $mBuilder;
}

{!! $menu->asUl() !!} //формируем список UL из меню
{!! $menu->asOl() !!} //формируем список OL из меню
{!! $menu->asDIV() !!} //формируем список DIV из меню

@if($menu)
    <div class="menu classic">
        <ul id="nav" class="menu">
            @include(env('THEME').'.customMenuItems', ['items' => $menu->roots()]) //обращаемся к шаблону и передаем родительские элементы
        </ul>
    </div>
@endif // формируем меню
/*-----------------------------*/
@foreach($items as $item)
    <li {{ (URL::current() == $item->url()) ? "class=active" : "" }}> //проверка на active
        <a href="{{ $item->url() }}">{{ $item->title }}</a>
        @if($item->hasChildren()) //проверка на дочерние элементы
                    <ul class="sub-menu">
                         @include(env('THEME').'.customMenuItems', ['items' => $item->children()]) //создаем рекурсию для формирования дочернего меню
                    </ul>
        @endif
    </li>
@endforeach

//передаем переменную в макет
$menu = $this->getMenu();
$this->vars['navigation'] = view(env('THEME').'.navigation')->with('menu', $menu)->render();
return view($this->template)->with($this->vars);
//макет для формирования страницы
@extends(env('THEME').'.layouts.site')
@section('navigation')
    {!! $navigation !!} //получаем переменную с рендеринными данными
@endsection

if($sliders->isEmpty()) return false; //проверка на существования

$sliders->transform(function($item, $key){
    $item->img = Config::get('settings.slider_path').'/'.$item->img;
    return $item;
}); //функция transform обращается к каждой коллекции и отправляет ее в callback, первый аргемент это сама коллекция, а второй ключ

//создаем директиву в AppServiceProvider
Blade::directive('set', function($exp){
    list($name, $val) = explode(',', $exp);
    return "<?php $name = $val ?>";
});
@set($i, 1) //вызов

//строим связь один ко многим
public function filter()
{
    return $this->belongsTo('Corp\Filter', 'filter_alias', 'alias'); //связываемся с моделью Filter, указываем имя поля связи  (portfolio, filter)
}

@continue //директива для перехода на следующую итерацию

{{ $item->filter->title }} //обращение к связем в представлении

Str::limit($item->text,200) //сокращаем строку до 200 символов

json_last_error() == JSON_ERROR_NONE //проверка на ошибку формирования json строки
{{ $article->created_at->format('F d, Y') }} //дата передается в виде объекта Carbon https://carbon.nesbot.com/docs/

