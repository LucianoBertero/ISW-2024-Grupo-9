import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent {
  @Output() formValid: EventEmitter<{
    validForm: boolean;
    validTarjet: boolean;
  }> = new EventEmitter<{ validForm: boolean; validTarjet: boolean }>();

  @Input() type: string = 'credit';

  //verificar los campos, que tengan todo bien

  public myForm: FormGroup = this.fb.group(
    {
      titular: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      tipoDoc: ['', [Validators.required]],
      nroTarjeta: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{15,16}$'), ,],
      ],
      pin: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      fechaExp: ['', [Validators.required]],
      nroDoc: ['', [Validators.required]],
    },
    { validator: this.crossFieldValidator('tipoDoc', 'nroDoc') }
  );

  // , Validators.pattern('^[0-9]{4,15}$')

  constructor(private fb: FormBuilder) {
    this.myForm.valueChanges.subscribe(() => {
      if (
        this.myForm.controls['nroTarjeta'].value === 111111111111111 &&
        this.myForm.valid
      ) {
        this.formValid.emit({
          validForm: this.myForm.valid,
          validTarjet: true,
        });
      } else {
        this.formValid.emit({
          validForm: this.myForm.valid,
          validTarjet: false,
        });
      }
    });
  }

  obtenerFechaActual(): string {
    const hoy = new Date();
    return hoy.toISOString().split('T')[0]; // Formato: 'YYYY-MM-DD'
  }

  isValidField(field: string): boolean | null {
    return (
      (this.myForm.controls[field].invalid &&
        this.myForm.controls[field].touched) ||
      (field === 'nroDoc' && this.myForm.errors !== null)
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    let errors = this.myForm.controls[field].errors || {};
    if (field === 'nroDoc')
      errors =
        { ...this.myForm.controls[field].errors, ...this.myForm.errors } || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Campo requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters.`;

        case 'maxlength':
          return `Maximo ${errors['maxlength'].requiredLength} caracters.`;

        case 'min':
          return `Minimo ${errors['min'].requiredLength} caracters.`;

        case 'max':
          return `Maximo ${errors['max'].requiredLength} caracters.`;
        case 'pattern':
          return `Formato incorrecto`;
        case 'dniError':
          return `El DNI debe tener 8 dígitos.`;

        case 'pasaporteError':
          return `El pasaporte debe tener 2 letras seguidas de 7 dígitos.`;

        case 'partidaError':
          return `El número de partida de nacimiento debe tener el formato YYYY-MM-DD-######.`;

        case 'custom':
          return `Error de Formato ${errors['custom']} .`;
      }
    }

    return null;
  }

  crossFieldValidator(field1: string, field2: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const tipoDocValue = control.get(field1)?.value;
      const nroDocValue = control.get(field2)?.value;

      switch (tipoDocValue) {
        case 'dni':
          if (!/^\d{7,8}$/.test(nroDocValue)) {
            return { dniError: true };
          }
          break;
        case 'pasaporte':
          if (!/^[A-Z]{2}\d{7}$/.test(nroDocValue)) {
            return { pasaporteError: true };
          }
          break;
        case 'partNac':
          if (!/^\d{4}-\d{4}-\d{6}$/.test(nroDocValue)) {
            return { partidaError: true };
          }
          break;
        default:
          break;
      }
      return null;
    };
  }
}
