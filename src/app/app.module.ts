import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { Ng2FileSizeModule } from 'ng2-file-size';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    Ng2FileSizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
