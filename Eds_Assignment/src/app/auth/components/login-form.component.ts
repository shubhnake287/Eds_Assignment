import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Credentials } from './auth/models';

@Component({
  selector: 'bc-login-form',
  template: `

  <div fxLayoutAlign="center center" fxFlexFill class="mainComponent"
    [ngStyle]="{backgroundImage:'url(../assets/images/2.webp)'}">
    <mat-card fxFlex="25">
        <mat-toolbar class="topSection">Welcome</mat-toolbar>
        <form fxLayoutAlign="stretch" fxLayout="column" class="mainForm">
            <mat-form-field>
                <input matInput placeholder="UserName">
            </mat-form-field>

            <mat-form-field>
                <input matInput type="password" placeholder="Password">
            </mat-form-field>
            <button mat-raised-button type="submit" (click)="submit()">Login</button>
        </form>
    </mat-card>
</div>

  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 72px 0;
      }

      .topSection {
        color: black;
        background-color: rgb(93, 97, 221);
        text-align: center;
        padding-left: 135px;
    }
    
    .mainComponent mat-card {
        padding: 0px !important;
    }
    
    .mainForm {
        padding: 20px;
    }
    
    mat-card.mat-card.mat-focus-indicator {
        margin-left: 60%;
    }
    `,
  ],
})
export class LoginFormComponent {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage!: string | null;

  @Output() submitted = new EventEmitter<Credentials>();

  form: FormGroup = new FormGroup({
    username: new FormControl('ngrx', Validators.required),
    password: new FormControl('test', Validators.required),
  });

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
