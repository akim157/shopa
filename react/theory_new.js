/*=============== 141.Lifecycle of a Request (Жизненный цикл запроса) ==================*/
//https://developer.mozilla.org/ru/docs/Web/HTTP/Methods/OPTIONS
/*=============== 142.Updating Data (Обновление данных) ==================*/
//App.js
import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        //pending > resolved (success) OR rejected
        const { data: posts } = await axios.get(apiEndpoint);
        this.setState({ posts });
        // const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
        // promise.then();
        //   const response = await promise;
        //   console.log(response);
    }

    handleAdd = async () => {
        const obj = { title: "a", body: "b" };
        const { data: post } = await axios.post(apiEndpoint, obj);

        const posts = [post, ...this.state.posts];
        this.setState({ posts });
    };

    handleUpdate = async post => {
        post.title = "UPDATED";
        const { data } = await axios.put(apiEndpoint + "/" + post.id, post);
        // axios.patch(apiEndpoint + '/' + post.id, { title: post.title });
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = {...post};
        this.setState({ posts });
    };

    handleDelete = post => {
        console.log("Delete", post);
    };

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <button
                                    className="btn btn-info btn-sm"
                                    onClick={() => this.handleUpdate(post)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => this.handleDelete(post)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default App;
/*=============== 143.Deleting Data (Удаление данных) ==================*/
//App.js
import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        //pending > resolved (success) OR rejected
        const { data: posts } = await axios.get(apiEndpoint);
        this.setState({ posts });
        // const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
        // promise.then();
        //   const response = await promise;
        //   console.log(response);
    }

    handleAdd = async () => {
        const obj = { title: "a", body: "b" };
        const { data: post } = await axios.post(apiEndpoint, obj);

        const posts = [post, ...this.state.posts];
        this.setState({ posts });
    };

    handleUpdate = async post => {
        post.title = "UPDATED";
        const { data } = await axios.put(apiEndpoint + "/" + post.id, post);
        // axios.patch(apiEndpoint + '/' + post.id, { title: post.title });
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = {...post};
        this.setState({ posts });
    };

    handleDelete = async post => {
        await axios.delete(apiEndpoint + '/' + post.id);
        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({ posts });
    };

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <button
                                    className="btn btn-info btn-sm"
                                    onClick={() => this.handleUpdate(post)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => this.handleDelete(post)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default App;
/*=============== 144.Optimistic vs Pessimistic Updates (Оптимистичные и пессимистичные обновления) ==================*/
//
handleDelete = async post => {
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    await axios.delete(apiEndpoint + "/" + post.id);
};
//
handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
        await axios.delete(apiEndpoint + "/" + post.id);
        throw new Error('');
    }
    catch (ex) {
        alert('Something failed while deleting a post!');
        this.setState({ posts: originalPosts });
    }
};
/*=============== 145.Expected vs Unexpected Errors (Ожидаемые и неожиданные ошибки) ==================*/
try {
    await axios.delete(apiEndpoint + "/" + post.id);
    throw new Error("");
} catch (ex) {
    ex.request;
    ex.response;
    //Expected (404: not found, 400: bad request) - CLIENT ERRORS
    // - Display a specific error message (Показать конкретное сообщение об ошибке)
    if (ex.response && ex.response.status === 404)
        alert('this post has alredy been deleted');
    else {
        console.log('Logging the error', ex);
        alert('An unexpected error occurred.');
    }
    //Unexpected (network down, server down, db down, bug) (сеть не работает, сервер не работает, дБ не работает, ошибка)
    // - Log them
    // - Display a generic and friendly error message (Показать общее и понятное сообщение об ошибке)
    alert("Something failed while deleting a post!");
    this.setState({ posts: originalPosts });
}
/*=============== 146.Handling Unexpected Errors Globally (Обработка неожиданных ошибок в глобальном масштабе) ==================*/
//axios.interceptors.repsonse.use(successs, error)
axios.interceptors.repsonse.use(null, error => {
    console.log('INTERCEPTOR CALLED');
    return Promise.reject(error);
});
//--------------------------//
try {
    await axios.delete(apiEndpoint + "/" + post.id);
    throw new Error("");
} catch (ex) {
    console.log('HANDLE DELETE CATCH BLOCK');
    // ex.request;
    // ex.response;
    //Expected (404: not found, 400: bad request) - CLIENT ERRORS
    // - Display a specific error message (Показать конкретное сообщение об ошибке)
    if (ex.response && ex.response.status === 404)
        alert('this post has alredy been deleted');
    else {
        console.log('Logging the error', ex);
        alert('An unexpected error occurred.');
    }
    //Unexpected (network down, server down, db down, bug) (сеть не работает, сервер не работает, дБ не работает, ошибка)
    // - Log them
    // - Display a generic and friendly error message (Показать общее и понятное сообщение об ошибке)
    alert("Something failed while deleting a post!");
    this.setState({ posts: originalPosts });
}
//Вы можете перехватывать запросы или ответы до того, как они будут обработаны then или catch.
axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        console.log("Logging the error", error);
        alert("An unexpected error occurred.");
    }
    return Promise.reject(error);
});
/*=============== 147.Extracting a Reusable Http Service (Извлечение многоразовой службы Http) ==================*/
//App.js
import React, { Component } from "react";
import http from './services/httpService';
import "./App.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        //pending > resolved (success) OR rejected
        const { data: posts } = await http.get(apiEndpoint);
        this.setState({ posts });
    }

    handleAdd = async () => {
        const obj = { title: "a", body: "b" };
        const { data: post } = await http.post(apiEndpoint, obj);

        const posts = [post, ...this.state.posts];
        this.setState({ posts });
    };

    handleUpdate = async post => {
        post.title = "UPDATED";
        const { data } = await http.put(apiEndpoint + "/" + post.id, post);
        // axios.patch(apiEndpoint + '/' + post.id, { title: post.title });
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = { ...post };
        this.setState({ posts });
    };

    handleDelete = async post => {
        const originalPosts = this.state.posts;

        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({ posts });

        try {
            await http.delete(apiEndpoint + "/" + post.id);
            throw new Error("");
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                alert("this post has alredy been deleted");
            this.setState({ posts: originalPosts });
        }
    };

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <button
                                    className="btn btn-info btn-sm"
                                    onClick={() => this.handleUpdate(post)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => this.handleDelete(post)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default App;
//httpService.js
//Вы можете перехватывать запросы или ответы до того, как они будут обработаны thenили catch.
import axios from "axios/index";

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        console.log("Logging the error", error);
        alert("An unexpected error occurred.");
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}
/*=============== 148.Extracting a Config Module (Извлечение модуля конфигурации) ==================*/
//App.js
import React, { Component } from "react";
import http from './services/httpService';
import config from './config';
import "./App.css";

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        //pending > resolved (success) OR rejected
        const { data: posts } = await http.get(config.apiEndpoint);
        this.setState({ posts });
    }

    handleAdd = async () => {
        const obj = { title: "a", body: "b" };
        const { data: post } = await http.post(config.apiEndpoint, obj);

        const posts = [post, ...this.state.posts];
        this.setState({ posts });
    };

    handleUpdate = async post => {
        post.title = "UPDATED";
        const { data } = await http.put(config.apiEndpoint + "/" + post.id, post);
        // axios.patch(apiEndpoint + '/' + post.id, { title: post.title });
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = { ...post };
        this.setState({ posts });
    };

    handleDelete = async post => {
        const originalPosts = this.state.posts;

        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({ posts });

        try {
            await http.delete(config.apiEndpoint + "/" + post.id);
            throw new Error("");
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                alert("this post has alredy been deleted");
            this.setState({ posts: originalPosts });
        }
    };

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <button
                                    className="btn btn-info btn-sm"
                                    onClick={() => this.handleUpdate(post)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => this.handleDelete(post)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default App;
//config.json
{
    "apiEndpoint": "https://jsonplaceholder.typicode.com/posts"
}
/*=============== 149.Displaying Toast Notifications (Отображение уведомлений о тостах) ==================*/
//npm i react-toastify@4.1
//App.js
import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import http from './services/httpService';
import config from './config';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        //pending > resolved (success) OR rejected
        const { data: posts } = await http.get(config.apiEndpoint);
        this.setState({ posts });
    }

    handleAdd = async () => {
        const obj = { title: "a", body: "b" };
        const { data: post } = await http.post(config.apiEndpoint, obj);

        const posts = [post, ...this.state.posts];
        this.setState({ posts });
    };

    handleUpdate = async post => {
        post.title = "UPDATED";
        const { data } = await http.put(config.apiEndpoint + "/" + post.id, post);
        // axios.patch(apiEndpoint + '/' + post.id, { title: post.title });
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = { ...post };
        this.setState({ posts });
    };

    handleDelete = async post => {
        const originalPosts = this.state.posts;

        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({ posts });

        try {
            await http.delete('a' + config.apiEndpoint + "/" + post.id);
            throw new Error("");
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                alert("this post has alredy been deleted");
            this.setState({ posts: originalPosts });
        }
    };

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <button
                                    className="btn btn-info btn-sm"
                                    onClick={() => this.handleUpdate(post)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => this.handleDelete(post)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default App;
//httpService.js
//Вы можете перехватывать запросы или ответы до того, как они будут обработаны thenили catch.
import axios from "axios/index";
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        console.log("Logging the error", error);
        toast.error("An unexpected error occurred.");
        toast("An unexpected error occurred.");
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}
/*=============== 150.Logging Errors (Ошибки регистрации) ==================*/
//https://sentry.io/welcome/
//npm install @sentry/browser
//import * as Sentry from '@sentry/browser';
//Sentry.init({dsn: "https://4243d1b6d7034b7ebe1d90acd4467c0e@sentry.io/1486597"});
//return <button onClick={methodDoesNotExist}>Break the world</button>;
//httpService.js
//Вы можете перехватывать запросы или ответы до того, как они будут обработаны thenили catch.
import axios from "axios/index";
import * as Sentry from '@sentry/browser';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        Sentry.captureException(error);
        toast.error("An unexpected error occurred.");
        toast("An unexpected error occurred.");
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}
//npm i raven-js@3.26.4
/*=============== 151.Extracting a Logger Service (Извлечение службы регистрации) ==================*/
//logService.js
import * as Sentry from "@sentry/browser/dist/index";

