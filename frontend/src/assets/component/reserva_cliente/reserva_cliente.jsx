import React from 'react';
import PropTypes from 'prop-types';
import "./styles.sass";
import moment from 'moment/min/moment-with-locales.min';
import {numberToHours} from "../../AuxFunctions";

const ReservaCliente = props => {
    if (props.reserva.cancelado) {
        return <></>
    } else {
        return (
            <div className={props.executado ? ( props.reserva.pago ?
                'container_reserva_cliente executado pago' : 'container_reserva_cliente executado')
                    : 'container_reserva_cliente'}>
                <div>
                    <h1>{moment(props.reserva.data).format('DD/MM/YYYY')}</h1>
                    <h4>{'mes' in props.reserva ? (<i>Alugado por todo o Mês de {moment(props.reserva.mes).locale('pt-BR').format('MMMM')}</i>) :
                        <div>{numberToHours(props.reserva.hora_inicio)} ~ {numberToHours(props.reserva.hora_fim)}</div>}</h4>
                </div>
                <div>
                    <h4>Sala</h4>
                    <h1>{'sala' in props.reserva ? props.reserva.sala.nome : 'Sem nome'}</h1>
                </div>
                <div>
                    <h4>Situação</h4>
                    <h2>{props.reserva.pago ? 'Pago' : 'Pendente'}</h2>
                </div>
            </div>
        )
    }
}

ReservaCliente.propTypes = {
    executado: PropTypes.bool,
}

export default ReservaCliente;