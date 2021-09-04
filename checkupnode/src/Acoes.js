import React from 'react'
import {Button} from 'react-bootstrap'
import './Acao.css'

class Acoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <Button className="acao" type="submit" variant="primary">Salvar</Button>
            </>
        )
    }
}

export default Acoes
