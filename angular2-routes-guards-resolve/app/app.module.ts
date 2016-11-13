import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoModule } from './todo/todo.module';
import { routes } from './app.routes';

import { AuthService } from './services/auth.service';

@NgModule({
    imports:        [BrowserModule, FormsModule, RouterModule.forRoot(routes), TodoModule],
    declarations:   [AppComponent, HomeComponent],
    bootstrap:      [AppComponent],
    providers:      [AuthService]
})
export class AppModule {}