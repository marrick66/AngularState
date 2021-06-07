import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateMachineComponent } from './state-machine/state-machine.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { reducer } from './reactive/ngrx-components/reducer';
import { StartEffect } from './reactive/ngrx-components/effect';

@NgModule({
  declarations: [
    AppComponent,
    StateMachineComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([StartEffect]),
    StoreModule.forRoot({ value: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