function init() {
    Sentry.init({dsn: "https://4243d1b6d7034b7ebe1d90acd4467c0e@sentry.io/1486597"});
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
}
//index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import logger from './services/logService';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

logger.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
//httpService.js
//Вы можете перехватывать запросы или ответы до того, как они будут обработаны thenили catch.
import axios from "axios/index";
import logger from './logService';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        logger.log(error);
        toast.error("An unexpected error occurred.");
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}
/*=============== 152.Vidly Backend ==================*/
//The Complete Node.js Course
//Node
//Express (фреймворк)
//MongoDB
/*=============== 153.Installing MongoDB on Mac (Установка MongoDB на Mac) ==================*/
//https://brew.sh/index_ru - пакетный менеджер для Apple
//brew install mongodb
//sudo mkdir -p /data/db - создаем каталок (-p, --parents - не выдавать ошибок если существует, создавать продительские каталоги если необходимо)
//sudo chown -R `id -un` /data/db - изменения владельца или группу для указания файлов (-R, --recursive Рекурсивное изменение владельца каталогов и их содержимого.)
//mongod
//https://www.mongodb.com/
/*=============== 154.Installing MongoDB on Windows (Установка MongoDB на Windows) ==================*/
//Установка mongoDB
//Установка mongoDB compos
//Настройка Path к файлу mongod
//cmd запускаем демона mongod
//cls - очистка
//md c:\data\db - создаем каталог
//mongodb
//запускаем mngodb compos
/*=============== 155.Setting up the Node Backend (Настройка Node Backend) ==================*/
//https://github.com/mosh-hamedani/vidly-api-node
//git clone https://github.com/mosh-hamedani/vidly-api-node.git
//cd vidly-api-node
//npm i
//node seed.js
//node index.js
//http://localhost:3900/api/movies
///////////////////
//Если возникнут проблемы при развертывании то скорей всего это в модуле bcrypt
//https://stackoverflow.com/questions/34546272/cannot-find-module-bcrypt
//auth.js | user.js - изменить bcrypt на bcryptjs
/*=============== 156.Disabling Authentication (Отключение аутентификации) ==================*/
//https://www.getpostman.com/downloads/
/*=============== 157.Exercise - Connect Movies Page to the Backend (Упражнение - Соедините страницу фильмов с бэкэндом) ==================*/
/*=============== 158.Ading Http and Log Services (Адинг Http и Log Services) ==================*/
//npm i axios
//npm i react-toastify
//copy httpSevices and logService
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/register" component={RegisterForm}/>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/movies/:id" component={MovieForm}/>
                        <Route path="/movies" component={Movies} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
