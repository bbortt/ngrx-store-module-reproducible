import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DcAuthEffects } from './dc-auth.effects';
import { reducers } from './dc-auth-state';

export const COMPONENTS = [];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DcAuthModule {
  static forRoot(): ModuleWithProviders<DcRootAuthModule> {
    return {
      ngModule: DcRootAuthModule,
      providers: []
    };
  }
}

@NgModule({
  imports: [DcAuthModule, StoreModule.forFeature('auth', reducers), EffectsModule.forFeature([DcAuthEffects])]
})
export class DcRootAuthModule {}
