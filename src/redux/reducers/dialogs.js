const initialState = {
    items: [],
    currentDialogId: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'DIALOGS_SET_ITEMS':
            return { 
                ...state,
                items: payload 
            }
        case 'DIALOGS_SET_CURRENT_DIALOG_ID':
            return {
                ...state,
                currentDialogId: payload,
            }
        default:
            return state;
    }
}