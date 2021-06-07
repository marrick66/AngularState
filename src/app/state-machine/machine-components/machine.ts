import { Injectable } from "@angular/core";
import { map, mergeMap } from "rxjs/operators";
import { TestService } from "src/app/services/test";
import { createMachine, interpret, Interpreter } from "xstate";
import { ApplicationContext } from "./context";
import { eventCreator } from "./events";
import { machineModel } from "./model";

const service = new TestService()

export const appMachine = 
createMachine<typeof machineModel>({
    context: machineModel.initialContext,
    initial: 'idle',
    states: {
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
        test: (context: ApplicationContext) => service.getData(context.value)
            .pipe(map(val => machineModel.events.end(val)))
    }
})

    
