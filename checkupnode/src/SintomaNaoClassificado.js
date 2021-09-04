import React from 'react'
import {FormControl, FormGroup, FormLabel} from "react-bootstrap"

class SintomaNaoClassificado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            descricaoId: props.descricaoId,
            descricaoValue: props.obj.descricao,
            descricaoName: 'descricao',
            descricaoPlaceHolder: 'resumo conciso e só se necessário.'
        };
    }

    setValue(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        let descricao
        if (this.state.descricaoName != null) {
            descricao = <div className="form-group">
                <FormLabel htmlFor={this.state.descricaoId}>Descrição</FormLabel>
                <FormControl type="text" className="form-control" style={{width: "400px"}} id={this.state.descricaoId}
                             name={this.state.descricaoName} defaultValue={this.state.descricaoValue}
                             placeholder={this.state.descricaoPlaceHolder} />
            </div>
        }

        return (
            <div className="parteDaMesmaLinha">
                <FormGroup>
                    <FormLabel column={2} className="tituloClassificacao">{this.state.label.toUpperCase()}</FormLabel>
                    {descricao}
                </FormGroup>
            </div>
        );
    }
}

export default SintomaNaoClassificado;
