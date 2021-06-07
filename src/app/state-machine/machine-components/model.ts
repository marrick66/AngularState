import { createModel } from "xstate/lib/model";
import { ApplicationContext } from "./context";
import { eventCreator } from "./events";

export const machineModel = createModel<ApplicationContext, typeof eventCreator>({
    value: ''
},
eventCreator)