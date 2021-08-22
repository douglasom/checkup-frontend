import React from 'react'
import {FormControl, FormLabel, FormGroup} from 'react-bootstrap'
import './Sintoma.css'

class Sintoma extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id != null ? props.id : props.name?.replaceAll('\\.', ''),
            label: props.label,
            multiple: props.multiple,
            name: props.name,
            from: props.from,
            value: props.obj['classificacao'],
            // value: props.value,
            descricaoId: props.descricaoId,
            descricaoValue: props.obj['descricao'],
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
        let select =
            <div className="form-group">
            <FormLabel htmlFor={this.state.id}>Classificação</FormLabel>
            <FormControl as="select" id={this.state.id} className="form-control" multiple={this.state.multiple === 'true'}
                         name={this.state.name} defaultValue={this.state.value}
                         onChange={e => this.setValue(e)}
            >
                {this.state.from.map(({ value, label }, index) => <option value={value} key={value}>{label}</option>)}
            </FormControl>
        </div>

        let descricao
        if (this.state.descricaoName != null) {
            descricao = <div className="form-group">
                <FormLabel htmlFor={this.state.descricaoId}>Descrição</FormLabel>
                <FormControl type="text" className="form-control" style={{width: "400px"}} id={this.state.descricaoId}
                             name={this.state.descricaoName} defaultValue={this.state.descricaoValue}
                             placeholder={this.state.descricaoPlaceHolder}/>
            </div>
        }

        return (
            <div className="parteDaMesmaLinha">
                <FormGroup>
                    <FormLabel column={2}>{this.state.label}</FormLabel>
                        {select}
                        {descricao}
                </FormGroup>
            </div>
        );
    }
}

export default Sintoma;
