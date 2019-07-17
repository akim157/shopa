/* ================== 2.DevTools =============== */
// F2 - редактировать элемент
// document.body.contentEditable = true - редактирование текста
/* ================== 3.Репозиторий проекта =============== */
// ls -1 - все файлы
// Настройка git (Они хранятся в папке .git/config)
// git config --global user.name "Name"
// git config --global user.email "mail@mail.ru"
// git config --list - проверка сохранения настроек
// cat /.gitconfig - просмотр файла
// git init - инилизация репозитория
// ls -1 -a - показать все файлы и скрытые тоже
// git status - сообщает в каком состоянии находится репозиторий (On branch master - говрит, что мы находимся в ветке master)
// (Initial commit - мы еще ни чего ни зафиксировали)
// (Untracked files - неотслеживымые файлы)
// git add index.html - иницилизируем один файля для отслеживания
// git add . - проиндексирует всю папку (. - папка)
// git commit -m "Начало истории" - фиксируем состояние
// vim index.css - редактор файлов
// (Changes not staged for commit - были изменены файлы, но они не подготовлены к изменению)
// git diff - показывает разницу в файлах
// git add css/main.css css/button.css (индексируем измененные файлы)
// git commit -m "Изменеия" - фиксируем новое состояния, коммитим
// git log - история коммитов
// git show [hascommit] - показывает изменеия данного коммита
/* ================== 4.Установка Git и работа в консоли =============== */
// cmder.net - консоль для работы
// Download full - содержит гит
// cmd - стандартная консоль Window, PowerShell - продвинутая оболочка от Microsoft, bash - unix
// Startup/Environment: set LC_ALL=ru_RU.UTF-8 set LANG=ru_RU.UTF-8 - кодировка
// ~ - домашняя папка с:/user/...
// pwd - полный путь к папке, где сейчас находишся
// cd Downloads - перемещение по папкам
// cd - или cd ~ - возвращение в домашнюю папку
// cd .. или cd ../../ - на уровень выше
// ls - список файлов
// ls ~/Desktop - файлы на рабочем столе
// ls -1 cmder - откывает файлы в директории
// start . - открывает проводник
// start ~/Desktop/file.txt - открываем файл
// cd ~/D [tab] - терминал дополняет
// устанавливаем git с сайта
// git --version - указывает верисию git
/* ================== 5.Конфликт GIT =============== */
// git merge search-page - мержим ветку search-page в ветку мастер
// git status (fix conflicts and run "git commit" - исправить конфликты и закоммитить)
// (use "git merge --abort" to abort the merge - отменить слияние)
// (both modified - изменен в обеих ветках)
// vim index.html - открываем файл для редактирования
// git add index.html - иницилизируем изменения
// git commit -m "Test" - добавляем новый коммит
// git log --oneline --graph -6 - просматриваем результат
// git status
// (deleted by us - файл удален нами)
// git add namefile - оставялем файл
// git rm namefile - удаляем имя файла из отслеживания
// git commit -m "rjvvbn"
// git log --oneline --graph -5 - проверяем
/* ================== 6.Решение проблем =============== */
// git checkout css/main.css - откатываем файл до предыдущего состояния
// (если файл удалян его так же можно вернуть)
// cat css/main.css - выводит содерижимое файла
// git checkout hashcommit css/button.css - вернет состояния файла из конкретного коммита
// git diff --staged - показывает проиндексируемые файлы
// git reset HEAD index.html - оменяет индексацию файла, которого мы не хотим включать в коммит
// git add index.html
// git commit -m "index"
// git log -1 - показывает последний коммит
// git commit --amend -m "Перекрасил..." - меняем сообщения последняего коммита
// git rm css/test.css - удаляем файл из коммита и из папки
// git commit --amend --no-edit - изменяем последний коммит
// git rm --cached css/test.css - удаляем файл из последнего коммита
// git commit --amend --no-edit - изменяем последний коммит
// git help checkout - помощь по команде
/* ================== 7.Разметка =============== */
// https://html.spec.whatwg.org/multipage/dom.html#dom
// https://dom.spec.whatwg.org/#document-element
// http://validator.w3.org
// http://validator.w3.org/nu
// <article> - комментарий, твит, статья, виджет ВК и т.д.
// <section> - смысловой раздел документа
// <header> - вводная часть, обысно содрежит подсказки и навигацию.
// <main> - выделяет содержимое, которае на странице является главным, должен быть один на странице.
/* ================== 10.Фотошоп для верстальщика =============== */
// панель Инфо
// панель Символ
// панель Слои
// меням в настройках единицу измерения на пиксели
// Ctrl + R - линейки
// Настройка цвета - Web/Интернет для Европы 2
// Alt + Колесо мыши - удаляет и приближает макет
// Зажать пробел и можно с помощью мыши передвигать макет
// Ctrl + ; - скрывает или показывает линии
// Ctrl + T - выделить изображение
// assets adobe
// zeplin
// avocode
// sketch
/* ================== 12.Доступность интерфейсов =============== */
// accessibility - доступность
// Tab вперед | Shift Tab назад | Space нажать | Enter перейти
// focus { ontline: 0; }
// tabindex="0" - порядок передвижения фокуса
// tabindex="-1" - исключаем из интерактивности элемент
// Семантика - использование элементов по смыслу
// Диватоз)
// <details>
//<summary>Подробнее</summary>
//<p>Если их не покрасить...</p>
//</details>
{/* <label>
	Цвет холодильника
	<input list="fridges">
</label>
<detalist id="fridges">
	<oprtion value="Фиолетовый">
	<oprtion value="Красный">
	<oprtion value="Оранжевый">
	<oprtion value="Желтый">
	<oprtion value="Зеленый">
	<oprtion value="Голубой">
	<oprtion value="Синий">
</detalist> */}
//<a href>Главная</a> - содержимое элемента
//<legend>Адрес</legend> - Заголовок группы
//<nav aria-label="Содержимое">
//.visually-hidden {
// 	position: absolute;
// 	width: 1px;
// 	height: 1px;
// 	margin: -1px;
// 	border: 0;
// 	padding: 0;
// 	clip: rect(0 0 0 0);
// 	overflow: hidden;
// }
//ARIA
//<fieldset> - группировка объектов формы
/* ================== 14.CSS =============== */
// Селектор {
// свойство: значение;
// }
//Псевдокласс - усиливают
//:link | :hover | :active | :focus | :visited
//:root | :first-child | :last-child | :nth-child()
//:valid | :invalid | :required | :optional | :checked | :disabled | :enabled
//Псевдоэлементы - создают виртуальные теги для дополнителеной стилизации
//::after | ::before | ::first-letter | ::first-line
// <li class="login-item">
//     <::before>Иконка входа</::before>
//     <a href="/login">Вход</a>
// </li>
// .login-item::before {
//     content: 'Иконка входа'
// }
//Каскадность - к одному и тожу же элементу может примениться несколько css-правил.
//Определение приоритетов
//width: 100vw; - от ширины вьюпорта (видмой части браузера)
//height: 100vh; - от высоты вьюпорта
//font-size: 2em; от размера шрифта родителя
//font-size: 2rem; от размера шрифта body
//color: #f00;
//color: #ff0000;
//color: rgb(255, 0, 0);
//color: rgba(255, 0, 0, 0.5);
//color: hsl(0, 100%, 50%);
//color: hsla(0, 100%, 50%, 0.5);
//content: attr(href); - получает содержимое атрибута
//width: calc(100% - 100px); - любые расчеты
//background-image: linear-gradient(45deg, yellow, green); - линейный градиент
//css-директивы
//@fon-face {
// font-family: "Open Sans";
// src:
//     url("OpenSans-Regular.woff2") format("woff2"),
//     url("OpenSans-Regular.woff") format("woff"),
// }
//@media (max-width: 600px) {}
//Нормализация стилей
//Normalize.css - это небольшой CSS-файл, который обеспечивает для HTML-элементов лучшую кроссбраузреность в стилях по умолчанию.
//font: inherit; - для кнопки в форме принудительно от родителя
/* ================== 17.Сетки =============== */
//Поток - порядок отрисовки документов
//display: block - блочные
//display: inline - строчные
//display: inline - блочно-строчные
//display: flex - гибикие или флексы
//display: grid - гридовые
//display: table - табличные
















