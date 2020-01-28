
import employees from '../../Container/employees.json'
let initialState = employees;

    const rootReducer=(state= initialState, action)=>{

    switch(action.type) {
        case 'ADD_NOTE':
        return {
            notes: [
            ...state.notes,
            {
                title: action.title,
                content: action.content
            }
            ]
        };

        default:
        return state;
    };
}
export default rootReducer;