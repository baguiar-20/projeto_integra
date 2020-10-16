import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForgotPasswordModal from "../ForgotPasswordModal";
import {UserPasswordAuthProviderClient} from "mongodb-stitch-browser-sdk";
import ModalParent from "../../modal_parent/modal";
import "./TipoUsuarioModal.sass"

const TipoUsuarioModal = props => {
    return (
        <ModalParent show={props.show}
                     onClose={props.onClose}
                     header={<header>
                         <div>
                             <h1>Tipo de Usuário</h1>
                         </div>
                         <div className={'close_container'} onClick={props.onClose}>
                             <i className={'fa fa-times'}/>
                         </div>
                     </header>}
                     body={
                         <div className={'tipos_usuarios'}>
                             <div onClick={props.onClickAdm}>
                                 <h1>Entrar como Administrador</h1>
                             </div>
                             <div onClick={props.onClickProfissional}>
                                 <h1>Entrar como Profissional</h1>
                             </div>
                         </div>
                     }/>
    );
}

TipoUsuarioModal.propTypes = {
    loading: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
    onClickAdm: PropTypes.func.isRequired,
    onClickProfissional: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TipoUsuarioModal);
