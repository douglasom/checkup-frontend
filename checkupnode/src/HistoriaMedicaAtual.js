import React from 'react'
import Sintoma from './Sintoma'
import './comum.css'

class HistoriaMedicaAtual extends React.Component {
    render() {
        let SintomaCardiovascular = [
            { value: "NENHUM", label: 'nenhum'},
            { value: "PALPITACOES", label: 'palpitações'}
        ];
        let SintomaGastrointestinal = [
            { value: "NENHUM", label: 'nenhum'},
            { value: "ABC", label: 'abc'}
        ];

        let fechamento = {
            sintomas: {
              cardiovasculares: {
                  classificacao: [SintomaCardiovascular[1].value],
                  descricao: "descrição dos sintomas cardio"
              },
              gastrointestinais: {
                  classificacao: [SintomaGastrointestinal[0].value],
                  descricao: "descrição dos sintomas gastro"
              }
            },
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h4 className="panel-title">Sintomas</h4></div>
                <div className="panel-body">
                    <div className="fieldset">
                        <div className="mesmaLinha">
                            <Sintoma label="CARDIOVASCULARES" multiple="true" obj={fechamento.sintomas.cardiovasculares} from={SintomaCardiovascular} />
                            <Sintoma label="GASTROINTESTINAIS" multiple="true" obj={fechamento.sintomas.gastrointestinais} from={SintomaGastrointestinal} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HistoriaMedicaAtual;
