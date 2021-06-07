import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { StateMachineComponent } from './state-machine/state-machine.component';

const routes: Routes = [
  { path: "ngrx", component: ReactiveComponent},
  { path: "xstate", component: StateMachineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
