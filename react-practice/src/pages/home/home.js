import React, { PropTypes } from 'react';
import Input from '../../components/ui/input';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import {
	addTodo,
	likeTodo,
	deleteTodo,
	getTodos,
	saveTodos
} from './actions';
// import Input from '../../components/ui/input';
import Loader from '../../components/ui/loader';
import classnames from 'classnames';
import { LS } from '../../utils';
import './styles.less';

class HomePage extends React.Component {
		static path = '/';
		static propTypes = {
            home: PropTypes.object.isRequired,
            dispatch: PropTypes.func.isRequired
        };
		constructor(props) {
			super(props);
			this.state = {
				todoName: ''
				// todos: [
				// 	{ id: 1, name: 'Todo 1'}
				// ],
				// error: ''
			};

			bindAll(this, ['renderTodos','inputOnChange','addTodo']);
			this.props.dispatch(getTodos());
		}
		// inputOnChange(event) {
		// 	const todoName = event.target.value;
		// 	this.setState({ todoName });
		// }
		inputOnChange(value) {
			this.setState({ todoName: value });
		}
		addTodo() {
            this.props.dispatch( addTodo(this.props.home.todos, this.state.todoName));
            this.setState({ todoName: '' });
		}
		renderTodos(item, idx) {
		    const todoClasses = classnames('b-home-todo', {
		        'is-liked': item.liked
            });
		    const btnClasses = classnames('btn', {
		        'active': item.liked
            });
			return (
				<li key={ idx }>
                    <span className={ todoClasses }>
                        { item.name }
                    </span>
                    <button className="btn" onClick={ this.deleteTodo.bind(this, item)}>
                        <i className='glyphicon glyphicon-remove'></i>
                    </button>
                    <button className={ btnClasses } onclick={ this.likeTodo.bind(this, item) }>
                        <i className='glyphicon glyphicon-heart'></i>
                    </button>
                </li>
			);
		}
    likeTodo(todo) {
        this.props.dispatch( likeTodo(todo) );
    }
    deleteTodo(todo) {
		    this.props.dispatch();
    }
    render() {
        // const { todoName, todos, error } = this.state;
        const { todoName } = this.state;
				const { todos, error, isLoading } = this.props.home;
				LS.set('todos', todos);
        return (
            <div className='row b-home'>
                <div className='col-xs-12'>
									<ul>
										{
											// todos.length === 0 ? <Loader />:
											// todos.map(this.renderTodos)
										}
										{/*{ isLoading ? <Loader /> : todos.length !== 0 ? todos.map(this.renderTodos) : 'Элементов нет' }*/}
										{ isLoading ? <Loader /> : todos.length ? todos.map(this.renderTodos) : 'Элементов нет' }
									</ul>
									<div className='col-xs-4'>
										{/* <input type='text' className='form-control' value={ todoName } onChange={ this.inputOnChange.bind(this) }/> */}
										<Input
										onChange={ this.inputOnChange }
										value={ todoName }
										// error={ error }
										error={ this.state.error }
										/>
										<button className='btn btn-primary' onClick={ this.addTodo }>Add todo</button>
									</div>
								</div>
            </div>
        );
    }

		// componentWillUnmount() {
		// 	this.props.dispatch( saveTodos(this.props.todos) );
		// 	LS.set('todos', this.props.todos);
		// }
}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
