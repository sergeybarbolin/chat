import { dialogsApi } from './../../utils/api';

const actions = {
    setDialogs: items => ({
        type: 'DIALOGS_SET_ITEMS',
        payload: items
    }),
    setCurrentDialogId: id => ({
        type: 'DIALOGS_SET_CURRENT_DIALOG_ID',
        payload: id
    }),
    fetchDialogs: () => dispatch => {
        dialogsApi.getAll()
        .then(({ data }) => {
            dispatch(actions.setDialogs(data));
        });
    }
}

export default actions;