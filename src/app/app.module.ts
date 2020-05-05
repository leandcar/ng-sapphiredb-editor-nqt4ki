import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SapphireDbOptions } from 'sapphiredb';
import { SapphireDbModule, SAPPHIRE_DB_OPTIONS } from 'ng-sapphiredb';
import {NgMetro4Module} from 'ng-metro4';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    SapphireDbModule,
    NgMetro4Module
  ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers: [
    { 
      provide: SAPPHIRE_DB_OPTIONS,
      useValue: <SapphireDbOptions>{
        apiSecret: 'pw1234',
        apiKey: 'webapp',
        serverBaseUrl: 'sapphire-db-docs-server.azurewebsites.net',
        useSsl: true,
        connectionType: 'websocket'
      }
    }
  ]
})
export class AppModule { }
