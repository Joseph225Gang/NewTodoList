import React, {Component, Fragment} from "react";
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList} from './store/actionCreator';
import ToDoListUI from './TodoListUI';
import axios from "axios";


class Antd extends Component{
    constructor(props)
    {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    
    render(){
        return (
            <ToDoListUI inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                handleItemDelete = {this.handleItemDelete}/>
        )
        }

        componentDidMount()
        {
            /*axios.get('/list.json').then((res) => {
                const action = initListAction(res.data)
                store.dispatch(action);
            })*/
            /*axios.get('/list.json').then((res) => {
                const data = res.data;
                const action = initListAction(data);
                store.dispatch(action);
            })*/
            const action = getInitList();
            store.dispatch(action);
        }

        handleInputChange(e)
        {
            const action = getInputChangeAction(e.target.value);
            store.dispatch(action);
        }

        handleStoreChange()
        {
            this.setState(store.getState());
        }

        handleBtnClick()
        {
            const action = getAddItemAction();
            store.dispatch(action);
        }

        handleItemDelete(index)
        {
            const action = getDeleteItemAction(index);
            store.dispatch(action);
        }
}

export default Antd;