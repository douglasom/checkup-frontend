import React from 'react'
import Sintoma from './Sintoma'

class HistoriaMedicaAtual extends React.Component {
    render() {
        let SintomaCardiovascular = [
            { value: "NENHUM", label: 'nenhum'},
            { value: "PALPITACOES", label: 'palpitações'}
        ];

        let fechamento = {
            sintomasCardiovasculares: SintomaCardiovascular[1],
            historiaMedicaAtualSintomasCardiovascularesDescricao: "descrição dos sintomas"
        }

        return (
            <Sintoma label="Sintomas Cardiovasculares" multiple="true" obj={fechamento} name="sintomasCardiovasculares" from={SintomaCardiovascular} descricaoName="historiaMedicaAtualSintomasCardiovascularesDescricao" descricaoPlaceHolder="resumo conciso e só se necessário." />
        );
    }
}

export default HistoriaMedicaAtual;
