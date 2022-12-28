ng new password-strength-test
cd password-strength-test
npm i
npm install --save bootstrap
npm install @angular/forms @angular/common

<!-- Add the following styles to the styles.scss file -->
@import "node_modules/bootstrap/scss/bootstrap";

<!-- Import the ReactiveFormsModule in the root module (app.module.ts) to enable reactive forms in the app. -->


import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

<!-- Create a new component for input, using ControlValueAccessor. This component will be used to create a custom form control. -->

ng generate component input

<!-- Create a new component for the password strength bar. This component will be used to display the password strength. -->

ng generate component password-strength-meter

<!-- create input html -->

