import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent {
  @Output() formValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  //verificar los campos, que tengan todo bien

  public myForm: FormGroup = this.fb.group({
    titular: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    ],
    tipoDoc: ['', [Validators.required]],
    nroTarjeta: [
      '',
      [Validators.required, Validators.minLength(14), Validators.maxLength(16)],
    ],
    pin: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(4)],
    ],
    fechaExp: ['', [Validators.required]],
    nroDoc: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder) {
    this.myForm.valueChanges.subscribe(() => {
      // Emitir un evento cuando el formulario esté en un estado válido
      this.formValid.emit(this.myForm.valid);
    });
  }

  obtenerFechaActual(): string {
    const hoy = new Date();
    return hoy.toISOString().split('T')[0]; // Formato: 'YYYY-MM-DD'
  }

  isValidField(field: string): boolean | null {
    console.log('entro');
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    console.log('entro tambien');
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Campo requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters.`;

        case 'maxlength':
          return `Maximo ${errors['maxlength'].requiredLength} caracters.`;
      }
    }

    return null;
  }
}
