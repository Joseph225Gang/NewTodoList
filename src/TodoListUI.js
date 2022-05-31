import React from "react";
import { Button } from 'antd';
import { Input, List } from 'antd';
import 'antd/dist/antd.css';

//無狀態組件。當只有rander函數，可以用這無狀態函數
const TodoListUi = (props) => {
    return (
        <div>
        <Input placeholder="Basic usage" 
               value={props.inputValue}
               onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
        <Button type="dashed">Dashed</Button>
        <List
            style={{marginTop:'10px',width:'300px'}}
            bordered
            dataSource={props.list}
            renderItem={(item,index)=>(<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
        />
        </div>
    )
}
/*class TodoListUi extends Component
{

    render(){
        return (
            <Fragment>
                <div>
                <Input placeholder="Basic usage" 
                       value={this.props.inputValue}
                       onChange={this.props.handleInputChange}
                />
                <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                <Button type="dashed">Dashed</Button>
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index)=>(<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
                </div>
            </Fragment>
        )
        }
}*/

export default TodoListUi;