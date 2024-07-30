
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static passwordPatternValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumeric = /[0-9]/.test(value);
      const hasNonAlphanumeric = /\W/.test(value);
      const minLength = value.length >= 6;

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasNonAlphanumeric && minLength;

      if (!passwordValid) {
        return {
          passwordPattern: {
            hasUpperCase,
            hasLowerCase,
            hasNumeric,
            hasNonAlphanumeric,
            minLength
          }
        };
      }

      return null;
    };
  }
}
