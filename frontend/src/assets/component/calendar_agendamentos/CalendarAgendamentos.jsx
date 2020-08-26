import React from 'react';
import PropTypes from 'prop-types';
import "./CalendarAgendamentos.sass";
import {connect} from "react-redux";
import Actions from "../../../redux/actions/actions";
import ModalTypes from "../../modal_types";
import {numberIsBetween} from "../../AuxFunctions";
import reservaDAO from "../../../DAO/reservaDAO";
import Moment from "moment/min/moment-with-locales";
import {extendMoment} from "moment-range";
import sala_bloqueioDAO from "../../../DAO/sala_bloqueioDAO";

const moment = extendMoment(Moment)

const fillHoras = (sabado) => {
    let array = [];
    let [horaInicial, horaFinal] = [9, 21]
    if (sabado)
        [horaInicial, horaFinal] = [8, 13]
    for (let i = 0; i < horaFinal - horaInicial; i++)
        array.push({label: i + horaInicial + ':00', value: i + horaInicial});
    return array;
}

const days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];


const CalendarAgendamentos = props => {

    const [horas, setHoras] = React.useState(fillHoras(props.dateSelected.getDay() === 6))

    React.useEffect(() => {
        sala_bloqueioDAO.findAll().then(res => {
            props.setBloqueiosSalas(res)
        })
    }, [])

    const setClassStringByTheData = agendamento => {
        if ('execucao_inicio' in agendamento && !('execucao_fim' in agendamento)) {
            //Se estiver sendo executada, sempre será amarelo.
            return ' amarelo';
        } else if ((!agendamento.pago && agendamento.executado)
            || moment(new Date()).isSame(new Date(agendamento.data), 'day') && (agendamento.hora_inicio <= new Date().getHours())
                && !agendamento.pago && !agendamento.executado
        || agendamento.pago && !('execucao_inicio' in agendamento) && (moment(new Date()).isSame(agendamento.data, 'day')
                && new Date().getHours() >= agendamento.hora_inicio)) {
            //Executada e não paga,
            // Não executada & não paga & o horário já passou
            // ou paga e não executada.
            return ' vermelho';
        } else if ((agendamento.executado && agendamento.pago)
            || (!agendamento.executado && agendamento.pago && !(moment(new Date()).isSame(agendamento.data, 'day')
                && new Date().getHours() >= agendamento.hora_inicio))) {
            //Executada e paga.
            //ou não executada, mas fora do período de reserva, e paga.
            return ' verde';
        }
        return '';
    }
    //Atualiza lista de horas do dia.
    React.useEffect(() => {
        //Condição verifica se é um sábado.
        setHoras(fillHoras(props.dateSelected.getDay() === 6))
    }, [props.dateSelected])

    const checkIfItsBetween = (num, intervalBegin, intervalEnd) => {
        return (num >= intervalBegin && num < intervalEnd)
    }

    const checkBloqueado = (bloqueios, sala, hora) => {
        for (let bloqueio of bloqueios) {
            if (Array.isArray(bloqueio.sala)) {
                for (let currentSala of bloqueio.sala) {
                    if (currentSala.toString() === sala._id.toString() &&
                        moment(new Date(bloqueio.dia)).add(1, 'day').isSame(props.dateSelected, 'day')) {
                        if (bloqueio.wholeDay) {
                            return true
                        } else if (checkIfItsBetween(hora, bloqueio.horaInicio, bloqueio.horaFim)) {
                            return true
                        }
                    }
                }
            } else {
                if (bloqueio.sala.toString() === sala._id.toString() &&
                    moment(new Date(bloqueio.dia)).isSame(props.dateSelected, 'day')) {
                    if (bloqueio.wholeDay) {
                        return true
                    }
                }
            }
        }
        return false
    }

    return (
        <div className={'calendar_agendamentos_container'}>
            <h1 style={{display: 'flex'}}>
                <span
                    onClick={() => {
                        props.selectDate(moment(props.dateSelected).subtract(1, 'day').toDate())
                    }}
                    className={'chevron_date'}
                    style={{float: 'left', margin: 'auto 0'}}>
                    <i className={'fa fa-chevron-left'}/>
                </span>
                <span style={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                    <span style={{margin: 0}}>
                        {moment(props.dateSelected).locale('pt-BR').format(' DD MMMM YYYY')}
                    </span>
                    <span style={{fontSize: 13, color: '#CCC', margin: 4, fontWeight: 'normal'}}>
                        {days[props.dateSelected.getDay()]}
                    </span>
                </span>
                <span
                    onClick={() => {
                        props.selectDate(moment(props.dateSelected).add(1, 'day').toDate())
                    }}
                    className={'chevron_date'}
                    style={{float: 'right', margin: 'auto 0'}}>
                    <i className={'fa fa-chevron-right'}/>
                </span>
            </h1>
            <div className={'container_table'}>
                <table className={'calendar_table'}>
                    {/*aqui vai a numeracao das salas*/}
                    <thead>
                    <tr>
                        <th style={{width: '10%'}}></th>
                        {
                            props.salas.map((sala, index) => <th key={index}>{sala.nome}</th>)
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        horas.map((hora, index) => (
                            <tr key={index}>
                                <td>{hora.label}</td>
                                {props.salas.map((sala, indexSala) => {
                                    let agendamentosDaSala = reservaDAO.getAgendamentosFromSala(props.agendamentos, sala);
                                    let [isOccupied, isMonthly] = [false, false];
                                    let agnd = null;
                                    agendamentosDaSala.forEach((agendamento, index) => {
                                        if ('hora_inicio' in agendamento) {
                                            if (numberIsBetween(hora.value, agendamento.hora_inicio, agendamento.hora_fim)
                                                && (moment(props.dateSelected).isSame(new Date(agendamento.data), 'day'))
                                                && !agendamento.cancelado) {
                                                isOccupied = true;
                                                agnd = agendamento;
                                            }
                                        } else if ('mes' in agendamento
                                            && moment(agendamento["mes"]).isSame(props.dateSelected, 'month')) {
                                            isMonthly = true;
                                        }
                                    });
                                    if (!isOccupied) {
                                        if (isMonthly) {
                                            return (<td key={indexSala} className={'alugado'}>
                                                <i>Alugado Mensalmente</i>
                                            </td>)
                                        } else if (checkBloqueado(props.bloqueiosSalas, sala, hora.value)) {
                                            return <td className={'alugado'} key={indexSala}>
                                                <i>Bloqueada</i>
                                            </td>
                                        } else {
                                            return (
                                                <td key={indexSala} className={'free'} onClick={() => {
                                                    props.openModal(ModalTypes.adicionarAgendamentoAdm);
                                                    props.selectSala(sala);
                                                }}>
                                                    <i className={'fa fa-plus'}/>
                                                </td>
                                            )
                                        }
                                    } else if (agnd) {
                                        if (isMonthly) {
                                            return (<td key={indexSala} className={'occupied'}>
                                                {agnd ? (agnd.profissional ? agnd.profissional.nome :
                                                    <i>Usuário Excluído</i>) : ''}
                                            </td>)
                                        } else {
                                            if (agnd.hora_inicio === hora.value) {
                                                return (<td
                                                    onClick={() => {
                                                        props.openModal(ModalTypes.editarAgendamento);
                                                        props.selectAgendamentos(agnd);
                                                    }}
                                                    key={indexSala}
                                                    rowSpan={agnd.hora_fim - agnd.hora_inicio}
                                                    className={
                                                        'occupied '+setClassStringByTheData(agnd)}>
                                                    {agnd ? (agnd.profissional ? agnd.profissional.nome :
                                                        <i>Usuário Excluído</i>) : ''}
                                                </td>)
                                            } else {
                                                return <></>
                                            }
                                        }
                                    }
                                })}
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

CalendarAgendamentos.propTypes = {
    agendamentos: PropTypes.array,
}

const mapStateToProps = state => ({
    salas: state.salas.salas,
    agendamentos: state.agendamentos.agendamentos,
    dateSelected: state.general.dateSelected,
    bloqueiosSalas: state.salas.bloqueiosSalas,
});

const mapDispatchToProps = dispatch => ({
    selectDate: date => dispatch({type: Actions.selectDate, payload: date}),
    openModal: open => dispatch({type: Actions.showModal, payload: open}),
    setSalas: salas => dispatch({type: Actions.setSalas, payload: salas}),
    setBloqueiosSalas: bloqueios => dispatch({type: Actions.setBloqueiosSalas, payload: bloqueios}),
    selectAgendamentos: agendamento => dispatch({type: Actions.selectAgendamentos, payload: agendamento}),
    selectSala: sala => dispatch({type: Actions.selectSala, payload: sala}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarAgendamentos);
