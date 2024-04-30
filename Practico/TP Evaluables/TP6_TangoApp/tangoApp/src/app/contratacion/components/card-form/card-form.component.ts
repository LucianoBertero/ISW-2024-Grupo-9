import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  public myForm: FormGroup = this.fb.group({
    titular: [
      'asdasdas',
      [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
    ],
    tipoDoc: ['', [Validators.required]],
    nroTarjeta: [
      '111111111111111',
      [Validators.required, Validators.pattern('^[0-9]{15}$'), ,],
    ],
    pin: ['123', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
    fechaExp: ['', [Validators.required]],
    nroDoc: ['', [Validators.required, Validators.pattern('^[0-9]{4,15}$')]],
  });

  constructor(private fb: FormBuilder) {
    this.myForm.valueChanges.subscribe(() => {
      console.log(this.myForm.controls['nroTarjeta'].value);

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
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    console.log('entro tambien');
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      console.log(key);
      switch (key) {
        case 'required':
          return 'Campo requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters.`;

        case 'maxlength':
          console.log('entro a maxlenght');
          return `Maximo ${errors['maxlength'].requiredLength} caracters.`;

        case 'min':
          console.log('entro a maxlenght');
          return `Minimo ${errors['min'].requiredLength} caracters.`;

        case 'max':
          console.log('entro a maxlenght');
          return `Maximo ${errors['max'].requiredLength} caracters.`;
        case 'pattern':
          console.log('entro a maxlenght');
          return `Formato incorrecto`;
      }
    }

    return null;
  }
}
