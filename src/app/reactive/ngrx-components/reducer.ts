import { Action, createReducer, on } from "@ngrx/store";
import { end } from "./actions";
import { ApplicationState } from "./appstate";

const initialState = '';

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