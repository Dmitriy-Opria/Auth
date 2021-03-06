import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent }  from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { Auth } from './services/auth.service';


@NgModule({
  imports:      [ BrowserModule,
                  routing
                ],
  declarations: [ AppComponent,
                  HomeComponent,
                  ProfileComponent
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRoutingProviders,
                  AUTH_PROVIDERS,
                  Auth
                ]
})
export class AppModule { }
