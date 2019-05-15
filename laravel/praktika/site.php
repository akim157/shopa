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

//Локализация проекта
Lang::get() //получаем данные локализации с помощью фасада Lang
trans('ru.latest_projects') //можно также использовать хелпер
//пагинация
$this->check($builder->paginate(Config::get('settings.paginate'))); //прописываем метод paginate где параметром идет число с количеством строк
$articles->load(); //подгружает данные
//отрисовка пагинации
{{ $articles->links() }}
//если пагинация не стандартная, то ее можно сформировать
<div class="general-pagination group" >
    @if ($articles->lastPage() > 1) //получаем номер последней страницы записи
        @if ($articles->currentPage() !== 1) //получаем номер текущей страницы
            <a href = "{{ $articles->url(($articles->currentPage() - 1)) }}" >{!!Lang::get('pagination.previous') !!}</a >
        @endif
        @for ($i = 1; $i <= $articles->lastPage(); $i++)
            @if ($articles->currentPage() == $i)
                <a class="selected" disabled >{{ $i }}</a >
            @else
                <a href = "{{ $articles->url($i) }}" >{{ $i }}</a >
            @endif
        @endfor
        @if ($articles->currentPage() !== $articles->lastPage())
            <a href = "{{ $articles->url(($articles->currentPage() + 1)) }}" >{!! Lang::get('pagination.next') !!}</a >
        @endif
    @endif
</div >

//сервис граватар
@set($hash, ($comment->email) ?  md5($comment->email) : md5($comment->user->email))
<img alt="" src="https://www.gravatar.com/avatar/{{ $hash }}?d=mm%s=55" class="avatar"/>

//Защита от инъекций запрсов
<meta name="csrf-token" content="{{ csrf_token() }}">//размещаем в заголовке страницы мета тег с ключом

 headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    //размещаем где формируется заголовок запроса ключ
//таким образом мы защитились от иньъекций ссылка: https://laravel.com/docs/5.8/csrf#csrf-x-xsrf-token
//404
//Для формирования страницы 404 нужно создать директорию errors в views, а там файл с названием 404
//Класс, который отвечает за исключение (404Б 503) Handler, распологается данный класс app/Exceptions/Handler.php
//метод report служит для предварительной обработки исключений, используется логирования (отправка) на удаленный сервис
if($this->isHttpException($exception)){} //проверка на http исключений
$exception->getStatusCode(); //метод getStatusCode возвращает код исключения (404...)
//проверяем код и перенаправлем
//response() - хелпер, дает доступ к объекту Response, который формирует ответ пользователю
switch($statusCode)
{
    case '404':
        return response()->view(env('THEME').'.404');
}
//формируем навигацию
switch($statusCode)
{
    case '404':
        $ob = new \Corp\Http\Controllers\SiteController(new \Corp\Repositories\MenusRepository(new \Corp\Menu)); //получаем объект класса SiteController
        $navigation = view(env('THEME').'.navigation')->with('menu', $ob->getMenu())->render(); //формируем навигацию и получаем меню из объекта
        return response()->view(env('THEME').'.404', ['bar' => 'no', 'title' => 'Страница не найдена','navigation' => $navigation]);
}
//добавляем логи
\Log::alert('Страница не найдена - ' . $request->url()); //$request->url() - страница, которая запрашивалась

//Проверку прав пользователя можно реализовать как в AuthProvider так же и в классах политик безопасности
//данная конструкция прописывается в конструкторе контроллера
if(Gate::denies('VIEW_ADMIN'))
{
    abort(403);
}
//данная конструкция прописывается в AuthServiceProvider
public function boot()
{
    $this->registerPolicies();

    Gate::define('VIEW_ADMIN', function($user){  //проверка на права, $user объект пользователя
        return $user->canDo('VIEW_ADMIN'); //вызываем собстевенный метод canDo, который прописан в модели User
    });
    //
}
//прописываем метод CanDo
public function canDo($permission, $require = false)
{
    if(is_array($permission))
    {
        foreach($permission as $permName)
        {
            $permName = $this->canDo($permName);
            if($permName && !$require)
            {
                return true;
            }
            elseif(!$permName && $require)
            {
                return false;
            }
        }
        return $require;
    }
    else
    {
        foreach($this->roles as $role)
        {
            foreach($role->perms as $perm)
            {
                if(Str::is($permission, $perm->name)) //матрица проверки строки
                {
                    return true;
                }
            }
        }
    }
}

//проверка роли
    public function hasRole($name, $require = false)
{
    if(is_array($name))
    {
        foreach($name as $roleName)
        {
            $hasRole = $this->hasRole($roleName);
            if($hasRole && !$require)
            {
                return true;
            }
            elseif(!$hasRole && $require)
            {
                return false;
            }
        }
        return $require;
    }
    else
    {
        foreach($this->roles as $role)
        {
            if($role->name == $name)
            {
                return true;
            }

        }
        return false;
    }
}

