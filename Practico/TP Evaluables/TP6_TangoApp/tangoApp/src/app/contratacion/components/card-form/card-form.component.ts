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
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
    ],
    tipoDoc: ['', [Validators.required]],
    nroTarjeta: [
      '',
      [
        Validators.required,
        Validators.pattern(' /^[0-9]{15,16}|(([0-9]{4}s){3}[0-9]{3,4})$/'),
        ,
      ],
    ],
    pin: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
    fechaExp: ['', [Validators.required]],
    nroDoc: ['', [Validators.required]],
  });

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

  isValidFieldNroDoc(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
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

    let customError: string | null = null; // Variable para almacenar el error personalizado
    console.log(field);
    if (field === 'nroDoc') {
      console.log('entra');
      const tipoDocValue = this.myForm.controls['tipoDoc'].value;
      const nroDocValue = this.myForm.controls[field].value;

      switch (tipoDocValue) {
        case 'dni':
          console.log('entro a DNI');
          if (!/^\d{8}$/.test(nroDocValue)) {
            customError = 'El DNI debe tener 8 dígitos.';
          }
          break;
        case 'pasaporte':
          if (!/^[A-Z]{2}\d{7}$/.test(nroDocValue)) {
            customError =
              'El pasaporte debe tener 2 letras seguidas de 7 dígitos.';
          }
          break;
        case 'partNac':
          if (!/^\d{4}-\d{4}-\d{6}$/.test(nroDocValue)) {
            customError =
              'El número de partida de nacimiento debe tener el formato YYYY-MM-DD-######.';
          }
          break;
        case 'otro':
          // Aquí puedes agregar la expresión regular y mensaje de error para otro tipo de documento
          break;
        default:
          break;
      }

      if (customError) {
        this.myForm.controls['nroDoc'].setErrors({ custom: customError });
      }
    }

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

        case 'custom':
          return `Error de Formato ${errors['custom']} .`;
      }
    }

    return null;
  }
}
