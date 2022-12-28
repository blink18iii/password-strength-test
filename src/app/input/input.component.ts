import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  passwordControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  writeValue(obj: any): void {
    this.passwordControl.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.passwordControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.passwordControl.markAsTouched();
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.passwordControl.disable() : this.passwordControl.enable();
  }
}
