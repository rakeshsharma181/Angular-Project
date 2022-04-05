import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AddComponent } from './Components/add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './Components/edit/edit.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';
import { PipeComponent } from './Components/pipe/pipe.component';
import { SearchPipe } from './Pipes/search.pipe';
import { AscendingPipe } from './Pipes/ascending.pipe';
import { AscComponent } from './Components/asc/asc.component';
import { DscComponent } from './Components/dsc/dsc.component';
import { DescendingPipe } from './Pipes/descending.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    NavComponent,
    PipeComponent,
    SearchPipe,
    AscendingPipe,
    AscComponent,
    DscComponent,
    DescendingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
