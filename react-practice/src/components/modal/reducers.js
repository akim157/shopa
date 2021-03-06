import { OPEN_MODAL, CLOSE_MODAL } from './action';

const initialState = {
    isOpen: false,
    title: 'Модальное окно',
    content: null
};

function modalReducer(STATE = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return Object.assign({}, state, {
                isOpen: true,
                title: action.title,
                btnText: action.btnText,
                content: action.content
            });
        case CLOSE_MODAL:
            return Object.assign({}, state, {
                isOpen: false
            });
        default:
            return state;
    }
}

const ModalReducer = {
    modal: modalReducer
};

export default ModalReducer;
