import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule as CoreFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { RouterModule } from '@angular/router';
import { routing } from './../app.routing';

import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ActiveComponent } from './shared/active/active.component';
import { FormFormComponent } from './form-form/form-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    CoreFormsModule,
    ColorPickerModule,
    routing
  ],
  exports: [
    FormListComponent
  ],
  declarations: [FormListComponent, FormEditComponent, ActiveComponent, FormFormComponent, QuestionListComponent, QuestionFormComponent]
})
export class FormsModule { }
