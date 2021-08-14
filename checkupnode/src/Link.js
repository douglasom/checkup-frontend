import React from 'react';

function createUrl(action, controller) {
    return "http://localhost:8080/" + controller + "/" + action;
}

class Link extends React.Component {
    render() {
        let action = this.props.action
        let controller = this.props.controller
        return <a href={createUrl(action, controller)}>{this.props.texto}</a>;
    }
}

export default Link;