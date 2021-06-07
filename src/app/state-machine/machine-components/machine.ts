import { map } from "rxjs/operators";
import { TestService } from "src/app/services/test";
import { createMachine } from "xstate";
import { ApplicationContext } from "./context";
import { machineModel } from "./model";

const service = new TestService()

/*
This is the actual state machine implementation:
*/
export const appMachine = 
createMachine<typeof machineModel>({
    context: machineModel.initialContext,
    initial: 'idle',
    states: {
        //For each state, the events it listens for are defined and
        //the actions it needs to perform when they're received.
        idle: {
            on: {
                start: {
                    target: 'executing',
                    actions: machineModel.assign({
                        value: (_, event) => event.value
                    })
                }
            }
        },
        executing: {
            //When this state is reached, the external service is called:
            invoke: {
                src: 'test'
            },
            on: {
                end: {
                    target: 'finished',
                    actions: machineModel.assign({
                        value: (_, event) => event.value
                    })
                }
            }
        },
        finished: {
            type: 'final'
        }
    }
}, {
    services: {
        //This calls the service, and maps the return value to the 'end' event.
        //The machine will then receive that event.
        test: (context: ApplicationContext) => service.getData(context.value)
            .pipe(map(val => machineModel.events.end(val)))
    }
})

    