/*=============== 159.Replacing FakeGenreService (Замена FakeGenreService) ==================*/
//genreService.js
import http from "./httpService";

export function getGenres() {
    return http.get('http://localhost:3900/api/genres');
}
//movies.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        sortColumn: { path: "title", order: "asc" }
    };

    async componentDidMount() {
        const { data } = await getGenres();
        const genres = [{ _id: "", name: "All Genres" }, ...data ];

        this.setState({ movies: getMovies(), genres });
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });

        deleteMovie(movie._id);
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
    };

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    };

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            searchQuery,
            movies: allMovies
        } = this.state;

        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

        if (count === 0) return <p>There are no movies in the database.</p>;

        const { totalCount, data: movies } = this.getPagedData();

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <Link
                        to="/movies/new"
                        className="btn btn-primary"
                        style={{ marginBottom: 20 }}
                    >
                        New Movie
                    </Link>
                    <p>Showing {totalCount} movies in the database.</p>
                    <SearchBox value={searchQuery} onChange={this.handleSearch} />
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
/*=============== 160.Replacing FakeMovieService (Замена FakeMovieService) ==================*/
//movies.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        sortColumn: { path: "title", order: "asc" }
    };

    async componentDidMount() {
        const { data } = await getGenres();
        const genres = [{ _id: "", name: "All Genres" }, ...data];

        const { data: movies } = await getMovies();
        this.setState({ movies, genres });
    }

    handleDelete = async movie => {
        const originalMovies = this.state.movies;
        const movies = originalMovies.filter(m => m._id !== movie._id);
        this.setState({ movies });

        try {
            await deleteMovie(movie._id);
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                toast.error("This movie has already been deleted.");
            this.setState({ movies: originalMovies });
        }
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
    };

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    };

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            searchQuery,
            movies: allMovies
        } = this.state;

        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

        if (count === 0) return <p>There are no movies in the database.</p>;

        const { totalCount, data: movies } = this.getPagedData();

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <Link
                        to="/movies/new"
                        className="btn btn-primary"
                        style={{ marginBottom: 20 }}
                    >
                        New Movie
                    </Link>
                    <p>Showing {totalCount} movies in the database.</p>
                    <SearchBox value={searchQuery} onChange={this.handleSearch} />
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
//movieService.js
import http from './httpService';

