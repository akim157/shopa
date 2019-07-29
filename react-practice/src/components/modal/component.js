import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { clsoeModal } from './action';
import './styles.less';

class Modal extends React.Component {

    static path = '/';
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        modal: PropTypes.object.isRequired
    };
    constructor(props){
        super(props);
        this.close = this.close.bind(this);
    }
    close() {
        this.props.dispatch( clsoeModal() );
    }
    render() {
        const { isOpen, title, content, btnText } = this.props.modal;
        if (!isOpen) return null;
        return (
            <div className='modal fade in'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>{ title }</h5>
                            <button type='button' className='close' onClick={ this.close }>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            { content }
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' onClick={ this.close }>Закрыть</button>
                            <button type='button' className='btn btn-primary'>{ btnText }</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}

export default connect(mapStateToProps)(Modal);
