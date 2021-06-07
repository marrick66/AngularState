import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, Observable } from "rxjs";


@Injectable(
    { providedIn: 'root'}
)
export class TestService {
    getData(title: string): Observable<string> {
        let op = new Promise<string>(
            (val) => val(title))
        
        return from(op)
    }
}
