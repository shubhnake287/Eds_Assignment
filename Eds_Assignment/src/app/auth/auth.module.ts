import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  LoginFormComponent,
} from './auth/components';

import { AuthEffects } from './auth/effects';
import * as fromAuth from './auth/reducers';
import { MaterialModule } from './material';
import { AuthRoutingModule } from './auth-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MatIconModule } from '@angular/material/icon';

export const COMPONENTS = [
  LoginFormComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    FilterPipeModule,
    FormsModule,
    MatIconModule,
    AuthRoutingModule,
    StoreModule.forFeature({
      name: fromAuth.authFeatureKey,
      reducer: fromAuth.reducers,
    }),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: COMPONENTS,
})
export class AuthModule { }
