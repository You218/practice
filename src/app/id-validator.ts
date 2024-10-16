import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function uniqueIdValidator(registeredData: any[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const idValue = control.value;
    const exists = registeredData.some(item => item.id === idValue);
    return exists ? { uniqueId: true } : null;
  };
}
