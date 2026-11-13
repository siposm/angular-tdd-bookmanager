import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatebookComponent } from './components/createbook/createbook.component';
import { ListbooksComponent } from './components/listbooks/listbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatebookComponent,
    ListbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
