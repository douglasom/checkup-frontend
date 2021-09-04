import React from 'react'
import {FormControl, FormLabel} from 'react-bootstrap'

class MedicaoEmMmHg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            label: props.label,
            value: props.value,
        }
    }

    setValue(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        const label = this.state.label.concat(" (em mmHg)");
        return (<div className="form-group">
            <FormLabel column={1}>{label}</FormLabel>
            <FormControl type="text" className="form-control" style={{width: "400px"}}
                         name="pas" defaultValue={this.state.value}
                         placeholder={label}/>
        </div>)
    }
}

export default MedicaoEmMmHg
