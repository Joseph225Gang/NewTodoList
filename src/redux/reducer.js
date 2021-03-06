const defaultState = {
    inputValue: '',
    list: []
}

//reducer可以接收state，但是絕不能修改state
export default (state = defaultState, action) => {
    if(action.type == 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type == 'add_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type == 'delete_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(newState.index, 1);
        return newState;
    }
    return state;
}