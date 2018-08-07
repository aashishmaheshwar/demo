import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ServersComponent } from './components/servers/servers.component';
import { ServerService } from './services/server.service';
import { UtilitiesModule } from './feature-modules/utilities/utilities.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ResultsSectionComponent } from './components/results-section/results-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    DataTableComponent,
    ResultsSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UtilitiesModule,
    BrowserAnimationsModule,
    // FormsModule,
    // SliderModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]//,
  // exports: [FormsModule, SliderModule]
})
export class AppModule { }
