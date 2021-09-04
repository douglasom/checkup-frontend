import React from 'react'
import {FormLabel, FormGroup} from 'react-bootstrap'
import './Classificacao.css'
import MedicaoEmMmHg from './MedicaoEmMmHg'

class MedidaPressaoArterial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            pas: props.obj.pas,
            pad: props.obj.pad
        };
    }

    setValue(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className="parteDaMesmaLinha">
                <FormGroup>
                    <FormLabel column={2} className="tituloClassificacao">{this.state.label}</FormLabel>
                    <MedicaoEmMmHg label="PAS" value={this.state.pas} />
                    <MedicaoEmMmHg label="PAD" value={this.state.pad} />
                </FormGroup>
            </div>
        );
    }
}

export default MedidaPressaoArterial;
