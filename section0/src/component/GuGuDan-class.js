import React, { Component } from 'react'

export default class GuGuDan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            result: ''
        };
    }

    onSubmit = (e) => { 
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState ((prevState) => {// prevState가 setState() 전 상태값
                return {
                result: '정답: ' + prevState.value, // or this.state.value (prev 사용 안할 시)
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: '',
                };
            });
            this.input.focus();
        } else {
            this.setState({
                result: '땡',
                value: '',
            });
            this.input.focus();
        }
    };
    
    onChange = (e) => {
        this.setState( { value: e.target.value });
    }

    input;

    onRefInput = (c) => { this.input = c; };

    render() {
        return (
            <>
                <div>{this.state.first} 곱하기 {this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange}/>
                    <button type="submit">입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}
