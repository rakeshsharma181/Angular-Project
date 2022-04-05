import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/add/add.component';
import { AscComponent } from './Components/asc/asc.component';
import { DscComponent } from './Components/dsc/dsc.component';
import { EditComponent } from './Components/edit/edit.component';
import { HomeComponent } from './Components/home/home.component';
import { PipeComponent } from './Components/pipe/pipe.component';

const routes: Routes = [
  {path:'',component:HomeComponent}, 
  {path:'add',component:AddComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'pipe',component:PipeComponent},
  {path:'asc',component:AscComponent},
  {path:'dsc',component:DscComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
