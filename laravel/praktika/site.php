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