//использование класса политики безопасности
if(Gate::denies('save', new \Corp\Article)) //вторым агрументом передаем объект модели, где будет опредлять класс политики безопасности
{
    abort(403);
}
//через консоль создаем политику безопасности
//php artisan make:policy ArticlePolicy
//В созданной политеке прописываем метод
public function save(User $user) //он должен быть одноименным с первым аргементом метода denies
{
    return $user->canDo('ADD_ARTICLES');
}
//после этого регистрируем политику в классе Providers\AuthServiceProvider
protected $policies = [
// 'Corp\Model' => 'Corp\Policies\ModelPolicy',
    Article::class => ArticlePolicy::class, //::class - прописывает полный путь к файлу
];

//создаем класс request для валидации данных
//php artisan make:request ArticleRequest
//указываем данный класс как зависимость
public function store(ArticleRequest $request) {}
//в классе ArticleRequest есть метод authorize, который отвечает за проверку авторизации мы можем прописать там следующие:
public function authorize()
{
    return \Auth::user()->canDo('ADD_ARTICLES'); //обращаемся к объекту аутифицированного пользователя и проверяем
}
//создаем метод в репозитории для добавлении статьи
public function addArticle($request)
{
    if(Gate::denies('save', $this->model)) //проверка на право сохранения
    {
        abort(403);
    }
    $data = $request->except('_token','image'); //исключаем не нужные поля
    if(empty($data)) return ['error' => 'Нет данных'];
    if(empty($data['alias']))
    {
        $data['alias'] = $this->transliterate($data['title']); //если не указан alias то формируем его из title при этом используем функцияю transliterate для перевода кириллистических символов в латиницу
    }
}
//в классе родителе репозитория реализуем метод transliterate
public function transliterate($string)
{
    $str = mb_strtolower($string, 'UTF-8'); //приводим строку к нижнему регистру
    $leter_array = [ //объявляем массив где ключи это латинские буквы, а значение являются кирилицой
        'a' => 'а',
        'b' => 'б',
        'v' => 'в',
        'g' => 'г',
        'd' => 'д',
        'e' => 'е,э',
        'jo' => 'ё',
        'zh' => 'ж',
        'z' => 'з',
        'i' => 'и',
        'j' => 'й',
        'k' => 'к',
        'l' => 'л',
        'm' => 'м',
        'n' => 'н',
        'o' => 'о',
        'p' => 'п',
        'r' => 'р',
        's' => 'с',
        't' => 'т',
        'u' => 'у',
        'f' => 'ф',
        'kh' => 'х',
        'ts' => 'ц',
        'ch' => 'ч',
        'sh' => 'ш',
        'shch' => 'щ',
        '' => 'ъ',
        'y' => 'ы',
        '' => 'ь',
        'yu' => 'ю',
        'ya' => 'я',
    ];
    foreach($leter_array as $leter => $kyr)
    {
        $kyr = explode(',', $kyr); //в значении кирилице где несколько букв, создаем массив
        $str = str_replace($kyr, $leter, $str); //заменяем букву кирилицы на латиницу в строке, первым параметром может быть массив
    }
    $str = preg_replace('/(\s|[^A-Za-z0-9\-])+/','-',$str); //с помощью регулярного вырожения заменяем ненжуные символы на знак -
    $str = trim($str,'-'); //убираем по краям строки пробел и удаляем с концов знак -
    return $str; //возвращаем готовую строку
}
//для добавления правил валидации нам понадобится переобъявить метод
protected function getValidatorInstance()
{
    $validator = parent::getValidatorInstance();

    $validator->sometimes('alias','unique:articles|max:255', function($input){
        return !empty($input->alias);
    });

    return $validator;
}
//продолжаем прописывать метод addArticle
public function addArticle($request)
{
    if(Gate::denies('save', $this->model)) //проверка на права пользователя для сохранения
    {
        abort(403);
    }
    $data = $request->except('_token','image'); //убираем не нежуные поля
    if(empty($data)) return ['error' => 'Нет данных'];
    if(empty($data['alias']))
    {
        $data['alias'] = $this->transliterate($data['title']); //формируем alias из title
    }

    if($this->one($data['alias'], false)) //проверяем alias на уникальность
    {
        $request->merge(['alias' => $data['alias']]); //добавляем в объект свойство alias
        $request->flash(); //сохраняем данные объекта в сессию
        return ['error' => 'Данный псевдоним уже используется']; //возвращаем ошибку
    }


}

//ресайз изображения (изменение размера полученного изображения) http://image.intervention.io/getting_started/installation#laravel
//composer self-update - команда для обнавления композера
//crop() - обрезает изображение
//resize() - изменения размера изображения
//fit() - объединяет два выше метода

