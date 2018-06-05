import React from 'react';
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
            ]
        }
    }
    render() {
        return (
            <div>
                <div>Hello World!</div>
                <div><Header /></div>
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