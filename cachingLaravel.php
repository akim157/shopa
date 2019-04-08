<?php 
//Кеширование - это промежуточный буфер с очень быстрым доступом, который хранит информацию с менее быстрым доступом.

//        Cache::flush(); // очищает кеш
//        Cache::forget('menu'); //удаляет ячейку из кеша

        if(Cache::has('menu')){
//           $navigation = Cache::get('menu','Menu is empty');
           $navigation = Cache::pull('menu','Menu is empty'); //возвращает из кеша и сразу же удаляется инф. из кеша.
        } else {
            $menu = $this->getMenu();
            $navigation = view(config('settings.theme') . '.navigation')->with('menu', $menu)->render();
//            Cache::put('menu', $navigation, 2);
//            Cache::forever('menu', $navigation); // постоянная основа
            $time = \Carbon::now()->addMinutes(10);
            Cache::put('menu', $navigation, $time);
        }

//или можно написать так		
		$navigation = Cache::get('menu', function(){
            $menu = $this->getMenu();
            return $navigation = view(config('settings.theme') . '.navigation')->with('menu', $menu)->render();
        });
		
		//
		$navigation = Cache::get('menu', function(){
            $menu = $this->getMenu();
            $tmp = view(config('settings.theme') . '.navigation')->with('menu', $menu)->render();
            Cache::forever('menu', $tmp);
            return $tmp;
        });
		
		//
		$navigation = Cache::remember('menu',10,function(){
            $menu = $this->getMenu();
            return view(config('settings.theme') . '.navigation')->with('menu', $menu)->render();
        });
		
//Для кеширования через БД нужно создать миграцию
php artisan cache:table

//тип redis - это сетевое хранилище данных типа ключ, значение с открытым исходным кодом - это не реалиционная высокопроизводительная система управления БД, используется для кешей. Редис хранит все в оперативной памяти и доступ осущесвтляется по ключу. И можно так же сохранять данные на ЖД.

//для работы необходимо установить predis
composer require predis/predis

//кеширование redis
        $navigation = \Cache::remember('menu',50, function(){
            $menu = $this->getMenu();
            return view(config('settings.theme') . '.navigation')->with('menu', $menu)->render();
        });
		
        //set для сохранения данных в бд redis
        \Redis::set('name', 'Ben');
		//get возвращает значение по ключу
        \Redis::get('name');
		        //command
        \Redis::command('set',['name', 'Ben']);
//тип memcahed - ЭТО хеш таблица в оперативной памяти. Используется в высокнагруженных проектах, используется для ускарения. 
 		
?>