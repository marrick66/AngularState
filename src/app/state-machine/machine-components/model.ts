import { createModel } from "xstate/lib/model";
import { ApplicationContext } from "./context";
import { eventCreator } from "./events";

//The model defines the context and events that the machine will support:
export const machineModel = createModel<ApplicationContext, typeof eventCreator>({
    value: ''
},
eventCreator)