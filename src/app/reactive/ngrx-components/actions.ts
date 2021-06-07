import { createAction, props } from "@ngrx/store";

export const startAction = '[Component] start'
export const endAction = '[Component] end'

export interface StartPayload {
    value: string
}

export interface EndPayload {
    value: string
}

export const start = createAction(
    startAction,
    props<StartPayload>())

export const end = createAction(
    endAction,
    props<EndPayload>())