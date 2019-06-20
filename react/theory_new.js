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

