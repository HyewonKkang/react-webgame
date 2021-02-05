import React, { PureComponent } from 'react'

class Test2 extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    };

onClick = () => {
    this.setState({
        array: [...this.state.array, 1],
    });
}

// shouldComponentUpdate(nextProps, nextState, nextContext) {
//     if (this.state.counter !== nextContext.state.counter){
//         return true;
//     }
//     return false;
// }

    render() {
        console.log('렌더링', this.state)
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default Test2;