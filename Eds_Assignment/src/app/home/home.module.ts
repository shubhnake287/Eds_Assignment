import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { homeRoutingModule } from './home/home-routing.module';
import {

  homeDetailComponent,
} from './home/components';

import * as fromhome from './home/reducers';
import { MaterialModule } from './material';
import { PipesModule } from './shared/pipes';

export const COMPONENTS = [
  homeDetailComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    homeRoutingModule,

    StoreModule.forFeature(fromhome.homeFeatureKey, fromhome.reducers),
    EffectsModule.forFeature([homeEffects, CollectionEffects]),
    PipesModule,
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class homeModule { }
