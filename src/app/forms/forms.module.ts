import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule as CoreFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing } from './../app.routing';

import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ActiveComponent } from './shared/active/active.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    routing,
    CoreFormsModule
  ],
  exports: [
    FormListComponent
  ],
  declarations: [FormListComponent, FormEditComponent, ActiveComponent]
})
export class FormsModule { }
