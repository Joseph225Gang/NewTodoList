import React, {Component} from "react";

class Test extends Component{
    //當父組件的render函數被運行時，它的子組件的render都將被運行一次
    render(){
        console.log("Test");
        return <div>{this.props.content}</div>
    }
}

export default Test;