const apiEndpoint = 'http://localhost:3900/api/movies';
export function getMovies() {
    return http.get(apiEndpoint);
}
export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + '/' + movieId);
}
/*=============== 161.Extracting a Config File (Извлечение файла конфигурации) ==================*/
//config.json
{
    "apiUrl": "http://localhost:3900/api"
}
//genreService.js
import http from "./httpService";
import { apiUrl } from '../config.json';

export function getGenres() {
    return http.get(apiUrl + '/genres');
}
//movieService.js
import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/movies';
export function getMovies() {
    return http.get(apiEndpoint);
}
export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + '/' + movieId);
}
/*=============== 162.Exercise - Connect Movie Form to the Backend (Упражнение - Соедините форму фильма с бэкэндом) ==================*/
/*=============== 163.Populating the Form (Заполнение формы) ==================*/
//movieService.js
import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/movies';

export function getMovies() {
    return http.get(apiEndpoint);
}
export function getMovie(movieId) {
    return http.get(apiEndpoint + '/' + movieId);
}
export function saveMovie(movie) {

}
export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + '/' + movieId);
}
//movieForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label("Title"),
        genreId: Joi.string()
            .required()
            .label("Genre"),
        numberInStock: Joi.number()
            .required()
            .min(0)
            .max(100)
            .label("Number in Stock"),
        dailyRentalRate: Joi.number()
            .required()
            .min(0)
            .max(10)
            .label("Daily Rental Rate")
    };

    async componentDidMount() {
        const { data: genres } = await getGenres();
        this.setState({ genres });

        const movieId = this.props.match.params.id;
        if (movieId === "new") return;

        try {
            const { data: movie } = await getMovie(movieId);
            this.setState({ data: this.mapToViewModel(movie) });
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                return this.props.history.replace("/not-found");
        }
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    doSubmit = () => {
        saveMovie(this.state.data);

        this.props.history.push("/movies");
    };

    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default MovieForm;
/*=============== 164.Refactoring (Рефакторинг) ==================*/
//movieForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label("Title"),
        genreId: Joi.string()
            .required()
            .label("Genre"),
        numberInStock: Joi.number()
            .required()
            .min(0)
            .max(100)
            .label("Number in Stock"),
        dailyRentalRate: Joi.number()
            .required()
            .min(0)
            .max(10)
            .label("Daily Rental Rate")
    };

    async populateGenres(){
        const { data: genres } = await getGenres();
        this.setState({ genres });
    }

    async pupulateMovie() {
        try {
            const movieId = this.props.match.params.id;
            if (movieId === "new") return;

            const { data: movie } = await getMovie(movieId);
            this.setState({ data: this.mapToViewModel(movie) });
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                return this.props.history.replace("/not-found");
        }
    }

    async componentDidMount() {
        await this.populateGenres();
        await this.pupulateMovie();
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    doSubmit = () => {
        saveMovie(this.state.data);

        this.props.history.push("/movies");
    };

    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default MovieForm;
/*=============== 165.Saving the Movie (Сохранение фильма) ==================*/
//movieService.js
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
    return http.get(apiEndpoint);
}
export function getMovie(movieId) {
    return http.get(apiEndpoint + "/" + movieId);
}
export function saveMovie(movie) {
    if (movie._id) {
        const body = { ...movie };
        delete body._id;
        http.put(apiEndpoint + "/" + movie._id, body);
    }
    http.post(apiEndpoint, movie);
}
export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + "/" + movieId);
}
//movieForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label("Title"),
        genreId: Joi.string()
            .required()
            .label("Genre"),
        numberInStock: Joi.number()
            .required()
            .min(0)
            .max(100)
            .label("Number in Stock"),
        dailyRentalRate: Joi.number()
            .required()
            .min(0)
            .max(10)
            .label("Daily Rental Rate")
    };

    async populateGenres() {
        const { data: genres } = await getGenres();
        this.setState({ genres });
    }

    async pupulateMovie() {
        try {
            const movieId = this.props.match.params.id;
            if (movieId === "new") return;

            const { data: movie } = await getMovie(movieId);
            this.setState({ data: this.mapToViewModel(movie) });
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                return this.props.history.replace("/not-found");
        }
    }

    async componentDidMount() {
        await this.populateGenres();
        await this.pupulateMovie();
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    doSubmit = async () => {
        await saveMovie(this.state.data);

        this.props.history.push("/movies");
    };

    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default MovieForm;
/*=============== 166.Refactoring (Рефакторинг) ==================*/
//movieService.js
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

function movieUrl(id) {
    // return apiEndpoint + '/' + id;
    return `${apiEndpoint}/${id}`;
}
export function getMovies() {
    return http.get(apiEndpoint);
}
export function getMovie(movieId) {
    return http.get(movieUrl(movieId));
}
export function saveMovie(movie) {
    if (movie._id) {
        const body = { ...movie };
        delete body._id;
        http.put(movieUrl(movie._id), body);
    }
    http.post(apiEndpoint, movie);
}
export function deleteMovie(movieId) {
    return http.delete(movieUrl(movieId));
}
/*=============== 167.Introduction (Вступление) ==================*/
//Authentication and Authorization
//JSON Web Tokens (Веб-токены JSON)
//Calling Protected APIs (Вызов Защищенных API)
//Showing/Hiding Elements (Показ / скрытие элементов)
//Protected Routes (Защищенные маршруты)
/*=============== 168.Registering a New User (Регистрация нового пользователя) ==================*/
//postman
{
    "email": "user1@domain.com",
    "password": "123456",
    "name": "Maxim"
}
/*=============== 169.Submitting the Registration Form (Подача регистрационной формы) ==================*/
//userService.js
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
    return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name
    });
}
//registerForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from '../services/userService';

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi.string()
            .required()
            .label("Name")
    };

    doSubmit = async () => {
        await userService.register(this.state.data);
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
/*=============== 170.Handling Registration Errors (Обработка Ошибок Регистрации) ==================*/
//registerForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from '../services/userService';

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi.string()
            .required()
            .label("Name")
    };

    doSubmit = async () => {
        try {
            await userService.register(this.state.data);
        }
        catch(ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
/*=============== 171.Logging in a User (Вход в систему пользователя) ==================*/
/*=============== 172.Submitting the Login Form (Отправка формы входа) ==================*/
//authService.js
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";

export function login(email, password) {
    return http.post(apiEndpoint, { email, password });
}
//loginForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "../services/authService";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        const { data } = this.state;
        await login(data.username, data.password);
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "UserName")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
/*=============== 173.Handling Login Errors (Обработка ошибок входа) ==================*/
//loginForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "../services/authService";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await login(data.username, data.password);
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "UserName")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
/*=============== 174.Storing the JWT (Хранение JWT) ==================*/
//loginForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "../services/authService";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            const { data: jwt } = await login(data.username, data.password);
            localStorage.setItem('token', jwt);
            this.props.history.push('/');
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "UserName")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
/*=============== 175.Logging in the User upon Registration (Вход пользователя при регистрации) ==================*/
//vidly-api-node - users.js
router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    user = new User(_.pick(req.body, ["name", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(_.pick(user, ["_id", "name", "email"]));
});
//registerForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from '../services/userService';

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi.string()
            .required()
            .label("Name")
    };

    doSubmit = async () => {
        try {
            const response = await userService.register(this.state.data);
            localStorage.setItem('token', response.headers['x-auth-token']);
            this.props.history.push('/');
        }
        catch(ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
/*=============== 176.JSON Web Tokens (JWT) ==================*/
//https://jwt.io
/*=============== 177.Getting the Current User (Получение текущего пользователя) ==================*/
//npm i jwt-decode
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    state = {};
    componentDidMount() {
        try {
            const jwt = localStorage.getItem("token");
            const user = jwtDecode(jwt);
            this.setState({ user });
        } catch (ex) {}
    }
    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar user={this.state.user} />
                <main className="container">
                    <Switch>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/movies/:id" component={MovieForm} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
/*=============== 178.Displaying the Current User on NavBar (Отображение текущего пользователя на NavBar) ==================*/
//navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Vidly
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/movies">
                        Movies
                    </NavLink>
                    <NavLink className="nav-link" to="/customers">
                        Customers
                    </NavLink>
                    <NavLink className="nav-link" to="/rentals">
                        Rentals
                    </NavLink>
                    {!user && (
                        <React.Fragment>
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                            <NavLink className="nav-link" to="/register">
                                Register
                            </NavLink>
                        </React.Fragment>
                    )}
                    {user && (
                        <React.Fragment>
                            <NavLink className="nav-link" to="/profile">
                                {user.name}
                            </NavLink>
                            <NavLink className="nav-link" to="/logout">
                                Logout
                            </NavLink>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
//login.Form.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "../services/authService";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            const { data: jwt } = await login(data.username, data.password);
            localStorage.setItem("token", jwt);
            window.location = "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "UserName")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
//registerForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi.string()
            .required()
            .label("Name")
    };

    doSubmit = async () => {
        try {
            const response = await userService.register(this.state.data);
            localStorage.setItem("token", response.headers["x-auth-token"]);
            window.location = "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
/*=============== 179.Logging out a User (Выход пользователя) ==================*/
//logout.jsx
import React, {Component} from 'react';

class Logout extends Component {
    componentDidMount() {
        localStorage.removeItem('token');
        window.location = '/';
    }
    render() {
        return null;
    }
}

export default Logout;
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    state = {};
    componentDidMount() {
        try {
            const jwt = localStorage.getItem("token");
            const user = jwtDecode(jwt);
            this.setState({ user });
        } catch (ex) {}
    }
    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar user={this.state.user} />
                <main className="container">
                    <Switch>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/movies/:id" component={MovieForm} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
/*=============== 180.Refactoring ==================*/
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from './services/authService';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    state = {};
    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user });
    }
    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar user={this.state.user} />
                <main className="container">
                    <Switch>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/movies/:id" component={MovieForm} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
//loginForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await auth.login(data.username, data.password);
            window.location = "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "UserName")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
//registerForm.jsx
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from '../services/authService';

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi.string()
            .required()
            .label("Name")
    };

    doSubmit = async () => {
        try {
            const response = await userService.register(this.state.data);
            auth.loginWithJwt(response.headers["x-auth-token"]);
            window.location = "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
//logout.jsx
import React, { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
    componentDidMount() {
        auth.logout();
        window.location = "/";
    }
    render() {
        return null;
    }
}

export default Logout;
//authService.js
import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export default {
    login,
    logout,
    getCurrentUser,
    loginWithJwt
};
/*=============== 181.Calling Protected API Endpoints (Вызов защищенных конечных точек API) ==================*/
//default.json
{
    "jwtPrivateKey": "unsecureKey",
    "db": "mongodb://localhost/vidly",
    "port": "3900",
    "requiresAuth": true
}
//authService.js
import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    logout,
    getCurrentUser,
    getJwt,
    loginWithJwt
};
//httpService.js
import axios from "axios";
import logger from "./logService";
import auth from './authService';
import { toast } from "react-toastify";

axios.defaults.headers.common['x-auth-token'] = auth.getJwt();

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
        toast.error("An unexpected error occurrred.");
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
/*=============== 182.Fixing Bi-directional Dependencies (Исправление двунаправленных зависимостей) ==================*/
//Dependencies (Зависимости)
//Http <- -> Auth
//Http getJwt() ->  <- setJwt() Auth
//httpService.js
import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
        toast.error("An unexpected error occurrred.");
    }

    return Promise.reject(error);
});

