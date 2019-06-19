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


