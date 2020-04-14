import { messagesApi } from './../../utils/api';

const actions = {
    setMessgaes: items => ({
        type: 'MESSAGES_SET_ITEMS',
        payload: items
    }),
    setIsloading: bool => ({
        type: 'MESSAGES_SET_IS_LOADING',
        payload: bool
    }),
    fetchMessages: dialogId => dispatch => {
        dispatch(actions.setIsloading(true));
        messagesApi.getAllByDialogId(dialogId)
        .then(({ data }) => {
            dispatch(actions.setMessgaes(data));
            dispatch(actions.setIsloading(false));
        }).catch(err => {
            dispatch(actions.setIsloading(false));
            console.log(err);
        })
    }
}

export default actions;