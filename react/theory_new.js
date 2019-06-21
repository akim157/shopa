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