function setJwt(jwt) {
    axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
};
//authService.js
import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    logout,
    getCurrentUser,
    getJwt,
    loginWithJwt
};
/*=============== 183.Authorizatoin (авторизация) ==================*/
//{
//   _id: "5d0e5aafe14a061e9449e963",
//   name: "Maxim",
//   email: "user1@domain.com",
//   password: "$2a$10$ydTvs.QOuHjIv5MhlD0vgu9BYGfq3RJF7nLISSdXT.ocvStzYrZai",
//   __v: 0,
//   isAdmin: true
// }
/*=============== 184.Showing or Hiding Elements based on the User (Отображение или скрытие элементов на основе пользователя) ==================*/
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    state = {};
    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user });
    }
    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar user={this.state.user} />
                <main className="container">
                    <Switch>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/movies/:id" component={MovieForm} />
                        <Route
                            path="/movies"
                            render={props => <Movies {...props} user={this.state.user} />}
                        />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
//movies.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        sortColumn: { path: "title", order: "asc" }
    };

    async componentDidMount() {
        const { data } = await getGenres();
        console.log(data);
        const genres = [{ _id: "", name: "All Genres" }, ...data];

        const { data: movies } = await getMovies();
        this.setState({ movies, genres });
    }

    handleDelete = async movie => {
        const originalMovies = this.state.movies;
        const movies = originalMovies.filter(m => m._id !== movie._id);
        this.setState({ movies });

        try {
            await deleteMovie(movie._id);
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                toast.error("This movie has already been deleted.");
            this.setState({ movies: originalMovies });
        }
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
    };

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    };

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            searchQuery,
            movies: allMovies
        } = this.state;

        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
        const { user } = this.props;

        if (count === 0) return <p>There are no movies in the database.</p>;

        const { totalCount, data: movies } = this.getPagedData();

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    {user && (
                        <Link
                            to="/movies/new"
                            className="btn btn-primary"
                            style={{ marginBottom: 20 }}
                        >
                            New Movie
                        </Link>
                    )}
                    <p>Showing {totalCount} movies in the database.</p>
                    <SearchBox value={searchQuery} onChange={this.handleSearch} />
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
/*=============== 185.Projecting Routes (Проектирование маршрутов) ==================*/
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    state = {};
    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user });
    }
    render() {
        const { user } = this.state;
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar user={this.state.user} />
                <main className="container">
                    <Switch>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/logout" component={Logout} />
                        <Route
                            path="/movies/:id"
                            render={props => {
                                if (!user) return <Redirect to="/login" />;
                                return <MovieForm {...props} />;
                            }}
                        />
                        <Route
                            path="/movies"
                            render={props => <Movies {...props} user={this.state.user} />}
                        />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
/*=============== 186.Extracting ProtectedRoute (Извлечение защищенного маршрута) ==================*/
//protectedRoute.jsx
import React from "react";
import { Route, Redirect } from 'react-router-dom';
import auth from '../../services/authService';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (!auth.getCurrentUser()) return <Redirect to="/login" />;
                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
};

