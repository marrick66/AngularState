import { Component, OnInit } from '@angular/core';
import { from, Observable, ObservableLike } from 'rxjs';
import { map } from 'rxjs/operators';
import { interpret } from 'xstate';
import { ApplicationContext } from './machine-components/context';
import { appMachine } from './machine-components/machine';
import { machineModel } from './machine-components/model';


@Component({
  selector: 'app-state-machine',
  templateUrl: './state-machine.component.html',
  styleUrls: ['./state-machine.component.css']
})
export class StateMachineComponent implements OnInit {
  values$: Observable<string>
  service: any

  //This will create and start the state machine, and subscribe to
  //any events that occur:
  constructor() {
    this.service = interpret(appMachine)
    this.service.start()
    this.values$ = from(this.service as any).pipe(map(
      (state: any) => {
        return state.context.value
      }))
   }

  //When started, this will send a start event to the state machine:
  ngOnInit(): void {
    this.service.send(machineModel.events.start('Hello!'))
  }

}
