import React, {Component, Fragment} from "react";
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import './style.css';

class App extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            list: []
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    render(){
        return (
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el) => {el.style.color='blue'}}
                    appear={true}
                    key={item}>
                            <div key={index}>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
            <button onClick={this.handleAddItem}>Toggle</button>
            </Fragment>
        )
    }

    handleAddItem(){
        this.setState((prevState) => {
            return {
                list: [...prevState, 'item']
            }
        })
    }
}

export default App;