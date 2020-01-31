import {PERSON_ADD, PERSON_DELETE, PERSON_UPDATE} from '../../actions/index';

const initialState = {
    status: true,
    message: "",
    data: [],
    loading: false,
    error: ""
};


const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSON_ADD:
            console.log("Person Reducer -> PERSON_ADD");
            console.log("Person Reducer -> PERSON_ADD -> " + action.payload.status);
            console.log("Person Reducer -> PERSON_ADD -> " + action.payload.message);
            let maxId = state.data.map(it => it.id)
                .reduce((previousValue = 0, currentValue) => previousValue > currentValue ? previousValue : currentValue, 0);
            action.payload.data.id = (maxId + 1);
            let newData = [...state.data];
            newData.push(action.payload.data);

            return {
                ...state,
                loading: true,
                status: action.payload.status,
                message: action.payload.message,
                data: newData
            };
        case PERSON_DELETE:
            console.log("Person Reducer -> PERSON_DELETE");
            console.log("Person Reducer -> PERSON_DELETE -> " + action.payload.status);
            console.log("Person Reducer -> PERSON_DELETE -> " + action.payload.message);

            const personsDelete = [...state.data];
            personsDelete.splice(action.payload.data, 1);

            return {
                ...state,
                loading: false,
                status: action.payload.status,
                message: action.payload.message,
                data: personsDelete
            };
        case PERSON_UPDATE:
            console.log("Person Reducer -> PERSON_UPDATE");
            console.log("Person Reducer -> PERSON_UPDATE -> " + action.payload.status);
            console.log("Person Reducer -> PERSON_UPDATE -> " + action.payload.message);

            const persons = [...state.data];

            const personIndex = persons.findIndex(p => {
                    return p.id === action.payload.data.id;
                }
            );

            if (personIndex !== -1) {
                const person = persons[personIndex];
                person.name = action.payload.data.name;
                persons[personIndex] = person;
            }

            return {
                ...state,
                loading: false,
                status: action.payload.status,
                message: action.payload.message,
                data: persons
            };
        default:
            return state;
    }
};

export default personReducer;