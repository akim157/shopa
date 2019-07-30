import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { closeModal } from '../../components/modal';
import Input from '../../components/ui/input';

class EditModal extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onSave: PropTypes.func.isRequired
    };
    constructor(props){
        super(props);
        bindAll(this, ['close', 'changeName', 'changeLink']);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            youtube: this.props.youtube
        }
    }
    close(){
        this.props.dispatch( closeModal() );
    }
    changeName(name) {
        this.setState({name});
    }
    changeLink(youtube) {
        this.setState({youtube});
    }
    save() {
        const { id, name, youtube } = this.state;
        this.props.dispatch( this.props.onSave({ id, name, youtube }) );
        this.close();
    }
    render() {
        return (
            <div>
                <div className='modal-body'>
                    <p><b>ID: </b>{ this.props.id }</p>
                    <Input value={ this.state.name } onChange={this.changeName}/>
                    <Input value={ this.state.youtube } onChange={this.changeLink}/>
                </div>
                <div className="modal-footer">
                    <button className='btn btn-default' onClick={ this.close }>Закрыть</button>
                    <button className='btn btn-success' onClick={ this.save }>Сохранить</button>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(EditModal);
