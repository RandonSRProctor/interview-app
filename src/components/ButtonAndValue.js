import React from 'react';

export default class ButtonAndValue extends React.Component{

    state = {
        count: 0,
        thanksMessage: ''
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    setThanksMessage = () => {
        this.setState(() => ({
            thanksMessage: "Thanks for your time and input at today's interview!"
        }))
    }

    resetState = () => {
        this.setState(() => ({
            count: 0,
            thanksMessage: ''
        }))
    }

    render() {
        return (
            <div>
                <h1>Proof that Randy can make an Increment Button</h1>
                <div>
                    <p>{this.state.count}</p>
                    <button
                    onClick={this.incrementCount}
                    >+</button>
                </div>
                <div>
                -----
                </div>
                <div>
                    {
                        !this.state.thanksMessage &&
                    <button
                    onClick={this.setThanksMessage}
                    >Thanks from Randy</button>
                    }
                    {
                        this.state.thanksMessage && 
                        <button
                        onClick={this.resetState}
                        >Reset</button>
                    }
                    
                </div>
                <div>
                    <p>{this.state.thanksMessage}</p>
                </div>
            </div>
        )
    }
}