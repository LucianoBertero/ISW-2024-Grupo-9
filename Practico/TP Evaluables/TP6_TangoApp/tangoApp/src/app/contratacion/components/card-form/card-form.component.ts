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
    titular: ['dasdasdasdas', [Validators.required, Validators.minLength(4)]],
    tipoDoc: ['dni', [Validators.required]],
    nroTarjeta: [
      '12312312312',
      [Validators.required, Validators.minLength(12)],
    ],
    pin: ['123123123', [Validators.required, Validators.minLength(2)]],
    fechaExp: ['', [Validators.required]],
    nroDoc: ['12312312', [Validators.required, Validators.minLength(8)]],
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
}
