import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AppComponent, PasswordStrengthComponent, InputComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
