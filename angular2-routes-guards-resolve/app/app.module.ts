import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TodoModule } from './todo/todo.module';
import { routes } from './app.routes';

@NgModule({
    imports:        [BrowserModule, FormsModule, RouterModule.forRoot(routes), TodoModule],
    declarations:   [AppComponent, AboutComponent],
    bootstrap:      [AppComponent]
})
export class AppModule {}