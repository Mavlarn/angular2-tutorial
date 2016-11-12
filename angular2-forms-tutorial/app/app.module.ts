import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MobileValidator } from './validators/mobile.validator';
import { routes } from './app.routes';

@NgModule({
    imports:        [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
    declarations:   [AppComponent, TemplateFormsComponent, ReactiveFormsComponent, MobileValidator],
    bootstrap:      [AppComponent]
})
export class AppModule {}