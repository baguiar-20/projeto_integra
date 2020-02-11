import Actions from "../actions/actions";

const initialState = {
    database: null,
    mongoClient: null,
    modalType: '',
    userLogged: null,
    showModal: false,
};

const GeneralReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.setMongoClient:
            return {...state, mongoClient: action.payload};
        case Actions.setDatabase:
            return {...state, database: action.payload};
        case Actions.setUserLogged:
            return {...state, userLogged: action.payload};
        case Actions.showModal:
            return {...state, showModal: true, modalType: action.payload};
        case Actions.closeModal:
            return {...state, showModal: false};
        default:
            return state;
    }
}

export default GeneralReducer;