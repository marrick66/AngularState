import { Action, createReducer, on } from "@ngrx/store";
import { end } from "./actions";
import { ApplicationState } from "./appstate";

const initialState = '';

//This will take the end event and generate the next state by updating the
//value field sent in the event:
const valueReducer = createReducer(
    initialState,
    on(end, (_, payload) => 
    { 
        return payload.value 
    })
)

export function reducer(state: string | undefined, action: Action) {
    return valueReducer(state, action)
}