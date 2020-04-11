import { dialogsApi } from './../../utils/api';

const actions = {
    setDialogs: items => ({
        type: 'DIALOGS_SET_ITEMS',
        payload: items
    }),
    setCurrentDialog: items => ({
        type: 'DIALOGS_SET_CURRENT_DIALOG',
        payload: items
    }),
    fetchDialogs: () => dispatch => {
        dialogsApi.getAll()
        .then(({ data }) => {
            dispatch(actions.setDialogs(data));
        });
    }
}

export default actions;