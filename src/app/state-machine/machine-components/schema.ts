//This defines all the possible states the machine can be in:
export interface MachineSchema {
    states: {
        idle: {},
        executing: {},
        finished: {}
    }
}