import React, { PropTypes } from 'react';
import { Header } from './components';
import { Modal } from './components/modal';
import { DevTools } from './utils';

export default class App extends React.Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };
    static path = '/';

    render() {
        return (
            <div className='container-fluid'>
                <Modal />
                <Header />
                { this.props.children }
                {/*{ process.env.NODE_ENV !== 'production' ? <DevTools /> : null }*/}
                { NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }

}
