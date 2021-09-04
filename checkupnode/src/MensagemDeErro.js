import { Alert } from 'react-bootstrap'
import React from 'react'
import './MensagemDeErro.css'

class MensagemDeErro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: props.children
        }
    }

    render() {
        return (
                <Alert variant="danger">
                    {this.state.message}
                </Alert>
            )

    }
}

export default MensagemDeErro