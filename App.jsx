import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    'id': 1,
                    'name': 'Foo',
                    'age': 23
                },
                {
                    'id': 2,
                    'name': 'Bar',
                    'age': 24
                },
                {
                    'id': 3,
                    'name': 'Etc',
                    'age': 22
                }
            ],
            myArray: [],
            myInput: "My Input"
        }

        this.setStateHandler = this.setStateHandler.bind(this); 
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this); 
        this.updateState = this.updateState.bind(this);            
    }
    updateState(elem) {
        this.setState({myInput: elem.target.value})
    }
    findDomNodeHandler() {
        var headerEle = document.getElementById("header");
        ReactDOM.findDOMNode(headerEle).style.color = 'red';
    }
    setStateHandler() {
        var item = "Item ";
        var myArray = this.state.myArray.slice();
        myArray.push(item);
        this.setState({myArray: myArray});       
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.myInput} onChange={this.updateState}/>
                <p>{this.state.myInput}</p>
                <button onClick={this.findDomNodeHandler}>Find DOM node</button>
                <button onClick={this.setStateHandler}>Click</button>
                <div>{this.state.myArray}</div>
                <div>Hello World!</div>
                <div id="header"><Header /></div>
                <div>{this.props.propName}</div>
                <div>{this.props.propArray}</div>
                <div>{this.props.propBool ? "true" : "false"}</div>
                <div>{this.props.propFunc([2, 5])}</div>
                <div>{this.props.propNum}</div>
                <div><Table data={this.state.data} /></div>
            </div>
        );
    }
}

App.propTypes = {
    propName: PropTypes.string,
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNum: PropTypes.number
}

App.defaultProps = {
    propName: 'Gowtham',
    propArray: [1, 2, 3], 
    propBool: true,   
    propFunc: (a) => {
        return a;
    },
    propNum: 3
}

class Header extends React.Component {
    render() {
        return (
            <h3>Header</h3>
        )
    }
}

class Table extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    {this.props.data.map((person, i) => <TableRow key={i} data={person} />)}
                </tbody>
            </table>
        )
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default App;