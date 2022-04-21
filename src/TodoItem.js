import React, {Component} from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        console.log("child render");
        const { test, content } = this.props;
        return(
            <div onClick={this.handleClick.bind(this)}>
                {test}-{content}
            </div>
        )
    }

    handleClick(){
        const {handleDelete, index} = this.props;
        handleDelete(index);
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if(nextProps.content !== this.props.content)
            return true;
        return false;
    }

    //當一個組件要從父組件接受了參數
    //如果這個組件第一次存在於父組件中，不會執行
    //如果這個組件之前已存在父組件中，才會執行
    componentWillReceiveProps()
    {
        console.log('child componentWillReceiveProps');
    }

    //當這個組件即將被從頁面中剔除的時候，會被執行
    componentWillUnmount()
    {
        console.log('child componentWillUnmount');
    }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handleDelete: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}
export default TodoItem;