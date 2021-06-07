//This defines the events that the machine will recognize:
export const eventCreator = {
    events: {
        start: (val: string) => ({ value: val }),
        end: (val: string) => ({value: val})
    }
}