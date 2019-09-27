import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CustomMaterialModule } from './custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppComponent } from './app.component';
import { ProviderComponent } from './provider/provider.component';
import { ProviderState } from './provider/state/provider.state';
import { DataService } from './services/inmemorydb.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteState } from './favorite/state/favorite.state';


@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {
      passThruUnknownUrl: true
    }),
    NgxsModule.forRoot([
      ProviderState,
      FavoriteState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
