import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

    static path = '/';

    render() {
        return (
            <nav className='navbar navbar-light bg-light'>
                <a className='navbar-brand'>React JS SPA</a>
                <div className='navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <Link to='/'>Главная</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact'>Контакты</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/list'>Список</Link>
                        </li>
                        <li className='nav-item'>
                                <Link to='/contacts'>Страница ошибки</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}
