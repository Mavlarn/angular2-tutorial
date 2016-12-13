import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app.routes';
import { TodoModule } from './todo/todo.module';

import { AuthService } from './services/auth.service';

import { Observable } from 'rxjs/Observable';

@NgModule({
    imports:        [BrowserModule, AppRoutingModule, TodoModule],
    declarations:   [AppComponent, HomeComponent],
    bootstrap:      [AppComponent],
    providers:      [AuthService]
})
export class AppModule {}
