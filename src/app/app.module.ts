import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3.component';


import { Child1Component } from './scenario3/child1/child1.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { Child3Component } from './scenario4/child3/child3.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { Component1Component } from './scenario5/component1/component1.component';
import { Component2Component } from './scenario5/component1/component2/component2.component';
import { ParentComponent } from './scenario6/parent/parent.component';
import { Child2Component } from './scenario6/child2/child2.component';
import { ChildComponent } from './scenario6/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    Scenario4Component,

    Child1Component,

    Scenario4Component,

    Child3Component,

    Child3Component,

    Scenario5Component,

    Component1Component,

    Component2Component,

    ParentComponent,

    Child2Component,
    ChildComponent,


],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
