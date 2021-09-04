import React from 'react'
import {FormControl, FormLabel, FormGroup} from 'react-bootstrap'
import './Classificacao.css'

class Classificacao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id != null ? props.id : props.name?.replaceAll('\\.', ''),
            label: props.label,
            multiple: props.multiple,
            name: "classificacao",
            from: props.obj.opcoes,
            value: props.obj.classificacao,
        };
    }

    setValue(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        let select =
            <div className="form-group">
                <FormLabel htmlFor={this.state.id}>Classificação</FormLabel>
                <FormControl as="select" id={this.state.id} className="form-control" multiple={this.state.multiple === 'true'}
                             name={this.state.name} defaultValue={this.state.value}
                             onChange={e => this.setValue(e)}>
                    {this.state.from.map(({ value, label }, index) => <option value={value} key={value}>{label}</option>)}
                </FormControl>
          </div>

        return (
            <div className="parteDaMesmaLinha">
                <FormGroup>
                    <FormLabel column={2} className="tituloClassificacao">{this.state.label}</FormLabel>
                        {select}
                </FormGroup>
            </div>
        );
    }
}

export default Classificacao;
