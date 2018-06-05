import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>Hello World!</div>
                <div><Header /></div>
                <div><Content /></div>
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

class Content extends React.Component {
    render() {
        return (
            <div>Content</div>
        )
    }
}

export default App;