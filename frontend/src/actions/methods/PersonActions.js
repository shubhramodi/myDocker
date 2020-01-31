import {PERSON_ADD, PERSON_DELETE, PERSON_UPDATE} from '../../actions/index';

export function addPerson(payload = {}) {

    const initialState = {
        status: true,
        message: "Person added successfully!",
        data: payload
    };

    console.log("addPerson");

    return (dispatch) => {
        return dispatch({
            type: PERSON_ADD,
            payload: initialState
        });
    }
}

export function deletePerson(payload = {}) {

    const initialState = {
        status: true,
        message: "Person Deleted successfully!",
        data: payload
    };

    console.log("deletePerson");

    return (dispatch) => {
        return dispatch({
            type: PERSON_DELETE,
            payload: initialState
        });
    }
}

export function updatePerson(event = {}, payload = {}) {

    let data = {
        id: payload,
        name: event.target.value
    };

    const initialState = {
        status: true,
        message: "Person Updated successfully!",
        data: data
    };

    console.log("updatePerson");

    return (dispatch) => {
        return dispatch({
            type: PERSON_UPDATE,
            payload: initialState
        });
    }
}

/*POST(GET_PERSON_LIST_URL, payload)
            .then((response) => {
                if (!response.data.data) {
                    response.data.data = [];
                }
                dispatch({
                    type: PERSON_ADD,
                    payload: response.data
                });
            });*/