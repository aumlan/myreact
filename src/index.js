/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// const index = 0;
// const element = (
//     <h1 className="heading" tabIndex={index}>
//         <span className="text">Hello world</span>
//         <img src="" alt="" />
//     </h1>
// );

// function Text({ name }) {
//     return (
//         <h1 className="heading">
//             <span className="text">Hello world {name}</span>
//             <img src="" alt="" />
//         </h1>
//     );
// }

class Text extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span className="text">Hello world {this.props.name}</span>
                <img src="" alt="" />
            </h1>
        );
    }
}

// ReactDOM.render(<text name="aumlan" />, document.getElementById('root'));

ReactDOM.render(<Text name="aumlan" />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
