const initialState = {
    items: [],
    currentDialog: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'DIALOGS_SET_ITEMS':
            return { 
                ...state,
                items: payload 
            }
        case 'DIALOGS_SET_CURRENT_DIALOG':
            return {
                ...state,
                currentDialog: payload,
            }
        default:
            return state;
    }
}