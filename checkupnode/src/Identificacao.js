// import $ from 'jquery';
// import Link from "./Link";
import './identificacao.css'
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap'
import React from 'react'
import Col from "react-bootstrap/Col"

const sexos = [
    { value: 'MASCULINO', label: 'Masculino'},
    { value: 'FEMININO', label: 'Feminino'}
];

const racas = [
    { value: 'BRANCA', label: 'branca'},
    { value: 'NEGRA', label: 'negra'},
    { value: 'CHINESA', label: 'chinesa'},
    { value: 'SUL_ASIATICA', label: 'sul-asiática'},
    { value: 'INDIGENA', label: 'indígena'},
    { value: 'JAPONESA', label: 'japonesa'}
];


class Identificacao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identificacao: 123,
            dataAtendimento: "2021-06-04",
            idade: 38,
            sexo: sexos[1],
            raca: {value: 'CHINESA'}
        };
    }

    setDataAtendimento(event) {
        this.setState({
            dataAtendimento: event.target.value
        });
    }

    setSexo(event) {
        this.setState({
            sexo: sexos.find(s => s.value === event.target.value)
        });
    }

    setRaca(event) {
        this.setState({
            raca: racas.find(s => s.value === event.target.value)
        });
    }

    render() {
        return (
            <div>
                <div className="identificacao">
                    <span className="tituloPrincipal">Checkup</span>
                    <div id="menuPrincipal" className="dropdown-content">
                    </div>
                    <FormGroup as={Col}>
                        <FormLabel htmlFor="dataAtendimento">Data</FormLabel>
                        <FormControl type="date" id="dataAtendimento" name="dataAtendimento" value={this.state.dataAtendimento} onChange={(event) => this.setDataAtendimento(event)} />
                    </FormGroup>
                    <FormGroup as={Col} sm={2}>
                        <FormLabel htmlFor="identificacao" column="true">Atendimento</FormLabel>
                        <FormControl type="text" id="identificacao" style={{width: '130px'}} required={true} defaultValue={this.state.identificacao} />
                    </FormGroup>
                    <FormGroup as={Col} sm={2}>
                        <FormLabel htmlFor="idade">Idade</FormLabel>
                        <FormControl type="text" defaultValue={this.state.idade} id="idade" style={{width: '40'}} required={true} />
                    </FormGroup>
                    <FormGroup as={Col} sm={2}>
                        <FormLabel htmlFor="sexo">Sexo</FormLabel>
                        <FormControl as="select" defaultValue={this.state.sexo.value} id="sexo" required={true} size="lg"
                                     onChange={e => this.setSexo(e)}
                        >
                            {sexos.map(({ value, label }, index) => <option value={value} key={value}>{label}</option>)}
                        </FormControl>
                    </FormGroup>
                    <Col>
                        <FormLabel htmlFor="raca">Raça</FormLabel>
                        <FormControl as="select" defaultValue={this.state.raca.value} id="raca" required={true} size="lg"
                                     onChange={e => this.setRaca(e)}
                        >
                            {racas.map(({ value, label }, index) => <option value={value} key={value}>{label}</option>)}
                        </FormControl>
                    </Col>
                    {/*</FormGroup>*/}
                </div>
            </div>);
    }
}

export default Identificacao;