export default ProtectedRoute;
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import ProtectedRoute from './components/common/protectedRoute';
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    state = {};
    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user });
    }
    render() {
        const { user } = this.state;
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar user={this.state.user} />
                <main className="container">
                    <Switch>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/logout" component={Logout} />
                        <ProtectedRoute
                            path="/movies/:id"
                            component={MovieForm}
                        />
                        <Route
                            path="/movies"
                            render={props => <Movies {...props} user={this.state.user} />}
                        />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
/*=============== 187.Redirecting after Login (Перенаправление после входа в систему) ==================*/
//protectedRoute.jsx
import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (!auth.getCurrentUser())
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    );
                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
};

export default ProtectedRoute;
//loginForm.jsx
import React from "react";
import { Redirect } from 'react-router-dom';
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await auth.login(data.username, data.password);
            const { state } = this.props.location;
            window.location = state ? state.from.pathname : '/';
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        if (auth.getCurrentUser()) return <Redirect to="/" />;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "UserName")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
/*=============== 188.Exercise (Упражнение) ==================*/
/*=============== 189.Hiding the Delete Column (Скрытие столбца удаления) ==================*/
//moviesTable.jsx
import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

// const x = <like></like>; //React Element {}

class MoviesTable extends Component {
    columns = [
        {
            path: "title",
            label: "Title",
            content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        {
            key: "like",
            content: movie => (
                <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
            )
        }
    ];

    deleteColumn = {
        key: "delete",
        content: movie => (
            <button
                onClick={() => this.props.onDelete(movie)}
                className="btn btn-danger btn-sm"
            >
                Delete
            </button>
        )
    };

    constructor() {
        super();
        const user = auth.getCurrentUser();
        if (user && user.isAdmin) this.columns.push(this.deleteColumn);
    }

    render() {
        const { movies, onSort, sortColumn } = this.props;
        return (
            <Table
                columns={this.columns}
                data={movies}
                onSort={onSort}
                sortColumn={sortColumn}
            />
        );
    }
}

export default MoviesTable;
/*=============== 190.Introduction (Вступление) ==================*/
//Deployment (развертывание)
//Environment Variables (Переменные среды)
//Production Builds (Построение производства)
//Deploying to Heroku (Развертывание в Heroku)
/*=============== 191.Environment Variables (Переменные среды) ==================*/
//.env | .env.development
//REACT_APP_NAME=Vidly in Dev
// REACT_APP_VERSION=1
//index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

console.log('SUPERMAN', process.env.REACT_APP_NAME);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
/*=============== 192.Production Builds (Построение производства) ==================*/
//npm run build
//npm i -g serve
//serve -s build
//http://localhost:5000
/*=============== 193.Getting Started with Heroku (Начало работы с Heroku) ==================*/
//https://www.heroku.com/
//https://devcenter.heroku.com/articles/heroku-cli
//npm install -g heroku
//heroku --version
//heroku login
//export HTTP_PROXY=http://proxy.server.com:1234
/*=============== 194.MongoDB in the Cloud (MongoDB в облаке) ==================*/
//https://mlab.com/
/*=============== 195.Adding Code to a Git Repository (Adding Code to a Git Repository) ==================*/



























