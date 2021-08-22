import React from 'react'
import {FormControl, FormLabel} from 'react-bootstrap'
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
            value: props.value,
            descricaoId: props.descricaoId,
            descricaoValue: props.descricaoValue,
            descricaoName: props.descricaoName,
            descricaoPlaceHolder: props.descricaoPlaceHolder
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
            <FormLabel htmlFor={this.state.id}>Sintoma(s)</FormLabel>
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
                             name={this.state.descricaoName} value={this.state.descricaoValue}
                             placeholder={this.state.descricaoPlaceHolder}/>
            </div>
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h4 className="panel-title">{this.state.label}</h4></div>
                <div className="panel-body">
                    <div className="fieldset">
                        {select}
                        {descricao}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sintoma;
