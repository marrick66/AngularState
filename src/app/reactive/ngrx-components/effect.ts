import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { TestService } from "src/app/services/test";
import { end, startAction, StartPayload } from "./actions";

//This will call the service, then map the response to
//the end action for the store to consume:
@Injectable()
export class StartEffect {
    loadStart$ = createEffect(
        () => this.actions$.pipe(
            ofType(startAction),
            mergeMap((action: StartPayload) => 
            {
                return this.service.getData(action.value)
            .pipe(
                map(val => end({ value: val}))
            )}))
        )
    constructor(private actions$: Actions, private service: TestService) {

    }
}