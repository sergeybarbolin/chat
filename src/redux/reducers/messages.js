const initialState = {
    items: [],
    isLoading: null,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'MESSAGES_SET_ITEMS':
            return { 
                ...state,
                items: payload,
            }
        case 'MESSAGES_SET_IS_LOADING':
            return { 
                ...state,
                isLoading: payload
            }
        default:
            return state;
    }
}