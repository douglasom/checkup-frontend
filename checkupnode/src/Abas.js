import './Abas.css';
import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import HistoriaMedicaAtual from "./HistoriaMedicaAtual"

class Abas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let secaoFechamento
        if (this.state.risco && !this.state.hasErrors()) {
            secaoFechamento = <Tab eventKey="secaoFechamento" title="Fechamento">
            </Tab>
        }

        return (
            <Tabs defaultActiveKey="secaoHistoriaMedicaAtual" transition={false}>
                <Tab eventKey="secaoHistoriaMedicaAtual" title="Hist. Médica Atual">
                    <HistoriaMedicaAtual />
                </Tab>
                <Tab eventKey="secaoHistoriaMedicaPregressa" title="Hist. Méd. Pregressa">
                </Tab>
                <Tab eventKey="secaoHistoriaMedicaFamiliar" title="Hist. Méd. Familiar">
                </Tab>
                <Tab eventKey="secaocondicoesEHabitosDeVida" title="Condições e Hábitos de Vida">
                </Tab>
                <Tab eventKey="secaoExamesComplementaresPrevios" title="Exames Compl. Prévios">
                </Tab>
                <Tab eventKey="secaoExameFisico" title="Exame Físico">
                </Tab>
                <Tab eventKey="secaoExamesComplementaresAtuais" title="Exames Compl. Atuais">
                </Tab>
                <Tab eventKey="secaoOutrosAchados" title="Outros Achados">
                </Tab>
                <Tab eventKey="secaoConclusoes" title="Conclusões">
                </Tab>
                {secaoFechamento}
            </Tabs>);
    }
}

export default Abas;
