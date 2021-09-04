import React from 'react'
import Classificacao from "./Classificacao"
import MedidaPressaoArterial from "./MedidaPressaoArterial"
import './comum.css'

class HistoriaMedicaPregressa extends React.Component {
    render() {
        let PressaoArterial = [
            { value: "NAO_CONHECIDA", label: 'Não conhecida'},
            { value: "ADEQUADA", label: 'Adequada'}
        ];
        let Glicemia = [
            { value: "NAO_CONHECIDA", label: 'Não conhecida'},
            { value: "ADEQUADA", label: 'Adequada'}
        ];

        let fechamento = {
            historiaPrevia: {
                pressaoArterial: {
                  opcoes: PressaoArterial,
                  classificacao: PressaoArterial[1].value
                },
                medidaPressaoArterial: {
                    pas: 123,
                    pad: 456
                },
                glicemia: {
                    opcoes: Glicemia,
                    classificacao: Glicemia[1].value
                }
            }
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h4 className="panel-title">Cardiovascular</h4></div>
                <div className="panel-body">
                    <Classificacao label="Pressão arterial" multiple="false" obj={fechamento.historiaPrevia.pressaoArterial} />
                    <MedidaPressaoArterial label="Medida pressão arterial prévia" obj={fechamento.historiaPrevia.medidaPressaoArterial} />
                    <Classificacao label="Glicemia" multiple={false} obj={fechamento.historiaPrevia.glicemia} />
                </div>
            </div>
        );
    }
}

export default HistoriaMedicaPregressa;
