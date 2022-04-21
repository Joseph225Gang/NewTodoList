import React, {Component, Fragment} from "react";
import { Button } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css';

const { TextArea } = Input;

class Antd extends Component{
    constructor(props)
    {
        super(props);
    }
    
    render(){
        return (
            <Fragment>
                <div>
                <Input placeholder="Basic usage" />
                <Button type="primary">Primary</Button>
                <Button type="dashed">Dashed</Button>
                <TextArea rows={4} />
                </div>
            </Fragment>
        )
        }
}

export default Antd;