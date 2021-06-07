import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { start } from './ngrx-components/actions';
import { ApplicationState } from './ngrx-components/appstate';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  values$ = this.store.select(store => store.value)
  constructor(private store: Store<ApplicationState>) {

   }

  ngOnInit(): void {
    this.store.dispatch(start({ value: "Hello!"}))
  }

}
