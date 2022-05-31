import {ADD_TODO_ITEM, DELETE_TODO_ITEM,CHANGE_INPUT_VALUE, INIT_LIST_ACTION} from './actionType';

const defaultState = {
    inputValue: '123',
    list: [1,2,3]
}

//reducer可以接收state，但是絕不能修改state
export default (state = defaultState, action) => {
    if(action.type == CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type == INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    if(action.type == ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type == DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}