//прописываем дальше метод addArticle
public function addArticle($request)
{
    if(Gate::denies('save', $this->model))
    {
        abort(403);
    }
    $data = $request->except('_token','image');
    if(empty($data)) return ['error' => 'Нет данных'];
    if(empty($data['alias']))
    {
        $data['alias'] = $this->transliterate($data['title']);
    }

    if($this->one($data['alias'], false))
    {
        $request->merge(['alias' => $data['alias']]);
        $request->flash();
        return ['error' => 'Данный псевдоним уже используется'];
    }
    if($request->hasFile('image')) //проверка на существование изображения
    {
        $image = $request->file('image'); //\\получаем объек UploaderFile для работы
        if($image->isValid()) // проверка на валидность файла
        {
            $str = Str::random(8); //формируем рандомную строку из 8 символов
            $obj = new \stdClass(); //создаем объект из вшитого класса php
            $obj->mini = $str.'_mini.jpg';
            $obj->max = $str.'_max.jpg';
            $obj->path = $str.'.jpg';

            $img = Image::make($image); //используем расширение для создания объекта Image
            //с помощью метода fit редактируем файл
            $img->fit(Config::get('settings.image')['width'],
                Config::get('settings.image')['height'])->save(public_path().'/'.env('THEME').'/images/articles/'.$obj->path);
            $img->fit(Config::get('settings.articles_img')['max']['width'],
                Config::get('settings.articles_img')['max']['height'])->save(public_path().'/'.env('THEME').'/images/articles/'.$obj->max);
            $img->fit(Config::get('settings.articles_img')['mini']['width'],
                Config::get('settings.articles_img')['mini']['height'])->save(public_path().'/'.env('THEME').'/images/articles/'.$obj->mini);

            $data['img'] = json_encode($obj); //формируем json
            $this->model->fill($data); //в объект article добавляем данные из массива
            if($request->user()->articles()->save($this->model)) //запрос пользователя для добавления статьи сохраняем модель
            {
                return ['status' => 'Материал добавлен'];
            }
        }
    }
}
//для редактирования статьи мы можем использовать метод edit в контроллере, и для получения конкретных данных из БД используем зависимисти (Article $article)
//но так как мы передаем alias а не id то мы получим пустой объект, чтобы это изменить в RouteServiceProvider пропишем следующие
public function boot()
{
    //
    Route::pattern('alias', '[\w-]+');
    parent::boot();

    Route::bind('articles', function($value) {//метод bind связывает свойства с действием, articles это имя маршрута, $value передаваемый alias
        return \Corp\Article::where('alias', $value)->first(); //получаем данные по alias
    });
}

//!Но этот метод у меня не отработал возвращается 404 ошибка, по этому в моделе я прописал следующее:
//переназначаем метод resolveRouteBinding, который переводится как (разрешить привязку маршрута)
//$value - это значение alias, которое передается по маршруту  admin/articles/{article}/edit
//$this->getRouteKeyName() - этот метод возвращает имя ключа по, которому идет поиск данных в нашем случае ID
//strtolower($value) - приводит значение
//ссылка на решение https://stackoverflow.com/questions/52746883/can-i-change-the-resolution-logic-for-route-model-binding-to-always-lowercase-th
public function resolveRouteBinding($value)
{
//        return $this->where($this->getRouteKeyName(), strtolower($value))->first();
    return $this->where('alias', $value)->first();
}
//формируем пароль
dd(\Hash::make('12345678'));

//В классе ArticleRequest поправим проверку alias на уникальность при редактировании статьи
$validator->sometimes('alias','unique:articles|max:255', function($input){
    if($this->route()->hasParameter('articles')) //получаем доступ к маршруту и проверяем есть ли параметр articles
    {
        $model = $this->route()->parameter('articles'); //получаем модель редактируемых данных
        return ($model->alias !== $input->alias) && !empty($input->alias); //если alias не совподают то проверяем на уникальность
    }
    return !empty($input->alias);
});

$this->perms()->sync(); //метод sync организуют работу связанных моделей через таблицу
$this->perms()->sync($inputPermissions);
//
$this->perms()->detach(); //метод detach осуществляет отвязку от определенной записи
//возвращение родительских пунктов меню
$tmp = $this->getMenus()->roots();
$menus = $tmp->reduce(); //позволяет описать функцию, котоаря будет выполнена для каждой колекции, при этом коллекция будет уменьшатся на один
$menus = $tmp->reduce(function($returMenus){ //параметром для функции передается результат предыдущей выполненой функции над коллекцией, первый рах когда выполняется функция в параметре хранится null
});
$menus = $tmp->reduce(function($returnMenus, $menu){}, ['0' => 'Родительский пункт меню']); //при первом отработки будет поподать второй аргумент, menu это конкретный пункт меню
$menus = $tmp->reduce(function($returnMenus, $menu){
    $returnMenus[$menu->id] = $menu->title;
    return $returnMenus;
}, ['0' => 'Родительский пункт меню']);

app('router') //хелпер, который предоставляет доступ к глобальному классу фреймворка, параметром получаем объект класса машрутов
//getRoutes - получаем коллекцию маршрутов
//match - получаем конкретный маршрут
//создаем запрос данного пути
app('router')->getRoutes()->match(app('request')->create($menu->path));
$route->getName() //возвращает имя маршрута
$route->parameters() //параметры маршрута





