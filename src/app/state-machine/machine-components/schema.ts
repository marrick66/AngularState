export interface MachineSchema {
    states: {
        idle: {},
        executing: {},
        finished: {}
    }
}