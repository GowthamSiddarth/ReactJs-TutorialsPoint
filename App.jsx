import React from 'react';

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
                <div><Table data={this.state.data} /></div>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>Header</div>
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