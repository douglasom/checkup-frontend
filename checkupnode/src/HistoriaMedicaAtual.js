import React from 'react'
import SintomaClassificado from './SintomaClassificado'
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
        let SintomaUrologico = [
            { value: "NENHUM", label: 'nenhum'},
            { value: "ABC", label: 'abc'}
        ];
        let SintomaGinecologico = [
            { value: "NENHUM", label: 'nenhum'},
            { value: "ABC", label: 'abc'}
        ];

        let fechamento = {
            sintomas: {
                cardiovasculares: {
                  opcoes: SintomaCardiovascular,
                  classificacao: [SintomaCardiovascular[1].value],
                  descricao: "descrição dos sintomas cardio",
                },
                gastrointestinais: {
                  opcoes: SintomaGastrointestinal,
                  classificacao: [SintomaGastrointestinal[0].value],
                  descricao: "descrição dos sintomas gastro"
                },
                urologicos: {
                    opcoes: SintomaUrologico,
                    classificacao: [SintomaUrologico[0].value],
                    descricao: "descrição dos sintomas uro"
                },
                ginecologicos: {
                    opcoes: SintomaGinecologico,
                    classificacao: [SintomaGinecologico[0].value],
                    descricao: "descrição dos sintomas gineco"
                }
            },
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h4 className="panel-title">Sintomas</h4></div>
                <div className="panel-body">
                    <SintomaClassificado label="CARDIOVASCULARES" multiple="true" obj={fechamento.sintomas.cardiovasculares} />
                    <SintomaClassificado label="GASTROINTESTINAIS" multiple="true" obj={fechamento.sintomas.gastrointestinais} />
                    <SintomaClassificado label="UROLÓGICOS" multiple="true" obj={fechamento.sintomas.urologicos} />
                    <SintomaClassificado label="GINEGOLÓGICOS" multiple="true" obj={fechamento.sintomas.ginecologicos} />
                </div>
            </div>
        );
    }
}

export default HistoriaMedicaAtual;
