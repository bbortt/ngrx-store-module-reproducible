import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { DcAuthModule } from '../auth/dc-auth.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './dc-app-state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

registerLocaleData(localeDe, 'de-CH', localeDeExtra);

const DC_MODULES = [];

registerLocaleData(localeDe, 'de-CH', localeDeExtra);

@NgModule({
  imports: [
    DC_MODULES,
    DcAuthModule.forRoot(),
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot(),
    /**
     * Store devtools instrument the store retaining past versions of state.
     */
    // StoreDevtoolsModule.instrument(),
    /**
     * Sets up the effects class to be initialized immediately
     */
    EffectsModule.forRoot([])
  ],
  exports: [DC_MODULES],
  providers: [],
  declarations: [],
  bootstrap: [],
  entryComponents: []
})
export class DcAppModule {}
