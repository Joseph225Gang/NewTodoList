import React, {Component, Fragment} from "react";
import TodoItem from "./TodoItem";
import Test from "./Test";
import axios from "axios";
import './style.css';

class TodoList extends Component{

    constructor(props){
        super(props);
         //當組件的state或者props發生改變的時候，render函數就會重新執行
        this.state = {
            inputValue: '',
            list:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    //在組件即將被掛載到頁面的時候自動執行
    componentWillUnmount()
    {
        console.log('componentWillUnmount');
    }

    componentDidMount()
    {
        console.log('componentDidMount');
        axios.get('/apio/todolist')
        .then(() => {alert('success')})
        .catch(() => {alert('error')})
    }

    //組件被更新之前，它會自動被執行
    shouldComponentUpdate()
    {
        console.log('shouldComponentUpdate');
        return true;
    }
    
    //組件更新完成之後，它會被執行
    componentDidUpdate()
    {
        console.log('componentDidUpdate');
    }


    //組件被更新之前，它會自動執行，但是他在shouldComponentUpdate之後被執行
    //如果shouldComponentUpdate返回true它才執行
    //如果返回false，這個函數就不會執行
    componentWillUpdate()
    {
        console.log('componentWillUpdate');
    }

    render(){
        console.log("parent render");
        return (
            <Fragment>
                <div>
                    {/*下一個是input*/}
                    {
                        //下面是一個input
                    }
                    <label htmlFor="InsertArea">輸入內容</label>
                    <input 
                           id="InsertArea"
                           className = 'input'
                           value = {this.state.inputValue}
                           onChange={this.handleInputChange}
                           ref = {(input) => {this.input = input}}/>
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {
                        this.goTodoItem()
                    }
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }
    goTodoItem(){
        return this.state.list.map((item, index) => {
            return (
                        <TodoItem 
                            key={index}
                            content={item} 
                            index={index}
                            deleteItem={this.handleItemDelete}
                        />
                    )
        })
    }
    handleInputChange(e){
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleBtnClick(){
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }),
        () => {console.log(this.ul.querySelectorAll('div').length);});
        
    }

    handleItemDelete(index){
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        });
    }
}

export default TodoList;