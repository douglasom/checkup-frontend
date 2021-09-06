import { Alert } from 'react-bootstrap'
import React from 'react'
import './MensagemDeErro.css'

class MensagemDeErro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            message: props.children
        }

        this.hide = this.hide.bind(this)
    }

    hide() {
        this.setState({ "show": false })
    }

    render() {
        let alert = null
        if (this.state.show) {
            alert = <Alert variant="danger" onClose={this.hide}>
                {this.state.message}
            </Alert>
        }

        return alert

    }
}

export default MensagemDeErro